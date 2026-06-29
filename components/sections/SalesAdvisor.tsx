"use client";

import { useState } from "react";

// Stratejik Sorular ve Karar Ağacı Verisi
const questions = [
  {
    id: "q1",
    title: "🎯 Bu projeyle ulaşmak istediğiniz en önemli hedef nedir?",
    description: "Sizin için en doğru dijital stratejiyi belirlememize yardımcı olun.",
    options: [
      { id: "lead_gen", label: "Daha fazla müşteri ve talep kazanmak", score: 10, segment: "professional" },
      { id: "ecommerce", label: "İnternetten doğrudan satış yapmak", score: 20, segment: "ecommerce" },
      { id: "branding", label: "Marka prestijimi ve güvenilirliğimi artırmak", score: 10, segment: "professional" },
      { id: "automation", label: "İş süreçlerimi dijitalleştirmek (CRM/ERP)", score: 30, segment: "enterprise" },
    ]
  },
  {
    id: "q2",
    title: "🏢 İşletmenizi en iyi hangisi tanımlar?",
    description: "Altyapı büyüklüğünü ölçeklendirmemiz için bu bilgi önemlidir.",
    options: [
      { id: "small", label: "Küçük işletme / Yeni kuruluyor", score: 5, segment: "starter" },
      { id: "kobi", label: "Büyüyen KOBİ / Yerel ağ", score: 15, segment: "professional" },
      { id: "enterprise", label: "Kurumsal / Çok Şubeli / Uluslararası", score: 30, segment: "enterprise" },
    ]
  },
  {
    id: "q3",
    title: "💰 Projede sizin için en önemli öncelik hangisi?",
    description: "Yatırım planınızı beklentilerinize göre optimize edeceğiz.",
    options: [
      { id: "budget", label: "En uygun maliyet ve hızlı kurulum", score: 0, segment: "starter" },
      { id: "balance", label: "Fiyat / Performans dengesi", score: 10, segment: "professional" },
      { id: "quality", label: "Uzun ömürlü ve premium kalite", score: 20, segment: "professional" },
      { id: "tech", label: "En gelişmiş teknoloji (Özel Yazılım/API)", score: 30, segment: "enterprise" },
    ]
  }
];

