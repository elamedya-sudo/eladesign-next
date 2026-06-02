import Link from "next/link";

// 1. SAYFAYA ÖZEL METADATA VE CANONICAL (SEO)
export const metadata = {
  title: "Kurumsal Kimlik ve Logo Tasarımı Ajansı",
  description: "Markanızın vizyonunu yansıtan özgün logo tasarımı, basılı materyaller ve dijital şablonlarla elit bir kurumsal kimlik inşa ediyoruz.",
  alternates: {
    canonical: 'https://www.eladesign.org/kurumsal-kimlik-tasarimi', // Tam slug'ını buraya girmelisin
  }
};

export default function CorporateIdentityPage() {
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
        "name": "Kurumsal Kimlik Tasarımı",
        "item": "https://www.eladesign.org/kurumsal-kimlik-tasarimi"
      }
    ]
  };

  // Kurumsal Kimlik Kapsamındaki Hizmetler
  const identityServices = [
    {
      icon: "✒️",
      title: "Özgün Logo Tasarımı",
      desc: "Markanızın vizyonunu yansıtan, akılda kalıcı, zamansız ve hiçbir hazır şablon kullanılmadan sıfırdan çizilen (vektörel) logo tasarımları."
    },
    {
      icon: "📇",
      title: "Basılı Kurumsal Materyaller",
      desc: "Kartvizit, antetli kağıt, diplomat zarf ve cepli dosya gibi fiziksel temas noktalarınızda şirketinize premium bir duruş kazandıran tasarımlar."
    },
    {
      icon: "📱",
      title: "Dijital & Sosyal Medya Kitleri",
      desc: "Instagram, LinkedIn, Facebook gibi platformlarda markanızın dilini ve renklerini standartlaştıran şık gönderi ve hikaye şablonları."
    },
    {
      icon: "📘",
      title: "Kurumsal Kimlik Kitapçığı",
      desc: "Logonuzun hangi fontlarla, hangi renk kodlarıyla (Pantone/CMYK) ve nerelerde nasıl kullanılacağını kurallara bağlayan anayasa niteliğinde rehber."
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
             {/* Zarif soyut arka plan */}
             <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-[#933c81]/20 rounded-full blur-[120px]"></div>
             <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-slate-700/30 rounded-full blur-[100px]"></div>
          </div>
          
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center relative z-10">
            <p className="text-[14px] font-semibold uppercase tracking-widest text-[#e890d6] mb-4">
              HİZMETLERİMİZ / KURUMSAL KİMLİK TASARIMI
            </p>
            {/* 4. H1 Optimizasyonu Yapıldı */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[64px] mb-6 leading-tight">
              Kurumsal Kimlik ve <br className="hidden md:block" />
              <span style={{ color: "#e890d6" }}>Logo Tasarımı</span>
            </h1>
            <p className="max-w-3xl mx-auto text-[17px] leading-8 text-slate-300 font-light mb-10">
              İlk izlenim için ikinci bir şansınız yoktur. Bir logo sadece bir şekil değil, şirketinizin vizyonudur. Hedef kitlenize güven veren, akılda kalıcı ve estetik bir marka kimliği oluşturmak için kreatif ekibimizle yanınızdayız.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/teklif" className="rounded-full bg-[#933c81] px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-[#7a316a] transition-all transform hover:-translate-y-1">
                Markanızı Baştan Yaratalım
              </Link>
            </div>
          </div>
        </div>

        {/* 2. ANA ÖZELLİKLER (GRID) */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 lg:py-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Kurumsal Kimlik Neleri Kapsar?</h2>
            <p className="text-slate-600">Markanızın temas ettiği her noktada bütünlük ve kalite algısı yaratıyoruz.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {identityServices.map((item, i) => (
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

        {/* 3. NEDEN ÖZEL TASARIM? (Farkımız Vurgusu) */}
        <div className="bg-slate-50 py-20 lg:py-32 overflow-hidden border-y border-slate-200">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <div className="order-2 lg:order-1 relative">
                 <div className="aspect-square md:aspect-[4/3] rounded-3xl bg-white border border-slate-200 shadow-xl p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
                   
                   {/* Tasarım Geometrisi İllüstrasyonu */}
                   <div className="absolute top-0 right-0 p-6 opacity-5 text-[#933c81]">
                     <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 3.83L18.17 19H5.83L12 5.83z"/></svg>
                   </div>

                   <h3 className="text-2xl font-bold text-slate-900 mb-6 relative z-10">Bizi Neden Seçmelisiniz?</h3>
                   
                   <div className="relative z-10 space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-[#933c81]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-[#933c81]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <div>
                          <p className="text-slate-900 font-bold mb-1">Hazır Vektör (Stok) Kullanmıyoruz</p>
                          <p className="text-slate-500 text-[14px]">Rakiplerinizle aynı logoyu kullanma riskiniz yoktur; her çizim sıfırdan markanıza özel yapılır.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-[#933c81]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-[#933c81]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <div>
                          <p className="text-slate-900 font-bold mb-1">Psikolojik Renk & Font Seçimi</p>
                          <p className="text-slate-500 text-[14px]">Sektörünüze ve hedef kitlenize hitap eden doğru renk psikolojisi ve tipografi kullanılır.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-[#933c81]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-[#933c81]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <div>
                          <p className="text-slate-900 font-bold mb-1">Tam Baskı Uyumluluğu (CMYK/Pantone)</p>
                          <p className="text-slate-500 text-[14px]">Tasarımlarınız ekranda nasıl şık duruyorsa, matbaadan çıktığında da aynı kalitede görünür.</p>
                        </div>
                      </div>
                   </div>
                 </div>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  Güven Vermeyen Bir Markaya, <br />
                  <span style={{ color: brandColor }}>Kimse Yatırım Yapmaz</span>
                </h2>
                <div className="space-y-6 text-[16px] text-slate-600 leading-relaxed font-light">
                  <p>
                    Müşterilerinizin markanızla ilk teması ürünlerinizden önce genellikle logonuz, web siteniz veya uzattığınız bir kartvizit ile olur. Amatörce hazırlanmış bir görsel kimlik, sunduğunuz ürün veya hizmetin kalitesine de gölge düşürür.
                  </p>
                  <p>
                    Ela Design Kreatif Ekibi olarak; markanızın hikayesini dinliyor, sektördeki rakiplerinizi analiz ediyor ve sizi yıllarca gururla temsil edecek elit bir kurumsal kimlik inşa ediyoruz. Markanızı "ucuz" ve "sıradan" görünmekten kurtarın.
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