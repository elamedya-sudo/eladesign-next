import Link from "next/link";
import PriceCalculator from "@/components/sections/PriceCalculator";

// 1. SAYFAYA ÖZEL METADATA VE CANONICAL
export const metadata = {
  title: "2026 Web Sitesi Fiyatları ve E-Ticaret Maliyetleri", 
  description: "2026 güncel web sitesi tasarım fiyatları. Kurumsal web sitesi, e-ticaret ve özel yazılım maliyetlerini interaktif fiyat hesaplama motoruyla hemen öğrenin.",
  alternates: {
    canonical: 'https://www.eladesign.org/web-sitesi-fiyatlari', // Sayfanın tam slug'ını buraya girmelisin
  }
};

export default function PricingPage() {
  const brandColor = "#933c81";

  // SEO Odaklı SSS (Sıkça Sorulan Sorular) Verisi
  const faqs = [
    {
      q: "2026 Web sitesi fiyatları ortalama ne kadar?",
      a: "Projenin kapsamına göre 2026 piyasa koşullarında 22.000 TL ile 185.000 TL arasında değişmektedir. Basit bir tanıtım sitesi ile özel bir e-ticaret yazılımı aynı eksende fiyatlandırılamaz."
    },
    {
      q: "Web sitesi yaptırdıktan sonra yıllık ödeme var mı?",
      a: "Evet. Sitenizin yayında kalması için Domain, Hosting ve SSL hizmetlerinin her yıl yenilenmesi gerekir. Ela Design olarak ilk yıl bu hizmetleri ücretsiz sağlıyoruz."
    },
    {
      q: "Hazır şablon mu yoksa özel tasarım mı tercih etmeliyim?",
      a: "Bütçeniz çok kısıtlıysa hazır şablonlar bir çözümdür. Ancak markanıza özgü, SEO altyapısı güçlü ve GEO (Yapay Zeka) aramalarına uyumlu bir yapı istiyorsanız kesinlikle Özel (Custom) Tasarım tercih etmelisiniz."
    },
    {
      q: "Süreç ne kadar sürer ve siteler mobil uyumlu mu?",
      a: "Kurumsal siteler ortalama 7-10 iş günü, E-ticaret siteleri 15-25 iş günü sürer. Tüm tasarımlarımız %100 mobil ve tablet uyumludur (Responsive)."
    }
  ];

  // 2. İKİLİ SCHEMA (BREADCRUMB + FAQ) YAPILANDIRMASI
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
          "name": "Web Sitesi Fiyatları",
          "item": "https://www.eladesign.org/web-sitesi-fiyatlari"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    }
  ];

  return (
    <>
      {/* Schema kodumuzu sayfanın arkasına görünmez bir şekilde gömüyoruz */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="bg-slate-50 min-h-screen">
        
        {/* 1. HERO ALANI (SEO Odaklı Güçlendirilmiş H1) */}
        <div className="bg-slate-900 py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#933c81]/20 blur-[120px] rounded-full pointer-events-none transform translate-x-1/3 -translate-y-1/4"></div>
          
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center relative z-10">
            <p className="text-[14px] font-semibold uppercase tracking-widest text-[#e890d6] mb-4">
              GÜNCEL FİYAT REHBERİ
            </p>
            {/* H1 Etiketi: Tam arama motoru hedefli */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6 leading-tight">
              2026 Web Sitesi Fiyatları ve <br className="hidden md:block" />
              <span className="text-[#e890d6]">E-Ticaret Maliyetleri</span>
            </h1>
            <p className="max-w-3xl mx-auto text-[17px] leading-8 text-slate-300 font-light">
              İstanbul Ataşehir merkezli ajansımızda, web sitesi yaptırmaya karar verip tekliflerle aklı karışanlar için tüm teknolojilerin maliyetlerini şeffafça açıklıyoruz. Temel projeler <strong className="text-white">22.000 TL</strong>'den başlarken, profesyonel e-ticaret sistemleri <strong className="text-white">185.000 TL</strong>'ye kadar çıkabilmektedir.
            </p>
          </div>
        </div>

        {/* 2. ORTALAMA FİYAT KARTLARI (Paketler) */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 -mt-10 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-2xl mb-6">🏢</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Kurumsal Web Sitesi</h3>
              <p className="text-[14px] text-slate-500 mb-6">Şirketler, Kobiler ve Holdingler için prestijli vitrin.</p>
              <div className="text-2xl font-black text-[#933c81] mb-6">35.000 ₺ <span className="text-[14px] font-medium text-slate-400">'den başlayan</span></div>
              <Link href="#hesapla" className="block w-full py-3 text-center rounded-xl bg-slate-50 text-slate-700 font-semibold hover:bg-slate-100 transition-colors border border-slate-200">
                Maliyet Hesapla
              </Link>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Popüler</div>
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-2xl mb-6">🛍️</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">E-Ticaret Sitesi</h3>
              <p className="text-[14px] text-slate-500 mb-6">Yüksek dönüşüm oranlı, güvenli online satış sistemleri.</p>
              <div className="text-2xl font-black text-[#933c81] mb-6">60.000 ₺ <span className="text-[14px] font-medium text-slate-400">'den başlayan</span></div>
              <Link href="#hesapla" className="block w-full py-3 text-center rounded-xl bg-[#933c81] text-white font-semibold shadow-md hover:bg-[#7a316a] transition-colors">
                Maliyet Hesapla
              </Link>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-2xl mb-6">⚖️</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Hukuk / Avukat Sitesi</h3>
              <p className="text-[14px] text-slate-500 mb-6">TBB kurallarına uygun, güven veren özel tasarımlar.</p>
              <div className="text-2xl font-black text-[#933c81] mb-6">22.000 ₺ <span className="text-[14px] font-medium text-slate-400">'den başlayan</span></div>
              <Link href="#hesapla" className="block w-full py-3 text-center rounded-xl bg-slate-50 text-slate-700 font-semibold hover:bg-slate-100 transition-colors border border-slate-200">
                Maliyet Hesapla
              </Link>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-2xl mb-6">👨‍💻</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Kişisel / Blog Sitesi</h3>
              <p className="text-[14px] text-slate-500 mb-6">Danışmanlar ve uzmanlar için dijital itibar yönetimi.</p>
              <div className="text-2xl font-black text-[#933c81] mb-6">22.000 ₺ <span className="text-[14px] font-medium text-slate-400">'den başlayan</span></div>
              <Link href="#hesapla" className="block w-full py-3 text-center rounded-xl bg-slate-50 text-slate-700 font-semibold hover:bg-slate-100 transition-colors border border-slate-200">
                Maliyet Hesapla
              </Link>
            </div>

          </div>
        </div>

        {/* 3. İNTERAKTİF HESAPLAMA MOTORU ALANI */}
        <div id="hesapla" className="py-20 bg-white border-y border-slate-200">
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">İnteraktif Fiyat Hesaplama Motoru</h2>
              <p className="text-slate-600">İhtiyaçlarınızı seçin, projenizin tahmini maliyetini saniyeler içinde öğrenin.</p>
            </div>
            
            <PriceCalculator />
          </div>
        </div>

        {/* 4. SEO İÇERİĞİ VE SSS */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Fiyatlar Neye Göre Değişir?</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-[18px] font-bold text-[#933c81] mb-3 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-[#933c81]/10 flex items-center justify-center text-[12px] mr-3">1</span>
                    Projenin Yapısı ve Amacı
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-[15px]">Kişisel bir tanıtım sitesi ile karmaşık ödeme sistemleri ve stok yönetimi olan bir e-ticaret sitesi aynı eforu gerektirmez. İhtiyaç duyulan modüller fiyatı doğrudan belirler.</p>
                </div>
                
                <div>
                  <h3 className="text-[18px] font-bold text-[#933c81] mb-3 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-[#933c81]/10 flex items-center justify-center text-[12px] mr-3">2</span>
                    Kullanılacak Altyapı ve Teknoloji
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-[15px]">Piyasada 3.000 TL'ye kurulan hazır şablonlu WordPress siteleri bulunurken; yüksek performans, AIO (Yapay Zeka Aramaları) ve güvenlik için özel kodlanan Next.js Headless mimarilerin maliyeti doğal olarak daha yüksektir.</p>
                </div>

                <div>
                  <h3 className="text-[18px] font-bold text-[#933c81] mb-3 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-[#933c81]/10 flex items-center justify-center text-[12px] mr-3">3</span>
                    Ajansın Deneyimi ve Süreklilik
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-[15px]">Sadece "boş bir site" teslim almakla, içerikleri optimize edilmiş, Google araçları (Search Console, Analytics) bağlanmış ve en önemlisi site yayına girdikten sonra 7/24 teknik destek alabileceğiniz bir ajansla çalışmak arasındaki fark, kaliteyi belirler.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Sıkça Sorulan Sorular</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-slate-200 pb-6 last:border-0 last:pb-0">
                    <h4 className="text-[16px] font-bold text-slate-900 mb-3">{faq.q}</h4>
                    <p className="text-[15px] text-slate-600 leading-relaxed font-light">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}