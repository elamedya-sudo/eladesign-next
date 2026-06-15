/** @type {import('next').NextConfig} */
const nextConfig = {
  // SEO Optimizasyonu: URL sonlarındaki eğik çizgileri temizler ve standartlaştırır
  trailingSlash: false,

  async redirects() {
    return [
      // 1. DİNAMİK SSS YÖNLENDİRMESİ
      {
        source: '/sss/:path*',
        destination: '/web-sitesi-fiyatlari',
        permanent: true,
      },
      
      // 2. YASAL SAYFA YÖNLENDİRMESİ
      {
        source: '/cerez-politikasi',
        destination: '/yasal',
        permanent: true,
      },

      // 3. EKİP VE YAZAR PROFİLLERİ 
      {
        source: '/ekip/:path*',
        destination: '/', 
        permanent: true,
      },

      // 4. ESKİ KATEGORİ, SERVİS VE REFERANS YÖNLENDİRMELERİ
      {
        source: '/kategori/:path*',
        destination: '/blog', 
        permanent: true,
      },
      {
        source: '/servisler/:path*',
        destination: '/', 
        permanent: true,
      },
      {
        source: '/referanslar/:path*',
        destination: '/', 
        permanent: true,
      },

      // 5. TEKİL ÖZEL SAYFALAR VE ARTIKLAR
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
      }
    ];
  },
};

export default nextConfig;