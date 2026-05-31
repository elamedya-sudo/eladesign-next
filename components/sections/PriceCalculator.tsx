"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// --- VERİ MODELİ ---
// Gönderdiğin HTML'deki soruları ve fiyatları buraya modüler olarak aktardık.
const stepsData = [
  {
    id: "q1",
    title: "1. Ne Tür Bir Web Sitesine İhtiyacınız Var?",
    type: "radio",
    options: [
      { label: "Kişisel Web Sitesi", price: 22000, displayPrice: "22.000 ₺" },
      { label: "Kurumsal Web Sitesi", price: 35000, displayPrice: "35.000 ₺" },
      { label: "Ürün Modüllü Firma Sitesi", price: 75000, displayPrice: "75.000 ₺" },
      { label: "E-ticaret Sitesi", price: 60000, displayPrice: "60.000 ₺" },
    ]
  },
  {
    id: "q2",
    title: "2. Yabancı Dil Seçimi",
    type: "radio",
    options: [
      { label: "Sadece Türkçe", price: 0, displayPrice: "Ücretsiz" },
      { label: "+1 Yabancı Dil", price: 7500, displayPrice: "+7.500 ₺" },
      { label: "+2 Yabancı Dil", price: 15000, displayPrice: "+15.000 ₺" },
      { label: "Google Translate ile Çeviri", price: 0, displayPrice: "Ücretsiz" },
    ]
  },
  {
    id: "q3",
    title: "3. Kaç Sayfalık Tasarım Gerekli?",
    type: "radio",
    options: [
      { label: "1-5 Sayfa", price: 1250, displayPrice: "1.250 ₺" },
      { label: "5-20 Sayfa", price: 5000, displayPrice: "5.000 ₺" },
      { label: "20-40 Sayfa", price: 10000, displayPrice: "10.000 ₺" },
      { label: "40-60 Sayfa", price: 15000, displayPrice: "15.000 ₺" },
    ]
  },
  {
    id: "q4",
    title: "4. Ne Tür Bir Tasarım İstiyorsunuz?",
    type: "radio",
    options: [
      { label: "Hazır Tasarım", price: 0, displayPrice: "Standart" },
      { label: "Tasarımcıya Bırakıyorum", price: 5000, displayPrice: "+5.000 ₺" },
      { label: "Detaylı Çalışılmış Tasarım", price: 15000, displayPrice: "+15.000 ₺" },
      { label: "İsteklerime Göre Özelleştirilmiş", price: 25000, displayPrice: "+25.000 ₺" },
      { label: "Bana Özel Özgün Tasarım", price: 50000, displayPrice: "+50.000 ₺" },
    ]
  },
  {
    id: "q5",
    title: "5. Yönetici Paneli Seçimi",
    type: "radio",
    options: [
      { label: "ElaDesign Özel Panel İstiyorum", price: 5000, displayPrice: "+5.000 ₺" },
      { label: "Açık Kaynaklı Panel İstiyorum", price: 0, displayPrice: "Standart" },
    ]
  },
  {
    id: "q6",
    title: "6. Kurumsal E-posta Hizmeti",
    type: "radio",
    options: [
      { label: "Webmail (1-10 E-posta)", price: 0, displayPrice: "Standart" },
      { label: "Kurumsal Sunucu - 10 GB", price: 5000, displayPrice: "+5.000 ₺" },
      { label: "Kurumsal Sunucu - 25 GB", price: 9000, displayPrice: "+9.000 ₺" },
      { label: "Kurumsal Sunucu - 50 GB", price: 17000, displayPrice: "+17.000 ₺" },
      { label: "Kurumsal Sunucu - 100 GB", price: 32000, displayPrice: "+32.000 ₺" },
      { label: "Kurumsal Sunucu - 200 GB", price: 59000, displayPrice: "+59.000 ₺" },
    ]
  },
  {
    id: "q7",
    title: "7. SEO ve Entegrasyonlar",
    type: "checkbox", // Bu adım çoklu seçime (checkbox) izin veriyor
    options: [
      { label: "Search Console Optimizasyonu", price: 10000, displayPrice: "+10.000 ₺" },
      { label: "Analytics Optimizasyonu", price: 10000, displayPrice: "+10.000 ₺" },
      { label: "Tag Manager Entegrasyonu", price: 5000, displayPrice: "+5.000 ₺" },
      { label: "Yandex Metrica Entegrasyonu", price: 5000, displayPrice: "+5.000 ₺" },
      { label: "Merchant Center Optimizasyonu", price: 17000, displayPrice: "+17.000 ₺" },
      { label: "Google İşletme Kaydı", price: 5000, displayPrice: "+5.000 ₺" },
    ]
  }
];

