import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const brandColor = "#933c81";

  // Şirket Değerleri (Neden Biz?)
  const values = [
    {
      icon: "🤝",
      title: "Müşteri Odaklı Çalışma",
      desc: "Bizim için müşterinin istekleri her şeyden önce gelir. Başarı ivmesini yakalamak için kısa vadeli kazançları değil, uzun vadeli ve memnun müşteriler kazanmayı hedefleriz."
    },
    {
      icon: "🛡️",
      title: "Üstün Destek Hizmeti",
      desc: "Web tasarım sektörünü kirleten ve iş tesliminden sonra kaybolan ajansların aksine, 2001'den beri müşterilerimizin her teknik sorununda bir telefon uzağındayız."
    },
    {
      icon: "💎",
      title: "Butik & Terzi İşi",
      desc: "Kibirli ve müşteri seçen rakiplerimizin aksine, her işi aynı derecede önemser, her yeni projeye 'yeni doğan bir bebek' hassasiyetiyle yaklaşırız."
    },
    {
      icon: "⚙️",
      title: "360° Dijital Mühendislik",
      desc: "Sadece ön yüz (tasarım) değil; web yazılım, SEO, GEO, sunucu yönetimi ve Google Ads gibi tüm dijital ihtiyaçlarınıza tek bir merkezden çözüm üretiriz."
    }
  ];

  // Tarihçe (Dünden Bugüne)
  const timeline = [
    {
      year: "2001",
      title: "Deha Bilişim Kuruldu",
      desc: "Henüz web teknolojilerinin çok yeni ve statik sitelerin (flash animasyonların) popüler olduğu bir dönemde, vizyoner bir adımla sektöre giriş yaptık."
    },
    {
      year: "2009",
      title: "Ela Design Markası",
      desc: "Sektördeki derin bilgi birikimimizi daha odaklı bir yapıya taşımak adına 'Ela Design' markamızla web tasarım ve yazılım hizmetlerimize hız verdik."
    },
    {
      year: "2013",
      title: "Render Atölyesi",
      desc: "Dijital alandaki gücümüzü mimari görselleştirme ile birleştirerek 3D render ve mimari projelendirme işlerini yürüttüğümüz atölyemizi kurduk."
    },
    {
      year: "2017",
      title: "Ataşehir Merkez Ofis",
      desc: "Sizlere en iyi ve profesyonel hizmeti sunmak için, operasyonlarımızı Ataşehir / Watergarden yanındaki modern ofisimize taşıdık."
    },
    {
      year: "2026",
      title: "Next.js & Headless Era",
      desc: "Arama motorlarının evrildiği yeni dünyada (AIO ve GEO), müşterilerimizi ağır sistemlerden kurtarıp ultra hızlı Next.js mimarisine taşıyoruz."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HERO ALANI */}
      <div className="relative isolate bg-slate-900 py-24 sm:py-32 overflow-hidden">
        {/* Arka plan dekorasyonu */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-[#933c81]/20 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center">
          <p className="text-[14px] font-semibold uppercase tracking-widest text-[#e890d6] mb-4">
            KURUMSAL / HAKKIMIZDA
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            Çeyrek Asırlık <br className="hidden md:block" />
            <span style={{ color: "#e890d6" }}>Dijital Tecrübe</span>
          </h1>
          <p className="max-w-3xl mx-auto text-[17px] leading-8 text-slate-300 font-light mb-10">
            Sektörün en başından beri (2001) web tasarım ve internet teknolojileri alanında faaliyet gösteren Ela Design, geçici trendlerin ötesinde kalıcı değer üreten köklü bir dijital mühendislik ajansıdır.
          </p>
        </div>
      </div>

      {/* 2. BİZ KİMİZ? (Metin ve Görsel Blok) */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 relative shadow-2xl">
              {/* Buraya ofis içi, ekip veya abstract bir kurumsal görsel eklenebilir */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10"></div>
              <Image 
                src="/web-tasarim.png" // Şimdilik mevcut placeholder resmi
                alt="Ela Design Ekibi" 
                fill 
                className="object-cover transform hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute bottom-8 left-8 z-20">
                <div className="bg-[#933c81] text-white px-6 py-4 rounded-2xl shadow-xl backdrop-blur-sm border border-white/10">
                  <span className="block text-4xl font-black mb-1">25+</span>
                  <span className="text-sm font-semibold tracking-wider uppercase opacity-90">Yıllık Tecrübe</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Kısa Vadeli Kazançlar Değil, <span style={{ color: brandColor }}>Uzun Vadeli Dostluklar</span> Kuruyoruz.
            </h2>
            <div className="space-y-6 text-[16px] text-slate-600 leading-relaxed font-light">
              <p>
                Bir aile şirketi olmamızın vermiş olduğu avantajla müşterilerimizle sıkı dostluklar kurabilmekteyiz. İşimizi önemsiyor ve her yeni projeyi "yeni doğan bir bebek" kadar hassasiyetle ele alıyoruz.
              </p>
              <p>
                Günümüzde web sitesi tasarımı bir lüks olmaktan çıkarak temel bir ihtiyaç halini almıştır. Hatta bazı sektörlerde web siteleri, fiziksel bir mağazadan çok daha fazla getiri sağlamaktadır. Bu bilinçle, her zaman en kaliteli işleri ortaya çıkarmak için çalışırken fiyat politikamızı da ulaşılabilir düzeyde tutmaya çabalıyoruz.
              </p>
              <p className="font-medium text-slate-800 border-l-4 border-[#933c81] pl-6 py-2 bg-slate-50">
                "Sektördeki kibirli ve müşteri seçen birçok rakibimizin aksine, gücümüzün yettiği oranda tüm markalara eşit kalitede hizmet vermeye çalışmaktayız."
              </p>
            </div>
            
            <div className="mt-10">
              <Link href="/ekibimiz" className="inline-flex items-center gap-2 text-[15px] font-bold text-slate-900 hover:text-[#933c81] transition-colors">
                Ekibimizle Tanışın
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* 3. NEDEN BİZ? (Değerler Grid'i) */}
      <div className="bg-slate-50 py-20 lg:py-32 border-y border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Neden Ela Design?</h2>
            <p className="text-slate-600">Sektörün getirdiği 25 yıllık tecrübeyi, yeni nesil teknolojilerle harmanlıyoruz.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#933c81]/20 transition-all group">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#933c81] transition-colors">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. DÜNDEN BUGÜNE (Tarihçe / Timeline) */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 lg:py-32">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Dünden Bugüne</h2>
          <p className="text-slate-600">Teknoloji değişti, algoritmalar değişti, ancak bizim kalite ve müşteri memnuniyeti anlayışımız 2001'den beri aynı.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Ortadaki dikey çizgi */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform md:-translate-x-1/2"></div>

          {timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`relative flex items-center mb-16 last:mb-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Zaman Çizelgesi Noktası (Dot) */}
                <div className="absolute left-[28px] md:left-1/2 w-4 h-4 bg-[#933c81] rounded-full transform -translate-x-1/2 ring-4 ring-white shadow-md z-10"></div>
                
                {/* İçerik Kutusu */}
                <div className={`ml-16 md:ml-0 w-full md:w-[45%] ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#933c81]/10 text-[#933c81] font-black text-sm mb-4">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* 5. CTA (Harekete Geçirici Mesaj) */}
      <div className="bg-[#933c81] py-20 text-center px-6">
        <h2 className="text-3xl font-bold text-white mb-6">Aklınızda Yeni Bir Proje mi Var?</h2>
        <p className="text-[#e890d6] mb-10 text-lg max-w-2xl mx-auto">Tecrübelerimizi sizlerle paylaşmak ve projenizi birlikte şekillendirmek için sabırsızlanıyoruz.</p>
        <Link href="/iletisim" className="inline-block bg-white text-[#933c81] font-bold px-10 py-4 rounded-full shadow-lg hover:bg-slate-50 transition-colors transform hover:-translate-y-1">
          Bize Ulaşın
        </Link>
      </div>

    </div>
  );
}