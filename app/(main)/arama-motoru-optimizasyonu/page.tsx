import Link from "next/link";

// 1. SAYFAYA ÖZEL METADATA VE CANONICAL (SEO)
export const metadata = {
  title: "Profesyonel SEO ve Arama Motoru Optimizasyonu Ajansı",
  description: "Web sitenizi geleneksel SEO ve yeni nesil GEO (Yapay Zeka) optimizasyonlarıyla üst sıralara taşıyın. Organik trafik ve kalıcı büyüme için teknik altyapı hizmeti.",
  alternates: {
    canonical: 'https://www.eladesign.org/arama-motoru-optimizasyonu', // Sayfanın tam URL'sini buraya girebilirsin
  }
};

export default function SeoPage() {
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
        "name": "SEO ve Arama Motoru Optimizasyonu",
        "item": "https://www.eladesign.org/arama-motoru-optimizasyonu"
      }
    ]
  };

  // SEO ve GEO Hizmet Kapsamı
  const seoFeatures = [
    {
      icon: "⚡",
      title: "Teknik SEO & Next.js Gücü",
      desc: "Sitenizin kaynak kodunu, Google botlarının en sevdiği Headless (Next.js) standartlarında kurguluyoruz. Saliseler içinde açılan, Core Web Vitals testlerinden tam puan alan kusursuz bir teknik temel atıyoruz."
    },
    {
      icon: "🤖",
      title: "GEO (Yapay Zeka) Optimizasyonu",
      desc: "Kullanıcıların artık ChatGPT, Gemini ve Google AI Overviews üzerinden arama yaptığı yeni nesil web dünyasında, markanızı yapay zeka dil modellerinin anlayacağı yapısal verilerle (Schema) besliyoruz."
    },
    {
      icon: "🎯",
      title: "Lokal SEO ve Harita Kayıtları",
      desc: "Sadece globale değil, bulunduğunuz bölgedeki müşterilere de ulaşmanız için Google Benim İşletmem ve Yandex Haritalar optimizasyonlarınızı eksiksiz tamamlıyoruz."
    },
    {
      icon: "✍️",
      title: "İçerik ve Kelime Stratejisi",
      desc: "Sektörünüzdeki rekabeti analiz ediyor, hedef kitlenizin arama niyetine (Search Intent) uygun, yüksek dönüşüm getirecek anahtar kelimeler ve blog (Akademi) stratejileri üretiyoruz."
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
        <div className="relative isolate bg-slate-900 py-24 sm:py-32 overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 -z-10">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#933c81]/20 via-slate-900 to-slate-900"></div>
          </div>
          
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center relative z-10">
            <p className="text-[14px] font-semibold uppercase tracking-widest text-[#e890d6] mb-4">
              HİZMETLERİMİZ / SEO & GEO
            </p>
            {/* 4. H1 Optimizasyonu Yapıldı */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[64px] mb-6 leading-tight">
              Profesyonel SEO ve <br className="hidden md:block" />
              <span style={{ color: "#e890d6" }}>Arama Motoru Optimizasyonu</span>
            </h1>
            <p className="max-w-3xl mx-auto text-[17px] leading-8 text-slate-300 font-light mb-10">
              Dünyanın en güzel web sitesine sahip olabilirsiniz; ancak arama motorlarında bulunamıyorsanız dijital bir hayaletsiniz demektir. Görünmez bir web sitesi hiç kimseye satış yapamaz. Geleneksel SEO ezberlerini bozuyor, yeni nesil yapay zeka aramalarına (GEO) uyumlu stratejilerle markanızı üst sıralara taşıyoruz.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/teklif" className="rounded-full bg-[#933c81] px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-[#7a316a] transition-all transform hover:-translate-y-1">
                SEO Analizi İsteyin
              </Link>
            </div>
          </div>
        </div>

        {/* 2. ANA ÖZELLİKLER (GRID) */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 lg:py-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Arama Motorlarına Fısıldayan Algoritmalar</h2>
            <p className="text-slate-600">Sadece anahtar kelime doldurmakla yetinmiyor, sitenizin teknik DNA'sını baştan yazıyoruz.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seoFeatures.map((item, i) => (
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

        {/* 3. FARKIMIZ (Mühendislik Vurgusu) */}
        <div className="bg-slate-50 py-20 lg:py-32 overflow-hidden border-y border-slate-200">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <div className="order-2 lg:order-1 relative">
                 <div className="aspect-square md:aspect-[4/3] rounded-3xl bg-white border border-slate-200 shadow-xl p-8 flex flex-col justify-center relative overflow-hidden">
                   
                   {/* Trafik Grafiği İllüstrasyonu */}
                   <div className="absolute top-0 right-0 p-6 opacity-10 text-[#933c81]">
                     <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
                   </div>

                   <div className="relative z-10 space-y-6">
                      <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <p className="text-slate-500 line-through">Standart Eklenti (Plugin) Kurulumu</p>
                      </div>
                      <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <p className="text-slate-500 line-through">Spam Backlink Paketleri</p>
                      </div>
                      <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <p className="text-slate-900 font-bold">Mühendislik Seviyesinde Hız Optimizasyonu</p>
                      </div>
                      <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <p className="text-slate-900 font-bold">Semantik Yapı (Schema.org) Entegrasyonu</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <p className="text-slate-900 font-bold">Gerçek Veri ve Search Console Analizi</p>
                      </div>
                   </div>
                 </div>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  Garantili Sıra Vaatlerine Değil, <br />
                  <span style={{ color: brandColor }}>Sürdürülebilir Büyümeye İnanın</span>
                </h2>
                <div className="space-y-6 text-[16px] text-slate-600 leading-relaxed font-light">
                  <p>
                    Sektörde sıkça duyduğunuz "1 ayda 1. sayfa garantisi" gibi gerçek dışı vaatlerden uzak duruyoruz. Arama motoru optimizasyonu (SEO), düzenli emek, doğru analiz ve kusursuz bir teknik altyapı gerektiren uzun vadeli bir maratondur.
                  </p>
                  <p>
                    Birçok ajans hazır WordPress eklentilerini kurup işin bittiğini düşünürken; biz siber güvenlik standartlarında temiz bir kodlama, sunucu tarafında işlenen (SSR) sayfalar ve rakip analiziyle organik trafiğinizi kalıcı olarak artırmayı hedefliyoruz.
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