export default function PriceCalculator() {
  const brandColor = "#933c81";
  
  // State: Hangi adımdayız?
  const [currentStep, setCurrentStep] = useState(0);
  
  // State: Seçilen cevapları tutar (Örn: { q1: [22000], q7: [10000, 5000] })
  const [selections, setSelections] = useState<Record<string, number[]>>({
    q1: [22000], // Varsayılan seçimler (Gönderdiğin HTML'deki "checked" mantığı)
    q2: [0],
    q3: [1250],
    q4: [0],
    q5: [5000],
    q6: [0],
    q7: [] // Checkbox için boş dizi
  });

  // State: Toplam Fiyat
  const [totalPrice, setTotalPrice] = useState(0);

  const totalSteps = stepsData.length + 1; // Sorular + Sonuç Ekranı
  const isFinished = currentStep === stepsData.length;

  // Seçimler her değiştiğinde fiyatı yeniden hesapla
  useEffect(() => {
    let newTotal = 0;
    Object.values(selections).forEach(valArray => {
      valArray.forEach(val => newTotal += val);
    });
    setTotalPrice(newTotal);
  }, [selections]);

  // Radyo veya Checkbox seçildiğinde tetiklenen fonksiyon
  const handleSelect = (questionId: string, price: number, type: string) => {
    setSelections(prev => {
      if (type === "radio") {
        return { ...prev, [questionId]: [price] };
      } else {
        // Checkbox mantığı: Varsa çıkar, yoksa ekle
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

  // İleride İletişim Formuna (URL Parametresi olarak) taşınacak raporu oluşturur
  const getMailLink = () => {
    const formattedPrice = totalPrice.toLocaleString('tr-TR') + ' ₺';
    const message = `Merhaba, tahmini proje bedelim: ${formattedPrice}. Seçimlerim üzerinden detayları görüşmek istiyorum.`;
    return `/iletisim?not=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden max-w-4xl mx-auto">
      
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stepsData[currentStep].options.map((option, idx) => {
                const qId = stepsData[currentStep].id;
                const isSelected = selections[qId]?.includes(option.price);
                
                return (
                  <label 
                    key={idx} 
                    className={`flex items-center justify-between p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 ${
                      isSelected 
                        ? "border-[#933c81] bg-[#933c81]/5 shadow-md shadow-[#933c81]/10" 
                        : "border-slate-100 bg-white hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Özel Tasarım Input (Radio / Checkbox) */}
                      <div className={`w-6 h-6 flex items-center justify-center shrink-0 ${stepsData[currentStep].type === 'radio' ? 'rounded-full' : 'rounded-md'} border-2 transition-colors ${isSelected ? 'border-[#933c81] bg-[#933c81]' : 'border-slate-300 bg-white'}`}>
                        {isSelected && (
                          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      
                      {/* Görünmez gerçek input (Erişilebilirlik için) */}
                      <input 
                        type={stepsData[currentStep].type}
                        name={qId}
                        checked={isSelected}
                        onChange={() => handleSelect(qId, option.price, stepsData[currentStep].type)}
                        className="hidden"
                      />
                      
                      <span className={`text-[15px] font-semibold ${isSelected ? 'text-slate-900' : 'text-slate-700'}`}>
                        {option.label}
                      </span>
                    </div>
                    
                    <span className={`text-[13px] font-bold px-3 py-1 rounded-lg ${isSelected ? 'bg-white text-[#933c81]' : 'bg-slate-100 text-slate-500'}`}>
                      {option.displayPrice}
                    </span>
                  </label>
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
            
            <div className="text-6xl font-black text-[#933c81] tracking-tight mb-10">
              {totalPrice.toLocaleString('tr-TR')} ₺
            </div>
            
            <Link 
              href={getMailLink()}
              className="inline-flex items-center gap-2 bg-[#933c81] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#7a316a] shadow-xl hover:shadow-2xl hover:shadow-[#933c81]/30 transition-all transform hover:-translate-y-1"
            >
              Teklif Al / İletişime Geç
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        )}
      </div>

      {/* Alt Bar: Fiyat Göstergesi ve İleri/Geri Butonları */}
      <div className="bg-slate-50 px-8 py-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        <div className="flex flex-col">
          <span className="text-[13px] font-semibold text-slate-500 uppercase tracking-wider">Tahmini Toplam</span>
          <span className="text-2xl font-black text-slate-900">
            {totalPrice.toLocaleString('tr-TR')} ₺
          </span>
        </div>

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
              className="flex-1 sm:flex-none px-8 py-3 rounded-xl bg-slate-900 text-white font-semibold shadow-md hover:bg-slate-800 transition-colors"
            >
              {currentStep === stepsData.length - 1 ? "Sonuçları Gör" : "İleri"}
            </button>
          )}
          
          {isFinished && (
            <button 
              onClick={() => setCurrentStep(0)}
              className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-slate-200 text-slate-700 font-semibold hover:bg-slate-300 transition-colors"
            >
              Baştan Başla
            </button>
          )}
        </div>

      </div>

    </div>
  );
}