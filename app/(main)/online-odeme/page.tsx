import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Ödeme | Ela Teknoloji ve Tasarım",
  description: "Ela Teknoloji ve Tasarım projeleriniz için PayTR altyapısı ve 3D Secure güvencesiyle kredi kartınızla hızlıca ödeme yapabilirsiniz.",
};

export default function OnlineOdemePage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      
      {/* ÜST BÖLÜM (HERO) */}
      <div className="bg-slate-900 pt-32 pb-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-[#933c81]/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 text-center relative z-10">
          <p className="text-[14px] font-semibold uppercase tracking-widest text-[#e890d6] mb-4">
            GÜVENLİ ÖDEME NOKTASI
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Hızlı ve Güvenli <br className="hidden md:block" />
            <span style={{ color: "#e890d6" }}>Online Ödeme</span>
          </h1>
          <p className="text-slate-300 text-[17px] font-light max-w-2xl mx-auto">
            Projeleriniz için ödemelerinizi PayTR altyapısı ile 3D Secure güvencesi altında kredi kartınızla gerçekleştirebilirsiniz.
          </p>
        </div>
      </div>

      {/* İÇERİK VE İFRAME ALANI */}
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8 -mt-12 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 p-2 md:p-6 lg:p-8 border border-slate-100 flex flex-col items-center">
          
          {/* Iframe Kapsayıcı */}
          {/* DİKKAT: Mobilde alt alta bindiği için yükseklik 1100px yapıldı, masaüstünde (md) 750px olarak korundu */}
          <div className="w-full h-[1100px] md:h-[750px] rounded-2xl overflow-hidden bg-white relative">
            
            {/* Yüklenirken arkada görünecek mesaj */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 -z-10">
              <svg className="animate-spin h-8 w-8 mb-4 text-[#933c81]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              Güvenli Ödeme Ekranı Yükleniyor...
            </div>
            
            {/* PayTR Iframe */}
            <iframe
              src="https://www.paytr.com/link/YBXRBQk"
              className="w-full h-full relative z-10"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              allowFullScreen
              title="PayTR Güvenli Ödeme Sistemi"
            ></iframe>
          </div>

          {/* Güvenlik Rozetleri */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-slate-500 text-[14px] font-medium">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              <span>256-Bit SSL Sertifikası</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300"></div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              <span>3D Secure Güvencesi</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300"></div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-700">PayTR</span> Altyapısı
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}