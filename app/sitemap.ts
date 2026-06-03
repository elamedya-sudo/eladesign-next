import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.eladesign.org';

  // 1. SİTENİN STATİK SAYFALARI
  const staticRoutes = [
    '', // Ana Sayfa
    '/hakkimizda',
    '/misyon-vizyon',
    '/ekibimiz',
    '/ela-ajans',
    '/nerelerdeyiz', 
    '/online-odeme',
    '/hizmetler',
    '/web-tasarim',
    '/web-yazilim',
    '/saas-ve-crm-cozumleri', 
    '/eticaret-sitesi',
    '/arama-motoru-optimizasyonu',
    '/geo-ve-aio-optimizasyonu',  
    '/google-adwords', 
    '/kurumsal-kimlik-tasarimi', 
    '/sosyal-medya-yonetimi', 
    '/2d-animasyon', 
    '/neler-yaptik', 
    '/kurumsal-web-tasarim-fiyatlari',
    '/e-ticaret-sitesi-fiyatlari', 
    '/basari-hikayeleri',
    '/blog',
    '/iletisim',
    '/teklif', 
    '/yasal', 
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. DİNAMİK BLOG SAYFALARI
  let dynamicBlogRoutes: MetadataRoute.Sitemap = [];
  try {
    // data klasörü altındaki posts.json dosyasına bağlandı
    const blogFilePath = path.join(process.cwd(), 'data', 'posts.json'); 
    const blogContents = fs.readFileSync(blogFilePath, 'utf8');
    const blogs = JSON.parse(blogContents);

    dynamicBlogRoutes = blogs.map((post: any) => ({
      url: `${baseUrl}/${post.slug}`, 
      lastModified: new Date(post.date || new Date()),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Sitemap oluşturulurken posts.json okunamadı:", error);
  }

  // 3. DİNAMİK REFERANS (PROJE) DETAY SAYFALARI
  let dynamicReferenceRoutes: MetadataRoute.Sitemap = [];
  try {
    // data klasörü altındaki projects.json dosyasına bağlandı
    const refFilePath = path.join(process.cwd(), 'data', 'projects.json'); 
    const refContents = fs.readFileSync(refFilePath, 'utf8');
    const references = JSON.parse(refContents);

    dynamicReferenceRoutes = references.map((ref: any) => ({
      url: `${baseUrl}/referanslar/${ref.slug}`, 
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7, 
    }));
  } catch (error) {
    console.error("Sitemap oluşturulurken referans verisi okunamadı:", error);
  }

  // Bütün linkleri birleştirip Google'a sunuyoruz
  return [...staticRoutes, ...dynamicBlogRoutes, ...dynamicReferenceRoutes];
}