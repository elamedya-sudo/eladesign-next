import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Küresel Operasyon Ağımız | Ela Teknoloji",
  description: "Kurumsal web tasarım, modern mühendislik çözümleri ve küresel GEO altyapısı.",
};

export default function NerelerdeyizPage() {
  const locations = [
    {
      title: "İstanbul - Türkiye",
      tag: "Merkez Ofis & Ar-Ge",
      desc: "Ela Teknoloji & Veluxe Home Yönetim Merkezi",
    },
    {
      title: "Sydney - Avustralya",
      tag: "E-Ticaret & Ads Yönetimi",
      desc: "Toner Masters Yüksek ROAS Operasyonları",
    },
    {
      title: "Abuja - Nijerya",
      tag: "Kurumsal Enerji Altyapısı",
      desc: "Vicom Energy - Ulusal Elektrik Dağıtım Sistemleri",
    },
    {
      title: "New York & Texas - Amerika",
      tag: "Finans & Üretim Pazarı",
      desc: "iQuanta, Wageruler, Pergolasan & Ambiance Style",
    },
    {
      title: "Paris - Fransa",
      tag: "Premium Moda E-Ticaret",
      desc: "Galaxy Couture - Haute Couture Dijital Vitrini",
    },
    {
      title: "Olten - İsviçre",
      tag: "Çok Dilli Sistem Yönetimi",
      desc: "The Supreme Steak House Çözüm Ortaklığı",
    },
    {
      title: "Kudüs - İsrail / Filistin",
      tag: "Orta Doğu E-Ticaret Ağı",
      desc: "BB Baby - Bölgesel Anne & Bebek Pazarı",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Başlık Alanı */}
        <div className="text-center mb-12 mt-16">
          <h1 className="text-4xl font-bold text-gray-900 tracking-wide">
            Küresel Operasyon Ağımız
          </h1>
          <p className="text-gray-500 mt-2">
            Çeyrek asırlık mühendislik deneyimi ve sınır tanımayan operasyon gücü.
          </p>
        </div>

        {/* Ana İçerik Kutusu */}
        <div className="bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-gray-100 min-h-[400px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start animate-fadeIn">
            
            {/* Sol Sütun: Konum Listesi (Scrollable) */}
            <div 
              className="lg:col-span-1 space-y-3 max-h-[450px] overflow-y-auto pr-2"
              style={{ scrollbarWidth: "thin", scrollbarColor: "#df6e32 #f3f4f6" }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 sticky top-0 bg-white pt-2 pb-2 z-10 border-b border-gray-100">
                Aktif Lokasyonlar
              </h2>
              
              {locations.map((loc, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-orange-200 transition-colors">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-bold text-gray-900 text-sm">{loc.title}</h4>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shrink-0 ml-2"></span>
                  </div>
                  <p className="text-[11px] font-bold text-[#933c81] uppercase tracking-wider">
                    {loc.tag}
                  </p>
                  <p className="text-gray-500 text-xs mt-1 italic">
                    {loc.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Sağ Sütun: Karanlık Kutu (Global Nodes) */}
            <div className="lg:col-span-2 bg-slate-900 rounded-2xl p-6 relative h-full min-h-[450px] flex flex-col justify-center items-center text-center overflow-hidden border border-slate-800 shadow-inner">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              <div className="relative z-10 space-y-4 max-w-lg p-6 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50">
                <div className="inline-flex p-3 bg-slate-800 rounded-full text-[#df6e32] font-bold text-xl mb-2 shadow-[0_0_15px_rgba(223,110,50,0.5)]">
                  🌐
                </div>
                <h3 className="text-2xl font-bold text-white tracking-wide">
                  Sınırları Olmayan Mühendislik
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Projelerimizi lokal bağımlılıklardan uzak, tamamen bulut tabanlı ve küresel CDN (Vercel/Cloudflare Edge) ağları üzerinden dağıtıyoruz. İstanbul merkezimizden kıtalararası çözümler üretiyor; Amerika'dan Avustralya'ya, Avrupa'dan Afrika'ya kesintisiz dijital altyapılar kuruyoruz.
                </p>
                <div className="pt-4 text-[10px] text-slate-500 font-mono tracking-widest break-words">
                  ACTIVE NODES: IST-TR // SYD-AU // ABJ-NG // NYC-US // PAR-FR // OLT-CH // IL-ME
                </div>
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </div>
  );
}