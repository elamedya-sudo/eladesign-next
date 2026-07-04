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
      },
      // 3. YENİ DÜZELTME: Ahrefs raporundaki 404 ve Bozuk Yönlendirme (Randevu)
      {
        source: '/randevu-talebi',
        destination: '/iletisim',
        permanent: true,
      },
      // 4. YENİ DÜZELTME: Ahrefs raporundaki 404 ve Bozuk Yönlendirme (Ataşehir SEO)
      {
        source: '/web-sitesi-fiyatlari-atasehir',
        destination: '/web-sitesi-fiyatlari',
        permanent: true,
      },
      // 5. KAPSAMLI DÜZELTME: Search Console "Hatabulunamadı.xlsx" 404 Temizliği
      {
        source: '/referanslar/:path*',
        destination: '/', // Varsa portfolyo sayfana yönlendirebilirsin
        permanent: true,
      },
      {
        source: '/referans-kategori/:path*',
        destination: '/', 
        permanent: true,
      },
      {
        source: '/neler-yaptik/:path*',
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
        destination: '/', // WordPress'ten kalan kalıntıları ana sayfaya temizler
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