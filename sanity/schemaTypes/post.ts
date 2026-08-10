import { defineField, defineType } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Blog Yazısı',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Başlık',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'URL (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Tarih',
      type: 'string', // Eski verilerindeki "25 Tem 2026" formatını bozmamak için string kullanıyoruz
    }),
    defineField({
      name: 'readTime',
      title: 'Okuma Süresi',
      type: 'string', // Örn: "6 Dk Okuma"
    }),
    defineField({
      name: 'image',
      title: 'Kapak Görseli',
      type: 'image',
      options: {
        hotspot: true, // Görseli kırparken odak noktasını seçmeni sağlar
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Kısa Özet',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'content',
      title: 'İçerik',
      type: 'array', 
      of: [{ type: 'block' }, { type: 'image' }], // Sanity'nin kendi Zengin Metin (Rich Text) editörü
    }),
  ],
})