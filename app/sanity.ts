// Dosya: app/sanity.ts

import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// 1. Veritabanı bağlantı aracı (client) dışa aktarılıyor
export const client = createClient({
  projectId: 'thqgbpct',
  dataset: 'production',
  useCdn: true, // Vercel önbelleği ile süper hızlı çalışması için
  apiVersion: '2024-01-01',
});

// 2. Görsel oluşturucu (builder)
const builder = imageUrlBuilder(client);

// 3. Görsel URL'sini çözen fonksiyon (urlFor) dışa aktarılıyor
export function urlFor(source: any) {
  return builder.image(source);
}