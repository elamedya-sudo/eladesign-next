import Link from "next/link";

// 1. SAYFAYA ÖZEL METADATA VE CANONICAL (SEO)
export const metadata = {
  title: "2D Animasyon ve Motion Graphics Hizmetleri | Ela Design",
  description: "Tanıtım videoları, hareketli logo animasyonları ve sosyal medya içerikleri için profesyonel 2D animasyon ve motion graphics çözümleri.",
  alternates: {
    canonical: 'https://www.eladesign.org/2d-animasyon',
  }
};

export default function AnimationPage() {
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
        "name": "2D Animasyon ve Motion Graphics",
        "item": "https://www.eladesign.org/2d-animasyon"
      }
    ]
  };

  const animationServices = [
    {
      icon: "🎬",
      title: "Tanıtım ve Açıklayıcı Videolar",
      desc: "Karmaşık bir ürün veya hizmeti, izleyicinin saniyeler içinde anlayıp etkileneceği, akıcı ve profesyonel 2D hareketli grafiklere dönüştürüyoruz."
    },
    {
      icon: "✨",
      title: "Hareketli Logo (Logo Animation)",
      desc: "Statik logonuzu hayata döndürüyor; web sitenizde, sunumlarınızda ve videolarınızın introsunda kullanabileceğiniz premium bir kimlik kazandırıyoruz."
    },
    {
      icon: "📱",
      title: "Sosyal Medya Animasyonları",
      desc: "Instagram Reels veya TikTok gibi platformlarda kullanıcıların kaydırma (scroll) hızını durduracak, yüksek etkileşimli kısa animasyonlar hazırlıyoruz."
    },
    {
      icon: "✍️",
      title: "Senaryo ve Storyboard",
      desc: "İşin mutfağında, markanızın vermek istediği mesaja uygun etkili senaryolar yazıyor ve animasyon öncesi sahne sahne (storyboard) planlamasını yapıyoruz."
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
        <div className="relative isolate bg-slate-50 py-24 sm:py-32 overflow-hidden border-b border-slate-200">
          <div className="absolute inset-0 -z-10">
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#933c81]/5 rounded-full blur-[100px]"></div>
          </div>
          
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center relative z-10">
            <p className="text-[14px] font-semibold uppercase tracking-widest text-[#933c81] mb-4">
              HİZMETLERİMİZ / 2D ANİMASYON
            </p>
            {/* 4. H1 Optimizasyonu Yapıldı */}
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[64px] mb-6 leading-tight">
              Profesyonel 2D Animasyon ve <br className="hidden md:block" />
              <span style={{ color: brandColor }}>Motion Graphics</span>
            </h1>
            <p className="max-w-3xl mx-auto text-[17px] leading-8 text-slate-600 font-light mb-10">
              Günümüz dijital dünyasında kullanıcıların dikkat süresi sadece birkaç saniyedir. Uzun uzun yazılmış metinler yerine, markanızı ve ürünlerinizi eğlenceli, dinamik ve akılda kalıcı 2D animasyon (Motion Graphics) videolarıyla anlatın.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/teklif" className="rounded-full bg-[#933c81] px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-[#7a316a] transition-all transform hover:-translate-y-1">
                Senaryonuzu Konuşalım
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 lg:py-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Neden Video İçerik?</h2>
            <p className="text-slate-600">Araştırmalar, video içeriklerin statik görsellere göre %1200 daha fazla paylaşım aldığını ve satın alma kararını doğrudan etkilediğini gösteriyor.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {animationServices.map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#933c81]/30 transition-all duration-300 group">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform border border-slate-100">
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