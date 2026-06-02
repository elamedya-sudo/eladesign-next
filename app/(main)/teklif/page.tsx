import AppointmentForm from "./AppointmentForm";

// 1. SAYFAYA ÖZEL METADATA VE CANONICAL
export const metadata = {
  title: "Web Tasarım ve Yazılım Teklifi Al | Randevu Planla",
  description: "Ela Design ile dijital projenizi büyütmek için hemen ücretsiz ön görüşme randevusu planlayın, özel web tasarım ve yazılım teklifinizi alın.",
  alternates: {
    canonical: 'https://www.eladesign.org/teklif',
  }
};

export default function AppointmentPage() {
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
        "name": "Teklif Al",
        "item": "https://www.eladesign.org/teklif"
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
      
      {/* İnteraktif form bileşenini çağırıyoruz */}
      <AppointmentForm />
    </>
  );
}