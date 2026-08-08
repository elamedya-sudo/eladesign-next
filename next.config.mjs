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
      
      // --- 1. EKİP YÖNLENDİRMELERİ DÜZELTİLDİ ---
      // Eskiden anasayfaya (/) gidiyordu, şimdi direkt /ekibimiz sayfasına gidiyor
      {
        source: '/ekip/:slug((?!.*\\.).*)',
        destination: '/ekibimiz', 
        permanent: true,
      },
      {
        source: '/kategori/:path*',
        destination: '/blog', 
        permanent: true,
      },
      
      // --- 2. SERVİSLER YÖNLENDİRMELERİ DÜZELTİLDİ ---
      // Önce spesifik olanı yakalıyoruz (2D ve olası 3D aramaları için)
      {
        source: '/servisler/2d-animasyon',
        destination: '/2d-animasyon', 
        permanent: true,
      },
      {
        source: '/servisler/3d-animasyon',
        destination: '/2d-animasyon', 
        permanent: true,
      },
      // Tam eşleşme ile ana servisler sayfası
      {
        source: '/servisler',
        destination: '/hizmetler', 
        permanent: true,
      },
      // Kalan diğer tüm tanımsız servis alt sayfalarını da hizmetlere gönder
      {
        source: '/servisler/:slug((?!.*\\.).*)',
        destination: '/hizmetler', 
        permanent: true,
      },
      
      {
        source: '/doktor-web-sitesi-fiyatlari',
        destination: '/kurumsal-web-tasarim-fiyatlari',
        permanent: true,
      },
      // Mimari görselleştirme de anasayfa yerine hizmetler sayfasına alındı
      {
        source: '/mimari-gorsellestirme',
        destination: '/hizmetler',
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
      
      // --- Nokta Atışı Portfolyo Yönlendirmeleri ---
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
      {
        source: '/neler-yaptik/cakmakci-grup-web-tasarim',
        destination: '/', 
        permanent: true,
      },

      // Eski WordPress "Daha Fazla Yükle" / Sayfalama kalıntılarını temizler
      {
        source: '/ekip/:path*',
        destination: '/ekibimiz', 
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
      // --- EKSİK WP VE SİSTEM KALINTILARI ---
      {
        source: '/author/:path*',
        destination: '/hakkimizda', // veya '/'
        permanent: true,
      },
      {
        source: '/arama',
        destination: '/', 
        permanent: true,
      },
      {
        source: '/:slug/feed',
        destination: '/blog', 
        permanent: true,
      },
      {
        source: '/cdn-cgi/l/email-protection',
        destination: '/iletisim', 
        permanent: true,
      },
      {
        source: '/referanslar',
        destination: '/neler-yaptik', // Eğer ana referans sayfan burasıysa
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