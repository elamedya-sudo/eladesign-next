import Link from "next/link";

// 1. SAYFAYA ÖZEL METADATA VE CANONICAL (SEO)
export const metadata = {
  title: "Özel Web Yazılım Ajansı ve Çözümleri",
  description: "İşletmenizin ihtiyaçlarına özel, yüksek performanslı ve güvenli web yazılım, API entegrasyonu ve B2B/B2C portal çözümleri üretiyoruz.",
  alternates: {
    canonical: 'https://www.eladesign.org/web-yazilim',
  }
};

export default function WebSoftwarePage() {
  const brandColor = "#933c81";

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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Özel Web Yazılım",
        "item": "https://www.eladesign.org/web-yazilim"
      }
    ]
  };

  // Sunduğumuz Yazılım Çözümleri
  const solutions = [
    {
      icon: "⚙️",
      title: "Özel SaaS & CRM Sistemleri",
      desc: "Müşteri ilişkilerinizi, teklif süreçlerinizi ve saha operasyonlarınızı tek bir merkezden yöneteceğiniz, tamamen şirketinize özel kodlanmış bulut tabanlı yazılımlar."
    },
    {
      icon: "🔗",
      title: "B2B & B2C Bayi Portalları",
      desc: "Tedarikçileriniz veya bayileriniz için özel fiyatlandırma, stok takibi ve sipariş yönetimi sunan kapalı devre, yüksek güvenlikli web portalları."
    },
    {
      icon: "🔌",
      title: "API ve Entegrasyon Çözümleri",
      desc: "Mevcut muhasebe programlarınızla (Logo, Mikro, Netesis vb.), kargo firmalarıyla veya pazaryerleriyle web sitenizi tam senkronize çalıştıran ara yazılımlar."
    },
    {
      icon: "🚀",
      title: "Headless (Next.js) Web Uygulamaları",
      desc: "Geleneksel monolitik sistemler yerine, ön yüzü ve arka yüzü birbirinden bağımsız, saliseler içinde açılan yeni nesil yüksek performanslı web uygulamaları."
    }
  ];

  // Kullanılan Teknolojiler
  const technologies = ["Next.js", "React", "Node.js", "TypeScript", "Supabase", "Tailwind CSS", "PHP", "REST/GraphQL API"];

  return (
    <>
      {/* 3. Schema kodunu sayfanın arkasına görünmez şekilde gömüyoruz */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="bg-white min-h-screen">
        
        {/* 1. HERO (Hizmet Başlığı) */}
        <div className="relative isolate bg-slate-950 py-24 sm:py-32 overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 -z-10">
             {/* Matrix / Kod hissiyatı veren grid arka plan */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
             <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-[#933c81]/20 rounded-full blur-[120px]"></div>
          </div>
          
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center relative z-10">
            <p className="text-[14px] font-semibold uppercase tracking-widest text-[#e890d6] mb-4">
              HİZMETLERİMİZ / WEB YAZILIM
            </p>
            {/* 4. H1 Optimizasyonu (Özel Web Yazılım anahtar kelimesi eklendi) */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[64px] mb-6 leading-tight">
              Hazır Şablonlara Sığamayanlara Özel <br className="hidden md:block" />
              <span style={{ color: "#e890d6" }}>Web Yazılım Çözümleri</span>
            </h1>
            <p className="max-w-3xl mx-auto text-[17px] leading-8 text-slate-300 font-light mb-10">
              İşletmenizin kendine has kuralları ve süreçleri varsa, paket programlar sizi yavaşlatır. İhtiyaçlarınızı dinliyor, mühendislik vizyonumuzla modern, güvenli ve ölçeklenebilir özel web yazılımları geliştiriyoruz.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/teklif" className="rounded-full bg-[#933c81] px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-[#7a316a] transition-all transform hover:-translate-y-1">
                Projenizi Birlikte Planlayalım
              </Link>
            </div>
          </div>
        </div>

        {/* 2. ÇÖZÜMLERİMİZ (Kartlar) */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 lg:py-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Karmaşık Süreçleri Basitleştiriyoruz</h2>
            <p className="text-slate-600">Sadece kod yazmıyor, işinizi büyütmenizi sağlayacak dijital araçlar ve otomasyonlar inşa ediyoruz.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((item, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:shadow-xl hover:bg-white hover:border-[#933c81]/20 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#933c81] transition-colors">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. TEKNOLOJİ YIĞINIMIZ (Tech Stack) */}
        <div className="bg-slate-900 py-24 text-center border-y border-slate-800">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl font-bold text-white mb-10">Modern Teknoloji Altyapımız</h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <span key={index} className="px-6 py-3 bg-slate-800/50 text-slate-300 rounded-full border border-slate-700/50 text-[15px] font-medium hover:text-white hover:border-[#933c81] hover:bg-[#933c81]/10 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 4. NEDEN ÖZEL YAZILIM? (Metin ve Karşılaştırma) */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Neden Özel Yazılım Geliştiriyoruz?</h2>
              <div className="space-y-6 text-[16px] text-slate-600 leading-relaxed font-light">
                <p>
                  Açık kaynaklı sistemler (WordPress, Joomla vb.) bloglar veya standart tanıtım siteleri için harikadır. Ancak işin içine <strong>özel veri işleme, çoklu kullanıcı rolleri, muhasebe entegrasyonları veya yüksek güvenlik gerektiren ödeme sistemleri</strong> girdiğinde bu hazır yapılar çökmeye veya yavaşlamaya mahkumdur.
                </p>
                <p>
                  Ela Design olarak; veritabanı mimarisinden sunucu güvenliğine kadar her satırını sizin ihtiyaçlarınıza göre yazdığımız projeler üretiyoruz. Lisans maliyeti ödemeden, kendi kurallarınızı koyduğunuz ve 7/24 teknik desteğini bizden aldığınız bir dijital mülk inşa ediyoruz.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border-2 border-[#933c81]/10 shadow-2xl shadow-[#933c81]/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#933c81]/5 rounded-bl-full"></div>
               <h3 className="text-xl font-bold text-slate-900 mb-6 relative z-10">Özel Yazılımın Avantajları</h3>
               <ul className="space-y-4 relative z-10">
                 {[
                   "Kullanamayacağınız gereksiz kodlardan arındırılmış yüksek hız.",
                   "Kurumunuzun iş akışına %100 uyumlu kontrol panelleri.",
                   "Saldırılara açık hazır eklentiler yerine, üst düzey mimari güvenlik.",
                   "İlerleyen yıllarda yeni modüllerin kolayca eklenebilmesi (Ölçeklenebilirlik).",
                   "Diğer yazılımlarla (CRM, ERP, Mobil Uygulama) kusursuz haberleşme."
                 ].map((item, idx) => (
                   <li key={idx} className="flex items-start">
                     <svg className="w-5 h-5 text-[#933c81] mr-3 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                     <span className="text-slate-700 text-[15px]">{item}</span>
                   </li>
                 ))}
               </ul>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}