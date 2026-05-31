import Link from "next/link";
import Image from "next/image";

export default function ProjectsPreview() {
  const brandColor = "#933c81";

  const projects = [
    { id: 1, title: "Vicom Energy", category: "Uluslararası Enerji", slug: "vicom-energy", image: "/projeler/vicom-ref.png" },
    { id: 2, title: "Polight", category: "Kurumsal Web", slug: "polight", image: "/projeler/polight-ref.png" },
    { id: 3, title: "Online Kombi", category: "E-Ticaret", slug: "online-kombi", image: "/projeler/onlinekombi-ref.png" },
    { id: 4, title: "Çakmakçı", category: "Endüstriyel", slug: "cakmakci", image: "/projeler/cakmakci-ref.png" },
    { id: 5, title: "Vitrom", category: "Kurumsal Çözüm", slug: "vitrom", image: "/projeler/vitrom-ref.png" },
    { id: 6, title: "ZMA", category: "Kurumsal Web", slug: "zma", image: "/projeler/zma-ref.png" },
  ];

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Neler <span style={{ color: brandColor }}>Yaptık</span>
            </h2>
            <p className="mt-4 text-[16px] text-slate-600 font-light leading-relaxed">
              Farklı sektörlerden markalar için ürettiğimiz, performansı ve tasarımıyla öne çıkan bazı özel projelerimiz.
            </p>
          </div>
          <Link
            href="/neler-yaptik"
            className="group inline-flex items-center gap-x-2 text-[14px] font-semibold text-slate-700 hover:text-[#933c81] transition-colors whitespace-nowrap mb-2"
          >
            Tüm Projeleri İncele
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link 
              href={`/referanslar/${project.slug}`} 
              key={project.id} 
              // İSTEDİĞİN İNCE MOR ÇERÇEVE EFEKTİ BURADA: border-2 ve hover:border-[#933c81] eklendi
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
      </div>
    </section>
  );
}