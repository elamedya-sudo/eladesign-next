"use client";

import { useState } from "react";
import Link from "next/link";

export default function AppointmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form gönderim simülasyonu
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 2 saniye sonra başarılı mesajı göster
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      
      {/* ÜST BÖLÜM (HERO) - H1 Optimizasyonu Yapıldı */}
      <div className="bg-slate-900 pt-32 pb-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-[#933c81]/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Web Tasarım ve Yazılım Projenizi <br className="hidden md:block" />
            <span style={{ color: "#e890d6" }}>Birlikte Büyütelim</span>
          </h1>
          <p className="text-slate-300 text-[17px] font-light max-w-2xl mx-auto">
            Dijital dönüşümünüz için ilk adımı atın. İhtiyaçlarınızı dinlemek ve size en uygun stratejiyi belirlemek için hemen ücretsiz bir ön görüşme planlayalım.
          </p>
        </div>
      </div>

      {/* İÇERİK VE FORM ALANI */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row border border-slate-100">
          
          {/* SOL TARAF: İLETİŞİM BİLGİLERİ */}
          <div className="lg:w-2/5 bg-[#933c81] p-10 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Neden Ela Design?</h3>
              <p className="text-white/80 font-light mb-12 leading-relaxed text-[15px]">
                Hazır şablonlara sıkışmış çözümler değil, markanızın dinamiklerine uygun; modern web mimarileri, veri odaklı reklam kampanyaları ve özel yazılım çözümleri üretiyoruz.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-[13px] font-semibold uppercase tracking-wider mb-1">Hemen Arayın</p>
                    <p className="font-medium text-lg">0216 576 58 26</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-[13px] font-semibold uppercase tracking-wider mb-1">E-Posta</p>
                    <p className="font-medium text-lg">info@eladesign.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-[13px] font-semibold uppercase tracking-wider mb-1">Ofisimiz</p>
                    <p className="font-medium text-[15px] leading-relaxed">Küçükbakkalköy Mah.<br/>Ataşehir / İstanbul</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SAĞ TARAF: RANDEVU FORMU */}
          <div className="lg:w-3/5 p-10 lg:p-16">
            
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Talebiniz Alındı!</h3>
                <p className="text-slate-600 font-light mb-8 max-w-sm mx-auto">
                  Proje detaylarınız ekibimize ulaştı. En kısa sürede sizinle iletişime geçeceğiz.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="px-8 py-3 bg-slate-100 text-slate-700 font-semibold rounded-full hover:bg-slate-200 transition-colors"
                >
                  Yeni Bir Talep Gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col h-full justify-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Randevu / Teklif Formu</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Ad Soyad */}
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-500 uppercase tracking-wider mb-2">Adınız Soyadınız *</label>
                    <input type="text" required className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-[15px] rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#933c81]/30 focus:border-[#933c81] transition-all" placeholder="Örn: Ahmet Yılmaz" />
                  </div>
                  
                  {/* Şirket Adı */}
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-500 uppercase tracking-wider mb-2">Firma Adı</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-[15px] rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#933c81]/30 focus:border-[#933c81] transition-all" placeholder="Örn: Ela Design" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* E-Posta */}
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-500 uppercase tracking-wider mb-2">E-Posta Adresiniz *</label>
                    <input type="email" required className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-[15px] rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#933c81]/30 focus:border-[#933c81] transition-all" placeholder="ornek@firma.com" />
                  </div>
                  
                  {/* Telefon */}
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-500 uppercase tracking-wider mb-2">Telefon Numaranız *</label>
                    <input type="tel" required className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-[15px] rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#933c81]/30 focus:border-[#933c81] transition-all" placeholder="0 (5XX) XXX XX XX" />
                  </div>
                </div>

                {/* Hizmet Seçimi */}
                <div className="mb-6">
                  <label className="block text-[13px] font-semibold text-slate-500 uppercase tracking-wider mb-2">İlgilendiğiniz Hizmet *</label>
                  <select required className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-[15px] rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#933c81]/30 focus:border-[#933c81] transition-all appearance-none cursor-pointer">
                    <option value="">Lütfen Bir Hizmet Seçin</option>
                    <option value="web">Kurumsal Web Tasarım & Next.js Dönüşümü</option>
                    <option value="saas">Özel Yazılım & SaaS / CRM Geliştirme</option>
                    <option value="ads">Google Ads & Reklam Yönetimi</option>
                    <option value="seo">SEO & Arama Motoru Optimizasyonu</option>
                    <option value="eticaret">E-Ticaret Sistemleri</option>
                    <option value="diger">Diğer / Kararsızım</option>
                  </select>
                </div>

                {/* Mesaj */}
                <div className="mb-8">
                  <label className="block text-[13px] font-semibold text-slate-500 uppercase tracking-wider mb-2">Proje Detayları</label>
                  <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-[15px] rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#933c81]/30 focus:border-[#933c81] transition-all resize-none" placeholder="Projenizden veya hedeflerinizden kısaca bahsedin..."></textarea>
                </div>

                {/* Gönder Butonu */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold text-white text-[16px] transition-all flex items-center justify-center gap-2 ${
                    isSubmitting ? "bg-slate-400 cursor-not-allowed" : "bg-[#933c81] hover:bg-[#7a316b] hover:shadow-lg hover:-translate-y-0.5"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      Randevu Talebi Gönder
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </>
                  )}
                </button>
                <p className="text-center text-slate-400 text-[12px] mt-4">
                  Göndererek <Link href="/yasal" className="underline hover:text-slate-600">Gizlilik Politikamızı</Link> kabul etmiş olursunuz.
                </p>

              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}