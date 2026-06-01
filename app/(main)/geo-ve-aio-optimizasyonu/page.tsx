import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "GEO ve AIO Optimizasyonu | Ela Teknoloji ve Tasarım",
  description: "Yapay zeka destekli arama motorları (ChatGPT, Gemini, Perplexity) için GEO ve AIO optimizasyonu hizmetlerimizle markanızı geleceğe taşıyın."
};

export default function GeoAioOptimizasyonu() {
  return (
    <div className="bg-white min-h-screen">
      {/* Üst Başlık Alanı */}
      <div className="relative isolate bg-slate-50 py-20 sm:py-28 border-b border-slate-200">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#933c81] to-[#e890d6] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <p className="text-[14px] font-semibold uppercase tracking-widest text-[#933c81] mb-4">
            YENİ NESİL OPTİMİZASYON
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-6">
            GEO & AIO <span className="text-[#933c81]">Optimizasyonu</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Geleneksel SEO'nun ötesine geçin. Markanızı ChatGPT, Gemini ve Perplexity gibi yapay zeka arama motorlarında (AI Search) en üst sıralara taşıyoruz.
          </p>
        </div>
      </div>

      {/* İçerik Alanı */}
      <div className="max-w-[1000px] mx-auto px-6 py-16 lg:py-20 text-slate-700 space-y-10">
        
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">GEO ve AIO Nedir?</h2>
          <p className="leading-relaxed">
            <strong>GEO (Generative Engine Optimization)</strong> ve <strong>AIO (Artificial Intelligence Optimization)</strong>, web sitenizi yalnızca Google gibi geleneksel arama motorları için değil, üretken yapay zeka motorları için de optimize etme sürecidir. Kullanıcılar artık arama yapmak yerine yapay zekaya sorular soruyor ve doğrudan yanıtlar alıyor. Biz de markanızın bu yanıtlarda referans olarak gösterilmesini sağlıyoruz.
          </p>
        </section>

        <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Neden Bu Hizmete İhtiyacınız Var?</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[#933c81] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Sıfır Tıklama (Zero-Click) Aramalarında Görünürlük:</strong> Kullanıcılar sitenize girmese bile, yapay zeka botlarının verdiği cevapların içinde markanızın adı ve sunduğunuz değerler yer alır.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[#933c81] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Otorite İnşası:</strong> Yapay zeka modelleri, yalnızca yüksek otoriteye ve temiz bilgi mimarisine sahip siteleri kaynak olarak kabul eder. Sitenizin veri yapısını bu botların kolayca okuyabileceği hale getiriyoruz.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[#933c81] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Geleceğe Yatırım:</strong> Arama alışkanlıkları hızla değişiyor. Şimdiden AIO stratejisini kuran markalar, önümüzdeki yılların dijital rekabetinde açık ara önde olacak.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Neler Yapıyoruz?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-slate-200 rounded-xl hover:border-[#933c81] transition-colors">
              <h4 className="font-bold text-slate-900 mb-2">Semantik İçerik Yapılandırması</h4>
              <p className="text-sm">İçeriklerinizi anahtar kelime odaklılıktan çıkarıp, bağlamsal ve soru-cevap formatında yapay zekanın beslenebileceği şekilde yeniden kurguluyoruz.</p>
            </div>
            <div className="p-6 border border-slate-200 rounded-xl hover:border-[#933c81] transition-colors">
              <h4 className="font-bold text-slate-900 mb-2">Gelişmiş Şema (Schema) İşaretlemeleri</h4>
              <p className="text-sm">AI botlarının verilerinizi kusursuz tarayabilmesi için sitenizin arka planındaki JSON-LD şema kodlarını en ince detayına kadar optimize ediyoruz.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link 
            href="/iletisim" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#933c81] text-white font-bold text-[15px] hover:bg-[#7a316a] hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            Markanızı Geleceğe Taşıyın
          </Link>
        </div>

      </div>
    </div>
  );
}