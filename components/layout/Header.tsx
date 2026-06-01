"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SearchBar from "./SearchBar"; // SearchBar bileşenini import ettik

const DownArrow = ({ className = "" }) => (
  <svg className={`w-3.5 h-3.5 ml-1.5 transition-transform duration-300 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
  </svg>
);

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const brandColor = "#933c81";

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Anasayfa", href: "/" },
    { 
      name: "Kurumsal", 
      href: "/hakkimizda",
      subLinks: [
        { name: "Kurumsal Sayfası →", href: "/hakkimizda" },
        { name: "Ekibimiz", href: "/ekibimiz" },
        { name: "Banka Bilgilerimiz", href: "/ela-ajans" },
        { name: "Nerelerdeyiz?", href: "/nerelerdeyiz" },
      ]
    },
    { 
      name: "Hizmetlerimiz", 
      href: "/hizmetler", 
      subLinks: [
        { name: "Tüm Hizmetler →", href: "/hizmetler" },
        { name: "Web Tasarım", href: "/web-tasarim" },
        { name: "Web Yazılım", href: "/web-yazilim" },
        { name: "E-Ticaret Sitesi", href: "/eticaret-sitesi" },
        { name: "SEO Optimizasyonu", href: "/arama-motoru-optimizasyonu" },
        { name: "GEO & AIO Optimizasyonu", href: "/geo-ve-aio-optimizasyonu" },
        { name: "Google Ads", href: "/google-adwords" },
        { name: "Kurumsal Kimlik", href: "/kurumsal-kimlik-tasarimi" },
        { name: "Sosyal Medya Yönetimi", href: "/sosyal-medya-yonetimi" },
        { name: "2D Animasyon", href: "/2d-animasyon" },
        
      ]
    },
    { name: "Neler Yaptık", href: "/neler-yaptik" },
    { name: "Akademi", href: "/blog" },
    { name: "İletişim", href: "/iletisim" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const toggleMobileDropdown = (name: string) => {
    setOpenMobileDropdown(openMobileDropdown === name ? null : name);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-24">
          
          <div className="flex-shrink-0 relative z-50">
            <Link href="/">
              <Image src="/logo/logo.webp" alt="Ela Design Logo" width={190} height={60} className="object-contain" priority />
            </Link>
          </div>

          <nav className="hidden xl:flex items-center space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              const hasDropdown = link.subLinks && link.subLinks.length > 0;
              
              return (
                <div key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className="flex items-center px-4 py-2 text-[14px] font-semibold tracking-tight transition-colors duration-200 relative"
                    style={{ color: active ? brandColor : '#444' }}
                  >
                    {link.name}
                    {hasDropdown && <DownArrow className="group-hover:rotate-180" />}
                    {active && <span className="absolute bottom-[-10px] left-4 right-4 h-0.5" style={{ backgroundColor: brandColor }}></span>}
                  </Link>

                  {hasDropdown && (
                    <div className="absolute top-[100%] left-0 mt-2 w-64 bg-white border border-slate-100 shadow-xl rounded-2xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 overflow-hidden">
                      <div className="py-2">
                        {link.subLinks?.map((subLink, index) => (
                          <Link key={index} href={subLink.href} className={`block px-6 py-3 text-[14px] font-medium transition-colors ${index === 0 ? 'text-[#933c81] bg-slate-50/50' : 'text-slate-600 hover:text-[#933c81] hover:bg-slate-50'}`}>
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* SearchBar ve Buton Yan Yana */}
          <div className="hidden xl:flex items-center gap-4 relative z-50">
             <SearchBar /> 
             <Link href="/teklif" className="rounded-full bg-[#933c81] px-7 py-3 text-[14px] font-semibold text-white shadow-md hover:bg-[#7a316a] transition-all transform hover:-translate-y-0.5">
              Teklif Al
            </Link>
          </div>

          <div className="xl:hidden flex items-center relative z-[60]">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 bg-slate-50 rounded-xl text-slate-800 border border-slate-200 focus:outline-none hover:bg-slate-100 transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 xl:hidden transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsMobileMenuOpen(false)}></div>

      <div className={`fixed top-0 right-0 h-full w-[85%] max-w-[380px] bg-white z-50 xl:hidden shadow-2xl transform transition-transform duration-500 ease-in-out flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex-1 overflow-y-auto px-6 py-24 space-y-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            const hasDropdown = link.subLinks && link.subLinks.length > 0;
            const isDropdownOpen = openMobileDropdown === link.name;
            return (
              <div key={link.name} className="border-b border-slate-100/60 pb-1">
                {hasDropdown ? (
                  <div>
                    <button onClick={() => toggleMobileDropdown(link.name)} className="w-full flex justify-between items-center py-4 text-[17px] font-bold text-slate-800" style={{ color: active || isDropdownOpen ? brandColor : '#1e293b' }}>
                      {link.name}
                      <svg className={`w-5 h-5 transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-[#933c81]' : 'text-slate-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${isDropdownOpen ? 'max-h-[400px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                      <div className="pl-4 py-3 space-y-1 bg-slate-50 rounded-2xl border border-slate-100">
                        {link.subLinks?.map((subLink, index) => (
                          <Link key={index} href={subLink.href} className={`block px-4 py-2.5 text-[15px] rounded-xl ${index === 0 ? 'text-[#933c81] font-bold bg-[#933c81]/5' : 'text-slate-600 font-medium hover:text-[#933c81]'}`}>
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link href={link.href} className="block py-4 text-[17px] font-bold" style={{ color: active ? brandColor : '#1e293b' }}>{link.name}</Link>
                )}
              </div>
            );
          })}
        </div>
        <div className="p-6 bg-slate-50 border-t border-slate-100">
          <Link href="/teklif" className="flex justify-center items-center w-full rounded-2xl bg-[#933c81] px-6 py-4 text-[16px] font-semibold text-white shadow-lg shadow-[#933c81]/30 hover:bg-[#7a316a]">
            Proje Başlat <span className="ml-2 font-black">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}