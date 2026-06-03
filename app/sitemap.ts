import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

// GÜVENLİ TARİH FONKSİYONU: Hatalı tarihleri yakalayıp build çökmesini engeller
function getSafeDate(dateString: string | undefined): Date {
  if (!dateString) return new Date();
  
  const parsedDate = new Date(dateString);
  // Eğer tarih geçersizse (Invalid Date) şu anki tarihi döndür
  return isNaN(parsedDate.getTime()) ? new Date() : parsedDate;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.eladesign.org';

  // 1. SİTENİN STATİK SAYFALARI
  const staticRoutes = [
    '', // Ana Sayfa
    '/hakkimizda',
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
    const blogFilePath = path.join(process.cwd(), 'data', 'posts.json'); 
    const blogContents = fs.readFileSync(blogFilePath, 'utf8');
    const blogs = JSON.parse(blogContents);

    dynamicBlogRoutes = blogs.map((post: any) => ({
      url: `${baseUrl}/${post.slug}`, 
      // Artık tarih okuyamazsa sistemi çökertmek yerine güvenli tarihi kullanacak
      lastModified: getSafeDate(post.date), 
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Sitemap oluşturulurken posts.json okunamadı:", error);
  }

  // 3. DİNAMİK REFERANS (PROJE) DETAY SAYFALARI
  let dynamicReferenceRoutes: MetadataRoute.Sitemap = [];
  try {
    const refFilePath = path.join(process.cwd(), 'data', 'projects.json'); 
    const refContents = fs.readFileSync(refFilePath, 'utf8');
    const references = JSON.parse(refContents);

    dynamicReferenceRoutes = references.map((ref: any) => ({
      url: `${baseUrl}/referanslar/${ref.slug}`, 
      lastModified: getSafeDate(ref.date), // Burası da güvenli hale getirildi
      changeFrequency: 'monthly' as const,
      priority: 0.7, 
    }));
  } catch (error) {
    console.error("Sitemap oluşturulurken referans verisi okunamadı:", error);
  }

  // Bütün linkleri birleştirip Google'a sunuyoruz
  return [...staticRoutes, ...dynamicBlogRoutes, ...dynamicReferenceRoutes];
}