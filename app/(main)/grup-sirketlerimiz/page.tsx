import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Grup Şirketlerimiz | Ela Teknoloji",
  description: "Ela Teknoloji çatısı altında faaliyet gösteren Veluxe Home, Render Atölyesi ve Studio Anima grup şirketlerimiz.",
};

export default function GrupSirketleriPage() {
  const companies = [
    {
      id: "ela-teknoloji",
      name: "Ela Teknoloji",
      legalName: "Ela Web Tasarım Bilişim Medya Yayıncılık Tic. Ltd. Şti.",
      description: "Çeyrek asırlık mühendislik deneyimi ve küresel operasyon gücüyle Ela Teknoloji, dijital dönüşüm ve internet teknolojilerinde sektörün öncüsüdür. Bu yüksek derinlik sayesinde genel çerçeveler dahilinde, istenilen her türlü projeye mühendislik hassasiyetiyle cevap verebilmekteyiz. Kibirli rakiplerimizin aksine her işi aynı derecede önemsemekte ve gereken titizliği göstermekteyiz. Ataşehir merkezli bir aile şirketi olmamızın vermiş olduğu avantajla, müşterilerimizle uzun soluklu dostluklar ve sarsılmaz güven bağları kurabilmekteyiz.",
      url: "https://www.eladesign.org/",
      image: "/grup-sirketlerimiz/elawebajans.jpg",
      reverse: false,
    },
    {
      id: "veluxe-home",
      name: "Veluxe. Home & Living",
      legalName: "Hakiki Deri Koltuk ve Yaşam Ürünleri",
      description: "Stilin konforla buluştuğu Veluxe. Home & Living ile mekanlarınıza konfor katıyoruz. Hakiki deri koltuk ürünlerinin tasarım, üretim ve teslimat aşamaları firmamız tarafından yapılmaktadır. Hakiki İtalyan dana derisi ile üretilen ürünler 2 yıl normal garanti dışında +2 yıl da Veluxe garantisindedir. Alanında uzman iç mimarlardan oluşan tasarım ekibimiz ve yüksek kaliteli ürünlerimiz ile hizmetinizdeyiz.",
      url: "https://www.veluxe.com.tr/",
      image: "/grup-sirketlerimiz/veluxelogo.jpg",
      reverse: true,
    },
    {
      id: "render-atolyesi",
      name: "Render Atölyesi",
      legalName: "RENDER ATÖLYESİ MİMARLIK SAN. TİC. LTD. ŞTİ.",
      description: "Mimari render tasarım ekibimiz, mimarlık ve mühendislik alanlarında çalışan profesyonel tasarımcılardır. 3 boyutlu görselleştirme teknikleri kullanarak proje önizleme ve sunumları yapıyoruz. Ekibimiz mimari projelerin farklı açılardan görüntülenmesi, detaylı incelenmesi ve farklı malzemelerin test edilmesi gibi önemli konuları inceler. Ayrıca, müşterilerin beklentilerini karşılamak için değişiklikler yaparak proje tasarımını optimize ederler.",
      url: "https://www.renderatolyesi.com/",
      image: "/grup-sirketlerimiz/renderatolyesi.jpg",
      reverse: false,
    },
    {
      id: "studio-anima",
      name: "Studio Anima",
      legalName: "Etkileşim Kazanmanın En Kolay Yolu",
      description: "Tam da İhtiyacınıza Özel, Etkili Animasyon Çalışmaları Üretiyoruz. 2D Animasyon reklam filmi çalışmaları ile ürün ve hizmetlerinizi arayan doğru müşteri kitlesine kolayca ulaşabilirsiniz. Video ve görsel reklamların gücünden faydalanın. Tamamen sonuç odaklı, kısa ve etkili animasyon çalışmalarımızla hedefinizi 12’den vurursunuz.",
      url: "https://www.2danimasyon.com.tr/",
      image: "/grup-sirketlerimiz/anima.jpg",
      reverse: true,
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      
      {/* ÜST BÖLÜM (HERO) */}
      <div className="bg-slate-900 pt-32 pb-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-[#df6e32]/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <p className="text-[14px] font-semibold uppercase tracking-widest text-[#df6e32] mb-4">
            KURUMSAL YAPI
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-wide">
            Grup Şirketlerimiz
          </h1>
          <p className="text-slate-300 text-[17px] font-light max-w-3xl mx-auto leading-relaxed">
            Teknoloji, mimari, tasarım ve üretim alanlarında uzmanlaşmış markalarımızla, farklı sektörlerde yüksek kalite standartlarıyla hizmet üretiyoruz.
          </p>
        </div>
      </div>

      {/* ŞİRKETLER LİSTESİ */}
      <div className="max-w-6xl mx-auto px-4 lg:px-8 -mt-12 relative z-20 space-y-12">
        {companies.map((company, index) => (
          <div 
            key={company.id} 
            className={`bg-white rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 overflow-hidden flex flex-col ${company.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
          >
            {/* Görsel Alanı */}
            <div className="lg:w-1/2 relative h-[300px] lg:h-[450px] bg-slate-100">
              <Image 
                src={company.image} 
                alt={company.name} 
                fill 
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* İçerik Alanı */}
            <div className="lg:w-1/2 p-8 lg:p-14 flex flex-col justify-center">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
                {company.name}
              </h2>
              <h3 className="text-sm font-bold text-[#933c81] uppercase tracking-wider mb-6 pb-4 border-b border-slate-100">
                {company.legalName}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8 text-[15px] text-justify">
                {company.description}
              </p>
              
              <div>
                <a 
                  href={company.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors text-sm"
                >
                  Şirket Web Sitesi
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}