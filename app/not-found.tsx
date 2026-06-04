import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-6 py-24 relative overflow-hidden">
      
      {/* Arka Plan Dekoratif Objeleri */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#933c81]/10 to-[#df6e32]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="text-center max-w-2xl mx-auto relative z-10">
        {/* Büyük 404 Yazısı */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#933c81] to-[#df6e32] mb-6 drop-shadow-sm">
          404
        </h1>
        
        {/* Başlık ve Mesaj */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Aradığınız Sayfa Bulunamadı
          </h2>
          <p className="text-slate-600 text-[16px] mb-10 leading-relaxed">
            Sitemizi çok daha modern ve hızlı bir altyapıya taşıdık. Bu süreçte eski bağlantılardan birine tıklamış veya adresi yanlış yazmış olabilirsiniz. Endişelenmeyin, çözüm üretmek için buradayız.
          </p>
          
          {/* Aksiyon Butonları */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/" 
              className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              Ana Sayfaya Dön
            </Link>
            <Link 
              href="/iletisim" 
              className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-xl border border-slate-200 transition-all hover:-translate-y-1"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}