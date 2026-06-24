import Link from "next/link";
import postsData from "@/data/posts.json";
import projectsData from "@/data/projects.json";

export const metadata = {
  title: "Site Haritası | Ela Design",
  description: "Ela Design web sitesinde yer alan tüm kurumsal sayfalara, hizmetlerimize, dijital dönüşüm projelerimize ve blog yazılarımıza bu sayfadan hızlıca ulaşabilirsiniz.",
  alternates: {
    canonical: 'https://www.eladesign.org/site-haritasi',
  }
};

export default function SitemapPage() {
  const brandColor = "#933c81";

  // Statik Ana Sayfalar ve Hizmetler
  const corporatePages = [
    { title: "Anasayfa", url: "/" },
    { title: "Hakkımızda", url: "/hakkimizda" },
    { title: "Ekibimiz", url: "/ekibimiz" },
    { title: "Grup Şirketlerimiz", url: "/grup-sirketlerimiz" },
    { title: "Ela Ajans", url: "/ela-ajans" },
    { title: "Nerelerdeyiz", url: "/nerelerdeyiz" },
    { title: "Online Ödeme", url: "/online-odeme" },
    { title: "İletişim", url: "/iletisim" },
    { title: "Teklif İsteyin", url: "/teklif" },
    { title: "Yasal Bilgilendirme", url: "/yasal" }
  ];

  const servicesPages = [
    { title: "Tüm Hizmetler", url: "/hizmetler" },
    { title: "Kurumsal Web Tasarım", url: "/web-tasarim" },
    { title: "Özel Web Yazılım", url: "/web-yazilim" },
    { title: "SaaS ve CRM Çözümleri", url: "/saas-ve-crm-cozumleri" },
    { title: "E-Ticaret Sistemleri", url: "/eticaret-sitesi" },
    { title: "Arama Motoru Optimizasyonu (SEO)", url: "/arama-motoru-optimizasyonu" },
    { title: "GEO ve AIO Optimizasyonu", url: "/geo-ve-aio-optimizasyonu" },
    { title: "Google Ads Yönetimi", url: "/google-adwords" },
    { title: "Kurumsal Kimlik Tasarımı", url: "/kurumsal-kimlik-tasarimi" },
    { title: "Sosyal Medya Yönetimi", url: "/sosyal-medya-yonetimi" },
    { title: "2D Animasyon", url: "/2d-animasyon" }
  ];

  const pricingPages = [
    { title: "Kurumsal Web Tasarım Fiyatları", url: "/kurumsal-web-tasarim-fiyatlari" },
    { title: "Avukatlar İçin Web Sitesi Fiyatları", url: "/avukatlar-icin-web-sitesi-fiyatlari" },
    { title: "E-Ticaret Sitesi Fiyatları", url: "/e-ticaret-sitesi-fiyatlari" },
    { title: "Kadıköy Web Tasarım Fiyatları", url: "/kadikoy-web-tasarim-fiyatlari" },
    { title: "Ataşehir Web Tasarım Fiyatları", url: "/atasehir-web-tasarim-fiyatlari" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Hero Alanı */}
      <div className="bg-slate-900 pt-32 pb-20 px-6">
        <div className="max-w-[1440px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Site <span style={{ color: brandColor }}>Haritası</span>
          </h1>
          <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto">
            Sitemizdeki tüm içeriklere, hizmetlere ve makalelere tek bir ekrandan, hızlıca ulaşın.
          </p>
        </div>
      </div>

      {/* Harita İçeriği */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Kolon 1: Kurumsal ve Fiyatlar */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b-2 border-slate-200 pb-3">Kurumsal</h2>
              <ul className="space-y-3">
                {corporatePages.map((page, index) => (
                  <li key={index}>
                    <Link href={page.url} className="text-slate-600 hover:text-[#933c81] transition-colors flex items-center gap-2">
                      <span className="text-slate-300 text-xs">▸</span> {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b-2 border-slate-200 pb-3">Fiyat Listeleri</h2>
              <ul className="space-y-3">
                {pricingPages.map((page, index) => (
                  <li key={index}>
                    <Link href={page.url} className="text-slate-600 hover:text-[#933c81] transition-colors flex items-center gap-2">
                      <span className="text-slate-300 text-xs">▸</span> {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Kolon 2: Hizmetlerimiz */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b-2 border-slate-200 pb-3">Hizmetlerimiz</h2>
            <ul className="space-y-3">
              {servicesPages.map((page, index) => (
                <li key={index}>
                  <Link href={page.url} className="text-slate-600 hover:text-[#933c81] transition-colors flex items-center gap-2">
                    <span className="text-slate-300 text-xs">▸</span> {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolon 3: Başarı Hikayeleri (Dinamik) */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b-2 border-slate-200 pb-3">
              <Link href="/neler-yaptik" className="hover:text-[#933c81] transition-colors">Başarı Hikayeleri</Link>
            </h2>
            <ul className="space-y-3 max-h-[800px] overflow-y-auto pr-4 custom-scrollbar">
              {projectsData.map((project) => (
                <li key={project.id}>
                  <Link href={`/referanslar/${project.slug}`} className="text-slate-600 hover:text-[#933c81] transition-colors flex items-start gap-2">
                    <span className="text-slate-300 text-xs mt-1">▸</span> 
                    <span className="line-clamp-1">{project.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolon 4: Ela Akademi / Blog (Dinamik) */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b-2 border-slate-200 pb-3">
              <Link href="/blog" className="hover:text-[#933c81] transition-colors">Ela Akademi</Link>
            </h2>
            <ul className="space-y-3 max-h-[800px] overflow-y-auto pr-4 custom-scrollbar">
              {postsData.map((post) => (
                <li key={post.id}>
                  <Link href={`/${post.slug}`} className="text-slate-600 hover:text-[#933c81] transition-colors flex items-start gap-2">
                    <span className="text-slate-300 text-xs mt-1">▸</span> 
                    <span className="line-clamp-2 leading-snug">{post.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}