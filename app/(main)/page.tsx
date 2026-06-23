import Link from "next/link";
import Image from "next/image";
import Services from "@/components/sections/Services";
import SuccessStories from "@/components/sections/SuccessStories";
// YENİ VİTRİN BİLEŞENİNİ IMPORT ETTİK
import FeaturedProjects from "@/components/sections/FeaturedProjects"; 
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import LatestArticles from "@/components/sections/LatestArticles";
import postsData from "@/data/posts.json";

// 1. ANASAYFA METADATA VE CANONICAL (SEO)
export const metadata = {
  title: "Kurumsal Web Tasarım ve Yazılım Ajansı | Ela Design",
  description: "Web tasarım, özel yazılım, e-ticaret, SEO ve 360° dijital ajans hizmetleri. Terzi işi butik yaklaşımımızla markanızı dijital dünyada öne çıkarıyoruz.",
  alternates: {
    canonical: 'https://www.eladesign.org/',
  }
};

export default function HomePage() {
  const brandColor = "#933c81";

  // 2. ORGANIZATION VE WEBSITE SCHEMA (Kurumsal Kimlik ve SEO Otoritesi)
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Ela Design",
      "url": "https://www.eladesign.org/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.eladesign.org/arama?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Ela Teknoloji ve Tasarım",
      "url": "https://www.eladesign.org/",
      "logo": "https://www.eladesign.org/logo/logo.webp",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+90-216-576-5826",
        "contactType": "customer service",
        "areaServed": "TR",
        "availableLanguage": "Turkish"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Küçükbakkalköy Mh. Kayışdağı Cd. Ali Ay Sk. No: 3/1 Orkide Apt.",
        "addressLocality": "Ataşehir",
        "addressRegion": "İstanbul",
        "addressCountry": "TR"
      }
    }
  ];

  return (
    <>
      {/* Schema kodunu görünmez şekilde gömüyoruz */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. BÖLÜM: HERO (KARŞILAMA EKRANI) */}
      <div className="relative isolate overflow-hidden bg-white">
        <div className="absolute -top-10 -left-20 w-80 h-80 bg-slate-50 rounded-full opacity-50 -z-10"></div>
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-slate-50 rounded-full opacity-60 -z-10"></div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 sm:py-28 lg:py-32">
          <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-12 items-center">
            
            {/* Sol Taraf - Metin İçeriği */}
            <div className="lg:col-span-7 max-w-2xl lg:max-w-none lg:pr-10">
              <p className="text-[13px] font-semibold uppercase tracking-widest text-slate-500 mb-4">
                web ajans / 360° dijital çözümler
              </p>
              
              <h1 className="text-3xl font-extrabold tracking-tighter text-slate-950 sm:text-[38px] md:text-[44px] lg:text-[48px] xl:text-[52px] leading-[1.05] md:leading-[1.1]">
                Kaliteli Bir Web Sitesi Sizi<br />
                <span className="relative inline-block text-[#222]">
                  <span style={{ color: brandColor }} className="font-extrabold">Rakiplerinizden</span> Farklı Kılar
                  <span className="absolute left-0 bottom-0.5 w-1/2 h-0.5 bg-[#933c81]/20 rounded-full"></span>
                </span>
              </h1>
              
              <p className="mt-7 text-[16px] leading-8 text-slate-700 font-light max-w-xl">
                Aklınızdaki projeyi dinlemek ve hayata geçirmek için sabırsızlanıyoruz. Terzi işi butik yaklaşımımız ve modern web teknolojilerimizle markanızı dijital dünyada öne çıkarıyoruz.
              </p>

              {/* BUTONLAR (Eski yazı kaldırıldı, 2 zıt buton eklendi) */}
              <div className="mt-12 flex flex-wrap items-center gap-4">
                
                {/* Ana Buton (Mor) */}
                <Link
                  href="/teklif"
                  style={{ backgroundColor: brandColor }}
                  className="group flex items-center gap-x-3 rounded-full px-9 py-4 text-[14px] font-semibold text-white shadow-lg hover:shadow-2xl hover:shadow-[#933c81]/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Hemen Teklif Al
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>

                {/* Yeni Zıt Renkli Buton (Koyu Arduvaz) */}
                <Link
                  href="/web-sitesi-fiyatlari"
                  className="group flex items-center gap-x-3 rounded-full px-9 py-4 text-[14px] font-semibold bg-slate-900 text-white shadow-lg hover:shadow-2xl hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Fiyatları Hesapla
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </Link>

              </div>
            </div>

            {/* Sağ Taraf - Görsel */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end lg:pl-10 relative mt-10 lg:mt-0">
              <div className="absolute -inset-10 -z-10 blur-3xl opacity-20" style={{ backgroundColor: brandColor + '33' }}></div>
              <Image
                src="/web-tasarim.png" 
                alt="Ela Design Web Tasarım İllüstrasyonu"
                width={620} 
                height={520}
                className="object-contain transform hover:scale-[1.03] transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. BÖLÜM: HİZMETLER */}
      <Services />

      {/* 3. BÖLÜM: BAŞARI HİKAYELERİ (Koyu Tema) */}
      <SuccessStories />

      {/* 4. BÖLÜM: VİTRİN / ÖNE ÇIKAN PROJELER (YENİ EKLENDİ) */}
      <FeaturedProjects />

      {/* 5. BÖLÜM: NELER YAPTIK (Tüm Projelerin Izgarası) */}
      <ProjectsPreview />

      {/* 6. BÖLÜM: ELA AKADEMİ (Son Yazılar) */}
      <LatestArticles />
    </>
  );
}