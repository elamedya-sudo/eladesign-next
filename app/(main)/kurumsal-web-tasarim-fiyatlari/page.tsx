import Link from 'next/link';
import Image from 'next/image';

// 1. SAYFAYA ÖZEL METADATA, CANONICAL VE OG ETİKETLERİ (CLAUDE SEO ÇÖZÜMÜ)
export const metadata = {
  title: "Kurumsal Web Tasarım Fiyatları 2026 | Şirketler İçin Profesyonel Paketler",
  description: "2026 güncel kurumsal web tasarım fiyatları, profesyonel web sitesi paketleri ve süreç hakkında detaylı bilgilendirme. İşletmenizin dijital dünyadaki prestijini artırın.",
  alternates: { canonical: 'https://www.eladesign.org/kurumsal-web-tasarim-fiyatlari' },
  openGraph: {
    title: "Kurumsal Web Tasarım Fiyatları 2026 | Ela Design",
    description: "2026 güncel kurumsal web tasarım fiyatları, profesyonel web sitesi paketleri ve süreç hakkında detaylı bilgilendirme.",
    url: 'https://www.eladesign.org/kurumsal-web-tasarim-fiyatlari',
  }
};

export default function KurumsalWebTasarimFiyatlari() {
  const brandColor = "#933c81";

  const fiyatListesi = [
    { model: "Temel Düzey Web Sitesi", fiyat: "22.000 - 25.000 TL", yenileme: "6.000 TL + KDV", teslim: "5 İş Günü", icon: "🏢", img: "/kurumsal-web-tasarim-fiyatlari/hazir-web-tasarim-mimari.jpg" },
    { model: "Ekonomik Web Sitesi", fiyat: "25.000 - 35.000 TL", yenileme: "8.000 TL + KDV", teslim: "5 İş Günü", icon: "🚀", img: "/kurumsal-web-tasarim-fiyatlari/hazir-web-tasarim-hastane.jpg" },
    { model: "Kurumsal Web Sitesi", fiyat: "35.000 - 75.000 TL", yenileme: "15.000 TL + KDV", teslim: "10 İş Günü", icon: "💼", img: "/kurumsal-web-tasarim-fiyatlari/hazir-web-tasarim-okul.jpg" },
    { model: "Profesyonel Kurumsal Site", fiyat: "75.000 - 125.000 TL", yenileme: "18.000 TL + KDV", teslim: "15 İş Günü", icon: "👑", img: "/kurumsal-web-tasarim-fiyatlari/hazir-web-tasarim-restourant.jpg" }
  ];

  const faqs = [
    { q: "Kurumsal web sitesi paketlerine hosting ve domain dahil mi?", a: "Evet, tüm kurumsal paketlerimizde 1 yıllık Hosting (Sunucu), Domain (Alan Adı) ve SSL güvenlik sertifikası fiyatlara dahildir." },
    { q: "Web sitesini yönetim panelinden ben güncelleyebilir miyim?", a: "Kesinlikle. Türkçe ve kullanıcı dostu yönetim paneli sayesinde kod bilmenize gerek kalmadan yazılarınızı, hizmetlerinizi ve görsellerinizi kolayca güncelleyebilirsiniz." },
    { q: "Kurumsal e-posta hesapları açılıyor mu?", a: "Evet, firmanıza kurumsal bir kimlik kazandıran isim@firmaniz.com uzantılı e-posta hesapları paket kapsamında açılmaktadır." },
    { q: "Web sitesi mobil uyumlu (Responsive) olacak mı?", a: "Tasarladığımız tüm siteler %100 mobil uyumludur. Telefon, tablet ve masaüstü cihazlarda kusursuz görünür ve Google mobil uyumluluk testinden başarıyla geçer." },
    { q: "SEO altyapısı mevcut mu?", a: "Evet, siteleriniz teknik SEO kurallarına (Hız, Sitemap, Temiz Kod) uygun olarak inşa edilir ve Google'da bulunabilirliğiniz artırılır." }
  ];

  // 2. İKİLİ SCHEMA (BREADCRUMB + FAQ) YAPILANDIRMASI
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
          "name": "Kurumsal Web Tasarım Fiyatları",
          "item": "https://www.eladesign.org/kurumsal-web-tasarim-fiyatlari"
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
        
        {/* 1. HERO ALANI */}
        <div className="bg-slate-900 py-24 lg:py-32 relative overflow-hidden border-b border-slate-800">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#933c81]/20 blur-[120px] rounded-full pointer-events-none transform translate-x-1/3 -translate-y-1/4"></div>
          
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center relative z-10">
            {/* 3. H1 Optimizasyonu (Lokasyon Eklendi) */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6 leading-tight">
  Kurumsal Web Tasarım Fiyatları 2026: <br className="hidden md:block" />
  <span className="text-[#e890d6]">Şirketler İçin Profesyonel Paketler</span>
</h1>
            <div className="max-w-3xl mx-auto text-[17px] leading-8 text-slate-300 font-light space-y-4">
              <p>
                İşletmenizin dijital dünyadaki prestiji, kurumsal web sitenizin kalitesiyle doğru orantılıdır. Aşağıdaki paketler, firmanızı en iyi şekilde yansıtmak için hazırlanmıştır.
              </p>
              <p className="text-white font-medium bg-[#003300]/20 p-4 rounded-xl border border-[#003300]/30">
                Eğer satış odaklı bir sistem arıyorsanız <Link href="/eticaret-sitesi-fiyatlari" className="text-[#e890d6] font-bold hover:underline">E-Ticaret Fiyatları</Link> rehberimize göz atabilirsiniz.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 mt-16">
          
          {/* İçerik Giriş */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm mb-16 prose prose-slate max-w-none">
            <p>
              Kurumlar ya da şirketler için özel olarak tasarlanan modern ve çok işlevli web sitelerini kurumsal web tasarım kategorisinde değerlendirebiliriz. Hazır web sitelerine nazaran en büyük farkı özgün olmasıdır. Rakiplerinden farklı görünmek ve internet ortamında zirvede olmak isteyenlerin tercih ettiği bir tasarım türüdür.
            </p>
            <div className="my-10 relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden border border-slate-200">
               <Image src="/kurumsal-web-tasarim-fiyatlari/front-end.jpg" alt="Kurumsal Web Tasarım Fiyatları" fill className="object-cover" />
               <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 p-4 text-center text-white font-medium text-sm">
                 Kurumsal Web Tasarım Fiyatlarını belirleyen faktörler
               </div>
            </div>
            
            <div className="bg-[#933c81]/5 border-l-4 border-[#933c81] p-6 rounded-r-xl my-8">
              <strong className="text-slate-900">Hemen kurumsal bir web sitesi sahibi olmak için bizi arayın. Kurumsal Müşteri Temsilcisi : 0216 576 58 26</strong>
            </div>
          </div>

          {/* Fiyat Tablosu */}
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 overflow-hidden mb-20">
            <div className="p-6 md:p-10 border-b border-slate-100 bg-slate-50">
              <h2 className="text-2xl font-bold text-slate-900">Kurumsal Web Tasarım Fiyat Listesi 2026</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="p-5 font-semibold"></th>
                    <th className="p-5 font-semibold">Web Sitesi Türü</th>
                    <th className="p-5 font-semibold">İlk Kurulum Fiyatı</th>
                    <th className="p-5 font-semibold">Yıllık Yenileme (2. Yıl)</th>
                    <th className="p-5 font-semibold">Teslim Süresi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {fiyatListesi.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="p-5">
                         <div className="w-12 h-12 relative rounded-lg overflow-hidden border border-slate-200">
                           <Image src={item.img} alt={item.model} fill className="object-cover" />
                         </div>
                      </td>
                      <td className="p-5 font-bold text-slate-800">{item.model}</td>
                      <td className="p-5 font-black text-[#933c81]">{item.fiyat}</td>
                      <td className="p-5 text-slate-600">{item.yenileme}</td>
                      <td className="p-5 text-slate-600">{item.teslim}</td>
                    </tr>
                  ))}
                  <tr className="bg-slate-50">
                    <td className="p-5 text-center text-amber-500 text-2xl">⭐</td>
                    <td className="p-5 font-bold text-slate-800">Projeye Özel Web Sitesi</td>
                    <td className="p-5"><Link href="/teklif" className="text-[#933c81] font-bold hover:underline">Teklif İsteyin</Link></td>
                    <td className="p-5 font-medium text-slate-600">Projeye Özel</td>
                    <td className="p-5 font-medium text-slate-600">Projeye Özel Takvim</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Uzun İçerik (Eski Sitedeki 5 Madde) */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm mb-20 prose prose-slate max-w-none">
            
            <h2 className="text-3xl font-bold text-slate-900 border-b border-slate-200 pb-4 mb-8">Web Tasarım Karar Verme Süreci</h2>
            <p>
              Bir web tasarım ajansı ile çalışmaya başlamadan önceki süreç nasıl olmalıdır? Web tasarım fiyatlarını karşılaştırırken nelere dikkat etmek gerekir? Web sitesi yaptırmaya karar verdiğinizde yukarıdaki soruları mutlaka kendinize sormuşsunuzdur. Doğru web tasarım şirketini bulmak için araştırma yapmanız gayet normal.
            </p>
            <p>
              Sektörümüzde bir <strong><span className="text-red-500">web tasarım fiyatı</span></strong> araştırması yaptığınızda karşınıza çıkacak fiyat listeleri çok şaşırtıcı olabilmektedir. İnternet aramalarından ulaştığınız kimi şirket size çok düşük bütçeler sunarken; kimi şirket de yüksek fiyat aralıklarından bahsedebilmektedir.
            </p>
            <p>
              Şimdi bu uçuk farklı fiyat listelerini birlikte inceleyelim. Aklınızdaki soru işaretlerini çözmeye çalışalım:
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">5 Maddede bir web sitesi nelerden oluşmaktadır:</h3>
            <ol className="font-semibold text-slate-700 space-y-2 mb-12">
              <li><Link href="#alan-adi" className="text-[#933c81] hover:underline">İyi araştırılmış ve fayda sağlayabilecek bir alan adı</Link></li>
              <li><Link href="#hosting" className="text-[#933c81] hover:underline">Kesintisiz çalışacak, ileriye dönük olarak arttırılabilir donanımlara sahip bir sunucu ( ya da hosting )</Link></li>
              <li><Link href="#frontend" className="text-[#933c81] hover:underline">Müşterilerinizin gördüğü bir ön yüz tasarımı</Link></li>
              <li><Link href="#admin-paneli" className="text-[#933c81] hover:underline">Sizin kullanacağınız bir admin yönetici paneli</Link></li>
              <li><Link href="#sunucu-tarafli-hizmetler" className="text-[#933c81] hover:underline">Sizin ve müşterilerinizin çoğu zaman görmediği sunucu tarafında çalışan sistemler</Link></li>
            </ol>

            <div id="alan-adi" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">1.) Alan Adı / Domain</h3>
              <div className="relative h-[300px] w-full rounded-xl overflow-hidden mb-6">
                <Image src="/kurumsal-web-tasarim-fiyatlari/alan-adi.jpg" alt="Alan Adı Seçimi" fill className="object-cover" />
              </div>
              <p>
                Alan adı ya da domain web sitenizin ismidir. Bu ismi belirlerken önceden bir araştırma yapmak ve en doğru seçimi yapmak önemlidir. Alan adı sadece web sitenizin tarayıcıdaki görüntüsü değil, aynı zamanda internet ortamındaki müşterilerinizin sizi tanıdığı marka isminizdir.
              </p>
              <p className="font-medium">Bir web sitesi kurarken seçeceğiniz alan adlarında şu kriterlere dikkat etmelisiniz:</p>
              <ul>
                <li>Sizi veya markanızı tek kelime ile anlatabilen</li>
                <li>Sattığınız ürün ya da hizmetin ismini içeren</li>
                <li>Mümkün olduğunca kısa olan</li>
                <li>Hizmet verdiğiniz ülkenin dilinde anlaşılır olan</li>
                <li>Sizin tarafınızdan tescil edilmiş olan</li>
              </ul>
              <p className="font-bold text-slate-900">Bir alan adının fiyatı : 10 USD ile 39 USD / Yıllık arasında değişebilen fiyatlara sunulabilmektedir.</p>
            </div>

            <div id="hosting" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">2.) Sunucu / Hosting</h3>
              <div className="relative h-[300px] w-full rounded-xl overflow-hidden mb-6">
                <Image src="/kurumsal-web-tasarim-fiyatlari/hosting.jpg" alt="Hosting Seçimi" fill className="object-cover" />
              </div>
              <p>
                Hosting ya da sunucu hizmeti web sitenizi kurarken ihtiyacınız olan ikinci önemli elementtir. Web sitenizdeki dosyaların yer aldığı, mail adreslerinizin çalıştığı, web sitenizin hızını ve dolayısı ile SEO skorunu doğrudan etkileyen bir kriterdir.
              </p>
              <p className="font-bold">Hosting aslında çok hızlı bir internet bağlantısına sahip, gelişmiş donanımları olan bir bilgisayardır.</p>
              <p className="font-medium">Bir hosting alırken dikkat etmeniz gerekenleri şöyle özetleyelim:</p>
              <ul>
                <li>Hosting hesap limitleri mümkün olduğunca yüksek olmalıdır</li>
                <li>Hosting olarak kullanılan bilgisayar en güncel yazılım ve donanımlara sahip olmalıdır</li>
                <li>Hosting hizmeti alınan sunucu merkezinde elektrik kesintilerine, yangın ve doğal afetlere karşı gerekli önlemler alınmış olmalıdır</li>
                <li>Hosting hesabının bulunduğu sunucu güvenlik açıklarına karşı sürekli kontrol edilmelidir</li>
                <li>Hesapta bulunan web sitesi herhangi bir aksi duruma karşı belli aralıklarla yedeklenmelidir.</li>
              </ul>
            </div>

            <div id="frontend" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">3.) Front-End / Ön Yüz Tasarımı</h3>
              <div className="relative h-[300px] w-full rounded-xl overflow-hidden mb-6">
                <Image src="/kurumsal-web-tasarim-fiyatlari/front-end.jpg" alt="Ön Yüz Tasarımı" fill className="object-cover" />
              </div>
              <p>
                Front-end konusuna gelince burada biraz yavaşlamamız gerekiyor. Nedir bu front-end? Web sitesi fiyatlarını belirleyen en büyük etkenlerin ilki front-end yani müşterinizin gördüğü ön yüz tasarımıdır. Web sitesi fiyat araştırması yaparken uçuk fiyatlar almanıza sebep olan etken bu kısımdadır.
              </p>
              <p>
                Ekonomik bir fiyata web sitesi sahip olmak isteyebilirsiniz. Ancak rakiplerinizden farklı ve sizi tam olarak tanımlayan kurumsal bir web tasarım ihtiyacınız varsa o zaman bu konuda kesenin ağzını açmalısınız.
              </p>
            </div>

            <div id="admin-paneli" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">4.) Admin Paneli Yazılımı</h3>
              <div className="relative h-[300px] w-full rounded-xl overflow-hidden mb-6">
                <Image src="/kurumsal-web-tasarim-fiyatlari/admin-panel.jpg" alt="Admin Paneli" fill className="object-cover" />
              </div>
              <p>
                <strong>Admin panel yazılımı</strong> ile web sitenizdeki bazı alanları veya tüm alanları kontrol edebilirsiniz. Web sitenizde değişiklikler yapmak için herhangi bir kodlama bilgisine ihtiyaç duymazsınız. Admin paneller hazır cms paketleri ile yapılabildiği gibi, web tasarım firması tarafından da kodlanmaktadır.
              </p>
              <p className="font-medium">Gelelim admin panelin fiyata etkisine:</p>
              <ul>
                <li>Müşteriye özel olarak kodlanan ve sitenin her alanını yönetebileceğiniz bir admin panelin fiyatı ortalama 3500 ile 5000 TL arasında değişkenlik gösterebilir.</li>
                <li>Daha standart olarak kodlanmış ve sitenin gerekli görülen alanlarını düzenleyebileceğiniz bir admin panel fiyatı ortalama 1000 ile 2500 TL aralığındadır.</li>
                <li>Hazır bir cms ile yapılan admin panel fiyatları genellikle ek ücrete tabi değildir. Çünkü admin panel zaten hazır olduğu için sadece üzerine giydirilecek tasarım için ücret alınmaktadır.</li>
              </ul>
            </div>

            <div id="sunucu-tarafli-hizmetler" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">5.) Sunucu Taraflı Hizmetler</h3>
              <div className="relative h-[300px] w-full rounded-xl overflow-hidden mb-6">
                <Image src="/kurumsal-web-tasarim-fiyatlari/sunucu-tarafli-hizmetler.jpg" alt="Sunucu Taraflı Hizmetler" fill className="object-cover" />
              </div>
              <p>
                <strong>Sunucu taraflı hizmetler</strong>, herhangi bir sorun olmadığı sürece sizin ya da müşterileriniz tarafından fark edilmez. Peki nedir bu sizin ya da müşterilerinizin görmediği arkaplanda olanlar:
              </p>
              <ul>
                <li>Alanınız üzerinden gönderilen olağan dışı mail trafiğinin izlenmesi</li>
                <li>3. taraf saldırıların izlenmesi ve önlemler alınması</li>
                <li>Bilinen ve öngörülen açıklar için sistem yazılımlarının güncel tutulması</li>
                <li>Yönetici paneline yapılan girişlerin loglanması ve olağan dışı girişlere müdahale edilmesi</li>
                <li>Sunucu üzerinde bulunan tüm sitelerin birbirinden izole edilmesi</li>
                <li>Sunucudaki trafiğin sürekli izlenmesi</li>
              </ul>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Destek Hizmetleri</h3>
              <p>
                Web tasarım destek hizmetleri sitenizin devamlılığı için en önemli detaydır. Bir web sitesi yaptırdıktan sonraki süreçte herhangi bir sorun oluşabilir. Bu sorunları çözmek için ilk yapacağınız şey web tasarım firmanızı aramak olacaktır.
              </p>
            </div>
            
          </div>

          {/* SSS Alanı */}
          <div>
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