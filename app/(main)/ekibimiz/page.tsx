import Link from "next/link";
import Image from "next/image";

// 1. SAYFAYA ÖZEL METADATA VE CANONICAL (SEO)
export const metadata = {
  title: "Uzman Ekibimiz | Web Tasarım ve Yazılım Mühendisleri",
  description: "Ela Design'ın dijital dünyadaki tecrübeli uzman ekibi. Web tasarım, yazılım, SEO ve kreatif süreçleri yürüten profesyonel kadromuzla tanışın.",
  alternates: {
    canonical: 'https://www.eladesign.org/ekibimiz',
  }
};

export default function TeamPage() {
  const brandColor = "#933c81";

  const team = [
    { name: "Hüseyin Yüksel", role: "Kurucu - Bilgisayar Mühendisi", image: "/ekip/hyuksel-2-1.jpg" },
    { name: "Halil Yüksel", role: "Google ADS & SEO - Kurucu Ortak", image: "/ekip/halil-yuksel.jpg" },
    { name: "Ayşe Yüksel", role: "Kreatif Direktör - Kurucu Ortak", image: "/ekip/ayse-ekip-1.jpg" },
    { name: "Tanyel Çakır", role: "Mimar - 3D Max Modelleme", image: "/ekip/tanyel-cakir.jpg" },
    { name: "Semiha Parlak", role: "Grafik Tasarım", image: "/ekip/semiha-parlak.jpg" },
    { name: "Ahmet Temel", role: "Sosyal Medya Yöneticisi", image: "/ekip/ahmet-temel.jpg" },
  ];

  // 2. PERSON SCHEMA (Her bir ekip üyesi için SEO gücü)
  const teamSchema = team.map((member) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": member.name,
    "jobTitle": member.role,
    "worksFor": {
      "@type": "Organization",
      "name": "Ela Design"
    }
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />
      
      <div className="bg-white min-h-screen pt-12 pb-20">
        
        {/* Sayfa başlığı */}
        <div className="max-w-[1100px] mx-auto px-6 text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Çözüm Odaklı <span style={{ color: brandColor }}>Uzman Kadromuz</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-[15px] leading-relaxed">
            Çeyrek asırlık mühendislik deneyimi ve küresel operasyon gücüyle markanızı dijitalin zirvesine taşıyoruz.
          </p>
        </div>

        {/* Ekip Grid */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group bg-white rounded-xl p-4 border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#933c81]/20 transition-all duration-300">
                <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden mb-5">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="text-center pb-2">
                  <h3 className="text-base font-bold text-slate-900">{member.name}</h3>
                  <p className="text-[11px] font-bold text-[#933c81] uppercase tracking-wider mb-4">{member.role}</p>
                  <div className="flex justify-center gap-4 text-[12px] font-medium text-slate-400">
                    <Link href="mailto:info@eladesign.org" className="hover:text-[#933c81]">E-posta</Link>
                    <Link href="#" className="hover:text-[#933c81]">LinkedIn</Link>
                    <Link href="#" className="hover:text-[#933c81]">Instagram</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Opsiyonel: CTA */}
        <div className="mt-20 text-center">
            <Link href="/iletisim" className="inline-block bg-[#933c81] text-white px-10 py-4 rounded-full font-bold text-[15px] hover:bg-[#7a316a] transition-all transform hover:-translate-y-1">
              Ekibimizle Çalışmaya Başlayın
            </Link>
        </div>
      </div>
    </>
  );
}