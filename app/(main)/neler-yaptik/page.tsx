"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import projectsData from "@/data/projects.json";

export default function NelerYaptikPage() {
  const [filter, setFilter] = useState("Tümü");
  const [visibleCount, setVisibleCount] = useState(6);

  // Kategorileri belirle
  const categories = ["Tümü", "Web Tasarım", "E-Ticaret", "Kurumsal Kimlik", "SEO"];

  // Seçili kategoriye göre projeleri filtrele
  const filteredProjects = filter === "Tümü" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  // Ekranda gösterilecek proje sayısını ayarla
  const displayedProjects = filteredProjects.slice(0, visibleCount);

  // Filtre değiştiğinde sayacı sıfırla
  const handleFilterChange = (cat: string) => {
    setFilter(cat);
    setVisibleCount(6);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-20">
      
      {/* Sayfa Başlığı */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Neler Yaptık?</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Ela Teknoloji ve Tasarım olarak bugüne kadar hayata geçirdiğimiz başarılı dijital projelerden bazıları.
        </p>
      </div>

      {/* Kategori Filtreleme Butonları */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => handleFilterChange(cat)}
            className={`px-6 py-2.5 rounded-full text-[15px] font-semibold transition-all duration-300 ${
              filter === cat 
                ? "bg-[#933c81] text-white shadow-md transform scale-105" 
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Proje Grid Yapısı */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project) => (
          <div key={project.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative h-64 overflow-hidden bg-slate-50">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-[#933c81]/10 text-[#933c81] text-xs font-bold rounded-full mb-3">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Daha Fazla Yükle Butonu */}
      {visibleCount < filteredProjects.length && (
        <div className="text-center mt-16">
          <button 
            onClick={() => setVisibleCount(prev => prev + 6)}
            className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            Daha Fazla Proje Yükle
          </button>
        </div>
      )}

      {/* Proje Bulunamadı Durumu */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-slate-500">
          Bu kategoride henüz proje eklenmemiş.
        </div>
      )}

    </div>
  );
}