import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "GEO ve AIO Optimizasyonu | Ela Teknoloji ve Tasarım",
  description: "Google SGE, ChatGPT, Gemini ve Perplexity gibi yapay zeka arama motorları için GEO ve AIO optimizasyonu hizmetlerimizle markanızı geleceğe taşıyın."
};

export default function GeoAioOptimizasyonu() {
  const brandColor = "#933c81";

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* 1. Üst Başlık (Hero) Alanı */}
      <div className="relative isolate bg-slate-900 py-24 sm:py-32 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-[#933c81]/30 rounded-full blur-[130px]"></div>
          <div className="absolute bottom-0 left-1/4 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-[#e890d6]/20 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-[13px] font-semibold tracking-widest uppercase mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#e890d6] animate-pulse"></span>
            Geleceğin Arama Teknolojisi
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-8 leading-tight">
            Markanızı <span style={{ color: "#e890d6" }}>Yapay Zekanın</span> <br className="hidden md:block" />
            Referans Kaynağı Yapın
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            10 mavi link dönemi sona eriyor. Geleneksel SEO'nun ötesine geçerek, markanızı ChatGPT, Google SGE, Gemini ve Perplexity gibi üretken yapay zeka motorları için optimize ediyoruz.
          </p>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
        
        {/* 2. Problem ve Dönüşüm Alanı */}
        <div className="py-20 border-b border-slate-100">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Arama Alışkanlıkları Kökten Değişiyor</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Kullanıcılar artık Google'a anahtar kelime yazıp site site dolaşmıyor. Bunun yerine yapay zekaya doğrudan sorular soruyor ve sentezlenmiş, net cevaplar alıyorlar. 
              </p>
              <p className="text-slate-600 leading-relaxed font-semibold">
                Siteniz geleneksel aramalarda 1. sırada olsa bile, yapay zeka botlarının dilinden anlamıyorsa "Sıfır Tıklama (Zero-Click)" aramalarında görünmez olursunuz.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
                <div className="text-4xl mb-3">📉</div>
                <h4 className="font-bold text-slate-900 text-[15px] mb-2">Geleneksel SEO</h4>
                <p className="text-[13px] text-slate-500">Anahtar kelime odaklı, uzun metinler, backlink yığınları.</p>
              </div>
              <div className="bg-[#933c81]/5 p-6 rounded-2xl border border-[#933c81]/20 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#933c81]/10 rounded-bl-full"></div>
                <div className="text-4xl mb-3 relative z-10">🚀</div>
                <h4 className="font-bold text-[#933c81] text-[15px] mb-2 relative z-10">GEO & AIO</h4>
                <p className="text-[13px] text-slate-600 relative z-10">Varlık (Entity) tabanlı, semantik veriler, diyalogsal içerik.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Tam Olarak Nedir? */}
        <div className="py-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">GEO ve AIO Tam Olarak Nedir?</h2>
          <p className="text-slate-600 leading-relaxed text-lg mb-4">
            <strong>GEO (Generative Engine Optimization)</strong> ve <strong>AIO (Artificial Intelligence Optimization)</strong>; web sitenizin içeriğini, mimarisini ve kod yapısını Büyük Dil Modellerinin (LLM) kolayca okuyup, anlayıp, referans gösterebileceği formata dönüştürme mühendisliğidir.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Amacımız, markanızı algoritmalar için bir "web sayfası" olmaktan çıkarıp, güvenilir bir "bilgi varlığı (entity)" haline getirmektir.
          </p>
        </div>

        {/* 4. Teknik Stratejilerimiz (Nasıl Yapıyoruz?) */}
        <div className="py-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-10 text-center">Yapay Zeka İçin 4 Aşamalı Optimizasyon Mimarimiz</h3>
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-[#933c81]/40 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl mb-6 border border-slate-100 group-hover:scale-110 group-hover:bg-[#933c81]/5 transition-all">
                🧱
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">1. Varlık (Entity) Tabanlı Yapılandırma</h4>
              <p className="text-slate-600 text-[14px] leading-relaxed">
                İçeriklerinizi sadece anahtar kelimelere göre değil, anlamsal bütünlüğe (semantik yapıya) göre kurguluyoruz. Yapay zekanın markanızı, ürünlerinizi ve hizmetlerinizi birbiriyle bağlantılı kavramlar (entity) olarak görmesini sağlıyoruz.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-[#933c81]/40 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl mb-6 border border-slate-100 group-hover:scale-110 group-hover:bg-[#933c81]/5 transition-all">
                💬
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">2. Diyalogsal ve Soru-Cevap Odaklı İçerik</h4>
              <p className="text-slate-600 text-[14px] leading-relaxed">
                Kullanıcıların AI botlarıyla konuşma (prompt) dilini analiz ediyoruz. Site içeriklerinizi, direkt, net ve alıntılanabilir (sentezlemeye uygun) paragraflar halinde yeniden dizayn ediyoruz.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-[#933c81]/40 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl mb-6 border border-slate-100 group-hover:scale-110 group-hover:bg-[#933c81]/5 transition-all">
                📊
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">3. Gelişmiş Şema (JSON-LD) Kodlaması</h4>
              <p className="text-slate-600 text-[14px] leading-relaxed">
                Yapay zekanın sitenizi tararken yorulmaması için arka plandaki veri mimarisini kusursuzlaştırıyoruz. Gelişmiş Schema.org işaretlemeleriyle botlara verileri "altın tepside" sunuyoruz.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-[#933c81]/40 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl mb-6 border border-slate-100 group-hover:scale-110 group-hover:bg-[#933c81]/5 transition-all">
                🛡️
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">4. E-E-A-T Sinyallerinin Güçlendirilmesi</h4>
              <p className="text-slate-600 text-[14px] leading-relaxed">
                AI modelleri halüsinasyon görmemek için yalnızca otoriter ve kanıtlanmış kaynakları kullanır. Markanızın dijital dünyadaki otoritesini (Deneyim, Uzmanlık, Otorite, Güven) AI algoritmalarına kanıtlayacak stratejiler uyguluyoruz.
              </p>
            </div>

          </div>
        </div>

        {/* 5. Hedeflenen Platformlar */}
        <div className="py-20 border-t border-b border-slate-100 my-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Hangi Yapay Zeka Motorlarını Hedefliyoruz?</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Google SGE (AI Overviews)', 'OpenAI ChatGPT', 'Perplexity AI', 'Microsoft Copilot (Bing)', 'Anthropic Claude', 'Google Gemini'].map((platform, i) => (
              <span key={i} className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-full text-slate-700 font-semibold text-[14px] shadow-sm">
                {platform}
              </span>
            ))}
          </div>
        </div>

        {/* 6. Call To Action */}
        <div className="mt-20 text-center">
          <div className="bg-[#933c81] rounded-3xl p-12 relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold text-white mb-4">Geleceğin Aramalarında Yerinizi Alın</h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
                Rakipleriniz hala anahtar kelimelerle uğraşırken, markanızı yapay zekanın güvenilir kaynağı yapalım. Sisteminizin GEO altyapısına ne kadar hazır olduğunu ücretsiz analiz edelim.
              </p>
              <Link 
                href="/iletisim" 
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white text-[#933c81] font-bold text-[16px] hover:bg-slate-50 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                Ücretsiz Analiz İsteyin
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}