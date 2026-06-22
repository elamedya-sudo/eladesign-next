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
      // 1. DÜZELTME: Ekip resimlerini korur, sadece eski ekip sayfalarını yönlendirir
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
      // 2. DÜZELTME: Servis resimleri varsa onları korur
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
      }
    ];
  },
};

export default nextConfig;