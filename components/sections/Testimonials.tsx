import Image from 'next/image';

export default function Testimonials() {
  const brandColor = "#933c81";

  // Yapay zeka ile kurumsal dile rafine edilmiş GERÇEK müşteri yorumları
  const reviews = [
    {
      id: 1,
      name: "Özge Dönmez",
      company: "Kurumsal Müşteri",
      text: "Şu ana kadar çalıştığımız en iyi dijital hizmet sağlayıcı. Firma olarak daha önce birçok tasarım ajansıyla çalışmamıza rağmen, ilk defa süreçleri bu kadar vizyoner ve kusursuz yöneten bir ekiple karşılaştık.",
      rating: 5
    },
    {
      id: 2,
      name: "Semra Filiz",
      company: "Kurumsal Müşteri",
      text: "Ela Teknoloji ile çalışmaya başladığımızda bu kadar profesyonel ve estetik bir web mimarisine sahip olabileceğimizi hayal bile edemezdik. Sektördeki ajanslar arasında açık ara en iyisi olduklarını samimiyetle söyleyebilirim.",
      rating: 5
    },
    {
      id: 3,
      name: "Cihan Celiloğlu",
      company: "Kurumsal Müşteri",
      text: "İşinin tam anlamıyla erbabı bir ekip. Ben sadece vizyonumu anlattım, onlar gerisini mükemmel bir şekilde halletti. Benim revize vermeme bile gerek kalmadan, müşteri odaklı ve anahtar teslim bir proje sundular.",
      rating: 5
    },
    {
      id: 4,
      name: "Dilan Kaplan",
      company: "Nova Etiket & Barkod",
      text: "Uzun yıllardır birlikte çalışıyoruz. Sadece projeyi teslim edip gitmeyen, satış sonrası destekte her zaman ulaşabildiğimiz ve tüm teknik operasyonlarımıza anında çözüm üreten harika bir partner.",
      rating: 5
    },
    {
      id: 5,
      name: "Birol Öztürk",
      company: "Kurumsal Müşteri",
      text: "Hem modern web tasarımında hem de zorlu SEO süreçlerinde son derece başarılı ve titizler. İşi ehline teslim ettiğimizi, arama motorlarında elde ettiğimiz hızlı yükseliş ve artan trafiğimizle çok net anladık.",
      rating: 5
    },
    {
      id: 6,
      name: "Özkan Bilen",
      company: "2 Eylül Spor Kulübü",
      text: "Resmi internet sitemizi büyük bir özveri ve yüksek teknolojiyle tasarladılar. Bizi sıradan bir müşteri gibi değil, bir iş ortağı gibi benimseyip projeyi sahiplenmeleri gerçekten takdire şayan.",
      rating: 5
    },
    {
      id: 7,
      name: "Neriman Sultan",
      company: "E-Ticaret Yöneticisi",
      text: "Markamız için hazırladıkları yeni e-ticaret altyapısı ve web tasarımı sayesinde işlerimiz ve online satışlarımız gözle görülür şekilde arttı. Dijitalde büyümek ve dönüşüm oranlarını artırmak isteyen herkese tavsiye ediyorum.",
      rating: 5
    },
    {
      id: 8,
      name: "Aykut Lacinok",
      company: "Kurumsal Müşteri",
      text: "Kısa sürede, tam da hayal ettiğim gibi yüksek performanslı bir web sitesine sahip oldum. Kendi sektörümde rakiplerimden tamamen sıyrılan, hatırı sayılır ve otoriter bir dijital kimlik inşa ettiler.",
      rating: 5
    },
    {
      id: 9,
      name: "Cem Hızarcı",
      company: "Kurumsal Müşteri",
      text: "Tek kelimeyle kusursuz bir mühendislik ve tasarım hizmeti. Tüm dijital altyapı sorunlarınızın en kısa sürede çözüleceğinden emin olarak, gönül rahatlığıyla dijital operasyonlarınızı emanet edebilirsiniz.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Arka Plan Efektleri */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#933c81] rounded-full mix-blend-multiply filter blur-3xl opacity-20 transition-transform duration-1000 animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Müşterilerimiz <span style={{ color: brandColor }}>Ne Diyor?</span>
          </h2>
          <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            Farklı sektörlerden markalar, zorlu dijital dönüşüm süreçlerinde ve altyapı operasyonlarında neden Ela Teknoloji'ye güveniyor?
          </p>
        </div>

        {/* Yorumlar Grid Sistemi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 relative hover:border-[#933c81]/50 hover:bg-slate-800/50 transition-all duration-500 group shadow-lg hover:shadow-[#933c81]/10 flex flex-col h-full"
            >
              {/* Alıntı İkonu */}
              <div className="absolute top-8 right-8 text-slate-800 group-hover:text-[#933c81]/40 transition-colors duration-500">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              {/* Yıldızlar */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Yorum Metni */}
              <p className="text-slate-300 font-light leading-relaxed mb-8 flex-grow text-[15px]">
                "{review.text}"
              </p>
              
              {/* Müşteri Bilgisi (En alta yapışır) */}
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-800/50">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-inner">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-[15px]">{review.name}</h4>
                  <p className="text-[#933c81] text-[13px] font-medium tracking-wide">{review.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Güven Rozeti */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-slate-900/50 border border-slate-800 px-6 py-3 rounded-full backdrop-blur-sm">
            <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-slate-300 text-sm font-medium">Google Haritalar'da <strong className="text-white">5.0 Mükemmel</strong> puan</span>
          </div>
        </div>

      </div>
    </section>
  );
}