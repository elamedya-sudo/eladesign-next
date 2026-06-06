import Link from 'next/link';
import Image from 'next/image';

// 1. SAYFAYA ÖZEL METADATA, CANONICAL VE OG ETİKETLERİ (CLAUDE SEO ÇÖZÜMÜ)
export const metadata = {
  title: "E-Ticaret Sitesi Fiyatları 2026 | WooCommerce Paket Maliyetleri",
  description: "2026 güncel e-ticaret sitesi kurulum fiyatları. Sizi platformlara mahkum etmeyen, %100 size ait açık kaynaklı profesyonel e-ticaret paketlerimizi inceleyin.",
  alternates: { canonical: 'https://www.eladesign.org/e-ticaret-sitesi-fiyatlari' },
  openGraph: {
    title: "E-Ticaret Sitesi Fiyatları 2026 | Ela Design",
    description: "2026 güncel e-ticaret sitesi kurulum fiyatları. Sizi platformlara mahkum etmeyen, %100 size ait açık kaynaklı profesyonel e-ticaret paketlerimizi inceleyin.",
    url: 'https://www.eladesign.org/e-ticaret-sitesi-fiyatlari',
  }
};

export default function EcommercePricingPage() {
  
  const fiyatListesi = [
    { model: "Temel Düzey E-Ticaret", fiyat: "60.000 TL", yenileme: "8.000 TL + KDV", teslim: "7 İş Günü", icon: "🚀" },
    { model: "Kurumsal Düzey E-Ticaret", fiyat: "60.000 - 125.000 TL", yenileme: "12.000 TL + KDV", teslim: "15 İş Günü", icon: "💼" },
    { model: "Profesyonel Düzey E-Ticaret", fiyat: "125.000 - 185.000 TL", yenileme: "18.000 TL + KDV", teslim: "30 İş Günü", icon: "👑" }
  ];

  // WPBakery ID'lerine göre güncellenmiş resim yolları
  const references = [
    { name: "By Evren Musti", url: "https://www.byevrenmusti.com/", img: "/projeler/ref-byevrenmusti.png" },
    { name: "Lemotti Home", url: "https://www.lemotti.com/", img: "/projeler/ref-lemotti.png" },
    { name: "Veluxe Deri Koltuk", url: "https://www.veluxe.com.tr/", img: "/projeler/ref-veluxe-deri-koltuk.png" },
    { name: "Toner Masters", url: "https://www.tonermasters.com.au/", img: "/projeler/ref-atm.png" },
    { name: "Baby Co.", url: "https://www.bbbaby.co.il/", img: "/projeler/ref-baby.png" },
    { name: "Exact Türkiye", url: "https://www.exactturkiye.com/", img: "/projeler/ref-exact.png" }
  ];

  const faqs = [
    { q: "E-ticaret sitesi kurma maliyeti nedir?", a: "Tasarım ve ek özellikler başta olmak üzere isteyeceğiniz özelliklere göre değişir. 2026 standartlarında profesyonel bir e-ticaret sitesi 60.000 TL ile 185.000 TL arasında projelendirilmektedir." },
    { q: "Kendi sunucumda barındırabilir miyim?", a: "Evet, WooCommerce altyapısı kullandığımız için sistem tamamen size aittir (Open Source). Dilediğiniz zaman sitenizi başka bir sunucuya taşıyabilir ve dosyalarınıza tam erişim sağlayabilirsiniz. Kapalı sistemler gibi kiralama modeline mahkum olmazsınız." },
    { q: "E-ticaret sitesi fiyatlarına yıllık yenileme dahil mi?", a: "Fiyatlarımıza ilk yılın hosting, domain ve SSL hizmetleri dahildir. Sonraki yıllar için sadece sunucu ve lisans yenileme bedeli ödenir." },
    { q: "Sanal POS ve Kargo entegrasyonu fiyata dahil mi?", a: "Tüm paketlerde Iyzico, PayTR gibi popüler ödeme sistemleri mevcuttur. Kurumsal ve Profesyonel paketlerimizde kargo entegrasyonları anahtar teslim olarak kurulur." },
    { q: "Muhasebe Programım ile entegrasyon yapabilir misiniz?", a: "Evet. Paket fiyatından hariç olarak başta Logo Tiger, Mikro, Paraşüt olmak üzere birçok popüler muhasebe programı ile entegrasyon sağlıyoruz. Ürün/cari sayısı, ürün varyasyonları gibi ek özellikler incelenerek fiyatlandırılır." },
    { q: "Pazaryerleri ile Entegrasyon var mı?", a: "Trendyol, Hepsiburada, N11, Amazon ve ETSY başta olmak üzere tüm popüler pazaryerleri ile ürün/stok ve sipariş entegrasyonu yapabilmekteyiz." }
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
          "name": "E-Ticaret Sitesi Fiyatları",
          "item": "https://www.eladesign.org/e-ticaret-sitesi-fiyatlari"
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="bg-slate-50 min-h-screen pb-24">
        
        {/* 1. HERO ALANI */}
        <div className="bg-slate-900 py-24 lg:py-32 relative overflow-hidden border-b border-slate-800">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#933c81]/20 blur-[120px] rounded-full pointer-events-none transform -translate-x-1/3 -translate-y-1/4"></div>
          
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center relative z-10">
            <p className="text-[14px] font-semibold uppercase tracking-widest text-[#e890d6] mb-4">
              GÜNCEL E-TİCARET FİYATLANDIRMASI
            </p>
            {/* 3. H1 Optimizasyonu (Lokasyon Eklendi) */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6 leading-tight">
  E-Ticaret Sitesi Fiyatları 2026: <br className="hidden md:block" />
  <span className="text-[#e890d6]">En İyi WooCommerce Paketleri</span>
</h1>
            <p className="max-w-3xl mx-auto text-[17px] leading-8 text-slate-300 font-light mb-8">
              "Bir e-ticaret sitesinin maliyeti ne kadar?" kolayca cevap verilebilecek bir soru değildir. Çünkü ilk kurulum maliyetleri buzdağının sadece görünen yüzüdür. İşletmenizi kiralık altyapılara mahkum etmeyen, %100 size ait özgür sistemlerin fiyatlarını inceleyin.
            </p>
            
            {/* Sayfa İçi Yönlendirme Linkleri */}
            <div className="flex flex-wrap justify-center gap-4">
               <Link href="#fiyatlar" className="bg-[#933c81] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#7a316a] transition-all">Fiyat Listesi</Link>
               <Link href="#paketler" className="bg-slate-800 text-slate-300 border border-slate-700 px-6 py-3 rounded-full text-sm font-semibold hover:bg-slate-700 hover:text-white transition-all">Paket İçerikleri</Link>
               <Link href="#referanslar" className="bg-slate-800 text-slate-300 border border-slate-700 px-6 py-3 rounded-full text-sm font-semibold hover:bg-slate-700 hover:text-white transition-all">Örnek Projeler</Link>
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 mt-16">

          {/* Vurgulu Uyarı Alanı (Kiralama vs Açık Kaynak) */}
          <div className="bg-white p-8 border-l-4 border-amber-500 rounded-r-2xl mb-20 shadow-lg relative overflow-hidden">
            <h3 className="font-bold text-2xl text-slate-900 mb-3">⚠️ Kiralık Sistemlere Mahkum Olmayın!</h3>
            <p className="text-slate-600 leading-relaxed text-[16px]">
              Piyasadaki hazır e-ticaret platformlarını (Ticimax, Ideasoft, Shopify vb.) kullandığınızda <strong>e-ticaret sistemini kiralamış olursunuz.</strong> Yıldan yıla fahiş kiralama ücretleri ödemek zorundasınızdır. En önemlisi; sitenin telif hakları size ait olmaz ve şirketten ayrılamazsınız. Bizim sunduğumuz <strong>Açık Kaynak (WooCommerce)</strong> altyapılarında ise sistem ömür boyu size aittir, dilediğiniz sunucuya taşıyabilir ve kaynak kodlarına tam erişim sağlayabilirsiniz.
            </p>
          </div>

          {/* Fiyat Tablosu */}
          <div id="fiyatlar" className="bg-white rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 overflow-hidden mb-24 scroll-mt-24">
            <div className="p-6 md:p-10 border-b border-slate-100 bg-slate-50 text-center">
              <h2 className="text-2xl font-bold text-slate-900">E-Ticaret Sitesi Fiyat Listesi</h2>
              <p className="text-slate-500 mt-2">Düşük maliyetlerin oluşturabileceği riskleri göz önünde bulundurarak, ihtiyacınıza en uygun, ölçeklenebilir paketi seçin.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="p-5 font-semibold">Paket Kapsamı</th>
                    <th className="p-5 font-semibold">İlk Kurulum Fiyatı</th>
                    <th className="p-5 font-semibold">Yıllık Yenileme (2. Yıl)</th>
                    <th className="p-5 font-semibold">Teslim Süresi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {fiyatListesi.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="p-5 font-bold text-slate-800 flex items-center gap-3">
                        <span className="text-xl">{item.icon}</span> {item.model}
                      </td>
                      <td className="p-5 font-black text-[#933c81] text-lg">{item.fiyat}</td>
                      <td className="p-5 text-slate-600 font-medium">{item.yenileme}</td>
                      <td className="p-5 text-slate-600">{item.teslim}</td>
                    </tr>
                  ))}
                  <tr className="bg-slate-50">
                    <td className="p-5 font-bold text-slate-800 flex items-center gap-3"><span className="text-xl">⚙️</span> Projeye Özel Altyapı</td>
                    <td className="p-5"><Link href="/teklif" className="text-[#933c81] font-bold hover:underline">Teklif İsteyin</Link></td>
                    <td className="p-5 font-medium text-slate-600">Proje Kapsamına Göre</td>
                    <td className="p-5 font-medium text-slate-600">Özel Takvim</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Ne Tür Bir E-Ticaret Sitesine İhtiyacınız Var? (Paket Detayları) */}
          <div id="paketler" className="mb-24 scroll-mt-24">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Hangi Paket Size Uygun?</h2>
            
            <div className="space-y-8">
              
              {/* Temel Paket */}
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 text-6xl">🚀</div>
                <h3 className="text-2xl font-bold text-[#933c81] mb-4">Temel Düzey E-Ticaret Sitesi</h3>
                <p className="text-slate-600 mb-6 text-[16px]">Bu sektöre yeni başlayanlar için uygun fiyatlı bir sistemdir. Karmaşık detaylarla uğraşmanıza gerek kalmadan sadece ürün satışınıza odaklanabilirsiniz.</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span> Açık kaynaklı ve ömür boyu size ait altyapı.</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span> Sınırsız kategori ve sınırsız ürün ekleme.</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span> Sanal POS entegrasyonu (Tüm bankalar).</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span> Üyelik sistemi ve sipariş takibi.</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span> Otomatik kargo fiyatlandırması.</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span> Ürün filtreleme ve çapraz satış özellikleri.</li>
                </ul>
              </div>

              {/* Kurumsal Paket */}
              <div className="bg-white p-8 md:p-10 rounded-3xl border-2 border-[#933c81] shadow-lg relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-[#933c81] text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">En Çok Tercih Edilen</div>
                <div className="absolute top-0 right-0 p-8 opacity-5 text-6xl mt-10">💼</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Kurumsal Düzey E-Ticaret Sitesi</h3>
                <p className="text-slate-600 mb-6 text-[16px]">E-ticaret konusunda deneyimi olan müşterilerimizin kolayca kullanabileceği, özelleştirilebilir ve geliştirmeye müsait bir sistemdir.</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span> Markanıza %100 özel özgün kurumsal tasarım.</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span> Ürüne özel renk, beden gibi varyasyon özellikleri.</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span> Gelişmiş indirim, kupon ve promosyon sistemi.</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span> Google Merchant Center (Alışveriş) Senkronizasyonu.</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span> Özelleştirilebilir kurumsal e-posta şablonları.</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span> Kayıp sepet entegrasyonu (Abandoned Cart).</li>
                </ul>
              </div>

              {/* Profesyonel Paket */}
              <div className="bg-slate-900 p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 p-8 opacity-10 text-6xl">👑</div>
                <h3 className="text-2xl font-bold text-[#e890d6] mb-4">Profesyonel Düzey E-Ticaret Sitesi</h3>
                <p className="text-slate-300 mb-6 text-[16px]">Sektörde uzmanlaşmış ve yüksek hacimli satışlar yapan markalar için otomasyon odaklı entegre çözümler.</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-200">
                  <li className="flex items-start gap-2"><span className="text-[#e890d6] mt-1">✓</span> Trendyol, Hepsiburada, N11 Pazaryeri Entegrasyonları.</li>
                  <li className="flex items-start gap-2"><span className="text-[#e890d6] mt-1">✓</span> Kargo firmaları ile online barkod ve takip entegrasyonu.</li>
                  <li className="flex items-start gap-2"><span className="text-[#e890d6] mt-1">✓</span> ERP ve Muhasebe programı (Logo vb.) uyumu.</li>
                  <li className="flex items-start gap-2"><span className="text-[#e890d6] mt-1">✓</span> Otomatik SMS bildirim sistemi (Sipariş & Kargo).</li>
                  <li className="flex items-start gap-2"><span className="text-[#e890d6] mt-1">✓</span> Yurtdışı satış için global kargo ve ödeme sistemleri.</li>
                  <li className="flex items-start gap-2"><span className="text-[#e890d6] mt-1">✓</span> Çok dilli ve çoklu para birimi altyapısı.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Proje Maliyetlerini Neler Etkiler? */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm mb-24 prose prose-slate max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 border-b border-slate-200 pb-4 mb-6">Maliyetleri Neler Belirler?</h2>
            <p className="lead text-slate-600">
              Ortalama bir e-ticaret sitesi geliştirme fiyatı projenizin ne kadar karmaşık olduğuna, ihtiyacınız olan özelliklere ve dış entegrasyonlara göre belirlenir.
            </p>
            <ul className="font-medium text-slate-700">
              <li>İstediğiniz tasarım ne kadar karmaşık, özel bir arayüze (UI/UX) ihtiyacınız var mı?</li>
              <li>Ürünleri sitenize veri girişi olarak kim ekleyecek? (Ajansınız mı yoksa siz mi?)</li>
              <li>Sitenizde İngilizce, Arapça gibi çok dilli yapıya (Multi-language) ihtiyaç var mı?</li>
              <li>Trendyol, Hepsiburada veya ETSY gibi pazar yerlerine canlı stok entegrasyonu gerekli mi?</li>
              <li>Ön muhasebe programınız (Logo, Paraşüt, Mikro) ile çift yönlü haberleşme istiyor musunuz?</li>
              <li>Google Ads, Meta Ads ve Merchant Center (Alışveriş) kurulumları yapılacak mı?</li>
            </ul>
          </div>

          {/* E-Ticaret Sitesi Referanslarımız */}
          <div id="referanslar" className="mb-24 scroll-mt-24">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900">E-Ticaret Sitesi Örneklerimiz</h2>
              <p className="text-slate-500 mt-2">Farklı sektörlerde, yüksek hacimli satış yapan başarılı referanslarımızdan bazıları.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {references.map((ref, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-4 rounded-2xl group hover:shadow-xl hover:border-[#933c81]/30 transition-all">
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 bg-slate-100 border border-slate-100">
                    <Image src={ref.img} alt={ref.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="text-lg font-bold text-center text-slate-900 mb-3">{ref.name}</h3>
                  <a href={ref.url} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-2.5 rounded-lg bg-slate-50 text-[#933c81] font-semibold text-sm hover:bg-[#933c81] hover:text-white transition-colors">
                    Siteyi İncele ↗
                  </a>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/neler-yaptik" className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold hover:border-[#933c81] hover:text-[#933c81] transition-all">
                Tüm Referanslarımızı Görün
              </Link>
            </div>
          </div>

          {/* SSS Alanı */}
          <div>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900">E-Ticaret Hakkında Sıkça Sorulanlar</h2>
            </div>
            
            <div className="space-y-4">
              {faqs.map((item, i) => (
                <details key={i} className="group bg-white rounded-2xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-bold">
                    <h3 className="text-[16px]">{item.q}</h3>
                    <span className="relative size-5 shrink-0">
                      <svg className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-opacity text-[#933c81]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg>
                      <svg className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-opacity text-[#933c81]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4"/></svg>
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-slate-600 leading-relaxed font-light border-t border-slate-100 pt-4 mt-2">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}