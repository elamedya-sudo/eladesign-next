import Link from "next/link";

// 1. SAYFAYA ÖZEL METADATA VE CANONICAL (SEO)
export const metadata = {
  title: "Profesyonel E-Ticaret Sitesi Kurulumu ve Web Tasarım",
  description: "Satışlarınızı katlayacak, sanal POS ve kargo entegrasyonlarına sahip, ultra hızlı ve güvenli e-ticaret siteleri kuruyoruz.",
  alternates: {
    canonical: 'https://www.eladesign.org/eticaret-sitesi',
  }
};

export default function EcommercePage() {
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
        "name": "E-Ticaret Sistemleri",
        "item": "https://www.eladesign.org/eticaret-sitesi"
      }
    ]
  };

  // E-Ticaret Özellikleri
  const features = [
    {
      icon: "💳",
      title: "Sanal POS ve Ödeme Altyapısı",
      desc: "İyzico, PayTR, Param veya bankaların kendi sanal POS sistemlerini sitenize güvenli (SSL) bir şekilde entegre ediyor, taksitli satış imkanı sunuyoruz."
    },
    {
      icon: "📦",
      title: "Kargo ve Sipariş Otomasyonu",
      desc: "Yurtiçi, Aras, MNG veya diğer kargo firmalarının API'leri ile siparişlerinizi otomatik barkodlayıp, müşteriye anlık kargo takip imkanı sağlıyoruz."
    },
    {
      icon: "📱",
      title: "Mobile-First UX Tasarım",
      desc: "Günümüzde e-ticaret trafiğinin %80'i mobilden gelir. Parmak dostu, kolay filtreleme ve hızlı ödeme adımlarına sahip mobil arayüzler tasarlıyoruz."
    },
    {
      icon: "⚡",
      title: "Ultra Hızlı Altyapı",
      desc: "Geç açılan her saniye, ciro kaybı demektir. Modern web mimarileri kullanarak rakiplerinizden çok daha hızlı yüklenen mağazalar inşa ediyoruz."
    },
    {
      icon: "🔄",
      title: "Muhasebe & ERP Entegrasyonu",
      desc: "Logo, Mikro, Paraşüt gibi ön muhasebe ve ERP sistemlerinizle sitenizi çift yönlü konuşturarak stok ve fiyat güncellemelerini otomatikleştiriyoruz."
    },
    {
      icon: "📈",
      title: "Pazaryeri Senkronizasyonu",
      desc: "Trendyol, Hepsiburada, Amazon gibi platformlardaki ürünlerinizi ve siparişlerinizi tek bir panelden yönetebilmeniz için entegrasyonlar kuruyoruz."
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
        
        {/* 1. HERO (Hizmet Başlığı) */}
        <div className="relative isolate bg-slate-50 py-24 sm:py-32 overflow-hidden border-b border-slate-200">
          {/* Arka plan dekorasyonu */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#933c81]/5 rounded-full blur-[120px]"></div>
          </div>
          
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center relative z-10">
            <p className="text-[14px] font-semibold uppercase tracking-widest text-[#933c81] mb-4">
              HİZMETLERİMİZ / E-TİCARET
            </p>
            {/* 4. H1 Optimizasyonu Yapıldı */}
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[64px] mb-6 leading-tight">
              Profesyonel E-Ticaret Sitesi Kurulumu ile <br className="hidden md:block" />
              <span style={{ color: brandColor }}>Satışlarınızı Katlayın</span>
            </h1>
            <p className="max-w-3xl mx-auto text-[17px] leading-8 text-slate-600 font-light mb-10">
              E-ticaret sadece ürün yüklemekten ibaret değildir. Ziyaretçiyi müşteriye dönüştüren güven verici bir tasarım, kusursuz çalışan ödeme adımları ve saniyeler içinde açılan bir performans gerektirir. Sizi dijital rekabette öne çıkaracak o mağazayı birlikte kuralım.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/teklif" className="rounded-full bg-[#933c81] px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-[#7a316a] transition-all transform hover:-translate-y-1">
                E-Ticaret Projenizi Başlatın
              </Link>
              <Link href="/web-sitesi-fiyatlari" className="rounded-full bg-white border border-slate-200 px-8 py-4 text-sm font-semibold text-slate-700 hover:border-[#933c81] hover:text-[#933c81] transition-all">
                Fiyatları İnceleyin
              </Link>
            </div>
          </div>
        </div>

        {/* 2. ANA ÖZELLİKLER (GRID) */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 lg:py-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Bir E-Ticaret Sitesinde Olması Gereken Her Şey</h2>
            <p className="text-slate-600">Başarılı bir online mağazanın arkasındaki güçlü teknik altyapı ve özellikler.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#933c81] transition-colors">{item.title}</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. DÖNÜŞÜM ODAKLI YAKLAŞIM (Metin + İllüstrasyon) */}
        <div className="bg-slate-900 py-20 lg:py-32 overflow-hidden border-y border-slate-800">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <div className="order-2 lg:order-1 relative">
                <div className="aspect-[4/3] rounded-3xl bg-slate-800 border border-slate-700 flex items-center justify-center relative overflow-hidden shadow-2xl">
                   {/* Decorative background elements */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-[#933c81]/20 to-transparent"></div>
                   <div className="relative z-10 text-center">
                     <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl mb-4 text-4xl">
                       🛒
                     </div>
                     <p className="text-2xl font-bold text-white mb-2">%85</p>
                     <p className="text-sm text-slate-300 uppercase tracking-widest">Sepette Kalma<br/>Oranını Düşürür</p>
                   </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                  Ziyaretçiyi Yormayan, <br />
                  <span style={{ color: "#e890d6" }}>Satışa Götüren Tasarımlar</span>
                </h2>
                <div className="space-y-6 text-[16px] text-slate-300 leading-relaxed font-light">
                  <p>
                    E-ticaret sitelerindeki en büyük sorun, karmaşık ödeme adımları ve yavaş yüklenen sayfalar yüzünden müşterinin ürünü sepette bırakıp çıkmasıdır. 
                  </p>
                  <p>
                    Biz, kullanıcı deneyimini (UX) en üst düzeyde tutarak; müşterinin ürünü bulmasını, incelemesini ve sadece birkaç tıklamayla güvenle satın almasını sağlayan "pürüzsüz" bir akış tasarlıyoruz. Sepet hatırlatma sistemleri ve akıllı çapraz satış (cross-sell) kurgularıyla cironuzu artırmayı hedefliyoruz.
                  </p>
                  <p className="font-medium text-white border-l-4 border-[#e890d6] pl-6 py-2 bg-white/5 rounded-r-lg">
                    Sadece siteyi kurup bırakmıyoruz; sitenizin Google Merchant Center (Alışveriş) entegrasyonlarını ve temel SEO ayarlarını yaparak sizi doğrudan satışa hazırlıyoruz.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  );
}