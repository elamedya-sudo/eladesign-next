import BlogClient from "./BlogClient";
import { client } from "@/app/sanity"; // sanity.ts dosyanın yoluna göre ayarlarsın

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

export default async function BlogPage() {
  // Sanity'den tüm yazıları çekiyoruz (Tarihe göre yeniden eskiye sıralı)
  // image.asset->url komutu, görselin doğrudan CDN linkini almamızı sağlar.
  const query = `*[_type == "post"] | order(_createdAt desc) {
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