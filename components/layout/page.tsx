import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css'; // Tailwind ve global stillerin çalışması için şart

export const metadata: Metadata = {
  // 1. DİNAMİK URL ÇÖZÜMÜ
  metadataBase: new URL('https://www.eladesign.org'), 
  
  title: {
    // 2. ÇİFT İSİM ÇÖZÜMÜ (Sonuna sadece bir kez Ela Design ekler)
    template: '%s | Ela Design', 
    default: 'Ela Design | İstanbul Kurumsal Web Tasarım ve Yazılım Ajansı', 
  },
  description: 'İstanbul Ataşehir merkezli 360° dijital dönüşüm, web tasarım, özel yazılım ve Google Ads performans ajansı.',
  
  openGraph: {
    title: 'Ela Design | Kurumsal Dijital Ajans',
    description: 'İstanbul Ataşehir merkezli 360° dijital ajans.',
    url: '/', 
    siteName: 'Ela Design',
    locale: 'tr_TR',
    type: 'website',
    // 3. EKSİK OG GÖRSELİ ÇÖZÜMÜ
    images: [
      {
        url: '/og-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'Ela Design Web Tasarım Ajansı',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Ela Design | Kurumsal Dijital Ajans',
    description: 'İstanbul Ataşehir merkezli 360° dijital dönüşüm ajansı.',
    images: ['/og-image.jpg'], 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>
        {children}
      </body>
      
      {/* 4. GOOGLE ANALYTICS BAĞLANTISI (Doğru ID eklendi) */}
      <GoogleAnalytics gaId="G-1SV7XN3NRY" />
    </html>
  );
}