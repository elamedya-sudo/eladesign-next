import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Kurumsal Web Tasarım Fiyatları 2026 | Ela Teknoloji ve Tasarım",
  description: "Kurumsal web tasarım fiyatları ve profesyonel paketlerimiz. Rakiplerinizden farklı, özgün web sitesi çözümleri için detaylı fiyat listemizi inceleyin."
};

export default function KurumsalWebTasarimFiyatlari() {
  const fiyatListesi = [
    { model: "Temel Düzey Web Sitesi", fiyat: "22.000 - 25.000 TL", yenileme: "6.000 TL + KDV", teslim: "5 İş Günü", icon: "/images/hazir-web-tasarim-mimari.jpg" },
    { model: "Ekonomik Web Sitesi", fiyat: "25.000 - 35.000 TL", yenileme: "8.000 TL + KDV", teslim: "5 İş Günü", icon: "/images/hazir-web-tasarim-hastane.jpg" },
    { model: "Kurumsal Web Sitesi", fiyat: "35.000 - 75.000 TL", yenileme: "15.000 TL + KDV", teslim: "10 İş Günü", icon: "/images/hazir-web-tasarim-okul.jpg" },
    { model: "Profesyonel Kurumsal Site", fiyat: "75.000 - 125.000 TL", yenileme: "18.000 TL + KDV", teslim: "15 İş Günü", icon: "/images/hazir-web-tasarim-restourant.jpg" }
  ];

  return (
    <div className="max-w-[1000px] mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center text-slate-900 mb-8">Kurumsal Web Tasarım Fiyatları 2026</h1>
      
      <p className="text-center text-lg text-slate-600 mb-10">
        Dijital prestijinizi kurumsal kalitenizle buluşturuyoruz. <br />
        Firmanız için en uygun paketi hemen seçin.
      </p>

      <div className="bg-slate-50 p-6 border-l-4 border-[#0088cc] rounded-r-lg mb-12">
        <p className="font-semibold text-lg text-slate-800">
          🚀 E-ticaret odaklı bir sistem arıyorsanız, detaylı fiyat listemiz için 
          <Link href="/e-ticaret-sitesi-fiyatlari" className="text-[#0088cc] underline font-bold ml-1">E-Ticaret Fiyatları</Link> sayfamızı ziyaret edin.
        </p>
      </div>

      <div className="overflow-x-auto mb-20">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="p-4">Web Sitesi Türü</th>
              <th className="p-4">İlk Kurulum</th>
              <th className="p-4">Yıllık Yenileme</th>
              <th className="p-4">Teslim Süresi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {fiyatListesi.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-50">
                <td className="p-4 font-semibold text-slate-800 flex items-center gap-3">
                  {item.model}
                </td>
                <td className="p-4 font-medium text-[#933c81]">{item.fiyat}</td>
                <td className="p-4 text-slate-600">{item.yenileme}</td>
                <td className="p-4 text-slate-600">{item.teslim}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <article className="prose lg:prose-xl max-w-none text-slate-700">
        <h2 className="text-2xl font-bold text-slate-900">Kurumsal Web Tasarım Nedir?</h2>
        <p>Kurumlar veya şirketler için özel olarak tasarlanan modern ve çok işlevli web siteleridir. Hazır sitelerden farkı %100 özgün olmasıdır.</p>

        <h3 className="text-xl font-bold">5 Maddede Web Sitesi</h3>
        <ol>
          <li>Alan Adı (Domain) seçimi</li>
          <li>Kesintisiz Hosting (Sunucu)</li>
          <li>Özgün Front-End Tasarımı</li>
          <li>Admin Yönetim Paneli</li>
          <li>Sunucu Taraflı Güvenlik Hizmetleri</li>
        </ol>
      </article>

      {/* SSS Kısmı (Akordeon benzeri) */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8">Sıkça Sorulan Sorular</h2>
        <div className="space-y-4">
          {[
            { q: "Hosting ve domain dahil mi?", a: "Evet, tüm kurumsal paketlerimize 1 yıllık Hosting, Domain ve SSL dahildir." },
            { q: "Panelden güncelleyebilir miyim?", a: "Evet, Türkçe ve kullanıcı dostu panelimiz ile kod bilmeden güncelleme yapabilirsiniz." },
            { q: "Mobil uyumlu olacak mı?", a: "Tüm tasarımlarımız %100 Responsive (mobil uyumlu) olarak inşa edilir." }
          ].map((item, i) => (
            <details key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <summary className="font-bold text-lg cursor-pointer">{item.q}</summary>
              <p className="mt-3 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}