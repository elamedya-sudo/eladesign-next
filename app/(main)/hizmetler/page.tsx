import Link from "next/link";

// 1. SAYFAYA ÖZEL METADATA VE CANONICAL (SEO)
export const metadata = {
  title: "Tüm Dijital Ajans Hizmetlerimiz | Web Tasarım, Yazılım ve SEO",
  description: "Web tasarım, özel yazılım, E-Ticaret, SEO, Google Ads, kurumsal kimlik ve sosyal medya yönetimi gibi 360 derece dijital ajans hizmetlerimiz.",
  alternates: {
    canonical: 'https://www.eladesign.org/hizmetler',
  }
};

export default function ServicesPage() {
  // 2. BREADCRUMB (SAYFA YOLU) SCHEMA
  const breadcrumbSchema = {
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
        "name": "Hizmetlerimiz",
        "item": "https://www.eladesign.org/hizmetler"
      }
    ]
  };

  // Tüm Hizmetlerimizin Listesi ve Linkleri (Toplam 9 Adet)
  const allServices = [
    {
      id: "web-tasarim",
      icon: "💻",
      title: "Kurumsal Web Tasarım",
      desc: "Şirketinizin dijital dünyadaki vizyonunu yansıtan, mobil uyumlu ve modern arayüzlere sahip prestijli web siteleri tasarlıyoruz.",
      href: "/web-tasarim"
    },
    {
      id: "web-yazilim",
      icon: "⚙️",
      title: "Özel Web Yazılım",
      desc: "Hazır şablonlara sığmayan işletmeler için; CRM, B2B portalları ve tamamen size özel kodlanmış bulut tabanlı sistemler üretiyoruz.",
      href: "/web-yazilim"
    },
    {
      id: "eticaret",
      icon: "🛒",
      title: "E-Ticaret Sistemleri",
      desc: "Satışlarınızı katlayacak, sanal POS ve kargo entegrasyonlarına sahip, ultra hızlı ve güvenli online mağazalar kuruyoruz.",
      href: "/eticaret-sitesi"
    },
    {
      id: "geo-aio",
      icon: "🧠",
      title: "GEO & AIO Optimizasyonu",
      desc: "Yapay zeka arama motorlarının (Generative Engine) markanızı öğrenmesi için modern optimizasyon uyguluyoruz.",
      href: "/geo-ve-aio-optimizasyonu"
    },
    {
      id: "seo",
      icon: "🚀",
      title: "SEO Optimizasyonu",
      desc: "Geleneksel SEO ezberlerini bozuyor, yeni nesil yapay zeka (GEO) ve teknik optimizasyonlarla markanızı Google'da zirveye taşıyoruz.",
      href: "/arama-motoru-optimizasyonu"
    },
    {
      id: "ads",
      icon: "🎯",
      title: "Google Ads (AdWords)",
      desc: "Reklam bütçenizi çöpe atmadan, maksimum ROAS (Yatırım Getirisi) hedefiyle nokta atışı performans pazarlaması yapıyoruz.",
      href: "/google-adwords"
    },
    {
      id: "kurumsal-kimlik",
      icon: "✒️",
      title: "Kurumsal Kimlik Tasarımı",
      desc: "Logodan kartvizite kadar, markanızın dijital ve fiziksel imzasını hiçbir hazır şablon kullanmadan sıfırdan yaratıyoruz.",
      href: "/kurumsal-kimlik-tasarimi"
    },
    {
      id: "sosyal-medya",
      icon: "📱",
      title: "Sosyal Medya Yönetimi",
      desc: "Takipçilerinizi müşteriye dönüştürecek stratejilerle, markanızın dijital itibarını profesyonel içeriklerle yönetiyoruz.",
      href: "/sosyal-medya-yonetimi"
    },
    {
      id: "animasyon",
      icon: "🎬",
      title: "2D Animasyon & Motion",
      desc: "Karmaşık fikirlerinizi veya ürünlerinizi, izleyicinin dikkatini saniyeler içinde çekecek hareketli grafiklerle (Motion Graphics) anlatıyoruz.",
      href: "/2d-animasyon"
    }
  ];

  return (
    <>
      {/* 3. Schema kodunu sayfanın arkasına görünmez şekilde gömüyoruz */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="bg-slate-50 min-h-screen pb-24">
        
        {/* 1. HERO (Sayfa Başlığı) */}
        <div className="relative isolate bg-slate-900 py-24 sm:py-32 overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 -z-10">
            {/* Geometrik arka plan efekti */}
            <div className="absolute top-0 right-1/4 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-[#933c81]/20 rounded-full blur-[120px]"></div>
          </div>
          
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center relative z-10">
            <p className="text-[14px] font-semibold uppercase tracking-widest text-[#e890d6] mb-4">
              360° DİJİTAL AJANS
            </p>
            {/* 4. H1 Optimizasyonu Yapıldı */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[64px] mb-6 leading-tight">
              Profesyonel Dijital Ajans Hizmetleri <br className="hidden md:block" />
              <span style={{ color: "#e890d6" }}>Tek Çatı Altında</span>
            </h1>
            <p className="max-w-3xl mx-auto text-[17px] leading-8 text-slate-300 font-light mb-10">
              Farklı hizmetler için farklı ajanslarla uğraşarak zaman ve bütçe kaybetmeyin. Kodlamadan tasarıma, SEO'dan reklama kadar projenizin tüm dijital süreçlerini tek bir merkezden, mühendislik vizyonuyla yönetiyoruz.
            </p>
          </div>
        </div>

        {/* 2. HİZMETLER GRİD ALANI - Yan yana 3'lü grid yapıldı */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 mt-16 lg:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service) => (
              <Link 
                key={service.id} 
                href={service.href}
                className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#933c81]/30 transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-[#933c81]/5 transition-all duration-300">
                  {service.icon}
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#933c81] transition-colors">
                  {service.title}
                </h2>
                <p className="text-slate-600 text-[15px] leading-relaxed font-light mb-8 flex-grow">
                  {service.desc}
                </p>
                
                <div className="mt-auto flex items-center text-[14px] font-semibold text-slate-400 group-hover:text-[#933c81] transition-colors">
                  Detayları İncele
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 3. CALL TO ACTION (Aksiyon Çağrısı) */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 mt-24 lg:mt-32">
          <div className="bg-[#933c81] rounded-[40px] p-10 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-[#933c81]/20">
             {/* Dekoratif Çemberler */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
             
             <div className="relative z-10">
               <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Projeniz İçin Hangi Hizmetlere İhtiyacınız Var?</h2>
               <p className="text-white/80 text-[17px] max-w-2xl mx-auto mb-10 font-light">
                 Kararsız mısınız? Uzman ekibimizle iletişime geçin, markanızın hedeflerini dinleyelim ve size en uygun dijital yol haritasını ücretsiz olarak çıkaralım.
               </p>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <Link href="/teklif" className="bg-white text-[#933c81] px-8 py-4 rounded-full font-bold text-[15px] hover:bg-slate-100 transition-colors shadow-lg transform hover:-translate-y-1">
                   Projemi Başlat
                 </Link>
                 <Link href="/iletisim" className="bg-transparent text-white border border-white/30 px-8 py-4 rounded-full font-bold text-[15px] hover:bg-white/10 transition-colors">
                   Bizi Arayın
                 </Link>
               </div>
             </div>
          </div>
        </div>

      </div>
    </>
  );
}