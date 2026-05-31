import Link from "next/link";

export default function Services() {
  const brandColor = "#933c81";

  const services = [
    {
      title: "Web Tasarım",
      desc: "Terzi işi butik tasarımlar ve Next.js mimarisiyle ultra hızlı, modern arayüzler.",
      // Globe / Web Icon
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-3.6-9m3.6 9a9 9 0 003.6-9m-3.6-9a9 9 0 013.6 9m-3.6-9a9 9 0 00-3.6 9" />,
    },
    {
      title: "E-Ticaret Sistemleri",
      desc: "PayTR entegreli, yüksek dönüşüm oranlı ve güvenli Headless e-ticaret altyapıları.",
      // Cart Icon
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />,
    },
    {
      title: "GEO & AIO Optimizasyonu",
      desc: "Yapay zeka arama motorlarının (Generative Engine) markanızı öğrenmesi için modern optimizasyon.",
      // Brain / AI Icon
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
    },
    {
      title: "Stratejik SEO",
      desc: "Klasik arama motoru optimizasyonunu modern veri yapıları ile güçlendirerek üst sıralara taşıma.",
      // Search / Trend Icon
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />,
    },
    {
      title: "Özel Web Yazılım",
      desc: "Supabase ve Next.js gücüyle ajansınıza veya markanıza özel CRM ve yönetim panelleri.",
      // Code Icon
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
    },
    {
      title: "Google Ads (Partner)",
      desc: "Sertifikalı uzmanlarımızla yüksek dönüşümlü ve bütçe dostu reklam kampanyası yönetimi.",
      // Target Icon
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v8l9-11h-7z" />,
    },
  ];

  return (
    <section className="py-24 bg-white relative border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[13px] font-semibold uppercase tracking-widest text-[#933c81] mb-3">
            360° DİJİTAL ÇÖZÜMLER
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Aklınızdaki Projeyi <br className="hidden sm:block" />
            <span style={{ color: brandColor }}>Hayata Geçiriyoruz</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#933c81]/30 hover:shadow-xl hover:shadow-[#933c81]/5 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <svg className="w-7 h-7" style={{ color: brandColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {service.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#933c81] transition-colors">
                {service.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-slate-600 font-light mb-6">
                {service.desc}
              </p>
              <Link href="/hizmetler" className="inline-flex items-center text-[14px] font-semibold text-slate-500 group-hover:text-[#933c81] transition-colors">
                Detaylı Bilgi <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}