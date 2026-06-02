import YasalIcerik from "./YasalIcerik";

// 1. SAYFAYA ÖZEL METADATA VE CANONICAL
export const metadata = {
  title: "Yasal Bilgiler",
  description: "Ela Teknoloji ve Tasarım San. Tic. Ltd. Şti. olarak KVKK, Gizlilik ve Çerez Politikalarımız hakkında detaylı bilgilendirme",
  alternates: {
    canonical: 'https://www.eladesign.org/yasal',
  }
};

export default function LegalPoliciesPage() {
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
        "item": "https://www.eladesign.org/yasal"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Yasal Bilgilendirmeler",
        "item": "https://www.eladesign.org/yasal"
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
      {/* İnteraktif arayüzü aşağıdan çağırıyoruz */}
      <YasalIcerik />
    </>
  );
}