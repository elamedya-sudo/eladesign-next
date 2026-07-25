"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import postsData from "@/data/posts.json";

export default function LatestArticles() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth;
      
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // 1. DÜZELTME: Vitrinde çıkmasını istediğin 9 yazının slug'ını buraya İSTEDİĞİN SIRAYLA yaz.
  const featuredPostSlugs = [
    "kizimin-cizgileri-yapay-zeka-ve-kusursuzluk",
    "yapay-zeka-ile-icerik-uretmek", 
    "telefonunuz-aslinda-sizi-dinlemiyor", 
    "dijital-amnezi-aklimizi-cebimizde-mi-tasiyoruz",
    "dijital-yayincilik-1-7-30-4-2-1-icerik-kurali",
    "headless-mimari-nedir",
    "organik-trafiginizi-10-adimda-arttirma",
    "web-tasarim-fiyatlari-nasil-belirlenir",
    "sosyal-medya-yonetimi-hakkinda-bilinmesi-gerekenler",
  ];

  // 2. DÜZELTME: JSON'dan sadece yukarıdaki yazıları, tam olarak belirlediğin sırayla çekiyoruz.
  // (filter(Boolean) kısmı, eğer yanlışlıkla hatalı bir isim yazarsan sitenin çökmesini engeller)
  const carouselPosts = featuredPostSlugs
    .map(slug => postsData.find(post => post.slug === slug))
    .filter(Boolean);

  return (
    <section className="bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-24 relative">
        
        {/* Başlık ve Kontrol Alanı */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Ela Akademi</h2>
            <p className="text-slate-600 text-[17px] font-light leading-relaxed">
              Dijital dünyadaki son trendler, web teknolojileri ve pazarlama ipuçları hakkında uzman ekibimizin kaleminden güncel makaleler.
            </p>
          </div>
          
          {/* Yönlendirme ve Slider Butonları */}
          <div className="flex items-center gap-4">
            <Link 
              href="/blog" 
              className="hidden md:inline-flex items-center justify-center px-6 py-3 border-2 border-slate-200 text-slate-700 font-semibold rounded-full hover:border-[#933c81] hover:text-[#933c81] transition-all whitespace-nowrap bg-white"
            >
              Tüm Yazıları Gör
            </Link>
            
            {/* Sol - Sağ Ok Butonları */}
            <div className="flex gap-2">
              <button 
                onClick={() => scroll("left")}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[#933c81] hover:border-[#933c81] hover:shadow-md transition-all focus:outline-none"
                aria-label="Önceki yazılar"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button 
                onClick={() => scroll("right")}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[#933c81] hover:border-[#933c81] hover:shadow-md transition-all focus:outline-none"
                aria-label="Sonraki yazılar"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* CSS Scroll Snap Slider Alanı */}
        <div className="relative -mx-6 px-6 lg:-mx-10 lg:px-10">
          <div 
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {carouselPosts.map((post: any) => (
              <div 
                key={post.id} 
                className="snap-start shrink-0 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)]"
              >
                <Link href={`/${post.slug}`} className="group h-full bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  
                  {/* Resim Alanı */}
                  <div className="relative w-full aspect-[640/320] bg-slate-100 overflow-hidden">
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-white/90 backdrop-blur-sm text-[#933c81] text-[12px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-sm">
                        {post.category}
                      </span>
                    </div>
                    {post.image ? (
                      <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      </div>
                    )}
                  </div>

                  {/* İçerik Alanı */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-[13px] font-medium text-slate-400 mb-4">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#933c81] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 text-[15px] leading-relaxed font-light line-clamp-3 mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center text-[#933c81] font-semibold text-[14px]">
                      Devamını Oku
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </div>
                  </div>

                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Mobil için Tümünü Gör Butonu */}
        <div className="mt-8 text-center md:hidden">
          <Link 
            href="/blog" 
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#933c81] text-[#933c81] font-bold rounded-full hover:bg-[#933c81] hover:text-white transition-all w-full"
          >
            Tüm Yazıları Gör
          </Link>
        </div>

      </div>
    </section>
  );
}