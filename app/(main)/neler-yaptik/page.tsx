import Link from "next/link";
import Image from "next/image";

export default function PortfolioPage() {
  const brandColor = "#933c81";

  // Portfolyo için görsel filtre sekmeleri
  const categories = ["Tümü", "Kurumsal Web", "E-Ticaret", "Endüstriyel", "Özel Yazılım"];

  // public/projeler klasörüne attığın mevcut resimler
  const projects = [
    { id: 1, title: "Vicom Energy", category: "Kurumsal Web", slug: "vicom-energy", image: "/projeler/vicom-ref.png" },
    { id: 2, title: "Polight", category: "Kurumsal Web", slug: "polight", image: "/projeler/polight-ref.png" },
    { id: 3, title: "Online Kombi", category: "E-Ticaret", slug: "online-kombi", image: "/projeler/onlinekombi-ref.png" },
    { id: 4, title: "Çakmakçı", category: "Endüstriyel", slug: "cakmakci", image: "/projeler/cakmakci-ref.png" },
    { id: 5, title: "Vitrom", category: "Kurumsal Web", slug: "vitrom", image: "/projeler/vitrom-ref.png" },
    { id: 6, title: "ZMA", category: "Kurumsal Web", slug: "zma", image: "/projeler/zma-ref.png" },
    // Not: Klasörüne yeni resimler ekledikçe buraya yeni satırlar kopyalayabilirsin.
  ];

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
            Gurur Duyduğumuz <br className="hidden md:block" />
            <span style={{ color: brandColor }}>Dijital Hikayeler</span>
          </h1>
          <p className="max-w-2xl mx-auto text-[17px] leading-8 text-slate-600 font-light">
            Farklı sektörlerden markalar için Next.js ve modern web teknolojileriyle ürettiğimiz, performansı ve tasarımıyla öne çıkan projelerimizi inceleyin.
          </p>
        </div>
      </div>

      {/* Projeler ve Filtreleme Alanı */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        
        {/* Filtre Menüsü */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2.5 rounded-full text-[14px] font-medium transition-all duration-300 ${
                index === 0 
                  ? "bg-[#933c81] text-white shadow-md" // "Tümü" sekmesi aktif görünüm
                  : "bg-white text-slate-600 border border-slate-200 hover:border-[#933c81] hover:text-[#933c81]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projeler Grid Yapısı (Anasayfadaki ile aynı sevilen yapı) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link 
              href={`/referanslar/${project.slug}`} 
              key={project.id} 
              className="group relative block overflow-hidden rounded-2xl bg-white border-2 border-transparent hover:border-[#933c81] shadow-sm hover:shadow-2xl hover:shadow-[#933c81]/20 transition-all duration-500 aspect-[4/3]"
            >
              
              <div className="absolute inset-0 bg-[#f8f9fa] transition-transform duration-700 group-hover:scale-105 p-4">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-contain p-2" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

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

        {/* Daha Fazla Yükle Butonu */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-[14px] hover:bg-slate-100 transition-colors">
            <svg className="w-5 h-5 animate-spin-slow text-[#933c81]" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Daha Fazla Proje Yükle
          </button>
        </div>

      </div>
    </div>
  );
}