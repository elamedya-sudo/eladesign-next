import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.eladesign.org';

  // 1. SİTENİN STATİK SAYFALARI (Yeni eklediklerimiz dahil)
  const staticRoutes = [
    '', // Ana Sayfa
    '/kurumsal/hakkimizda',
    '/kurumsal/misyon-vizyon',
    '/kurumsal/ekibimiz',
    '/kurumsal/nerelerdeyiz', // Yeni eklendi!
    '/hizmetler/nextjs-headless',
    '/hizmetler/dijital-kimlik',
    '/hizmetler/geo-seo',
    '/hizmetler/google-ads',
    '/hizmetler/e-ticaret',
    '/hizmetler/saas-crm',
    '/projeler',
    '/basari-hikayeleri',
    '/blog',
    '/iletisim',
    '/teklif',
    '/online-odeme', // Yeni eklendi!
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8, // Ana sayfa en yüksek öncelik
  }));

  // 2. DİNAMİK BLOG SAYFALARI (JSON'dan otomatik çekilir)
  let dynamicBlogRoutes: MetadataRoute.Sitemap = [];
  
  try {
    // Blog JSON dosyasının yolunu belirtiyoruz (Kendi projene göre düzelt: örn './blog.json')
    const filePath = path.join(process.cwd(), 'blog.json'); 
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const blogs = JSON.parse(fileContents);

    dynamicBlogRoutes = blogs.map((post: any) => ({
      // Uzantıları /slug şeklinde yaptığımız için doğrudan base url sonuna ekliyoruz
      url: `${baseUrl}/${post.slug}`, 
      lastModified: new Date(post.date || new Date()),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Sitemap oluşturulurken blog.json okunamadı:", error);
  }

  // Bütün linkleri birleştirip Google'a sunuyoruz
  return [...staticRoutes, ...dynamicBlogRoutes];
}