import Link from "next/link";

export default function SuccessStories() {
  const brandColor = "#933c81";

  // Gerçek operasyonların üzerinden kurgulanmış başarı metrikleri
  const stories = [
    {
      client: "Australian Toner Masters",
      metric: "AU$30.000+",
      metricLabel: "Aylık Yönetilen Reklam Bütçesi",
      highlight: "24 VIP Ürün GEO Optimizasyonu",
      desc: "Avustralya pazarında B2B arama hacimlerini domine ederek, hedef odaklı Google Ads ve AIO stratejileriyle dönüşüm maliyetlerini minimize ettik.",
    },
    {
      client: "The Supreme Steak House",
      metric: "DACH",
      metricLabel: "Bölgesi Global SEO & Göç",
      highlight: "thesupreme.ch Başarı Hikayesi",
      desc: "İsviçre pazarında Almanca lokalizasyon, sıfır veri kaybıyla domain taşıma ve yapılandırılmış veri (Schema) kurulumuyla yerel arama hakimiyeti sağladık.",
    },
    {
      client: "Veluxe & CRM Altyapıları",
      metric: "%100",
      metricLabel: "Performans & Otomasyon",
      highlight: "Next.js & Supabase Mimarisi",
      desc: "Ağır monolitik yapılardan modern Headless mimariye geçiş yaparak sayfa yüklenme hızlarını saliseler seviyesine indirdik ve organik görünürlüğü katladık.",
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Arka plan dekoratif elementleri */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-[#933c81]/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-[13px] font-semibold uppercase tracking-widest text-[#e890d6] mb-3">
              KÜRESEL VE YEREL BAŞARILAR
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Söz Değil, <span style={{ color: "#e890d6" }}>Rakamlar</span> Konuşur
            </h2>
            <p className="mt-4 text-[16px] text-slate-400 font-light leading-relaxed">
              SEO, GEO ve Performans Pazarlamasında (Ads) markalarımız için ürettiğimiz ölçülebilir değerler.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div 
              key={index} 
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:bg-slate-800 transition-colors duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-[15px] font-medium text-slate-400 mb-6 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-slate-600"></span>
                  {story.client}
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-black text-white tracking-tighter block mb-2">
                    {story.metric}
                  </span>
                  <span className="text-[14px] font-semibold text-[#e890d6] uppercase tracking-wider block">
                    {story.metricLabel}
                  </span>
                </div>
                <p className="text-[16px] text-slate-300 font-light leading-relaxed mb-6">
                  {story.desc}
                </p>
              </div>
              
              <div className="pt-6 border-t border-slate-700/50 mt-auto">
                <span className="inline-flex items-center gap-2 text-[14px] font-medium text-white bg-slate-700/30 px-4 py-2 rounded-full">
                  <svg className="w-4 h-4 text-[#e890d6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {story.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}