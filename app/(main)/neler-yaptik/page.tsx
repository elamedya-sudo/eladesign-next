import PortfolioClient from "./PortfolioClient";

// 1. SAYFAYA ÖZEL METADATA VE CANONICAL (SEO)
export const metadata = {
  title: "Web Tasarım ve Özel Yazılım Referansları | Portfolyo",
  description: "Ela Design tarafından Next.js mimarisiyle geliştirilen yüksek performanslı kurumsal web tasarım, e-ticaret ve özel yazılım projesi referanslarımız.",
  alternates: {
    canonical: 'https://www.eladesign.org/neler-yaptik',
  }
};

export default function PortfolioPage() {
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
        "name": "Referanslarımız",
        "item": "https://www.eladesign.org/neler-yaptik"
      }
    ]
  };

  return (
    <>
      {/* Schema kodunu gömüyoruz */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* İnteraktif arayüzü çağırıyoruz */}
      <PortfolioClient />
    </>
  );
}