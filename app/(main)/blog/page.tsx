import BlogClient from "./BlogClient";
import { client } from "@/app/sanity";

// ISR (Incremental Static Regeneration): Sanity'de yeni yazı yayınlarsan, 
// Vercel arka planda sayfayı 60 saniyede bir otomatik yeniler. Hız %100 kalır.
export const revalidate = 60;

// 1. SAYFAYA ÖZEL METADATA VE CANONICAL (SEO)
export const metadata = {
  title: "Ela Akademi | Web Tasarım, Yazılım ve SEO Blogu",
  description: "Web tasarım trendleri, yazılım mimarileri, SEO ipuçları ve dijital pazarlama dünyasından en güncel gelişmeleri uzman ekibimizin kaleminden okuyun.",
  alternates: {
    canonical: 'https://www.eladesign.org/blog',
  }
};

// Türkçe ay isimlerini sayıya çeviren yardımcı fonksiyon (En yeninden eskiye sıralama için)
function parseTurkishDate(dateStr: string) {
  if (!dateStr) return 0;
  const months: { [key: string]: number } = {
    "Oca": 0, "Şub": 1, "Mar": 2, "Nis": 3, "May": 4, "Haz": 5,
    "Tem": 6, "Ağu": 7, "Eyl": 8, "Eki": 9, "Kas": 10, "Ara": 11
  };
  
  const parts = dateStr.trim().split(" ");
  if (parts.length !== 3) return 0;
  
  const day = parseInt(parts[0], 10);
  const month = months[parts[1]] ?? 0;
  const year = parseInt(parts[2], 10);
  
  return new Date(year, month, day).getTime();
}

export default async function BlogPage() {
  // Sanity'den tüm yazıları çekiyoruz
  const query = `*[_type == "post"] {
    _id,
    title,
    "slug": slug.current,
    category,
    date,
    readTime,
    excerpt,
    "image": image.asset->url
  }`;
  
  const posts = await client.fetch(query);

  // Yazıları tarihlerine göre en yeninden en eskiye (desc) sıralıyoruz
  posts.sort((a: any, b: any) => parseTurkishDate(b.date) - parseTurkishDate(a.date));

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
      
      {/* İnteraktif arayüzü çağırıyoruz ve Sanity verilerini yolluyoruz */}
      <BlogClient initialPosts={posts} />
    </>
  );
}