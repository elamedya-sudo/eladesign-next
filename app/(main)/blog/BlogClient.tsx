"use client"; // Etkileşim (Filtre ve Buton) için gerekli

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import postsData from "@/data/posts.json";

export default function BlogClient() {
  const brandColor = "#933c81";

  // 1. JSON içindeki tüm benzersiz kategorileri bul ve "Tümü" seçeneğini başa ekle
  const allCategories = ["Tümü", ...Array.from(new Set(postsData.map(post => post.category)))];

  // 2. React State'leri (Aktif Kategori, Ekranda Görünen Yazı Sayısı ve Otomatik Yükleme Sayacı)
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [visibleCount, setVisibleCount] = useState(6); // İlk etapta 6 yazı göster
  const [autoLoadCount, setAutoLoadCount] = useState(0); // Sensörle otomatik yükleme limiti
  
  const loaderRef = useRef(null); // Sonsuz kaydırma sensörü

  // 3. Seçilen kategoriye göre yazıları filtrele
  const filteredPosts = postsData.filter(post => 
    activeCategory === "Tümü" ? true : post.category === activeCategory
  );

  // 4. Sadece 'visibleCount' kadar yazıyı ekrana basmak için kes (slice)
  const displayedPosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  // 5. Sonsuz Kaydırma Sensörü (Intersection Observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Eğer sensör ekranda göründüyse, hala gösterilecek yazı varsa ve limiti (2 kez) aşmadıysak
        if (entries[0].isIntersecting && hasMore && autoLoadCount < 2) {
          setVisibleCount((prev) => prev + 6);
          setAutoLoadCount((prev) => prev + 1);
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [hasMore, autoLoadCount]);

  // Manuel Buton Tıklaması
  const handleLoadMoreManual = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      
      {/* HERO ALANI */}
      <div className="relative isolate bg-slate-900 py-24 sm:py-32 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-[#933c81]/20 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center relative z-10">
          <p className="text-[14px] font-semibold uppercase tracking-widest text-[#e890d6] mb-4">
            BİLGİ MERKEZİ
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            Ela <span style={{ color: brandColor }}>Akademi</span> <br className="hidden md:block" />
            <span className="text-2xl sm:text-3xl lg:text-4xl text-slate-300 font-medium mt-4 block">Dijital Pazarlama & Web Tasarım Blogu</span>
          </h1>
          <p className="max-w-2xl mx-auto text-[17px] leading-8 text-slate-400 font-light">
            Web tasarım trendleri, yazılım mimarileri, SEO ipuçları ve dijital pazarlama dünyasından en güncel gelişmeleri uzman ekibimizin kaleminden okuyun.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16">
        
        {/* KATEGORİ FİLTRELEME BUTONLARI */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {allCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveCategory(category);
                setVisibleCount(6); // Kategori değişince sayacı sıfırla
                setAutoLoadCount(0); // Otomatik yükleme hakkını sıfırla
              }}
              className={`px-6 py-2.5 rounded-full text-[14px] font-semibold transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-[#933c81] text-white shadow-lg shadow-[#933c81]/30" 
                  : "bg-white text-slate-600 border border-slate-200 hover:border-[#933c81] hover:text-[#933c81]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* BLOG KARTLARI */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            <p className="text-xl font-medium">Bu kategoride henüz yazı bulunmuyor.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {displayedPosts.map((post) => (
                <Link key={post.id} href={`/${post.slug}`} className="group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                  
                  {/* Resim Alanı */}
                  <div className="relative w-full aspect-[640/290] bg-slate-100 overflow-hidden">
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-white/90 backdrop-blur-sm text-[#933c81] text-[12px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-sm">
                        {post.category}
                      </span>
                    </div>
                    {post.image ? (
                      <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      </div>
                    )}
                  </div>

                  {/* Metin Alanı */}
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
              ))}
            </div>

            {/* Görünmez Sensör ve Yükleme Göstergesi (İlk 2 otomatik yükleme için) */}
            {hasMore && autoLoadCount < 2 && (
              <div ref={loaderRef} className="h-24 w-full flex justify-center items-center mt-8">
                <div className="w-8 h-8 border-4 border-[#933c81] border-t-transparent rounded-full animate-spin opacity-50"></div>
              </div>
            )}

            {/* DAHA FAZLA YÜKLE BUTONU (Otomatik yükleme hakkı bitince görünür) */}
            {hasMore && autoLoadCount >= 2 && (
              <div className="flex justify-center">
                <button 
                  onClick={handleLoadMoreManual}
                  className="bg-white border-2 border-slate-200 text-slate-700 font-bold px-10 py-4 rounded-full hover:border-[#933c81] hover:text-[#933c81] transition-all duration-300 flex items-center gap-2"
                >
                  <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                  Daha Fazla Yükle
                </button>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
}