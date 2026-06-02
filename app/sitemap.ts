import { MetadataRoute } from 'next';
import postsData from '@/data/posts.json'; // Blog yazılarının JSON dosyası
import projectsData from '@/data/projects.json'; // Referansların/Projelerin JSON dosyası

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.eladesign.org';

  // 1. STATİK SAYFALAR
  // Sitede manuel olarak oluşturduğumuz tüm sayfalar
  const staticRoutes = [
    '',
    '/hakkimizda',
    '/hizmetler',
    '/iletisim',
    '/teklif',
    '/ekibimiz',
    '/neler-yaptik',
    '/blog',
    '/e-ticaret-sitesi-fiyatlari',
    '/web-sitesi-fiyatlari',
    '/geo-ve-aio-optimizasyonu',
    '/google-adwords',
    '/eticaret-sitesi',
    '/2d-animasyon',
    '/banka-hesap-bilgileri',
    '/yasal'
  ];

  const staticPages = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8, // Anasayfa her zaman 1.0 (en yüksek) önceliğe sahiptir
  }));

  // 2. DİNAMİK BLOG SAYFALARI (JSON'dan Çekilenler)
  const blogPages = postsData.map((post) => ({
    url: `${baseUrl}/${post.slug}`,
    lastModified: new Date().toISOString(), 
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 3. DİNAMİK PORTFOLYO (Referans) SAYFALARI (JSON'dan Çekilenler)
  const projectPages = projectsData.map((project) => ({
    url: `${baseUrl}/referanslar/${project.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Tüm sayfaları birleştirip arama motorlarına sunuyoruz
  return [...staticPages, ...blogPages, ...projectPages];
}