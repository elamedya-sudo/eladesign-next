import BlogClient from "./BlogClient";
import { client } from "@/app/sanity";

export const revalidate = 60;

export const metadata = {
  title: "Ela Akademi | Web Tasarım, Yazılım ve SEO Blogu",
  description: "Web tasarım trendleri, yazılım mimarileri, SEO ipuçları ve dijital pazarlama dünyasından en güncel gelişmeleri uzman ekibimizin kaleminden okuyun.",
  alternates: {
    canonical: 'https://www.eladesign.org/blog',
  }
};

// ÇÖZÜM: Hem "17 Ağu 2026" hem de "17-08-2026" veya "17.08.2026" formatını anlayan zeki tarih çözücü
function parseDateSafe(dateStr: string, createdAt: string) {
  if (!dateStr) return new Date(createdAt).getTime();

  // Nokta, tire veya eğik çizgi ile ayrılmış tarihleri (DD-MM-YYYY) anla
  if (dateStr.includes('-') || dateStr.includes('.') || dateStr.includes('/')) {
    const parts = dateStr.split(/[-./]/);
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1; // JS'de aylar 0'dan başlar
      const year = parseInt(parts[2], 10);
      if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
        return new Date(year, month, day).getTime();
      }
    }
  }

  // Boşlukla ayrılmış eski formatları (17 Ağu 2026) anla
  const months: { [key: string]: number } = {
    "Oca": 0, "Ocak": 0, "Şub": 1, "Şubat": 1, "Mar": 2, "Mart": 2, 
    "Nis": 3, "Nisan": 3, "May": 4, "Mayıs": 4, "Haz": 5, "Haziran": 5,
    "Tem": 6, "Temmuz": 6, "Ağu": 7, "Ağustos": 7, "Eyl": 8, "Eylül": 8, 
    "Eki": 9, "Ekim": 9, "Kas": 10, "Kasım": 10, "Ara": 11, "Aralık": 11
  };
  
  const parts = dateStr.trim().split(" ");
  if (parts.length === 3) {
    const day = parseInt(parts[0], 10);
    const month = months[parts[1]];
    const year = parseInt(parts[2], 10);
    
    if (month !== undefined && !isNaN(day) && !isNaN(year)) {
      return new Date(year, month, day).getTime();
    }
  }
  
  return new Date(createdAt).getTime();
}

export default async function BlogPage() {
  const query = `*[_type == "post"] {
    _id,
    title,
    "slug": slug.current,
    category,
    date,
    _createdAt,
    readTime,
    excerpt,
    "image": image.asset->url
  }`;
  
  const posts = await client.fetch(query);

  posts.sort((a: any, b: any) => parseDateSafe(b.date, b._createdAt) - parseDateSafe(a.date, a._createdAt));

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <BlogClient initialPosts={posts} />
    </>
  );
}