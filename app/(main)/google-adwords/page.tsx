import Link from "next/link";

export default function GoogleAdsPage() {
  const brandColor = "#933c81";

  // Google Ads Hizmet Kapsamı
  const adsServices = [
    {
      icon: "🔍",
      title: "Arama Ağı (Search) Reklamları",
      desc: "Müşterileriniz ürün veya hizmetinizi Google'da tam aradığı anda karşılarına çıkın. Negatif kelime optimizasyonlarıyla bütçenizin ilgisiz aramalarda erimesini engelliyoruz."
    },
    {
      icon: "🛍️",
      title: "Alışveriş (Merchant) Kampanyaları",
      desc: "E-ticaret sitenizdeki ürünleri görsel, fiyat ve stok bilgisiyle doğrudan arama sonuçlarına taşıyor, yüksek satın alma niyetine sahip kullanıcıları sitenize çekiyoruz."
    },
    {
      icon: "🎯",
      title: "Yeniden Pazarlama (Remarketing)",
      desc: "Sitenizi ziyaret edip alışveriş yapmadan veya form doldurmadan çıkan kullanıcıları tespit ediyor, onlara özel tekliflerle internetin her yerinde markanızı hatırlatıyoruz."
    },
    {
      icon: "📊",
      title: "Uluslararası & Global Kampanyalar",
      desc: "Sadece yerel değil; yurt dışı pazarlarına açılmak isteyen markalar için yüksek hacimli uluslararası döviz bütçelerini maksimum ROAS (Reklam Getirisi) hedefiyle yönetiyoruz."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HERO (Hizmet Başlığı) */}
      <div className="relative isolate bg-slate-50 py-24 sm:py-32 overflow-hidden border-b border-slate-200">
         {/* Arka plan dekorasyonu: Tıklama / Hedef (Target) temalı */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[40px] border-[#933c81]/5 rounded-full blur-sm"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[40px] border-[#933c81]/5 rounded-full blur-sm"></div>
        </div>
        
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center relative z-10">
          <p className="text-[14px] font-semibold uppercase tracking-widest text-[#933c81] mb-4">
            HİZMETLERİMİZ / GOOGLE ADS YÖNETİMİ
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[64px] mb-6 leading-tight">
            Reklam Bütçenizi Çöpe Atmayın, <br className="hidden md:block" />
            <span style={{ color: brandColor }}>Satışa Dönüştürün</span>
          </h1>
          <p className="max-w-3xl mx-auto text-[17px] leading-8 text-slate-600 font-light mb-10">
            Google'da reklam vermek kolaydır; zor olan, harcadığınız her kuruşun size kâr (ROAS) olarak geri dönmesini sağlamaktır. Yanlış kurgulanmış kampanyalarla bütçenizi israf etmek yerine, veri odaklı profesyonel bir yönetimle tanışın.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/teklif" className="rounded-full bg-[#933c81] px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-[#7a316a] transition-all transform hover:-translate-y-1">
              Ücretsiz Hesap Analizi İsteyin
            </Link>
          </div>
        </div>
      </div>

      {/* 2. REKLAM MODELLERİ (GRID) */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 lg:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Bütünleşik Performans Pazarlaması</h2>
          <p className="text-slate-600">Müşteriniz internette nerede geziyorsa, markanızı doğru bütçe ve doğru mesajla oraya konumlandırıyoruz.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {adsServices.map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#933c81]/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform border border-slate-100">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#933c81] transition-colors">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. ROAS & OPTİMİZASYON VURGUSU */}
      <div className="bg-slate-900 py-20 lg:py-32 overflow-hidden border-y border-slate-800">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1">
               <div className="grid grid-cols-2 gap-4">
                 <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 text-center">
                   <p className="text-4xl font-black text-[#e890d6] mb-2">ROAS</p>
                   <p className="text-slate-300 text-sm font-medium">Reklam Harcaması Getirisi</p>
                 </div>
                 <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 text-center">
                   <p className="text-4xl font-black text-[#e890d6] mb-2">CPA</p>
                   <p className="text-slate-300 text-sm font-medium">Edinme Başına Maliyet</p>
                 </div>
                 <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 text-center col-span-2">
                   <p className="text-2xl font-bold text-white mb-2">Sürekli Optimizasyon</p>
                   <p className="text-slate-400 text-sm font-light leading-relaxed">
                     Kampanyayı kurup bırakmıyor; A/B testleri, arama terimi raporları ve teklif stratejileriyle bütçenizi her gün daha verimli hale getiriyoruz.
                   </p>
                 </div>
               </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                Sadece "Tıklama" Değil, <br />
                <span style={{ color: "#e890d6" }}>Gerçek Müşteriler Kazandırıyoruz</span>
              </h2>
              <div className="space-y-6 text-[16px] text-slate-300 leading-relaxed font-light">
                <p>
                  Sektördeki en büyük yanılgı, reklamlarda başarının sırrını "daha çok ziyaretçi" sanmaktır. Oysa satın alma niyeti olmayan 1.000 ziyaretçi yerine, cüzdanını hazırlamış 10 ziyaretçi işletmenize gerçek değeri katar.
                </p>
                <p>
                  Ela Design olarak biz, Analytics ve Tag Manager entegrasyonlarıyla sitenizdeki her hareketi izliyor, kampanyalarınızı boş tıklamalara göre değil; sepete ekleme, form doldurma ve telefonla arama gibi net dönüşümlere göre optimize ediyoruz. Uluslararası dev bütçelerden, yerel işletmelere kadar her ölçekte kârlılığı (ROAS) merkeze alıyoruz.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}