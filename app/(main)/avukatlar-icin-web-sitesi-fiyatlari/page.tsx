import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Avukat Web Sitesi Fiyatları ve Tasarımı | Ela Teknoloji",
  description: "Türkiye Barolar Birliği (TBB) reklam yasağı kurallarına %100 uygun, SEO ve makale altyapılı kurumsal avukat ve hukuk bürosu web sitesi tasarımı.",
};

export default function AvukatWebSitesiPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      
      {/* ÜST BÖLÜM (HERO) */}
      <div className="bg-slate-900 pt-32 pb-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-[#933c81]/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 text-center relative z-10">
          <p className="text-[14px] font-semibold uppercase tracking-widest text-[#e890d6] mb-4">
            HUKUK BÜROLARINA ÖZEL ÇÖZÜMLER
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Avukatlar İçin <span style={{ color: "#e890d6" }}>Kurumsal <br className="hidden md:block"/> Web Sitesi</span> Tasarımı
          </h1>
          <p className="text-slate-300 text-[17px] font-light max-w-2xl mx-auto leading-relaxed">
            Türkiye Barolar Birliği (TBB) reklam yasağı yönetmeliğine %100 uygun, müvekkillerinize güven veren ve arama motorlarında sizi üst sıralara taşıyan profesyonel web mimarisi.
          </p>
        </div>
      </div>

      {/* İÇERİK ALANI */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 -mt-12 relative z-20">
        
        {/* Neden Biz Kartı */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 lg:p-12 border border-slate-100 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Neden Uzman Bir Ajansla Çalışmalısınız?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Avukatlık mesleği, dijital dünyada varlık gösterirken çok ince bir çizgi üzerinde yürümeyi gerektirir. Siteniz bir yandan uzmanlığınızı ve prestijinizi yansıtmalı, diğer yandan <strong>reklam yasağı ihlaline</strong> düşmemelidir.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#933c81] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="text-slate-700"><strong>TBB Kurallarına Uyumlu:</strong> Haksız rekabet yaratmayan, tamamen bilgilendirici ve prestij odaklı tasarım.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#933c81] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="text-slate-700"><strong>Gelişmiş Makale/İçtihat Modülü:</strong> Hukuki makalelerinizi ve Yargıtay kararlarını kolayca yayınlayarak organik SEO trafiği çekin.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#933c81] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="text-slate-700"><strong>Çoklu Dil Desteği (İsteğe Bağlı):</strong> Yabancı müvekkilleriniz ve kurumsal şirketler için İngilizce/Almanca dil altyapısı.</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Bir Avukat Sitesinde Olması Gerekenler:</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center font-semibold text-slate-700 text-sm">Uzmanlık Alanları</div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center font-semibold text-slate-700 text-sm">Dinamik Makale Blogu</div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center font-semibold text-slate-700 text-sm">Hızlı İletişim / WhatsApp</div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center font-semibold text-slate-700 text-sm">Mobil Uyumlu (Responsive)</div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center font-semibold text-slate-700 text-sm">SSL Güvenlik Sertifikası</div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center font-semibold text-slate-700 text-sm">KVKK Aydınlatma Metni</div>
              </div>
            </div>
          </div>
        </div>

        {/* Fiyatlandırma Bilgilendirmesi */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Avukat Web Sitesi Fiyatları Nasıl Belirlenir?</h2>
          <p className="text-slate-600 leading-relaxed">
            Hukuk büroları için web sitesi fiyatları; tek çalışanlı butik bir büro mu yoksa birden fazla departmanı olan büyük bir hukuki danışmanlık şirketi mi olduğunuza göre değişiklik gösterir. Hazır şablonlar yerine, kurumunuzun kimliğine özel Next.js / Headless mimari ile yüksek performanslı projeler üretiyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Paket 1 */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#933c81] transition-colors relative shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Bireysel Avukat Paketi</h3>
            <p className="text-slate-500 text-sm mb-6 pb-6 border-b border-slate-100">Serbest çalışan ve butik hizmet veren avukatlar için ideal başlangıç altyapısı.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-slate-700 text-sm"><span className="text-green-500 mr-2">✔</span> Kurumsal Kimlik Uyumlu Tasarım</li>
              <li className="flex items-center text-slate-700 text-sm"><span className="text-green-500 mr-2">✔</span> Uzmanlık Alanları Sayfaları</li>
              <li className="flex items-center text-slate-700 text-sm"><span className="text-green-500 mr-2">✔</span> Temel SEO Altyapısı</li>
              <li className="flex items-center text-slate-700 text-sm"><span className="text-green-500 mr-2">✔</span> Yönetilebilir Makale Modülü</li>
            </ul>
            <Link href="/teklif" className="block w-full text-center px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl transition-colors">
              Fiyat Teklifi Al
            </Link>
          </div>

          {/* Paket 2 */}
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 relative shadow-2xl transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#933c81] to-[#df6e32] text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
              En Çok Tercih Edilen
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Kurumsal Hukuk Bürosu</h3>
            <p className="text-slate-400 text-sm mb-6 pb-6 border-b border-slate-700">Birden fazla departmanı ve avukatı olan kurumsal hukuk ve danışmanlık ofisleri için.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-slate-300 text-sm"><span className="text-[#df6e32] mr-2">✔</span> Özel Next.js Premium Tasarım</li>
              <li className="flex items-center text-slate-300 text-sm"><span className="text-[#df6e32] mr-2">✔</span> Gelişmiş GEO & AIO SEO Mühendisliği</li>
              <li className="flex items-center text-slate-300 text-sm"><span className="text-[#df6e32] mr-2">✔</span> Avukat / Ekip Profilleri Yönetimi</li>
              <li className="flex items-center text-slate-300 text-sm"><span className="text-[#df6e32] mr-2">✔</span> Çoklu Dil Seçeneği (EN/DE vb.)</li>
              <li className="flex items-center text-slate-300 text-sm"><span className="text-[#df6e32] mr-2">✔</span> Gelişmiş CDN ve Yüksek Hız Optimizasyonu</li>
            </ul>
            <Link href="/teklif" className="block w-full text-center px-6 py-3 bg-[#933c81] hover:bg-[#7a316b] text-white font-bold rounded-xl transition-all shadow-lg">
              Detaylı Sunum İste
            </Link>
          </div>
        </div>

        {/* Alt CTA Bilgi */}
        <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-2xl p-8 border border-slate-200 text-center">
          <p className="text-slate-700 font-medium">
            Müvekkillerinizin size güvenle ulaşabileceği, baro kurallarıyla uyumlu dijital ofisinizi inşa etmek için Ataşehir'deki ofisimizde bir kahve içmeye veya online toplantıya davetlisiniz.
          </p>
        </div>

      </div>
    </div>
  );
}