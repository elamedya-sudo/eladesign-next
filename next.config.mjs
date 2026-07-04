/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,

  async redirects() {
    return [
      {
        source: '/sss/:path*',
        destination: '/web-sitesi-fiyatlari',
        permanent: true,
      },
      {
        source: '/cerez-politikasi',
        destination: '/yasal',
        permanent: true,
      },
      {
        source: '/ekip/:slug((?!.*\\.).*)',
        destination: '/', 
        permanent: true,
      },
      {
        source: '/kategori/:path*',
        destination: '/blog', 
        permanent: true,
      },
      {
        source: '/servisler/:slug((?!.*\\.).*)',
        destination: '/', 
        permanent: true,
      },
      {
        source: '/doktor-web-sitesi-fiyatlari',
        destination: '/kurumsal-web-tasarim-fiyatlari',
        permanent: true,
      },
      {
        source: '/mimari-gorsellestirme',
        destination: '/',
        permanent: true,
      },
      {
        source: '/katalog',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en/home',
        destination: '/', 
        permanent: true,
      },
      {
        source: '/randevu-talebi',
        destination: '/iletisim',
        permanent: true,
      },
      {
        source: '/web-sitesi-fiyatlari-atasehir',
        destination: '/web-sitesi-fiyatlari',
        permanent: true,
      },
      
      // --- YENİ DÜZELTME: Toptan yönlendirme yerine Nokta Atışı Yönlendirmeler ---
      // Eski uzun URL'leri, yeni temiz slug'lara yönlendiriyoruz
      {
        source: '/referanslar/vicom-energy-uluslararasi-enerji-sirketi-web-tasarimi',
        destination: '/referanslar/vicom', 
        permanent: true,
      },
      {
        source: '/referanslar/dwt-turkiye-endustriyel-kurumsal-web-tasarim-projesi',
        destination: '/referanslar/dwt-turkiye', 
        permanent: true,
      },
      {
        source: '/neler-yaptik/byevren-musti-eticaret-sitesi',
        destination: '/referanslar/byevrenmusti', 
        permanent: true,
      },
      // Karşılığı olmayan tekil kırık link
      {
        source: '/neler-yaptik/cakmakci-grup-web-tasarim',
        destination: '/', 
        permanent: true,
      },

      // --- Diğer Toplu Temizlikler ---
      {
        source: '/referans-kategori/:path*',
        destination: '/', 
        permanent: true,
      },
      {
        source: '/sss_kategori/:path*',
        destination: '/web-sitesi-fiyatlari',
        permanent: true,
      },
      {
        source: '/avukatlar-icin-web-sitesi-fiyatlari-2',
        destination: '/kurumsal-web-tasarim-fiyatlari',
        permanent: true,
      },
      {
        source: '/kvkk-politikasi',
        destination: '/yasal',
        permanent: true,
      },
      {
        source: '/iptal-iade-kosullari',
        destination: '/yasal',
        permanent: true,
      },
      {
        source: '/hazir-web-tasarim',
        destination: '/kurumsal-web-tasarim-fiyatlari',
        permanent: true,
      },
      {
        source: '/dijital-katalog',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-content/:path*',
        destination: '/', 
        permanent: true,
      },
      {
        source: '/blog/page/:path*',
        destination: '/blog',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;