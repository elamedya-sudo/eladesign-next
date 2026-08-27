import Link from 'next/link';

// 1. METADATA: Ela Teknoloji vurgusu ve Ürün Odaklı SEO
export const metadata = {
  title: "B2B SaaS CRM ve Sipariş Portalı | Ela Teknoloji", 
  description: "Ela Teknoloji'nin yeni nesil B2B CRM sistemiyle kendi sipariş portalınızı kurun, tekliflerinizi saniyeler içinde hazırlayıp müşterilerinize profesyonelce iletin.",
  alternates: {
    canonical: 'https://www.eladesign.org/saas-ve-crm-cozumleri',
  }
};

export default function CustomSoftwarePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Anasayfa",
        "item": "https://www.eladesign.org/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Hizmetlerimiz",
        "item": "https://www.eladesign.org/hizmetler"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "SaaS CRM Ürünü",
        "item": "https://www.eladesign.org/saas-ve-crm-cozumleri"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="bg-white min-h-screen pb-24 font-sans">
        
        {/* HERO ALANI: Satış Odaklı Dönüşüm */}
        <div className="relative isolate bg-slate-900 py-24 sm:py-32 overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-1/3 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-[#933c81]/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-1/4 translate-y-1/3 -translate-x-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px]"></div>
          </div>
          
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-[13px] font-bold tracking-widest uppercase mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
              Ela Teknoloji'den Yeni Nesil Ürün
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl mb-8 leading-tight">
              B2B Satış ve Sipariş Süreçlerinde <br className="hidden md:block" />
              <span style={{ color: "#e890d6" }}>Yeni Bir Dönem</span>
            </h1>
            
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-light mb-10">
              Kendi B2B sipariş portalınızı kurun, saniyeler içinde teklif hazırlayın ve müşteri ilişkilerinizi tek ekrandan yönetin. Ela Teknoloji güvencesiyle geliştirilen yeni nesil SaaS CRM'i <strong>şimdi tamamen ücretsiz</strong> kullanmaya başlayın.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a 
                href="https://app.websitesiyapanfirmalar.net/register" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#933c81] text-white font-bold text-lg hover:bg-[#7a316b] hover:scale-105 transition-all shadow-lg shadow-[#933c81]/30"
              >
                Hemen Ücretsiz Başla
              </a>
              <a 
                href="https://app.websitesiyapanfirmalar.net/login" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Sisteme Giriş Yap
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 mt-16 lg:mt-24">
          
          {/* SİSTEMİN ÖZELLİKLERİ */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Sistem Sizin Yerinize Çalışsın</h2>
              <p className="text-slate-600 text-lg">Bir müşteri kayıt defterinden çok daha fazlası. Satışlarınızı hızlandıran ve markanıza prestij katan modüller.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:border-[#933c81]/30 transition-all group shadow-sm hover:shadow-md">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  🛒
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">B2B Müşteri Vitrini (Portal)</h3>
                <p className="text-slate-600 leading-relaxed">
                  Müşterilerinize veya bayilerinize kendinize ait bir e-ticaret vitrini sunun. Kendilerine özel şifreleriyle girip ürün kataloğunuzu incelesinler, stok durumunu görsünler ve 7/24 anında sipariş talebi oluştursunlar.
                </p>
              </div>

              <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:border-[#933c81]/30 transition-all group shadow-sm hover:shadow-md">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  📄
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Akıllı Teklif Yönetimi</h3>
                <p className="text-slate-600 leading-relaxed">
                  Karmaşık Excel tablolarına ve kaybolan PDF'lere son. Saniyeler içinde ürünlerinizi seçerek profesyonel hizmet teklifleri oluşturun, sistem üzerinden şık e-postalarla müşterinize iletin ve onay/ret durumlarını anlık takip edin.
                </p>
              </div>

              <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:border-[#933c81]/30 transition-all group shadow-sm hover:shadow-md">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  📦
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ürün ve Stok Takibi</h3>
                <p className="text-slate-600 leading-relaxed">
                  Görselli ürün kataloğunuzu tek merkezden yönetin. Alış ve satış fiyatlarınızı belirleyin, stok miktarlarınızı güncel tutun. Stoğu biten ürünler müşteri portalında otomatik olarak satışa kapanır.
                </p>
              </div>

              <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:border-[#933c81]/30 transition-all group shadow-sm hover:shadow-md">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  ✉️
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Kurumsal E-Posta Bildirimleri</h3>
                <p className="text-slate-600 leading-relaxed">
                  Tüm sipariş ve teklif süreçlerinde müşterilerinizin gelen kutusuna şirketinizin adıyla şık ve kurumsal e-postalar düşsün. Marka itibarınızı güçlendirin ve iletişimi tamamen otomatikleştirin.
                </p>
              </div>
            </div>
          </div>

          {/* AJANS HİZMETİNE YÖNLENDİRME (Özel İstekler İçin) */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-slate-900 to-[#933c81] rounded-[40px] p-12 md:p-16 relative overflow-hidden shadow-2xl">
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-left max-w-2xl">
                  <h2 className="text-3xl font-extrabold text-white mb-4">Sistemi Daha da Özelleştirmek mi İstiyorsunuz?</h2>
                  <p className="text-white/80 text-lg">
                    Mevcut SaaS çözümümüz işinize %100 uymuyorsa, Ela Teknoloji olarak bu altyapıyı tamamen sizin iş modelinize, muhasebe programlarınıza veya özel süreçlerinize göre baştan kodlayabiliriz.
                  </p>
                </div>
                <div className="shrink-0">
                  <Link 
                    href="/iletisim" 
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-slate-900 font-bold text-[16px] hover:bg-slate-50 hover:shadow-xl hover:-translate-y-1 transition-all"
                  >
                    Özel Proje Görüşmesi
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}