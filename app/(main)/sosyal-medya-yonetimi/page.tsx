import Link from "next/link";

// 1. SAYFAYA ÖZEL METADATA VE CANONICAL (SEO)
export const metadata = {
  title: "Profesyonel Sosyal Medya Yönetimi Ajansı",
  description: "Markanızın dijital itibarını inşa eden, organik bağ kuran ve satışları destekleyen stratejik sosyal medya yönetimi ve kreatif içerik üretimi.",
  alternates: {
    canonical: 'https://www.eladesign.org/sosyal-medya-yonetimi',
  }
};

export default function SocialMediaPage() {
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
        "name": "Sosyal Medya Yönetimi",
        "item": "https://www.eladesign.org/sosyal-medya-yonetimi"
      }
    ]
  };

  const smServices = [
    {
      icon: "🎯",
      title: "Strateji ve Planlama",
      desc: "Hedef kitlenizin aktif olduğu saatleri, ilgisini çeken içerik türlerini analiz ediyor ve markanıza özel aylık iletişim takvimleri oluşturuyoruz."
    },
    {
      icon: "🎨",
      title: "Kreatif İçerik Üretimi",
      desc: "Sıradan stok fotoğraflar yerine; markanızın ruhunu yansıtan, dikkat çekici grafik tasarımlar, Reels/TikTok videoları ve yaratıcı metinler (copywriting) hazırlıyoruz."
    },
    {
      icon: "💬",
      title: "Topluluk ve Kriz Yönetimi",
      desc: "Gelen yorumları ve mesajları marka dilinize uygun olarak hızla yanıtlıyor, potansiyel krizleri büyümeden profesyonelce yönetiyoruz."
    },
    {
      icon: "📊",
      title: "Veri ve Performans Analizi",
      desc: "Takipçi sayısından ziyade, etkileşim oranlarına ve dönüşümlere odaklanıyor; her ay sonunda şeffaf ve anlaşılır raporlar sunuyoruz."
    }
  ];

  return (
    <>
      {/* 3. Schema kodunu sayfanın arkasına görünmez şekilde gömüyoruz */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="bg-white min-h-screen">
        <div className="relative isolate bg-slate-900 py-24 sm:py-32 overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 -z-10">
             <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[800px] h-[800px] bg-[#933c81]/20 rounded-full blur-[120px]"></div>
          </div>
          
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center relative z-10">
            <p className="text-[14px] font-semibold uppercase tracking-widest text-[#e890d6] mb-4">
              HİZMETLERİMİZ / SOSYAL MEDYA YÖNETİMİ
            </p>
            {/* 4. H1 Optimizasyonu Yapıldı */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[64px] mb-6 leading-tight">
              Profesyonel Sosyal Medya Yönetimiyle <br className="hidden md:block" />
              Takipçilerinizi <span style={{ color: "#e890d6" }}>Müşteriye Dönüştürün</span>
            </h1>
            <p className="max-w-3xl mx-auto text-[17px] leading-8 text-slate-300 font-light mb-10">
              Sosyal medya yönetimi, haftada üç gün rastgele fotoğraf paylaşmak değildir. Markanızın dijital itibarını inşa eden, doğru kitleyle organik bir bağ kurmanızı sağlayan ve nihayetinde satışlarınızı destekleyen stratejik bir iletişim sürecidir.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/teklif" className="rounded-full bg-[#933c81] px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-[#7a316a] transition-all transform hover:-translate-y-1">
                Markanızı İnceleyelim
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 lg:py-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Sosyal Medyada Nasıl Fark Yaratıyoruz?</h2>
            <p className="text-slate-600">Sadece "görünür" olmak yetmez, "hatırlanır" ve "tercih edilir" olmalısınız.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {smServices.map((item, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:shadow-xl hover:bg-white hover:border-[#933c81]/20 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform border border-slate-100">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#933c81] transition-colors">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}