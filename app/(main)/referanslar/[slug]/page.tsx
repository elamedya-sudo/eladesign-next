import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import projectsData from "@/data/projects.json";

// 1. DİNAMİK SEO VE METADATA
export async function generateMetadata({ params }: { params: any }) {
  const resolvedParams = await params;
  const decodedSlug = decodeURIComponent(resolvedParams.slug).trim();
  
  // Tonermasters için özel SEO
  if (decodedSlug === "tonermasters") {
    return {
      title: "Tonermasters Başarı Hikayesi | Özel CRM ve Web Entegrasyonu",
      description: "Altyapısı çöken e-ticaret devini 15 günde nasıl hayata döndürdük? WooCommerce, Özel Toner Alarm CRM'i ve Bot kalkanı başarı hikayemiz.",
      alternates: { canonical: `https://www.eladesign.org/referanslar/tonermasters` }
    };
  }

  // Diğer projeler JSON'dan çekilecek
  const project = projectsData.find((p) => p.slug === decodedSlug);
  if (!project) return { title: "Proje Bulunamadı" };
  
  return { 
    title: `${project.title} | Ela Design Referanslar`,
    description: `Ela Design ekibi tarafından hayata geçirilen ${project.title} ${project.category} projesini inceleyin.`,
    alternates: { canonical: `https://www.eladesign.org/referanslar/${project.slug}` }
  };
}

export default async function ProjectDetailPage({ params }: { params: any }) {
  const resolvedParams = await params;
  const decodedSlug = decodeURIComponent(resolvedParams.slug).trim();

  // Json'da bu projeyi bul
  const project = projectsData.find(p => p.slug === decodedSlug);

  // Eğer sayfa "tonermasters" değilse ve JSON'da da yoksa 404 ver
  if (decodedSlug !== "tonermasters" && !project) {
    notFound();
  }

  // =========================================================================
  // 1. ÖZEL TASARIM (CASE STUDY): TONERMASTERS
  // =========================================================================
  if (decodedSlug === "tonermasters") {
    return (
      <div className="bg-slate-50 min-h-screen pb-24">
        {/* HERO ALANI */}
        <div className="relative isolate bg-slate-900 pt-32 pb-24 overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#933c81]/20 via-slate-900 to-slate-900"></div>
          <div className="max-w-[1000px] mx-auto px-6 lg:px-10 relative z-10">
            <Link href="/neler-yaptik" className="inline-flex items-center text-[#df6e32] font-semibold text-sm hover:text-white transition-colors mb-8">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Tüm Projelere Dön
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-8">
              Tonermasters: 15 Günde Dijital İflasın Eşiğinden <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#933c81] to-[#df6e32]">Global Liderliğe</span>
            </h1>
            <a href="https://www.tonermasters.com.au" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-slate-900 font-bold tracking-wide py-4 px-8 rounded-full shadow-lg hover:shadow-white/20 hover:-translate-y-1 transition-all duration-300">
              Canlı Siteyi İncele
            </a>
          </div>
        </div>

        {/* İÇERİK ALANI */}
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 -mt-10 relative z-20 space-y-8">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">01. 15 Günlük Yazılım Göçü</h2>
            <p className="text-slate-600 leading-relaxed font-light mb-6">Eski sistem iflas ettiğinde, 15 günde %100 uyumlu bir WooCommerce altyapısı kurduk.</p>
          </div>
          {/* Diğer bölümleri buraya Tonermasters içeriğinle doldurabilirsin */}
        </div>
      </div>
    );
  }

  // =========================================================================
  // 2. GENEL ŞABLON: DİĞER PROJELER (JSON'DAN OTOMATİK GELİR)
  // =========================================================================
  if (project) {
    return (
      <div className="bg-slate-50 min-h-screen pb-24">
        <div className="bg-slate-900 pt-32 pb-24 border-b border-slate-800 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">{project.title}</h1>
        </div>
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 -mt-12 relative z-20">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-slate-100">
            {project.image && <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10"><Image src={project.image} alt={project.title} fill className="object-cover" /></div>}
            
            <div className="max-w-3xl mx-auto text-left lg:text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Proje Hakkında</h2>
              
              {(project as any).content ? (
                <div 
                  className="text-slate-600 text-[17px] leading-relaxed font-light [&>p]:mb-6 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-2"
                  dangerouslySetInnerHTML={{ __html: (project as any).content }}
                />
              ) : (
                <p className="text-slate-600 text-[17px] leading-relaxed font-light mb-8 text-center">
                  {(project as any).description || `Ela Design olarak ${project.title} markası için geliştirdiğimiz yüksek performanslı ${project.category} projesi.`}
                </p>
              )}

              <div className="flex flex-wrap justify-center gap-4 pt-8 mt-8 border-t border-slate-100">
                {(project as any).liveUrl && (
                  <a href={(project as any).liveUrl} target="_blank" rel="noopener noreferrer" className="bg-slate-900 text-white px-8 py-3.5 rounded-full font-bold hover:bg-slate-800 transition-all">
                    Canlı Siteyi İncele
                  </a>
                )}
                <Link href="/teklif" className="bg-[#933c81] text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#7a316a] transition-all">
                  Benzer Bir Proje İstiyorum
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}