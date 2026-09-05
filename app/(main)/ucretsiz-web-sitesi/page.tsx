import Link from 'next/link';
import Image from 'next/image';

// 1. GLOBAL VİZYONLU METADATA VE CANONICAL (SEO)
export const metadata = {
  title: "Ücretsiz Web Sitesi Kurma | KOBİ'ler İçin Ücretsiz CRM ve Site",
  description: "Yüksek maliyetler olmadan kendi ücretsiz web sitenizi kurun. Ücretsiz CRM, WhatsApp sipariş entegrasyonu ve yönetim paneli ile dijital işletmenizi hemen açın.",
  alternates: { canonical: 'https://www.eladesign.org/ucretsiz-web-sitesi' },
  openGraph: {
    title: "Ücretsiz Web Sitesi ve CRM Paneli | Ela Design",
    description: "Yüksek maliyetler olmadan kendi ücretsiz web sitenizi kurun. Ömür boyu ücretsiz alt alan adı ve gelişmiş CRM paneli.",
    url: 'https://www.eladesign.org/ucretsiz-web-sitesi',
  }
};

export default function UcretsizWebSitesi() {
  const brandColor = "#933c81";

  // SEO SSS ALANI (HEM KULLANICI HEM GOOGLE İÇİN)
  const faqs = [
    { q: "Ücretsiz web sitesi gerçekten ömür boyu ücretsiz mi?", a: "Evet, firma.eladesign.net alt alan adını kullandığınız sürece tüm CRM, ürün sergileme ve site özellikleri ömür boyu tamamen ücretsizdir." },
    { q: "Kendi alan adımı (www.ornek.com) kullanabilir miyim?", a: "Kesinlikle! İşleriniz büyüdüğünde dilediğiniz zaman Pro pakete geçerek mevcut alan adınızın A kaydını sisteme kolayca entegre edebilirsiniz." },
    { q: "Müşterilerim web sitemden nasıl sipariş verecek?", a: "Sitenizde yer alan tek tıkla WhatsApp entegrasyonu sayesinde müşterileriniz, inceledikleri ürünün detaylarıyla birlikte doğrudan WhatsApp hattınıza mesaj gönderebilirler." },
    { q: "Kodlama veya web tasarım bilgisine ihtiyacım var mı?", a: "Hayır, hiçbir teknik bilgiye ihtiyacınız yoktur. Kullanıcı dostu yönetim panelimizden logonuzu, firma renklerinizi ve ürünlerinizi saniyeler içinde değiştirebilirsiniz." },
    { q: "Müşterilerime nasıl teklif gönderebilirim?", a: "Sistemin arka planındaki CRM panelinde yer alan 'Hızlı Teklif' aracı ile saniyeler içinde profesyonel bir PDF teklif oluşturup sistem üzerinden müşterinize e-posta gönderebilirsiniz." }
  ];

  // 2. BREADCRUMB + FAQ SCHEMA (GOOGLE MAKİNE ÖĞRENİMİ İÇİN ZENGİN SONUÇLAR)
  const jsonLd = [
    {
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
          "name": "Ücretsiz Web Sitesi",
          "item": "https://www.eladesign.org/ucretsiz-web-sitesi"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="bg-slate-50 min-h-screen pb-24">
        
        {/* HERO ALANI */}
        <div className="bg-slate-900 py-24 lg:py-32 relative overflow-hidden border-b border-slate-800">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#933c81]/20 blur-[120px] rounded-full pointer-events-none transform translate-x-1/3 -translate-y-1/4"></div>
          
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center relative z-10">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6 leading-tight">
              Ücretsiz Web Sitesi Kurulumu: <br className="hidden md:block" />
              <span className="text-[#e890d6]">Sadece Bir Vitrin Değil, Dijital İşletmeniz</span>
            </h1>
            <div className="max-w-3xl mx-auto text-[17px] leading-8 text-slate-300 font-light space-y-4">
              <p>
                Yüksek web tasarım bütçeleri yüzünden dijital dünyadan uzak kalmayın. Ömür boyu ücretsiz alt alan adı ve gelişmiş CRM paneli ile işinizi saniyeler içinde dijitale taşıyın.
              </p>
              <p className="text-white font-medium bg-[#003300]/20 p-4 rounded-xl border border-[#003300]/30">
                Özel kurgulanmış premium bir proje arıyorsanız <Link href="/kurumsal-web-tasarim-fiyatlari" className="text-[#e890d6] font-bold hover:underline">Kurumsal Web Tasarım</Link> sayfamızı inceleyebilirsiniz.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 mt-16 w-full">
          
          {/* İçerik Alanı */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm mb-16 prose prose-slate max-w-none">
            
            {/* DÖNÜŞÜM HUNİSİ AKSİYON BANNERI */}
            <div className="bg-[#933c81] text-white p-6 md:p-8 rounded-2xl mb-12 flex flex-col md:flex-row justify-between items-center gap-6 shadow-lg">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Hemen Kendi Sitenizi Kurun</h3>
                <p className="text-sm text-slate-200">Kredi kartı yok, sürpriz ücret yok. Saniyeler içinde dijital vitrininizi oluşturun.</p>
              </div>
              <a href="https://eladesign.net" target="_blank" rel="noopener noreferrer" className="bg-white text-[#933c81] px-6 py-3 rounded-full text-sm font-bold shadow-md hover:bg-slate-50 transition-colors whitespace-nowrap">
                Ücretsiz Hesap Oluştur →
              </a>
            </div>

            <p className="text-lg">
              Yüksek web tasarım bütçeleri yüzünden dijital dünyadan uzak mı kaldınız? Korkutmasın sizi o rakamlar. Bazen başlangıç maliyetleri ağır gelebilir, çok iyi anlıyoruz. İşte tam da bu yüzden, "dijitalde ben de varım" demek isteyen esnafımız, KOBİ'miz ve girişimcilerimiz için kuralları baştan yazıyoruz. 
            </p>
            <p>
              Size sadece birkaç resimden ibaret, ruhsuz, statik bir sayfa sunmuyoruz. Ön yüzüyle müşterilerinizi büyüleyen, arka planında ise koca bir şirketi tek başınıza yöneteceğiniz devasa bir dijital asistan veriyoruz. Üstelik <strong>firma.eladesign.net</strong> alt alan adıyla ömür boyu, tamamen ücretsiz. Gelin, bu ücretsiz yapının içinde sizi bekleyen o muazzam teknolojiye yakından bakalım.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Göz Alıcı "Glassmorphism" Tasarım ve Ürün Vitrini</h3>
            <div className="relative h-[400px] md:h-[600px] w-full rounded-xl overflow-hidden mb-6 shadow-md border border-slate-200">
              <Image src="/image_51dd61.png" alt="Ücretsiz Web Sitesi Ön Yüz Tasarımı" fill className="object-contain bg-slate-100" />
            </div>
            <p>
              Müşteriniz sitenize girdiğinde sıradan bir tasarımla değil; şeffaf, modern ve son derece premium hissettiren "Glassmorphism" (buzlu cam) arayüzüyle karşılaşır. Satmak istediğiniz ürünleri veya hizmetleri sınırsızca sergileyebilirsiniz. İster stoklu fiziksel bir ürün satın, ister "Sınırsız/Hizmet" ibaresiyle dijital danışmanlık verin. 
            </p>
            <div className="relative h-[300px] md:h-[450px] w-full rounded-xl overflow-hidden mb-6 shadow-md border border-slate-200 mt-8">
              <Image src="/image_51dddb.png" alt="Ürün ve Kategori Yönetimi" fill className="object-cover object-top" />
            </div>
            <p>
              Her ürün için kategoriler oluşturup fiyatlarınızı ve stok durumunuzu anlık olarak tek bir ekrandan, hiçbir kodlama bilmeden rahatlıkla yönetebilirsiniz. Müşterileriniz beğendikleri ürünün altındaki butona tıkladıkları an, doğrudan sizin WhatsApp hattınıza, ürünün detaylarıyla birlikte düşerler. Satışı en sıcak olduğu anda, anında yazışarak kapatırsınız.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Size Özel Gelişmiş CRM (Müşteri Yönetimi) Paneli</h3>
            <div className="relative h-[300px] md:h-[450px] w-full rounded-xl overflow-hidden mb-6 shadow-md border border-slate-200">
              <Image src="/image_51dd85.png" alt="CRM Yönetim Paneli" fill className="object-cover object-top" />
            </div>
            <p>
              Web sitenizin arkasında, sadece sizin şifreyle (özel şifreleme algoritmalarıyla korunan) girebileceğiniz izole bir yönetim paneli var. Burası sizin dijital ofisiniz. Panelinizin ana ekranında kasanızdaki anlık durumu, sunduğunuz hizmet sayısını ve güncel hareketleri anında görebilirsiniz. Sitenizden gelen talepleri, müşteri görüşmelerini ve satış süreçlerini hiçbir kısıtlama olmadan buradan takip edersiniz.
            </p>
            <div className="relative h-[250px] md:h-[350px] w-full rounded-xl overflow-hidden mb-6 shadow-md border border-slate-200 mt-8">
              <Image src="/image_51ddfc.png" alt="Kasa ve Gelir Gider Yönetimi" fill className="object-cover object-top" />
            </div>
            <p>
              Kazancınızı ve giderlerinizi başka hiçbir muhasebe programına ihtiyaç duymadan, yeşil ve kırmızı renklerin o net ve anlaşılır diliyle "Kasa" modülünden kuruşu kuruşuna yönetebilirsiniz.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Saniyeler İçinde PDF Teklif Oluşturma ve Proje Takibi</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="relative h-[300px] w-full rounded-xl overflow-hidden shadow-md border border-slate-200">
                <Image src="/image_51de5b.png" alt="Hızlı Teklif Oluşturma" fill className="object-cover object-left-top" />
              </div>
              <div className="relative h-[300px] w-full rounded-xl overflow-hidden shadow-md border border-slate-200">
                <Image src="/image_51de7e.png" alt="PDF Teklif Gönderme" fill className="object-cover object-left-top" />
              </div>
            </div>
            <p>
              Sistemin en can alıcı noktası burasıdır. Müşterinize fiyat mı vereceksiniz? Ana ekranınızdaki "Hızlı Teklif" aracını kullanarak saniyeler içinde yeni bir teklif taslağı oluşturabilirsiniz. Hazırladığınız bu teklifi PDF formatında sisteme yükleyip tek tıkla doğrudan müşterinizin e-posta adresine gönderebilirsiniz. Teklif onaylandığı an, sistem bunu otomatik olarak kaydeder ve kazandığınız tutarı anında kasa hareketlerinize işlersiniz.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Tam Kontrol ve Esnek Ayarlar</h3>
            <div className="relative h-[300px] md:h-[450px] w-full rounded-xl overflow-hidden mb-6 shadow-md border border-slate-200">
              <Image src="/image_51ddbc.png" alt="Web Sitesi Özelleştirme" fill className="object-cover object-top" />
            </div>
            <p>
              Sitenizin kurumsal renklerini, logonuzu, sloganınızı ve iletişim bilgilerinizi tek tuşla değiştirin. Tatile mi çıkıyorsunuz? Panelinize girip "Site Aktif" modunu kapatın, müşterileriniz şık bir bakım sayfası görsün (ama siz arka planda çalışmaya devam edin). 
            </p>
            <div className="relative h-[300px] md:h-[450px] w-full rounded-xl overflow-hidden mb-6 shadow-md border border-slate-200 mt-8">
              <Image src="/image_51de22.png" alt="Firma ve SMTP Ayarları" fill className="object-cover object-top" />
            </div>
            <p>
              İşletme unvanınızı, iletişim bilgilerinizi ve müşterilerinize giden e-postaların doğrudan sizin kurumsal kimliğinizle (SMTP) gitmesini sağlayan mail yapılandırmalarını da bu gelişmiş panelden kolayca ayarlayabilirsiniz.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">İşler Büyüdüğünde: Kendi Alan Adınıza (Pro Paket) Geçiş</h3>
            <p>
              Ücretsiz sürümle işlerinizi büyüttünüz, artık <strong>www.kendifirmaniz.com</strong> adresine mi geçmek istiyorsunuz? Sistemde hiçbir veri kaybı yaşamadan, sadece alan adınızın A kaydını sunucularımıza yönlendirerek anında Pro Pakete geçiş yapabilirsiniz. Siteniz aynı kalır, sadece isminiz kurumsallaşır.
            </p>

            <div className="mt-12 text-center">
              <h4 className="text-2xl font-bold text-slate-900 mb-6">Şimdi Excel tablolarını ve yüksek maliyet korkusunu bir kenara bırakın.</h4>
              <a href="https://eladesign.net" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#933c81] text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-slate-900 transition-colors">
                Hemen Ücretsiz Sitenizi Kurun
              </a>
            </div>
          </div>

          {/* SSS Alanı */}
          <div className="w-full">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900">Soru-Cevap</h2>
            </div>
            
            <div className="space-y-4">
              {faqs.map((item, i) => (
                <details key={i} className="group bg-white rounded-2xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-bold">
                    <h3 className="text-[16px]">Soru: {item.q}</h3>
                    <span className="relative size-5 shrink-0">
                      <svg className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg>
                      <svg className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4"/></svg>
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-slate-600 leading-relaxed font-light border-t border-slate-100 pt-4 mt-2">
                    <span className="font-bold text-slate-900">Cevap: </span>{item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}