export default function SalesAdvisor() {
  const brandColor = "#933c81";
  
  const [step, setStep] = useState(0); 
  const [answers, setAnswers] = useState<Record<string, { label: string, score: number, segment: string }>>({});
  const [leadData, setLeadData] = useState({ name: "", email: "", phone: "" });

  // Puanlama motoru ile kullanıcının asıl segmentini bulma
  const calculateFinalSegment = () => {
    let totalScore = 0;
    Object.values(answers).forEach(ans => totalScore += ans.score);

    if (totalScore >= 70) return { id: "enterprise", title: "Enterprise & Otomasyon", tech: "Next.js + Supabase + Custom API" };
    if (Object.values(answers).some(ans => ans.segment === "ecommerce")) return { id: "ecommerce", title: "Gelişmiş E-Ticaret", tech: "Next.js Commerce / Gelişmiş WooCommerce" };
    if (totalScore >= 30) return { id: "professional", title: "Premium Kurumsal Mimari", tech: "Next.js Headless Mimari" };
    return { id: "starter", title: "Hızlı Kurumsal Çıkış", tech: "Optimize Edilmiş CMS" };
  };

  const handleSelect = (questionId: string, option: any) => {
    setAnswers(prev => ({ ...prev, [questionId]: option }));
    
    if (step < questions.length - 1) {
      setStep(prev => prev + 1);
    } else {
      // Sorular bitti, analiz animasyonunu tetikle
      setStep(step + 1);
      setTimeout(() => setStep(prev => prev + 1), 2500); 
    }
  };

  const currentSegment = calculateFinalSegment();

  return (
    <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden max-w-4xl mx-auto relative z-10">
      
      {/* İlerleme Çubuğu */}
      {step < questions.length && (
        <div className="bg-slate-50 px-8 py-6 border-b border-slate-100">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[14px] font-bold text-slate-700">Dijital Keşif Adımı</span>
            <span className="text-[13px] font-medium text-slate-400">{step + 1} / {questions.length}</span>
          </div>
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full rounded-full transition-all duration-500 ease-out" style={{ width: `${((step + 1) / questions.length) * 100}%`, backgroundColor: brandColor }}></div>
          </div>
        </div>
      )}

      <div className="p-8 lg:p-12 min-h-[400px] flex flex-col justify-center">
        
        {/* Adım 0, 1, 2: Sorular */}
        {step < questions.length && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-2">{questions[step].title}</h3>
            <p className="text-slate-500 mb-8">{questions[step].description}</p>
            
            <div className="grid grid-cols-1 gap-4">
              {questions[step].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(questions[step].id, opt)}
                  className="p-5 rounded-2xl border-2 border-slate-200 text-left transition-all duration-200 hover:border-[#933c81] hover:bg-[#933c81]/5 hover:shadow-sm group flex items-center justify-between"
                >
                  <span className="font-semibold text-[16px] text-slate-700 group-hover:text-[#933c81]">{opt.label}</span>
                  <div className="w-6 h-6 rounded-full border-2 border-slate-300 group-hover:border-[#933c81] flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-transparent group-hover:bg-[#933c81] transition-colors"></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Adım 3: Yapay Zeka Analiz Ekranı (Loading) */}
        {step === questions.length && (
          <div className="text-center animate-pulse py-10">
            <div className="w-20 h-20 bg-[#933c81]/10 rounded-full flex items-center justify-center mx-auto mb-6">
               <svg className="w-10 h-10 text-[#933c81] animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Dijital Olgunluğunuz Analiz Ediliyor...</h3>
            <p className="text-slate-500">Yanıtlarınıza en uygun teknoloji mimarisi ve bütçe eşleştiriliyor.</p>
          </div>
        )}

        {/* Adım 4: Değer Özeti (Freemium Value Model) */}
        {step === questions.length + 1 && (
          <div className="animate-in zoom-in-95 duration-500 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-bold tracking-wide uppercase mb-6">Analiz Tamamlandı</span>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Sizin İçin İdeal Mimari: <br/><span className="text-[#933c81]">{currentSegment.title}</span></h3>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto text-lg leading-relaxed">
              İşletmenizin büyüme hedefleri ve operasyonel ihtiyaçları doğrultusunda, monolitik sistemler yerine <strong>{currentSegment.tech}</strong> altyapısı ile kurgulanmış özel bir dijital çözüm öneriyoruz.
            </p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8 max-w-lg mx-auto text-left">
               <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">🎯 Raporunuzda Neler Var?</h4>
               <ul className="space-y-2 text-slate-600 text-sm">
                 <li className="flex items-center gap-2">✓ Net Yatırım Bütçesi ve Maliyet Tablosu</li>
                 <li className="flex items-center gap-2">✓ Hedeflerinize Özel Teknoloji Çözümleri</li>
                 <li className="flex items-center gap-2">✓ Proje Teslim Süresi ve Yol Haritası</li>
               </ul>
            </div>
            <button 
              onClick={() => setStep(step + 1)}
              className="w-full sm:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-[#933c81] to-[#df6e32] text-white font-bold text-lg shadow-xl shadow-[#933c81]/20 hover:opacity-90 transition-all transform hover:-translate-y-1"
            >
              Raporu PDF Olarak İndir
            </button>
          </div>
        )}

        {/* Adım 5: Lead Capture (Form) */}
        {step === questions.length + 2 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500 max-w-md mx-auto w-full">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Raporunuz Hazır!</h3>
              <p className="text-slate-500">Size özel hazırlanan büyüme analizini ve fiyatlandırmayı gönderebilmemiz için iletişim bilgilerinizi girin.</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Adınız Soyadınız</label>
                <input type="text" className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#933c81] focus:border-[#933c81] outline-none" placeholder="Örn: Ahmet Yılmaz" onChange={e => setLeadData({...leadData, name: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Kurumsal E-posta Adresiniz</label>
                <input type="email" className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#933c81] focus:border-[#933c81] outline-none" placeholder="isim@sirket.com" onChange={e => setLeadData({...leadData, email: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Telefon Numaranız</label>
                <input type="tel" className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#933c81] focus:border-[#933c81] outline-none" placeholder="05XX XXX XX XX" onChange={e => setLeadData({...leadData, phone: e.target.value})} />
              </div>
              <button 
  onClick={handleFormSubmit}
  disabled={isLoading}
  className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-colors shadow-lg mt-4 disabled:bg-slate-400 flex items-center justify-center gap-2"
>
  {isLoading ? (
    <>
      <svg className="w-5 h-5 animate-spin text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
      Yapay Zeka Raporunuzu Hazırlıyor...
    </>
  ) : (
    "Raporumu Gönder"
  )}
</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}