import Link from 'next/link';

export const metadata = {
  title: "Özel CRM ve SaaS Yazılımları | Ela Teknoloji ve Tasarım",
  description: "İşletmenize özel kodlanmış, akıllı otomasyonlara sahip, yüksek performanslı CRM ve SaaS bulut yazılımları."
};

export default function CustomSoftwarePage() {
  const brandColor = "#933c81";

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* 1. HERO ALANI */}
      <div className="relative isolate bg-slate-900 py-24 sm:py-32 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/3 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-[#933c81]/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-1/4 translate-y-1/3 -translate-x-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-[13px] font-semibold tracking-widest uppercase mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            Mühendislik Harikası Sistemler
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-8 leading-tight">
            İşletmenizin Dijital Beynini <br className="hidden md:block" />
            <span style={{ color: "#e890d6" }}>Sıfırdan Kodluyoruz</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Hazır paket yazılımların sınırlarına mahkum olmayın. Tamamen sizin iş akışınıza göre tasarlanmış, süreçleri otomatize eden, bulut tabanlı Özel CRM ve SaaS platformları inşa ediyoruz. İşinize uymayan yazılımları değil, işinize tam oturan çözümleri kullanın.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 mt-16 lg:mt-24">
        
        {/* 2. NEDEN ÖZEL YAZILIM? (Hazır Paketlere Karşı Biz) */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Neden Özel Bir Sisteme İhtiyacınız Var?</h2>
              <p className="text-slate-600 leading-relaxed mb-6 text-[17px]">
                Piyasadaki standart CRM veya yönetim programları, "herkese uyan tek beden" mantığıyla üretilir. Ancak sizin iş modeliniz, müşteri iletişiminiz ve operasyon süreçleriniz benzersizdir. Standart yazılımlar sizi kendi kalıplarına sokmaya çalışırken işinizi yavaşlatır ve kullanmadığınız yüzlerce özellik için her ay ödeme yapmanıza neden olur.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#933c81]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#933c81]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-slate-700"><strong>Sıfır Lisans Sınırı:</strong> Kullanıcı başına (per-seat) fahiş lisans ücretleri ödemezsiniz. Sistem tamamen size aittir, ekibiniz büyüdükçe maliyetleriniz artmaz.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#933c81]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#933c81]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-slate-700"><strong>Yalnızca İhtiyacınız Olanlar:</strong> Karışık, kalabalık ve öğrenmesi zor ekranlar yerine, sadece operasyonunuzun gerektirdiği tertemiz, modern arayüzler tasarlarız.</p>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#933c81]/10 to-[#e890d6]/10 rounded-[40px] transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-[12px] font-semibold text-slate-400 uppercase tracking-widest">Sistem Paneli</div>
                </div>
                <div className="space-y-4">
                  <div className="h-8 bg-slate-50 rounded-lg w-1/3"></div>
                  <div className="h-24 bg-slate-50 rounded-lg w-full"></div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-32 bg-[#933c81]/5 rounded-lg border border-[#933c81]/10"></div>
                    <div className="h-32 bg-slate-50 rounded-lg"></div>
                    <div className="h-32 bg-slate-50 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. NELER YAPIYORUZ? (Ballandıra Ballandıra Anlatılan Özellikler) */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Sisteminiz Sizin Yerinize Çalışsın</h2>
            <p className="text-slate-600 text-lg">Bir veri tabanından çok daha fazlası. Operasyonel yükünüzü hafifleten, proaktif algoritmalarla donatılmış yapılar kuruyoruz.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:border-[#933c81]/30 transition-all group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                🤖
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Tahmine Dayalı Akıllı Otomasyonlar</h3>
              <p className="text-slate-600 leading-relaxed">
                İşletmenizde müşteri döngülerini manuel takip etmeye son verin. Örneğin; bir müşterinizin aldığı ürünün veya hizmetin periyodik kullanım ömrünü e-ticaret (WooCommerce vb.) verilerinizden otomatik çeker, sarf malzemesi veya abonelik bitmeden hemen önce müşterinize tamamen otonom olarak uyarı, hatırlatma (SMS/Mail) ve yeni teklifler gönderen akıllı algoritmalar yazıyoruz. Sistem, müşteriniz daha ihtiyacını fark etmeden ona ulaşır.
              </p>
            </div>

            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:border-[#933c81]/30 transition-all group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                🔗
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Kusursuz API Entegrasyonları</h3>
              <p className="text-slate-600 leading-relaxed">
                Birbirinden kopuk sistemleri tek bir merkezde konuşturuyoruz. Muhasebe programınız (Logo, Mikro, Paraşüt), e-ticaret altyapınız, sanal POS sistemleriniz, kargo sağlayıcılarınız ve pazaryeri hesaplarınız tek bir özel CRM paneli üzerinden anlık verilerle (Real-time) haberleşir. Çift veri girişi tarih olur.
              </p>
            </div>

            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:border-[#933c81]/30 transition-all group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                👥
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">B2B ve B2C Müşteri Portalları</h3>
              <p className="text-slate-600 leading-relaxed">
                Müşterilerinizin veya bayilerinizin kendi siparişlerini, cari hesaplarını, destek taleplerini (Ticket) ve sözleşmelerini görüntüleyebilecekleri, onlara markanızın prestijini hissettiren kapalı devre, yüksek güvenlikli web portalları geliştiriyoruz. Müşteri memnuniyetini otomatikleştiriyoruz.
              </p>
            </div>

            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:border-[#933c81]/30 transition-all group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                ⚡
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Next.js ile Işık Hızında Headless Mimari</h3>
              <p className="text-slate-600 leading-relaxed">
                Yazılımlarımızı eski nesil, hantal teknolojilerle (geleneksel PHP/WordPress) değil; dünyanın en büyük teknoloji şirketlerinin kullandığı modern <strong>Next.js ve React</strong> mimarisiyle kodluyoruz. Bu sayede panelleriniz ekranlar arası geçişte saniye bile beklemez, anında tepki verir. Mobil uygulama hızında web deneyimi yaşatır.
              </p>
            </div>

          </div>
        </div>

        {/* 4. TEKNOLOJİ ALTYAPIMIZ */}
        <div className="py-16 border-t border-slate-100 text-center">
          <p className="text-[14px] font-semibold tracking-widest text-slate-400 uppercase mb-8">GÜVENDİĞİMİZ MODERN TEKNOLOJİLER</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Burada teknoloji isimleri / logoları yer alıyor */}
            <span className="text-2xl font-bold text-slate-800">Next.js</span>
            <span className="text-2xl font-bold text-blue-500">React</span>
            <span className="text-2xl font-bold text-green-600">Supabase</span>
            <span className="text-2xl font-bold text-cyan-500">Tailwind CSS</span>
            <span className="text-2xl font-bold text-slate-900">Vercel</span>
            <span className="text-2xl font-bold text-purple-600">PostgreSQL</span>
          </div>
        </div>

        {/* 5. CALL TO ACTION */}
        <div className="mt-16 text-center">
          <div className="bg-[#933c81] rounded-[40px] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Fikrinizi Bir Yazılıma Dönüştürelim</h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
                İster şirket içi süreçlerinizi yönetecek kapalı bir CRM, isterseniz tüm dünyaya satacağınız yeni bir SaaS (Software as a Service) projesi olsun... Teknik detayları bize bırakın.
              </p>
              <Link 
                href="/iletisim" 
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white text-[#933c81] font-bold text-[16px] hover:bg-slate-50 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                Projenizi Birlikte Planlayalım
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}