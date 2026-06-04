"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// --- YENİ VERİ MODELİ (FİYATLAR GİZLİ, SEO/GOOGLE EKLENDİ) ---
const stepsData = [
  {
    id: "q1",
    title: "1. Ne Tür Bir Web Sitesine İhtiyacınız Var?",
    type: "radio",
    options: [
      { id: "personal", label: "Kişisel Web Sitesi", price: 22000 },
      { id: "corporate", label: "Kurumsal Web Sitesi", price: 40000 },
      { id: "product", label: "Ürün Modüllü Web Sitesi", price: 75000 },
      { id: "ecommerce", label: "E-Ticaret Sitesi", price: 60000 },
    ]
  },
  {
    id: "q2",
    title: "2. Yabancı Dil Seçimi",
    type: "radio",
    options: [
      { id: "tr", label: "Sadece Türkçe", price: 0, tag: "Ücretsiz" },
      { id: "plus1", label: "+1 Yabancı Dil", price: 10000 },
      { id: "plus2", label: "+2 Yabancı Dil", price: 20000 },
      { id: "translate", label: "Google Translate", price: 0, tag: "Ücretsiz" },
    ]
  },
  {
    id: "q3",
    title: "3. Ne Tür Bir Tasarım İstiyorsunuz?",
    type: "radio",
    options: [
      { id: "ready", label: "Hazır Tasarım", price: 0, tag: "Ücretsiz" },
      { id: "designer", label: "Tasarımcıya Bırakıyorum", price: 5000 },
      { id: "detailed", label: "Detaylı Çalışılmış Bir Tasarım", price: 25000 },
      { id: "custom", label: "Bana Özel Özgün Tasarım", price: 50000 },
    ]
  },
  {
    id: "q4",
    title: "4. Altyapı ve Teknoloji Seçimi",
    type: "radio",
    options: [
      { id: "cms", label: "Standart CMS (Örn: WordPress)", price: 0, tag: "Standart" },
      { id: "nextjs", label: "Next.js / Headless Modern Mimari", price: 15000 },
      { id: "custom_backend", label: "Tamamen Özel Yazılım & Veritabanı", price: 35000 },
    ]
  },
  {
    id: "q5",
    title: "5. SEO ve Google Entegrasyonları (Opsiyonel)",
    type: "checkbox", // Bu adım çoklu seçime (checkbox) izin veriyor
    options: [
      { id: "search_console", label: "Search Console Optimizasyonu", price: 10000 },
      { id: "analytics", label: "Google Analytics Optimizasyonu", price: 10000 },
      { id: "tag_manager", label: "Tag Manager Entegrasyonu", price: 5000 },
      { id: "merchant", label: "Google Merchant Center Optimizasyonu", price: 17000 },
      { id: "my_business", label: "Google İşletme (Harita) Kaydı", price: 5000 },
    ]
  }
];

