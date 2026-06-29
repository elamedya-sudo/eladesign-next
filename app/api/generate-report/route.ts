import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: Request) {
  try {
    // 1. Frontend'den (formdan) gelen verileri okuyoruz
    const body = await req.json();
    const { name, email, phone, answers, segment } = body;

    // 2. Yapay Zeka (Gemini) Bağlantısı ve Rapor Üretimi.
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      Sen Ela Teknoloji'nin (Ela Design) Baş Dijital Dönüşüm Danışmanısın. B2B ve kurumsal bir dil kullan.
      Müşteri Adı: ${name}
      Müşterinin Öncelikleri ve Hedefleri: ${JSON.stringify(answers)}
      Sistemin Önerdiği Mimari: ${segment.title} - ${segment.tech}
      
      Görev: Bu müşteriye, verdiği cevaplara göre neden tam olarak bu teknoloji mimarisine ihtiyacı olduğunu ve Ela Teknoloji'nin bu altyapıyla ona nasıl bir değer katacağını anlatan, 2-3 paragraflık güven veren özel bir strateji özeti yaz. Lütfen 'Merhaba' gibi giriş kelimeleri kullanma, doğrudan profesyonel analize başla.
    `;

    const aiResult = await model.generateContent(prompt);
    const aiReportText = aiResult.response.text();

    // 3. Supabase Veritabanına (leads tablosuna) Kayıt
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase
      .from('leads')
      .insert([
        { 
          full_name: name, 
          email: email, 
          phone: phone, 
          answers: answers, 
          segment: segment.id, 
          ai_report: aiReportText 
        }
      ]);

    if (error) {
      console.error("Supabase Kayıt Hatası:", error);
      throw new Error("Veritabanı kaydı yapılamadı.");
    }

    // İşlem başarılıysa AI'ın yazdığı raporu Frontend'e (Müşteriye) gönder
    return NextResponse.json({ success: true, report: aiReportText });

  } catch (error) {
    console.error("Sistem Hatası:", error);
    return NextResponse.json({ success: false, error: "İşlem sırasında bir hata oluştu." }, { status: 500 });
  }
}