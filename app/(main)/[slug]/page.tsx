import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import postsData from "@/data/posts.json";

export async function generateStaticParams() {
  return postsData.map((post) => ({
    slug: post.slug.trim(),
  }));
}

// 1. DİNAMİK METADATA, CANONICAL VE OPEN GRAPH (SEO)
export async function generateMetadata({ params }: { params: any }) {
  const resolvedParams = await params;
  const decodedSlug = decodeURIComponent(resolvedParams.slug).trim();
  const post = postsData.find((p) => p.slug.trim() === decodedSlug);
  
  if (!post) return { title: "Sayfa Bulunamadı" };
  
  return {
    title: `${post.title} | Ela Akademi`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.eladesign.org/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.eladesign.org/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Ela Design Ekibi"],
      images: post.image ? [{ url: `https://www.eladesign.org${post.image}` }] : [],
    }
  };
}

export default async function BlogPostPage({ params }: { params: any }) {
  
  const resolvedParams = await params;
  const decodedSlug = decodeURIComponent(resolvedParams.slug).trim();
  
  const post = postsData.find((p) => p.slug.trim() === decodedSlug);

  if (!post) {
    console.log("EŞLEŞMEYEN SLUG HATASI -> Aranan:", decodedSlug);
    notFound(); 
  }

  // 2. ARTICLE VE BREADCRUMB SCHEMA (Google Makale Zengin Sonuçları İçin)
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
          "name": "Ela Akademi",
          "item": "https://www.eladesign.org/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": post.title,
          "item": `https://www.eladesign.org/${post.slug}`
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "description": post.excerpt,
      "image": post.image ? [`https://www.eladesign.org${post.image}`] : [],
      "datePublished": post.date,
      "author": [{
          "@type": "Organization",
          "name": "Ela Design",
          "url": "https://www.eladesign.org/"
      }],
      "publisher": {
        "@type": "Organization",
        "name": "Ela Design",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.eladesign.org/logo/logo.webp"
        }
      }
    }
  ];

  return (
    <>
      {/* 3. Schema kodunu sayfanın arkasına görünmez şekilde gömüyoruz */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-slate-50 min-h-screen pb-24">
        {/* ÜST ALAN */}
        <div className="bg-white pt-24 pb-16 border-b border-slate-200">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="bg-[#933c81]/10 text-[#933c81] px-4 py-1.5 rounded-full text-[13px] font-bold tracking-wide uppercase">
                {post.category}
              </span>
              <span className="text-slate-400 text-[14px] font-medium flex items-center">
                <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-slate-500 text-[14px] font-medium border-t border-slate-100 pt-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden">
                  <span className="font-bold text-slate-500">E</span>
                </div>
                <span>Ela Design Ekibi</span>
              </div>
              <span>•</span>
              <span>{post.date}</span>
            </div>
          </div>
        </div>

        {/* İÇERİK ALANI */}
        <div className="max-w-[800px] mx-auto px-6 mt-12">
          {/* Öne Çıkan Görsel */}
          <div className="relative w-full aspect-[640/290] bg-slate-100 rounded-3xl overflow-hidden mb-12 shadow-lg border border-slate-100">
             {post.image ? (
               <Image src={post.image} alt={post.title} fill className="object-cover relative z-10" />
             ) : (
               <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                 Görsel Yok
               </div>
             )}
          </div>

          {/* Yazı İçeriği (Tailwind Tipografi Ayarları) */}
          <div 
            className="text-slate-700 text-[17px] leading-relaxed font-light
            [&>p]:mb-6
            [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mt-12 [&>h2]:mb-4
            [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-4
            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-2
            [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol>li]:mb-2
            [&>img]:rounded-xl [&>img]:shadow-md [&>img]:my-8 [&>img]:w-full [&>img]:h-auto
            [&>pre]:bg-slate-900 [&>pre]:text-slate-100 [&>pre]:p-4 [&>pre]:rounded-xl [&>pre]:overflow-x-auto [&>pre]:mb-6 [&>pre>code]:text-[14px]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 pt-8 border-t border-slate-200">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#933c81] font-bold hover:text-slate-900 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Tüm Yazılara Dön
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}