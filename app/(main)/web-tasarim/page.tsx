import Link from "next/link";
import Image from "next/image";

export default function WebDesignServicePage() {
  const brandColor = "#933c81";

  // Sayfadaki "Nasıl Çalışıyoruz?" süreci
  const processSteps = [
    { step: "01", title: "Analiz & Strateji", desc: "Rakiplerinizi analiz eder, sektördeki boşlukları tespit edip dijital yol haritanızı çizeriz." },
    { step: "02", title: "Terzi İşi Tasarım", desc: "Hazır şablonlar yerine, markanızın kurumsal kimliğine %100 uyan, yüksek dönüşümlü arayüzler tasarlarız." },
    { step: "03", title: "Geliştirme & Next.js", desc: "Tasarımları, arama motorlarının çok sevdiği, saliseler içinde açılan ultra hızlı kodlara dönüştürürüz." },
    { step: "04", title: "Lansman & Destek", desc: "Sitenizi yayına aldıktan sonra sizi asla yalnız bırakmaz, iddialı olduğumuz 'Teknik Destek' hizmetimizi sunarız." }
  ];

  // Özellik Listesi
  const features = [
    "Mobil ve Tablet %100 Uyumlu (Responsive)",
    "Hızlı Yüklenen Headless (Next.js) Mimari",
    "Yönetilebilir Dinamik İçerik Paneli",
    "SEO & GEO Uyumlu Temel Altyapı",
    "Kurumsal E-posta ve Form Entegrasyonları",
    "Kesintisiz Barındırma ve Güvenlik (SSL)"
  ];

  return (
    <div className="bg-white">
      
      {/* 1. HERO (Hizmet Başlığı) */}
      <div className="relative isolate bg-slate-900 py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
           {/* Hafif soyut arka plan deseni */}
           <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-[#933c81]/20 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center">
          <p className="text-[14px] font-semibold uppercase tracking-widest text-[#e890d6] mb-4">
            HİZMETLERİMİZ / WEB TASARIM
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[64px] mb-6 leading-tight">
            Markanız İçin <br className="hidden md:block" />
            <span style={{ color: "#e890d6" }}>Üst Düzey</span> Web Tasarım
          </h1>
          <p className="max-w-3xl mx-auto text-[17px] leading-8 text-slate-300 font-light">
            Web tasarım çalışması bir defa yaptıracağınız ve yıllarca üzerinizde taşıyacağınız bir gömlek gibidir. Sizin kim olduğunuzu bir çırpıda haykırır. Bu yüzden hazır şablonlara sıkışmayın, terzi işi çözümlerle rakiplerinizden farklılaşın.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/teklif" className="rounded-full bg-[#933c81] px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-[#7a316a] transition-all">
              Hemen Teklif Alın
            </Link>
            <Link href="/neler-yaptik" className="rounded-full bg-slate-800 px-8 py-3.5 text-sm font-semibold text-white hover:bg-slate-700 transition-all border border-slate-700">
              Referansları İnceleyin
            </Link>
          </div>
        </div>
      </div>

      {/* 2. NEDEN BİZ? & ÖZELLİKLER */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Sol Taraf: Görsel / İllüstrasyon */}
          <div className="relative">
             {/* Buraya anasayfadaki web-tasarim.png'yi veya yeni bir görsel koyabilirsin */}
            <div className="aspect-[4/3] rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center relative overflow-hidden">
                <Image src="/web-tasarim.png" alt="Web Tasarım Mimari" fill className="object-contain p-8 transform hover:scale-105 transition-transform duration-700" />
            </div>
            {/* Vurgu Kutusu */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <p className="text-4xl font-black text-[#933c81] mb-1">%100</p>
              <p className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Mobil Uyumlu <br/> Özel Kodlama</p>
            </div>
          </div>

          {/* Sağ Taraf: Metin ve Liste */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Kurumunuz İle Müşterileriniz Arasındaki En Çarpıcı Köprü</h2>
            <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
              Kimi büyük ölçekli kurumsal firmalar internet yarışına geç katılmaktan ya da bu konuya yeterince önem vermediklerinden dolayı sanal ortamda kendilerini doğru ifade edememektedir. Ela Design olarak, kurumsal kimliğinizi doğru yansıtan, hem ziyaretçiyi yormayan hem de arama motorlarında üst sıralara çıkmanızı sağlayan yapılar kuruyoruz.
            </p>
            
            <ul className="space-y-4">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center text-slate-700">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#933c81]/10 text-[#933c81] mr-3 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span className="font-medium text-[15px]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* 3. İŞ SÜRECİ (Nasıl Çalışıyoruz?) */}
      <div className="bg-slate-50 py-20 lg:py-32 border-y border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Sürecimiz Nasıl İşler?</h2>
            <p className="text-slate-600">Açık iletişim ve şeffaflık mottomuzdur. Yapamayacağımız hiçbir şeyi vaat etmeyiz.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 text-9xl font-black text-slate-50 transition-colors group-hover:text-[#933c81]/5 select-none z-0">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. FİYATLANDIRMA VE ŞEFFAFLIK MOTTOSU */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 lg:py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <svg className="w-12 h-12 text-[#933c81] mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Bir Web Sitesinin Fiyatı Ne Kadar Olmalıdır?</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
            Eğer sadece "kartvizitimde web adresim yazsın" diyorsanız 1.500 TL - 3.500 TL gibi rakamlar duyabilirsiniz; ancak harcanan her emeğin bir karşılığı vardır. 20$ domain, 50$ hosting maliyeti olan bir dünyada, ucuz işçilik markanıza zarar verir. <br/><br/>
            Eğer özgün, benzersiz bir tasarım arıyor ve işinizi büyütmek istiyorsanız; bizim gibi kendi ofisinde, tecrübeli bir butik ajans ile çalışmanın bedeli ortalama <strong>25.000 TL ile 50.000 TL</strong> arasında değişmektedir.
          </p>
          <Link href="/teklif" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-[#933c81] transition-all">
            Projenizi Anlatın, Fiyatlandıralım
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
        </div>
      </div>

    </div>
  );
}