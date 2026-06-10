'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Sayfa yüklendiğinde kullanıcının daha önce kabul edip etmediğine bakıyoruz
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    // Kabul edildi bilgisini tarayıcıya kaydet ve banner'ı gizle
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 text-white p-4 md:p-6 z-[9999] shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex-1 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 w-full">
        <p className="text-[13px] md:text-[14px] text-slate-300 text-center sm:text-left leading-relaxed">
          Sizlere daha iyi bir deneyim sunabilmek için web sitemizde çerezler (cookies) kullanılmaktadır. Sitemizi kullanmaya devam ederek <Link href="/yasal" className="text-[#e890d6] hover:underline font-bold transition-colors">Çerez Politikamızı</Link> kabul etmiş olursunuz.
        </p>
        <button 
          onClick={acceptCookies}
          className="bg-[#933c81] text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg hover:bg-[#7a316a] transition-all whitespace-nowrap transform hover:-translate-y-0.5"
        >
          Kabul Ediyorum
        </button>
      </div>
    </div>
  );
}