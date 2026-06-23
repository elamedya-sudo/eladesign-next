import Image from 'next/image';
import Link from 'next/link';
import projects from '@/data/projects.json'; 

export default function FeaturedProjects() {
  // En güçlü vaka analizlerini filtreliyoruz (slug adları JSON'dakilerle birebir eşleşmeli)
  const featuredSlugs = ['atm', 'aygun-tuce-atas-klinik-yazilimi', 'dwt-turkiye'];
  const featured = projects.filter(p => featuredSlugs.includes(p.slug));

  return (
    <section className="py-24 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        
        {/* Başlık Alanı */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Dijital Dönüşümde Neler <span className="text-[#933c81]">Başardık?</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-[16px] text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            Geleneksel sistemleri geride bıraktık. Next.js ve modern web mimarileriyle markaların dijital operasyonlarını nasıl otomatize ettiğimizi inceleyin.
          </p>
        </div>

        {/* Projeler Listesi */}
        <div className="space-y-32">
          {featured.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Görsel Alanı */}
              <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-slate-900/50 group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent opacity-80"></div>
                <div className="absolute bottom-8 left-8 right-8">
                   <span className="inline-block px-4 py-1.5 bg-[#933c81] text-white text-xs font-bold tracking-widest uppercase rounded-full mb-3 shadow-lg">
                     {project.category}
                   </span>
                </div>
              </div>

              {/* İçerik ve Metrik Alanı */}
              <div className="w-full lg:w-1/2 space-y-8 lg:pr-8">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className="text-[16px] text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                      {project.description}
                    </p>
                  )}
                </div>
                
                {/* Otorite Sağlayan Metrikler */}
                <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate-100 dark:border-slate-800">
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Performans Skoru</p>
                    <p className="text-3xl font-black text-[#933c81] mt-2">100/100</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Kullanılan Mimari</p>
                    <p className="text-xl font-bold text-slate-800 dark:text-slate-200 mt-3">Next.js Edge</p>
                  </div>
                </div>

                {/* Yönlendirme Butonu */}
                <div>
                  <Link 
                    href={`/referanslar/${project.slug}`}
                    className="inline-flex items-center gap-x-2 text-[14px] font-semibold text-white bg-slate-900 hover:bg-[#933c81] px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  >
                    Vaka Analizini İncele
                    <span className="text-lg leading-none">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}