export default function PriceCalculator() {
  const brandColor = "#933c81";
  
  const [currentStep, setCurrentStep] = useState(0);
  
  // İlk adımda varsayılan değerler seçili gelsin
  const [selections, setSelections] = useState<Record<string, number[]>>({
    q1: [40000], // Varsayılan Kurumsal
    q2: [0],     // Türkçe
    q3: [0],     // Hazır Tasarım
    q4: [15000], // Next.js Mimari
    q5: []       // Çoklu seçim boş gelsin
  });

  const [totalPrice, setTotalPrice] = useState(0);

  const totalSteps = stepsData.length + 1; // Sorular + Sonuç Ekranı
  const isFinished = currentStep === stepsData.length;

  // Seçimler değiştiğinde fiyatı hesapla
  useEffect(() => {
    let newTotal = 0;
    Object.values(selections).forEach(valArray => {
      valArray.forEach(val => newTotal += val);
    });
    setTotalPrice(newTotal);
  }, [selections]);

  const handleSelect = (questionId: string, price: number, type: string) => {
    setSelections(prev => {
      if (type === "radio") {
        return { ...prev, [questionId]: [price] };
      } else {
        const currentVals = prev[questionId] || [];
        if (currentVals.includes(price)) {
          return { ...prev, [questionId]: currentVals.filter(v => v !== price) };
        } else {
          return { ...prev, [questionId]: [...currentVals, price] };
        }
      }
    });
  };

  const nextStep = () => {
    if (currentStep < totalSteps - 1) setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  // WhatsApp'a hazır mesaj oluştur
  const getWhatsAppLink = () => {
    const formattedPrice = totalPrice.toLocaleString('tr-TR');
    const message = `Merhaba, Ela Teknoloji web sitenizden tahmini fiyat hesaplama aracınızı kullandım. Çıkan tahmini proje bedelim: ${formattedPrice} TL. Bu bütçe ve ihtiyaçlarım doğrultusunda detaylı görüşmek ve teklif almak istiyorum.`;
    return `https://wa.me/908503028476?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden max-w-4xl mx-auto relative z-10">
      
      {/* Üst Bar: İlerleme Durumu */}
      <div className="bg-slate-50 px-8 py-6 border-b border-slate-100">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[14px] font-bold text-slate-700">
            {isFinished ? "Hesaplama Tamamlandı" : `Adım ${currentStep + 1}`}
          </span>
          <span className="text-[13px] font-medium text-slate-400">
            {currentStep + 1} / {totalSteps}
          </span>
        </div>
        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
          <div 
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{ 
              width: `${((currentStep + 1) / totalSteps) * 100}%`,
              backgroundColor: brandColor 
            }}
          ></div>
        </div>
      </div>

      {/* Orta Alan: Soru ve Seçenekler */}
      <div className="p-8 lg:p-12 min-h-[350px]">
        
        {/* Soru Ekranı */}
        {!isFinished && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-8">
              {stepsData[currentStep].title}
            </h3>
            <p className="text-sm text-slate-500 mb-6 -mt-4">
              {stepsData[currentStep].type === 'checkbox' ? "(Birden fazla seçim yapabilirsiniz)" : "(Tek bir seçim yapınız)"}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stepsData[currentStep].options.map((option, idx) => {
                const qId = stepsData[currentStep].id;
                const isSelected = selections[qId]?.includes(option.price);
                
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(qId, option.price, stepsData[currentStep].type)}
                    className={`relative p-5 rounded-2xl border-2 text-left transition-all duration-200 flex items-center justify-between group ${
                      isSelected
                        ? "border-[#933c81] bg-[#933c81]/5 shadow-md"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                    }`}
                  >
                    <span className={`font-semibold text-[15px] ${isSelected ? "text-[#933c81]" : "text-slate-700"}`}>
                      {option.label}
                    </span>
                    
                    <div className="flex items-center gap-3">
                      {option.tag && (
                        <span className={`text-[11px] font-bold px-2 py-1 rounded-md uppercase tracking-wide ${
                          isSelected ? "bg-[#933c81] text-white" : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                        }`}>
                          {option.tag}
                        </span>
                      )}
                      <div className={`w-5 h-5 flex items-center justify-center shrink-0 ${stepsData[currentStep].type === 'radio' ? 'rounded-full' : 'rounded-md'} border-2 transition-colors ${isSelected ? 'border-[#933c81] bg-[#933c81]' : 'border-slate-300 bg-white'}`}>
                        {isSelected && (
                          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Sonuç Ekranı */}
        {isFinished && (
          <div className="text-center animate-in zoom-in-95 duration-500 py-8">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Tahmini Proje Bedeli</h3>
            <p className="text-slate-500 mb-8 px-4 py-2 bg-yellow-50 text-yellow-800 rounded-lg inline-block text-sm font-medium">⚠️ Bu fiyatlar bilgi amaçlı tahmini tutarlardır.</p>
            
            <div className="text-5xl md:text-6xl font-black text-[#933c81] tracking-tight mb-10">
              {totalPrice.toLocaleString('tr-TR')} ₺ <span className="text-lg font-medium text-slate-400">+ KDV</span>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
              <a 
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-[#20bd5a] shadow-lg transition-all transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
                WhatsApp İle Sor
              </a>
              <Link 
                href="/iletisim"
                className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 shadow-lg transition-all transform hover:-translate-y-1"
              >
                Form Gönder
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Alt Bar: Sadece İleri/Geri Butonları (Fiyat Artık Gizli) */}
      <div className="bg-slate-50 px-8 py-6 border-t border-slate-100 flex justify-end">
        <div className="flex gap-3 w-full sm:w-auto">
          {currentStep > 0 && !isFinished && (
            <button 
              onClick={prevStep}
              className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold hover:bg-slate-100 transition-colors"
            >
              Geri
            </button>
          )}
          
          {!isFinished && (
            <button 
              onClick={nextStep}
              className="flex-1 sm:flex-none px-10 py-3 rounded-xl bg-gradient-to-r from-[#933c81] to-[#df6e32] text-white font-bold shadow-md hover:opacity-90 transition-opacity"
            >
              {currentStep === stepsData.length - 1 ? "Hesapla ve Fiyatı Gör" : "İleri"}
            </button>
          )}
          
          {isFinished && (
            <button 
              onClick={() => setCurrentStep(0)}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-200 text-slate-700 font-semibold hover:bg-slate-300 transition-colors"
            >
              Yeniden Hesapla
            </button>
          )}
        </div>
      </div>

    </div>
  );
}