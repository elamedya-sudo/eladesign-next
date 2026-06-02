import BlogClient from "./BlogClient";

// 1. SAYFAYA ÖZEL METADATA VE CANONICAL (SEO)
export const metadata = {
  title: "Ela Akademi | Web Tasarım, Yazılım ve SEO Blogu",
  description: "Web tasarım trendleri, yazılım mimarileri, SEO ipuçları ve dijital pazarlama dünyasından en güncel gelişmeleri uzman ekibimizin kaleminden okuyun.",
  alternates: {
    canonical: 'https://www.eladesign.org/blog',
  }
};

export default function BlogPage() {
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
        "name": "Ela Akademi (Blog)",
        "item": "https://www.eladesign.org/blog"
      }
    ]
  };

  return (
    <>
      {/* Schema kodunu görünmez şekilde gömüyoruz */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* İnteraktif arayüzü çağırıyoruz */}
      <BlogClient />
    </>
  );
}