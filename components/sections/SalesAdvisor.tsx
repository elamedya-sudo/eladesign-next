"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Rapor Şablonları (Fiyat ve Süre Eklendi)
const reportTemplates = {
  starter: {
    title: "Hızlı Kurumsal Çıkış Stratejisi",
    price: "15.000 TL - 25.000 TL",
    timeline: "1-2 Hafta",
    features: ["Mobil Uyumlu Modern Tasarım", "SEO Dostu CMS Altyapısı", "Hızlı Açılış Süresi", "Temel Güvenlik Protokolleri"],
    content: "İşletmenizin dijital dünyadaki ilk adımlarında hız ve verimlilik önceliğimizdir. Optimize edilmiş CMS mimarimiz ile gereksiz kod yükünden arınmış, hızlı açılan, mobil uyumlu ve arama motoru dostu bir altyapı kuruyoruz."
  },
  professional: {
    title: "Premium Kurumsal Mimari Stratejisi",
    price: "35.000 TL - 60.000 TL",
    timeline: "3-4 Hafta",
    features: ["Next.js Headless Mimari", "Özel UI/UX Tasarım", "Gelişmiş Performans Optimizasyonu", "Kurumsal Güvenlik Altyapısı"],
    content: "Performans odaklı 'Headless' mimari ile sektörde fark yaratın. Marka prestijinizi yansıtan, yüksek güvenlikli, ölçeklenebilir ve kurumsal kimliğinizle tam uyumlu özel bir web deneyimi sunuyoruz."
  },
  ecommerce: {
    title: "Gelişmiş E-Ticaret Stratejisi",
    price: "50.000 TL +",
    timeline: "4-6 Hafta",
    features: ["Yüksek Dönüşümlü Satış Hunisi", "Güvenli Ödeme Entegrasyonları", "Gelişmiş Stok/Sipariş Yönetimi", "Terk Edilmiş Sepet Kurtarma"],
    content: "Doğrudan satış hacminizi artırmak için tasarlanan yüksek dönüşümlü e-ticaret altyapısı. Güvenli ödeme sistemleri, stok yönetimi ve kullanıcıyı satın almaya yönlendiren akıllı satış hunileri ile kurguluyoruz."
  },
  enterprise: {
    title: "Kurumsal Dijital Dönüşüm Stratejisi",
    price: "Özel Fiyatlandırma",
    timeline: "6+ Hafta",
    features: ["Uçtan Uca Süreç Otomasyonu", "Supabase / Özel API Entegrasyonları", "CRM ve ERP Bağlantıları", "Sınırsız Ölçeklenebilirlik"],
    content: "Karmaşık iş süreçlerinizi dijitalleştirmek ve otomasyon sağlamak için özel yazılım mimarisi. Supabase ve Next.js tabanlı, veri güvenliği yüksek ve uçtan uca dijital dönüşüm çözümü."
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
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [leadData, setLeadData] = useState({ name: "", email: "", phone: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [finalReport, setFinalReport] = useState<any>(null);

  const calculateFinalSegment = () => {
    const answersArr = Object.values(answers);
    if (answersArr.some(ans => ans.id === 'automation' || ans.id === 'tech')) return { id: "enterprise", title: "Enterprise & Otomasyon" };
    if (answersArr.some(ans => ans.segment === 'ecommerce')) return { id: "ecommerce", title: "Gelişmiş E-Ticaret" };
    let totalScore = 0; answersArr.forEach(ans => totalScore += totalScore + ans.score);
    if (totalScore >= 25) return { id: "professional", title: "Premium Kurumsal Mimari" };
    return { id: "starter", title: "Hızlı Kurumsal Çıkış" };
  };

  const currentSegment = calculateFinalSegment();

  const handleSelect = (questionId: string, option: any) => {
    setAnswers(prev => ({ ...prev, [questionId]: option }));
    if (step < questions.length - 1) setStep(step + 1);
    else { setStep(step + 1); setTimeout(() => setStep(prev => prev + 1), 1000); }
  };

  // YENİ: Geri Gitme Fonksiyonu
  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleFormSubmit = async () => {
    if (!leadData.name || !leadData.email) { alert("Lütfen bilgileri eksiksiz doldurun."); return; }
    setIsLoading(true);
    const template = reportTemplates[currentSegment.id as keyof typeof reportTemplates] || reportTemplates.starter;
    
    // Supabase Kaydı
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
    await supabase.from('leads').insert([{
      full_name: leadData.name, email: leadData.email, phone: leadData.phone,
      segment: currentSegment.id, ai_report: `${template.title} | ${template.price}`
    }]);

    // TODO: Burada E-Posta / PDF Gönderme API'si tetiklenecek

    setFinalReport({...template, ...leadData});
    setStep(questions.length + 3);
    setIsLoading(false);
  };

  return (
    <div className="bg-white p-6 md:p-10 lg:p-12 max-w-4xl mx-auto rounded-[2rem] shadow-2xl relative">
      
      {/* Üst Bar ve Geri Butonu */}
      {step < questions.length && (
         <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              {step > 0 ? (
                <button onClick={handleBack} className="text-sm font-semibold text-slate-500 hover:text-[#933c81] flex items-center transition-colors">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                  Geri
                </button>
              ) : <div></div>}
              <div className="text-xs font-bold text-slate-400">ADIM {step + 1} / {questions.length}</div>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full rounded-full transition-all duration-500" style={{ width: `${((step + 1) / questions.length) * 100}%`, backgroundColor: brandColor }}></div>
            </div>
         </div>
      )}

      {/* Sorular */}
      {step < questions.length && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8">{questions[step].title}</h3>
          <div className="grid gap-4">
            {questions[step].options.map((opt, i) => (
              <button key={i} onClick={() => handleSelect(questions[step].id, opt)} className="p-5 border-2 border-slate-100 rounded-2xl text-left hover:border-[#933c81] hover:bg-[#933c81]/5 transition-all font-medium text-slate-700">
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Analiz Yükleniyor Ekranı */}
      {step === questions.length && (
        <div className="text-center py-16 animate-pulse">
           <div className="w-16 h-16 border-4 border-[#933c81] border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
           <h3 className="text-2xl font-bold text-slate-900">Yanıtlarınız Analiz Ediliyor...</h3>
        </div>
      )}

      {/* Form Ekranı Öncesi Ara Onay */}
      {step === questions.length + 1 && (
        <div className="text-center py-10 animate-in zoom-in-95 duration-500">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-bold tracking-wide uppercase mb-4">Analiz Tamamlandı</span>
            <h3 className="text-3xl font-bold mb-4 text-slate-900">İdeal Mimari: <span className="text-[#933c81]">{currentSegment.title}</span></h3>
            <p className="text-slate-500 mb-8 max-w-lg mx-auto">Size özel hazırlanan maliyet ve strateji raporunu PDF olarak iletebilmemiz için lütfen iletişim bilgilerinizi girin.</p>
            <div className="flex justify-center gap-4">
               <button onClick={handleBack} className="px-6 py-3 text-slate-500 font-bold hover:text-slate-900">Geri Dön</button>
               <button onClick={() => setStep(step + 1)} className="px-8 py-3 bg-[#933c81] text-white rounded-xl font-bold shadow-lg shadow-[#933c81]/30 hover:-translate-y-1 transition-transform">Raporu Hazırla</button>
            </div>
        </div>
      )}

      {/* Form Ekranı */}
      {step === questions.length + 2 && (
        <div className="space-y-5 max-w-md mx-auto animate-in fade-in slide-in-from-right-8 duration-500">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-slate-900">Raporunuz Hazır!</h3>
            <p className="text-slate-500 text-sm mt-2">Detaylı teklif dosyanızı göndereceğimiz adresi girin.</p>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Adınız Soyadınız</label>
            <input type="text" className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#933c81] outline-none transition-all" onChange={e => setLeadData({...leadData, name: e.target.value})} />
          </div>
          <div>
             <label className="block text-sm font-bold text-slate-700 mb-1">E-Posta Adresiniz</label>
             <input type="email" className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#933c81] outline-none transition-all" onChange={e => setLeadData({...leadData, email: e.target.value})} />
          </div>
          <div>
             <label className="block text-sm font-bold text-slate-700 mb-1">Telefon Numaranız</label>
             <input type="tel" className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#933c81] outline-none transition-all" onChange={e => setLeadData({...leadData, phone: e.target.value})} />
          </div>
          <button onClick={handleFormSubmit} disabled={isLoading} className="w-full p-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-colors shadow-xl mt-4 flex justify-center items-center gap-2">
            {isLoading ? <span className="animate-pulse">Rapor Oluşturuluyor...</span> : "Ücretsiz Raporumu Gönder"}
          </button>
        </div>
      )}

      {/* YENİ: Yönetici Özeti (Executive Summary) Ekranı */}
      {step === questions.length + 3 && finalReport && (
        <div className="animate-in fade-in zoom-in-95 duration-500">
          
          {/* E-Posta Gönderildi Bildirimi */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-start gap-4 mb-8">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0 text-green-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <div>
              <h4 className="font-bold text-green-800">Detaylı Rapor Gönderildi</h4>
              <p className="text-sm text-green-700 mt-1">Sayın {finalReport.name}, {finalReport.title} detaylarını ve PDF dosyasını <strong>{finalReport.email}</strong> adresine başarıyla ilettik.</p>
            </div>
          </div>

          <div className="text-center mb-8">
             <h3 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-2">Yönetici Özeti</h3>
             <h2 className="text-3xl md:text-4xl font-extrabold text-[#933c81]">{finalReport.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="text-slate-500 font-semibold mb-1 text-sm">TAHMİNİ BÜTÇE</div>
              <div className="text-2xl font-black text-slate-900">{finalReport.price}</div>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="text-slate-500 font-semibold mb-1 text-sm">PROJE SÜRESİ</div>
              <div className="text-2xl font-black text-slate-900">{finalReport.timeline}</div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="font-bold text-slate-900 mb-4 text-lg">Bu Mimari Size Ne Sağlar?</h4>
            <p className="text-slate-600 leading-relaxed mb-6">{finalReport.content}</p>
            
            <ul className="grid sm:grid-cols-2 gap-3">
              {finalReport.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-center text-sm font-medium text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <svg className="w-4 h-4 text-[#933c81] mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-100">
             <button onClick={() => window.location.reload()} className="flex-1 py-4 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-colors">Yeni Analiz Yap</button>
             <a href="tel:+905072742062" className="flex-1 py-4 bg-[#933c81] text-white rounded-xl font-bold hover:bg-[#7a316a] transition-colors text-center shadow-lg shadow-[#933c81]/20">Hemen Görüşelim</a>
          </div>

        </div>
      )}
    </div>
  );
}