"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Statik Rapor Şablonları (Yapay Zeka API'sine gerek kalmadı)
const reportTemplates = {
  starter: {
    title: "Hızlı Kurumsal Çıkış Stratejisi",
    content: "İşletmenizin dijital dünyadaki ilk adımlarında hız ve verimlilik önceliğimizdir. Optimize edilmiş CMS mimarimiz ile gereksiz kod yükünden arınmış, hızlı açılan ve arama motorları dostu bir yapı kuruyoruz."
  },
  professional: {
    title: "Premium Kurumsal Mimari Stratejisi",
    content: "Sektörel rekabette öne çıkmanız için, performans odaklı 'Headless' mimariyi tercih ediyoruz. Marka prestijinizi yansıtan güvenli ve ölçeklenebilir bir temel atıyoruz."
  },
  ecommerce: {
    title: "Gelişmiş E-Ticaret Stratejisi",
    content: "Doğrudan satış hacminizi artırmak için tasarlanan yüksek dönüşümlü e-ticaret altyapımızla tanışın. Ziyaretçilerinizi müşteriye dönüştüren bir satış makinesi kurguluyoruz."
  },
  enterprise: {
    title: "Kurumsal Dijital Dönüşüm Stratejisi",
    content: "Karmaşık iş süreçlerinizi dijitalleştirmek ve uçtan uca otomasyon sağlamak için özel yazılım mimarisi kurguluyoruz. Supabase entegrasyonu ile veri güvenliğini en üst seviyede tutuyoruz."
  }
};

const questions = [
  { id: "q1", title: "🎯 Bu projeyle ulaşmak istediğiniz en önemli hedef nedir?", options: [
      { id: "lead_gen", label: "Daha fazla müşteri ve talep kazanmak", score: 10, segment: "professional" },
      { id: "ecommerce", label: "İnternetten doğrudan satış yapmak", score: 20, segment: "ecommerce" },
      { id: "branding", label: "Marka prestijimi ve güvenilirliğimi artırmak", score: 10, segment: "professional" },
      { id: "automation", label: "İş süreçlerimi dijitalleştirmek (CRM/ERP)", score: 30, segment: "enterprise" },
  ]},
  { id: "q2", title: "🏢 İşletmenizi en iyi hangisi tanımlar?", options: [
      { id: "small", label: "Küçük işletme / Yeni kuruluyor", score: 5, segment: "starter" },
      { id: "kobi", label: "Büyüyen KOBİ / Yerel ağ", score: 15, segment: "professional" },
      { id: "enterprise", label: "Kurumsal / Çok Şubeli / Uluslararası", score: 30, segment: "enterprise" },
  ]},
  { id: "q3", title: "💰 Projede sizin için en önemli öncelik hangisi?", options: [
      { id: "budget", label: "En uygun maliyet ve hızlı kurulum", score: 0, segment: "starter" },
      { id: "balance", label: "Fiyat / Performans dengesi", score: 10, segment: "professional" },
      { id: "quality", label: "Uzun ömürlü ve premium kalite", score: 20, segment: "professional" },
      { id: "tech", label: "En gelişmiş teknoloji (Özel Yazılım/API)", score: 30, segment: "enterprise" },
  ]}
];

export default function SalesAdvisor() {
  const brandColor = "#933c81";
  const [step, setStep] = useState(0); 
  const [answers, setAnswers] = useState<Record<string, { label: string, score: number, segment: string }>>({});
  const [leadData, setLeadData] = useState({ name: "", email: "", phone: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [finalReport, setFinalReport] = useState<{title: string, content: string} | null>(null);

  const calculateFinalSegment = () => {
    let totalScore = 0;
    Object.values(answers).forEach(ans => totalScore += ans.score);
    if (totalScore >= 70) return { id: "enterprise", title: "Enterprise & Otomasyon" };
    if (Object.values(answers).some(ans => ans.segment === "ecommerce")) return { id: "ecommerce", title: "Gelişmiş E-Ticaret" };
    if (totalScore >= 30) return { id: "professional", title: "Premium Kurumsal Mimari" };
    return { id: "starter", title: "Hızlı Kurumsal Çıkış" };
  };

  const currentSegment = calculateFinalSegment();

  const handleSelect = (questionId: string, option: any) => {
    setAnswers(prev => ({ ...prev, [questionId]: option }));
    if (step < questions.length - 1) setStep(step + 1);
    else { setStep(step + 1); setTimeout(() => setStep(prev => prev + 1), 2000); }
  };

  const handleFormSubmit = async () => {
    if (!leadData.name || !leadData.email) {
      alert("Lütfen bilgileri doldurun.");
      return;
    }
    setIsLoading(true);
    const template = reportTemplates[currentSegment.id as keyof typeof reportTemplates] || reportTemplates.starter;
    
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!, 
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { error } = await supabase.from('leads').insert([{
      full_name: leadData.name, email: leadData.email, phone: leadData.phone,
      segment: currentSegment.id, ai_report: `${template.title} - ${template.content}`
    }]);

    if (error) {
      console.error(error);
      alert("Bir hata oluştu.");
    } else {
      setFinalReport(template);
      setStep(questions.length + 3);
    }
    setIsLoading(false);
  };

  return (
    <div className="bg-white p-8 lg:p-12 max-w-4xl mx-auto rounded-[2rem] shadow-2xl">
      {step < questions.length && (
         <div className="mb-8">
            <div className="text-xs font-bold text-slate-400 mb-2">ADIM {step+1}</div>
            <div className="w-full h-1 bg-slate-100 rounded-full"><div className="h-full rounded-full transition-all" style={{ width: `${((step + 1) / questions.length) * 100}%`, backgroundColor: brandColor }}></div></div>
         </div>
      )}

      {step < questions.length && (
        <div>
          <h3 className="text-2xl font-bold mb-8">{questions[step].title}</h3>
          <div className="grid gap-4">
            {questions[step].options.map((opt, i) => (
              <button key={i} onClick={() => handleSelect(questions[step].id, opt)} className="p-4 border-2 rounded-xl text-left hover:border-[#933c81]">{opt.label}</button>
            ))}
          </div>
        </div>
      )}

      {step === questions.length && <div className="text-center py-10 font-bold">Analiz Ediliyor...</div>}

      {step === questions.length + 1 && (
        <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">İdeal Mimari: {currentSegment.title}</h3>
            <button onClick={() => setStep(step + 1)} className="px-8 py-3 bg-[#933c81] text-white rounded-xl font-bold">Devam Et</button>
        </div>
      )}

      {step === questions.length + 2 && (
        <div className="space-y-4">
          <input type="text" placeholder="Adınız" className="w-full p-4 border rounded-xl" onChange={e => setLeadData({...leadData, name: e.target.value})} />
          <input type="email" placeholder="E-posta" className="w-full p-4 border rounded-xl" onChange={e => setLeadData({...leadData, email: e.target.value})} />
          <button onClick={handleFormSubmit} disabled={isLoading} className="w-full p-4 bg-slate-900 text-white rounded-xl font-bold">
            {isLoading ? "Gönderiliyor..." : "Raporu Göster"}
          </button>
        </div>
      )}

      {step === questions.length + 3 && finalReport && (
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#933c81]">{finalReport.title}</h3>
          <p className="text-slate-600 mb-6">{finalReport.content}</p>
          <button onClick={() => window.location.reload()} className="w-full p-4 bg-slate-200 rounded-xl font-bold">Yeni Analiz Yap</button>
        </div>
      )}
    </div>
  );
}