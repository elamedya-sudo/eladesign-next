import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Poppins } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import CookieBanner from "@/components/ui/CookieBanner"; // ÇEREZ BİLEŞENİ EKLENDİ
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

// 1. Global SEO ve Metadata Yapılandırması
export const metadata: Metadata = {
  metadataBase: new URL('https://www.eladesign.org'),
  // DİKKAT: Hatalı canonical yönlendirmesi ( alternates: { canonical: '/' } ) Ahrefs SEO hatasını çözmek için tamamen silindi.
  title: {
    default: "Kurumsal Web Tasarım ve Yazılım Ajansı | Ela Teknoloji",
    template: "%s | Ela Teknoloji"
  },
  description: "Geleneksel ajans kalıplarını yıkıyoruz. Web tasarım, SEO, e-ticaret, özel CRM ve SaaS çözümlerimizle markanızı dijitalde büyüten mühendislik harikası sistemler kuruyoruz.",
  // FAVICON BÖLÜMÜ
  icons: {
    icon: '/images/ela-favicon-y.jpg',
    apple: '/images/ela-favicon-y.jpg',
  },
  openGraph: {
    title: "Ela Teknoloji - 360° Dijital Performans Ajansı",
    description: "Markanızı dijitalde büyüten mühendislik harikası sistemler kuruyoruz. Yeni nesil web tasarım, SEO, e-ticaret, SaaS ve CRM çözümleri.",
    url: 'https://www.eladesign.org',
    siteName: 'Ela Teknoloji',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'Ela Teknoloji Dijital Performans Ajansı',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ela Teknoloji - Dijital Performans Ajansı',
    description: 'Markanızı dijitalde büyüten mühendislik harikası sistemler.',
    images: ['/og-image.jpg'], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // 2. YAPISAL VERİ (JSON-LD) - Google'a kendimizi resmi olarak tanıtıyoruz
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService", 
    "name": "Ela Teknoloji ve Tasarım",
    "alternateName": "Ela Design",
    "url": "https://www.eladesign.org",
    "logo": "https://www.eladesign.org/logo/logo.webp",
    "image": "https://www.eladesign.org/logo/logo.webp",
    "description": "İstanbul merkezli yeni nesil web tasarım, yazılım ve dijital performans ajansı.",
    "telephone": "+902165765826",
    "email": "info@eladesign.org",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Küçükbakkalköy Mh. Kayışdağı Cd. Ali Ay Sk. No: 3/1 Orkide Apt.",
      "addressLocality": "Ataşehir",
      "addressRegion": "İstanbul",
      "addressCountry": "TR"
    },
    "sameAs": [
      "https://www.instagram.com/eladesign/",
      "https://www.facebook.com/elawebtasarim/",
      "https://tr.linkedin.com/company/ela-design",
      "https://www.youtube.com/channel/UCdbaLB99C0qZClgBIS_-1vA",
      "https://tr.pinterest.com/elamedya/"
    ]
  };

  return (
    // DARK MODE ÇÖZÜMÜ BURADA
    <html lang="tr" className="light" style={{ colorScheme: 'light' }}>
      <head>
        {/* Schema kodumuzu Google'ın okuyabileceği formata (script) çevirip head etiketine gömüyoruz */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased bg-white text-slate-900 relative`}>
        {children}
        
        {/* 3. ÇEREZ UYARISI BİLEŞENİ */}
        <CookieBanner />
      </body>
      
      {/* 4. GOOGLE ANALYTICS BAĞLANTISI */}
      <GoogleAnalytics gaId="G-1SV7XN3NRY" />
      
      {/* 5. VERCEL ANALYTICS BAĞLANTISI */}
      <Analytics />

      {/* 6. VERCEL SPEED INSIGHTS BAĞLANTISI */}
      <SpeedInsights />
      
    </html>
  );
}