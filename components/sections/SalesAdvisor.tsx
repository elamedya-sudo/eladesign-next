"use client";

import { useState } from "react";

const questions = [
  {
    id: "q1",
    title: "🎯 Bu projeyle ulaşmak istediğiniz en önemli hedef nedir?",
    options: [
      { id: "lead_gen", label: "Daha fazla müşteri kazanmak", segment: "professional" },
      { id: "ecommerce", label: "İnternetten satış yapmak", segment: "ecommerce" },
      { id: "branding", label: "Markamı güçlendirmek", segment: "professional" },
      { id: "automation", label: "İş süreçlerimi dijitalleştirmek (CRM/ERP)", segment: "enterprise" },
    ]
  },
  {
    id: "q2",
    title: "🏢 İşletmenizi en iyi hangisi tanımlar?",
    options: [
      { id: "small", label: "Küçük işletme / Yeni kuruluyor", segment: "starter" },
      { id: "kobi", label: "Büyüyen KOBİ", segment: "professional" },
      { id: "enterprise", label: "Kurumsal / Çok Şubeli / Uluslararası", segment: "enterprise" },
    ]
  },
  {
    id: "q3",
    title: "💰 Projede sizin için en önemli öncelik hangisi?",
    options: [
      { id: "budget", label: "En uygun maliyet", segment: "starter" },
      { id: "balance", label: "Fiyat / Performans dengesi", segment: "professional" },
      { id: "quality", label: "Uzun ömürlü ve kaliteli çözüm", segment: "professional" },
      { id: "tech", label: "En gelişmiş teknoloji (AI/API)", segment: "enterprise" },
    ]
  }
];

export default function SalesAdvisor() {
  const [step, setStep] = useState(0); 
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const brandColor = "#933c81";

  const handleSelect = (questionId: string, segment: string) => {
    setAnswers({ ...answers, [questionId]: segment });
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(1); // Analiz ekranı
      setTimeout(() => setStep(2), 2000); // 2 sn analiz süresi
    }
  };

  return (
    <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 lg:p-12 max-w-3xl mx-auto min-h-[400px] flex flex-col justify-center">
      
      {/* Soru Aşaması */}
      {step === 0 && (
        <div className="animate-in fade-in duration-500">
          <h3 className="text-2xl font-extrabold text-slate-900 mb-8">{questions[0].title}</h3>
          <div className="grid grid-cols-1 gap-4">
            {questions[0].options.map(opt => (
              <button key={opt.id} onClick={() => handleSelect(questions[0].id, opt.segment)} className="p-5 rounded-2xl border-2 border-slate-200 hover:border-[#933c81] text-left font-semibold text-slate-700 hover:text-[#933c81] transition-all">
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Analiz Ekranı */}
      {step === 1 && (
        <div className="text-center animate-pulse">
          <div className="w-16 h-16 bg-[#933c81]/10 rounded-full flex items-center justify-center mx-auto mb-6">⚙️</div>
          <h3 className="text-xl font-bold text-slate-900">Dijital Stratejiniz Analiz Ediliyor...</h3>
          <p className="text-slate-500">İşletme hedeflerinize en uygun teknoloji mimarisini kurguluyoruz.</p>
        </div>
      )}

      {/* Özet Ekranı */}
      {step === 2 && (
        <div className="animate-in zoom-in-95 duration-500 bg-slate-900 text-white p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4 text-[#e890d6]">Stratejik Çözüm Özetiniz</h2>
          <p className="text-slate-300 mb-6 leading-relaxed">Verdiğiniz yanıtlar doğrultusunda; standart bir web sitesinden ziyade, operasyonel verimliliği artıracak özel bir mimari öneriyoruz. Bu, markanızın dijital varlığını bir üst seviyeye taşıyacaktır.</p>
          <button onClick={() => setStep(3)} className="w-full bg-[#933c81] py-4 rounded-xl font-bold hover:bg-[#7a316a] transition-all">
            Detaylı Raporu İndir
          </button>
        </div>
      )}

      {/* Lead Capture */}
      {step === 3 && (
        <div className="animate-in fade-in duration-500">
          <h3 className="text-2xl font-bold mb-6">Detaylı Rapor İçin İletişim</h3>
          <input className="w-full p-4 mb-4 border border-slate-200 rounded-xl" placeholder="Ad Soyad" />
          <input className="w-full p-4 mb-4 border border-slate-200 rounded-xl" placeholder="E-posta" />
          <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-black transition-all">
            Raporu Oluştur ve Gönder
          </button>
        </div>
      )}
    </div>
  );
}