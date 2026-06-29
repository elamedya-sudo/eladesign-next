"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// 1. Detaylı Rapor Şablonları (Fiyat ve Süre Eklendi)
const reportTemplates = {
  starter: {
    title: "Hızlı Kurumsal Çıkış Stratejisi",
    price: "15.000 TL - 25.000 TL",
    timeline: "1-2 Hafta",
    content: "İşletmenizin dijital dünyadaki ilk adımlarında hız ve verimlilik önceliğimizdir. Optimize edilmiş CMS mimarimiz ile gereksiz kod yükünden arınmış, hızlı açılan, mobil uyumlu ve SEO dostu bir altyapı kuruyoruz."
  },
  professional: {
    title: "Premium Kurumsal Mimari Stratejisi",
    price: "35.000 TL - 60.000 TL",
    timeline: "3-4 Hafta",
    content: "Performans odaklı 'Headless' mimari ile sektörde fark yaratın. Marka prestijinizi yansıtan, yüksek güvenlikli, ölçeklenebilir ve kurumsal kimliğinizle tam uyumlu özel bir web deneyimi sunuyoruz."
  },
  ecommerce: {
    title: "Gelişmiş E-Ticaret Stratejisi",
    price: "50.000 TL +",
    timeline: "4-6 Hafta",
    content: "Doğrudan satış hacminizi artırmak için tasarlanan yüksek dönüşümlü e-ticaret altyapısı. Güvenli ödeme sistemleri, stok yönetimi ve kullanıcıyı satın almaya yönlendiren akıllı satış hunileri ile kurguluyoruz."
  },
  enterprise: {
    title: "Kurumsal Dijital Dönüşüm Stratejisi",
    price: "Özel Fiyatlandırma",
    timeline: "6+ Hafta",
    content: "Karmaşık iş süreçlerinizi dijitalleştirmek ve otomasyon sağlamak için özel yazılım mimarisi. Supabase/Next.js tabanlı, CRM entegreli, veri güvenliği yüksek ve uçtan uca dijital dönüşüm çözümü."
  }
};

// Sorular aynı...
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
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [leadData, setLeadData] = useState({ name: "", email: "", phone: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [finalReport, setFinalReport] = useState<any>(null);

  const calculateFinalSegment = () => {
    const answersArr = Object.values(answers);
    if (answersArr.some(ans => ans.id === 'automation' || ans.id === 'tech')) return { id: "enterprise", title: "Enterprise & Otomasyon" };
    if (answersArr.some(ans => ans.segment === 'ecommerce')) return { id: "ecommerce", title: "Gelişmiş E-Ticaret" };
    let totalScore = 0; answersArr.forEach(ans => totalScore += ans.score);
    if (totalScore >= 25) return { id: "professional", title: "Premium Kurumsal Mimari" };
    return { id: "starter", title: "Hızlı Kurumsal Çıkış" };
  };

  const currentSegment = calculateFinalSegment();

  const handleSelect = (questionId: string, option: any) => {
    setAnswers(prev => ({ ...prev, [questionId]: option }));
    if (step < questions.length - 1) setStep(step + 1);
    else { setStep(step + 1); setTimeout(() => setStep(prev => prev + 1), 1000); }
  };

  const handleFormSubmit = async () => {
    if (!leadData.name || !leadData.email) { alert("Bilgileri doldurun."); return; }
    setIsLoading(true);
    const template = reportTemplates[currentSegment.id as keyof typeof reportTemplates] || reportTemplates.starter;
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

    await supabase.from('leads').insert([{
      full_name: leadData.name, email: leadData.email, phone: leadData.phone,
      segment: currentSegment.id, ai_report: `${template.title} | ${template.price}`
    }]);

    setFinalReport({...template, ...leadData}); // İletişim bilgileri de rapora eklendi
    setStep(questions.length + 3);
    setIsLoading(false);
  };

  return (
    <div className="bg-white p-8 lg:p-12 max-w-4xl mx-auto rounded-[2rem] shadow-2xl">
      {/* İlerleme Çubuğu ve Formlar aynı kalıyor... */}
      {step < questions.length && (
         <div className="mb-8"><div className="w-full h-1 bg-slate-100 rounded-full"><div className="h-full rounded-full transition-all" style={{ width: `${((step + 1) / questions.length) * 100}%`, backgroundColor: brandColor }}></div></div></div>
      )}
      {step < questions.length && (
        <div>
          <h3 className="text-2xl font-bold mb-8">{questions[step].title}</h3>
          <div className="grid gap-4">{questions[step].options.map((opt, i) => (<button key={i} onClick={() => handleSelect(questions[step].id, opt)} className="p-4 border-2 rounded-xl text-left hover:border-[#933c81]">{opt.label}</button>))}</div>
        </div>
      )}
      {step === questions.length + 1 && (
        <div className="text-center"><h3 className="text-2xl font-bold mb-4">Analiz: {currentSegment.title}</h3><button onClick={() => setStep(step + 1)} className="px-8 py-3 bg-[#933c81] text-white rounded-xl font-bold">Devam Et</button></div>
      )}
      {step === questions.length + 2 && (
        <div className="space-y-4">
          <input type="text" placeholder="Adınız" className="w-full p-4 border rounded-xl" onChange={e => setLeadData({...leadData, name: e.target.value})} />
          <input type="email" placeholder="E-posta" className="w-full p-4 border rounded-xl" onChange={e => setLeadData({...leadData, email: e.target.value})} />
          <input type="tel" placeholder="Telefon" className="w-full p-4 border rounded-xl" onChange={e => setLeadData({...leadData, phone: e.target.value})} />
          <button onClick={handleFormSubmit} disabled={isLoading} className="w-full p-4 bg-slate-900 text-white rounded-xl font-bold">{isLoading ? "Kaydediliyor..." : "Raporu Gör"}</button>
        </div>
      )}
      {/* Gelişmiş Sonuç Ekranı */}
      {step === questions.length + 3 && finalReport && (
        <div className="space-y-6">
          <div className="border-l-4 border-[#933c81] pl-6">
            <h3 className="text-3xl font-extrabold text-[#933c81]">{finalReport.title}</h3>
            <p className="text-slate-600 mt-2">{finalReport.content}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 bg-slate-50 p-6 rounded-2xl">
            <div><p className="text-sm text-slate-400 font-bold">TAHMİNİ BÜTÇE</p><p className="text-xl font-bold">{finalReport.price}</p></div>
            <div><p className="text-sm text-slate-400 font-bold">TESLİM SÜRESİ</p><p className="text-xl font-bold">{finalReport.timeline}</p></div>
          </div>
          <div className="text-sm text-slate-500">Sayın {finalReport.name}, talebiniz alındı. En kısa sürede {finalReport.email} üzerinden sizinle iletişime geçeceğiz.</div>
          <button onClick={() => window.location.reload()} className="w-full p-4 bg-slate-200 rounded-xl font-bold">Yeni Analiz Yap</button>
        </div>
      )}
    </div>
  );
}