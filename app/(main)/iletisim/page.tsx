import Link from "next/link";

// 1. SAYFAYA ÖZEL METADATA VE CANONICAL (SEO)
export const metadata = {
  title: "İletişim ve Adres Bilgileri",
  description: "Web tasarım, yazılım ve dijital pazarlama projeleriniz için bizimle iletişime geçin. Ataşehir merkez ofisimizden tüm dünyaya dijital çözümler üretiyoruz.",
  alternates: {
    canonical: 'https://www.eladesign.org/iletisim',
  }
};

export default function ContactPage() {
  const brandColor = "#933c81";

  // 2. İKİLİ SCHEMA (BREADCRUMB + LOCAL BUSINESS) YAPILANDIRMASI
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Anasayfa",
          "item": "https://www.eladesign.org/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "İletişim",
          "item": "https://www.eladesign.org/iletisim"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Ela Teknoloji ve Tasarım",
      "image": "https://www.eladesign.org/logo/logo.webp",
      "email": "info@eladesign.org",
      "telephone": "+902165765826",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Küçükbakkalköy Mh. Kayışdağı Cd. Ali Ay Sk. No: 3/1 Orkide Apt.",
        "addressLocality": "Ataşehir",
        "addressRegion": "İstanbul",
        "addressCountry": "TR"
      },
      "url": "https://www.eladesign.org/iletisim"
    }
  ];

  return (
    <>
      {/* Schema kodumuzu görünmez bir şekilde sayfanın arkasına gömüyoruz */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="bg-white">
        {/* Üst Banner Kısmı */}
        <div className="relative isolate bg-slate-900 py-24 sm:py-32">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#933c81] to-[#e890d6] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
          </div>
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center">
            <p className="text-[14px] font-semibold uppercase tracking-widest text-[#e890d6] mb-4">
              BİZE ULAŞIN
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Yeni Projenizi Birlikte <br className="hidden md:block" />
              <span style={{ color: "#e890d6" }}>Şekillendirelim</span>
            </h1>
          </div>
        </div>

        {/* İletişim İçeriği */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 lg:py-24 -mt-16 lg:-mt-20 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Sol Taraf - İletişim Bilgileri (Adres Güncellendi) */}
              <div className="bg-slate-50 p-10 lg:p-16 border-r border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">İletişim Bilgileri</h3>
                
                <div className="space-y-10">
                  <div className="flex gap-x-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-200">
                      <svg className="w-6 h-6 text-[#933c81]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[15px] font-semibold text-slate-900 mb-2">Merkez Ofis</h4>
                      <p className="text-[15px] leading-relaxed text-slate-600">
                        Küçükbakkalköy Mh. Kayışdağı Cd.<br />
                        Ali Ay Sk. No: 3/1 Orkide Apt.<br />
                        Ataşehir / İSTANBUL
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-x-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-200">
                      <svg className="w-6 h-6 text-[#933c81]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[15px] font-semibold text-slate-900 mb-2">Telefon</h4>
                      <a href="tel:+902165765826" className="text-[15px] text-slate-600 hover:text-[#933c81] transition-colors">
                        +90 (216) 576 58 26
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-x-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-200">
                      <svg className="w-6 h-6 text-[#933c81]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[15px] font-semibold text-slate-900 mb-2">E-Posta</h4>
                      <a href="mailto:info@eladesign.org" className="text-[15px] text-slate-600 hover:text-[#933c81] transition-colors">
                        info@eladesign.org
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sağ Taraf - İletişim Formu */}
              <div className="p-10 lg:p-16">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Mesaj Gönderin</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="first-name" className="block text-[14px] font-medium text-slate-700 mb-2">Adınız</label>
                      <input type="text" id="first-name" className="block w-full rounded-xl border-0 py-3.5 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[#933c81] sm:text-sm sm:leading-6 transition-all" placeholder="Ahmet" />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-[14px] font-medium text-slate-700 mb-2">Soyadınız</label>
                      <input type="text" id="last-name" className="block w-full rounded-xl border-0 py-3.5 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[#933c81] sm:text-sm sm:leading-6 transition-all" placeholder="Yılmaz" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[14px] font-medium text-slate-700 mb-2">E-Posta Adresiniz</label>
                    <input type="email" id="email" className="block w-full rounded-xl border-0 py-3.5 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[#933c81] sm:text-sm sm:leading-6 transition-all" placeholder="ornek@sirket.com" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[14px] font-medium text-slate-700 mb-2">Mesajınız</label>
                    <textarea id="message" rows={4} className="block w-full rounded-xl border-0 py-3.5 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[#933c81] sm:text-sm sm:leading-6 transition-all resize-none" placeholder="Projenizden veya ihtiyacınızdan bahsedin..."></textarea>
                  </div>

                  <button type="submit" className="w-full rounded-xl bg-[#933c81] px-8 py-4 text-[15px] font-semibold text-white shadow-md hover:bg-[#7a316a] hover:shadow-lg transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#933c81]">
                    Mesajı Gönder
                  </button>
                </form>
              </div>
              
            </div>
          </div>

          {/* Dinamik Google Harita Alanı */}
          <div className="w-full h-[450px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 relative group">
            {/* Yüklenirken Gösterilecek Hafif Blur veya Arkaplan (Opsiyonel) */}
            <div className="absolute inset-0 bg-slate-100 flex items-center justify-center -z-10">
              <span className="text-slate-400 font-medium animate-pulse">Harita Yükleniyor...</span>
            </div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.392686121404!2d29.105437!3d40.9795153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac615d833cd91%3A0x9ef17c4aa440b60!2sEla%20Teknoloji!5e0!3m2!1str!2str!4v1716912345678!5m2!1str!2str" 
              className="absolute top-0 left-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </>
  );
}