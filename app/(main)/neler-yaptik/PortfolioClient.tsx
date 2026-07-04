"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import projects from "@/data/projects.json"; 

export default function PortfolioClient() {
  const brandColor = "#933c81";

  const [filter, setFilter] = useState("Tümü");
  const [visibleCount, setVisibleCount] = useState(6);
  const [autoLoadCount, setAutoLoadCount] = useState(0); // Otomatik yüklemeyi sınırlandırmak için
  const loaderRef = useRef(null); // Sayfa sonu sensörü

  const categories = ["Tümü", "Kurumsal Web", "E-Ticaret", "Endüstriyel", "İnşaat & Mimarlık", "Özel Yazılım"];

  // Seçili kategoriye göre filtreleme mantığı
  const filteredProjects = filter === "Tümü" 
    ? projects 
    : projects.filter((project: any) => project.category === filter);

  // Ekranda kaç adet gösterileceğinin sınırı
  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  // Filtre değişince her şeyi sıfırla
  const handleCategoryChange = (category: string) => {
    setFilter(category);
    setVisibleCount(6); 
    setAutoLoadCount(0); // Yeni kategoride otomatik yükleme hakkını sıfırla
  };

  // Sonsuz Kaydırma Sensörü (Intersection Observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Sensör ekranda göründüyse, daha fazla proje varsa ve otomatik yükleme limiti (2) dolmadıysa
        if (entries[0].isIntersecting && hasMore && autoLoadCount < 2) {
          setVisibleCount((prev) => prev + 6);
          setAutoLoadCount((prev) => prev + 1);
        }
      },
      { threshold: 0.1 } // Sensörün %10'u ekrana girdiğinde tetikle
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
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* Üst Başlık (Hero) Alanı */}
      <div className="relative isolate bg-slate-50 py-20 sm:py-28 border-b border-slate-200">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#933c81] to-[#e890d6] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center">
          <p className="text-[14px] font-semibold uppercase tracking-widest text-[#933c81] mb-4">
            PORTFOLYO
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6">
            Web Tasarım ve Yazılım <br className="hidden md:block" />
            <span style={{ color: brandColor }}>Referanslarımız</span>
          </h1>
          <p className="max-w-2xl mx-auto text-[17px] leading-8 text-slate-600 font-light">
            Farklı sektörlerden markalar için Next.js ve modern web teknolojileriyle ürettiğimiz, performansı ve tasarımıyla öne çıkan bazı projelerimizi inceleyin.
          </p>
        </div>
      </div>

      {/* Projeler ve Filtreleme Alanı */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        
        {/* Filtre Menüsü */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2.5 rounded-full text-[14px] font-medium transition-all duration-300 ${
                filter === category 
                  ? "bg-[#933c81] text-white shadow-md" 
                  : "bg-white text-slate-600 border border-slate-200 hover:border-[#933c81] hover:text-[#933c81]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projeler Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project: any) => (
            <Link 
              href={`/referanslar/${project.slug}`} 
              key={project.id} 
              className="group relative block overflow-hidden rounded-2xl bg-[#f8f9fa] border-2 border-transparent hover:border-[#933c81] shadow-sm hover:shadow-2xl hover:shadow-[#933c81]/20 transition-all duration-500 aspect-[3/2]"
            >
              
              {/* Görsel Alanı */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Karartma Örtüsü */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Metin Alanı */}
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                <p className="text-[12px] font-semibold tracking-widest text-[#e890d6] uppercase mb-2 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-white transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {project.title}
                </h3>
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

        {/* Daha Fazla Yükle Butonu (Otomatik yükleme hakkı bitince görünür) */}
        {hasMore && autoLoadCount >= 2 && (
          <div className="mt-16 text-center">
            <button 
              onClick={handleLoadMoreManual}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-[14px] hover:bg-slate-100 transition-colors"
            >
              <svg className="w-5 h-5 text-[#933c81]" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Daha Fazla Proje Yükle
            </button>
          </div>
        )}

      </div>
    </div>
  );
}