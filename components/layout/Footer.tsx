import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 pt-20 pb-10">
        
        {/* ÜST KISIM: 4 KOLONLU YAPI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* 1. Kolon: Marka ve İletişim (Geniş Kolon) */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image src="/logo/logo.webp" alt="Ela Design Logo" width={180} height={55} className="object-contain brightness-0 invert opacity-90" />
            </Link>
            <p className="text-slate-400 text-[15px] font-light leading-relaxed mb-8 pr-4">
              Dijital dünyadaki büyüme ortağınız. Web tasarım, özel yazılım, reklam yönetimi ve kurumsal kimlik süreçlerinizi mühendislik vizyonuyla tek çatı altında yönetiyoruz.
            </p>
            <div className="space-y-3 text-[14px] text-slate-300">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#933c81] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Küçükbakkalköy Mh. Kayışdağı Cd. Ali Ay Sk. No: 3/1 Orkide Apt. Ataşehir - İSTANBUL</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#933c81] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:+902165765826" className="hover:text-white transition-colors">0216 576 58 26</a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#933c81] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:info@eladesign.org" className="hover:text-white transition-colors">info@eladesign.org</a>
              </div>
            </div>
          </div>

          {/* 2. Kolon: Hizmetlerimiz */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-bold text-[16px] mb-6 tracking-wide">Hizmetlerimiz</h4>
            <ul className="space-y-4">
              <li><Link href="/web-tasarim" className="text-slate-400 hover:text-[#e890d6] text-[15px] transition-colors">Kurumsal Web Tasarım</Link></li>
              <li><Link href="/web-yazilim" className="text-slate-400 hover:text-[#e890d6] text-[15px] transition-colors">Özel Web Yazılım</Link></li>
              <li><Link href="/eticaret-sitesi" className="text-slate-400 hover:text-[#e890d6] text-[15px] transition-colors">E-Ticaret Sistemleri</Link></li>
              <li><Link href="/google-adwords" className="text-slate-400 hover:text-[#e890d6] text-[15px] transition-colors">Google Ads Yönetimi</Link></li>
              <li><Link href="/arama-motoru-optimizasyonu" className="text-slate-400 hover:text-[#e890d6] text-[15px] transition-colors">SEO Optimizasyonu</Link></li>
              <li><Link href="/hizmetler" className="text-[#933c81] font-semibold hover:text-white text-[14px] transition-colors mt-2 inline-block">Tüm Hizmetleri Gör &rarr;</Link></li>
            </ul>
          </div>

          {/* 3. Kolon: Hızlı Bağlantılar */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-[16px] mb-6 tracking-wide">Kurumsal</h4>
            <ul className="space-y-4">
              <li><Link href="/hakkimizda" className="text-slate-400 hover:text-[#e890d6] text-[15px] transition-colors">Hakkımızda</Link></li>
              <li><Link href="/kurumsal-web-tasarim-fiyatlari" className="text-slate-400 hover:text-[#e890d6] text-[15px] transition-colors">Web Tasarım Fiyatları</Link></li>
              <li><Link href="/ucretsiz-web-sitesi" className="text-slate-400 hover:text-[#e890d6] text-[15px] transition-colors">Ücretsiz Web Sitesi</Link></li>
              <li><Link href="/e-ticaret-sitesi-fiyatlari" className="text-slate-400 hover:text-[#e890d6] text-[15px] transition-colors">E-Ticaret Sitesi Fiyatları</Link></li>
              <li><Link href="/avukatlar-icin-web-sitesi-fiyatlari" className="text-slate-400 hover:text-[#e890d6] text-[15px] transition-colors">Avukatlar İçin Web Sitesi Fiyatları</Link></li>
              <li><Link href="/blog" className="text-slate-400 hover:text-[#e890d6] text-[15px] transition-colors">Ela Akademi</Link></li>
              <li><Link href="/teklif" className="text-slate-400 hover:text-[#e890d6] text-[15px] transition-colors">Teklif İsteyin</Link></li>
              <li><Link href="/iletisim" className="text-slate-400 hover:text-[#e890d6] text-[15px] transition-colors">İletişim</Link></li>
              {/* YENİ: SITE HARİTASI LİNKİ EKLENDİ */}
              <li><Link href="/site-haritasi" className="text-[#933c81] font-semibold hover:text-white text-[15px] transition-colors">Site Haritası</Link></li>
            </ul>
          </div>

          {/* 4. Kolon: Sosyal Medya & Partnerlik (4. Sekme Olarak Sağa Dayalı) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-[16px] mb-6 tracking-wide">Bizi Takip Edin</h4>
            
            {/* Sosyal İkonlar */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a href="https://www.instagram.com/eladesign/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#E1306C] hover:text-white transition-all shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.facebook.com/elawebtasarim/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:text-white transition-all shadow-sm">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
              <a href="https://tr.linkedin.com/company/ela-design" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#0A66C2] hover:text-white transition-all shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://www.youtube.com/channel/UCdbaLB99C0qZClgBIS_-1vA" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#FF0000] hover:text-white transition-all shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://tr.pinterest.com/elamedya/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#E60023] hover:text-white transition-all shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345l-.288 1.148c-.046.182-.15.223-.338.136-1.261-.581-2.05-2.409-2.05-3.879 0-3.159 2.296-6.062 6.626-6.062 3.472 0 6.175 2.474 6.175 5.776 0 3.453-2.176 6.234-5.197 6.234-1.015 0-1.972-.527-2.298-1.15l-.626 2.383c-.226.866-.84 1.947-1.254 2.61a12.023 12.023 0 0 0 3.412.496c6.621 0 11.988-5.365 11.988-11.987C24.017 5.367 18.638 0 12.017 0z"/></svg>
              </a>
            </div>

            {/* Google Partner Badge */}
            <a href="https://www.google.com/partners/agency?id=2216272036" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity">
                <img src="https://www.gstatic.com/partners/badge/images/2026/PartnerBadgeClickable.svg" alt="Google Partner" className="h-16 w-auto" />
            </a>

          </div>

        </div>

        {/* ALT KISIM: COPYRIGHT VE YASAL LİNKLER */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-[13px]">
            &copy; {currentYear} <span className="font-semibold text-slate-400">Ela Teknoloji ve Tasarım San. Tic. Ltd. Şti.</span> Tüm hakları saklıdır.
          </p>
          
          <div className="flex gap-6 text-[13px] font-medium">
            <Link href="/yasal" className="text-slate-500 hover:text-white transition-colors">
              Yasal Bilgilendirmeler & Politikalar
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}