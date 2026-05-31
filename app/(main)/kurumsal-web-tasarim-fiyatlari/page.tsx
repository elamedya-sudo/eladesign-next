export default function KurumsalWebTasarimFiyatlari() {
  return (
    <div className="max-w-[1000px] mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-slate-900 mb-6">Kurumsal Web Tasarım Fiyatları 2026</h1>
      <p className="text-lg text-slate-600 mb-12">
        Ela Teknoloji ve Tasarım olarak, markanızın dijital dünyadaki yüzünü profesyonel çözümlerle geliştiriyoruz. 
        Kurumsal ihtiyaçlarınıza özel, SEO uyumlu ve yüksek performanslı web tasarım paketlerimizi inceleyin.
      </p>

      {/* Fiyat Kartları */}
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Başlangıç Paketi", price: "15.000 TL", features: ["Kurumsal Web Arayüzü", "Mobil Uyumlu", "İletişim Formu", "Google Harita Entegrasyonu"] },
          { title: "Profesyonel Paket", price: "25.000 TL", features: ["Özel Tasarım", "Hız Optimizasyonu", "SEO Temelleri", "İçerik Yönetim Paneli", "SSL Sertifikası"] },
          { title: "E-Ticaret / Özel", price: "Teklif Alın", features: ["Sınırsız Sayfa", "Gelişmiş SEO", "Ödeme Entegrasyonları", "Birebir Destek", "Bakım Hizmeti"] }
        ].map((paket, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-4">{paket.title}</h3>
            <p className="text-3xl font-black text-[#933c81] mb-6">{paket.price}</p>
            <ul className="space-y-3 text-slate-600 text-sm">
              {paket.features.map((f, index) => <li key={index} className="flex items-center">✓ {f}</li>)}
            </ul>
          </div>
        ))}
      </div>

      {/* SSS Bölümü */}
      <div className="mt-20 bg-slate-50 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Sıkça Sorulan Sorular</h2>
        <div className="space-y-6 text-slate-700">
          <div>
            <p className="font-bold">Web tasarım süreleri ne kadar?</p>
            <p className="text-sm">Projenin kapsamına göre genellikle 15 ile 30 iş günü arasında teslimat yapıyoruz.</p>
          </div>
          <div>
            <p className="font-bold">Ödeme kolaylığı sağlıyor musunuz?</p>
            <p className="text-sm">Kurumsal projelerde %50 ön ödeme, kalan tutarı proje tesliminde alıyoruz.</p>
          </div>
        </div>
      </div>
    </div>
  );
}