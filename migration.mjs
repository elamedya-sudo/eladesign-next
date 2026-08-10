import { createClient } from '@sanity/client';
import { htmlToBlocks } from '@sanity/block-tools';
import { Schema } from '@sanity/schema';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES Module dosya yolları
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Sanity Bağlantı Ayarları
const client = createClient({
  projectId: 'thqgbpct',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'skgCW7CFzdMgxMnW4ig1f8B9MgSeAcdUci41o3Maf6x8B49xOqeJLIjvGs0WWdrvZi5LL7lT3SR2zprKOd5uX4tcP7LTYdcVe79Y9xff6LTOmk6LFQCvQuAYdGpRhnKHfTxxBLmAxuELhjEVD4QWDU4fpHEOOcOrPCFIBb171QUYNemTwzH7' // Kopyaladığın "sk..." ile başlayan token'ı buraya yapıştır
});

// HTML'i Sanity Zengin Metin formatına çevirebilmek için resmi şemayı derliyoruz
const defaultSchema = Schema.compile({
  name: 'myBlog',
  types: [
    {
      type: 'object',
      name: 'blogPost',
      fields: [
        {
          title: 'Body',
          name: 'body',
          type: 'array',
          of: [{ type: 'block' }, { type: 'image' }],
        },
      ],
    },
  ],
});

// Derlenen şemadan 'body' alanının tipini alıyoruz
const blockContentType = defaultSchema
  .get('blogPost')
  .fields.find((field) => field.name === 'body').type;

// JSON dosyasını oku
const postsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'posts.json'), 'utf8'));

async function migrate() {
  console.log('🚀 Göç işlemi başlatılıyor...');

  for (const post of postsData) {
    console.log(`\nİşleniyor: ${post.title}`);

    // 1. HTML içeriği Sanity'nin Portable Text formatına çevirme
    const portableText = htmlToBlocks(post.content, blockContentType, {
      parseHtml: html => new JSDOM(html).window.document
    });

    // 2. Görseli Next.js public klasöründen alıp Sanity'e yükleme
    let imageAsset = null;
    const imagePath = path.join(__dirname, 'public', post.image);

    if (fs.existsSync(imagePath)) {
      console.log(`📸 Görsel yükleniyor: ${post.image}`);
      const imageStream = fs.createReadStream(imagePath);
      imageAsset = await client.assets.upload('image', imageStream, {
        filename: path.basename(post.image)
      });
    } else {
      console.log(`⚠️ Görsel bulunamadı, atlanıyor: ${imagePath}`);
    }

    // 3. Sanity Veri Objesini Oluşturma
    const sanityDoc = {
      _type: 'post',
      title: post.title,
      slug: { _type: 'slug', current: post.slug },
      category: post.category,
      date: post.date,
      readTime: post.readTime,
      excerpt: post.excerpt,
      content: portableText,
    };

    if (imageAsset) {
      sanityDoc.image = {
        _type: 'image',
        asset: { _type: 'reference', _ref: imageAsset._id }
      };
    }

    // 4. Veritabanına Yazma
    await client.create(sanityDoc);
    console.log(`✅ Başarıyla eklendi!`);
  }
  
  console.log('\n🎉 Tüm blog yazıları Sanity veritabanına başarıyla aktarıldı!');
}

migrate();