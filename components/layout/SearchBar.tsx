"use client";
import { useState, useEffect, useMemo } from 'react';
import Fuse from 'fuse.js';
import Link from 'next/link';
import { client } from '@/app/sanity'; // Sanity bağlantısı eklendi

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [allPosts, setAllPosts] = useState<any[]>([]); // Sanity verilerini tutacak state

  // 1. Bileşen yüklendiğinde Sanity'den güncel blogları çek
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `*[_type == "post"] { title, category, "slug": slug.current }`;
        const fetchedPosts = await client.fetch(query);
        setAllPosts(fetchedPosts);
      } catch (error) {
        console.error("Arama çubuğu verileri çekerken hata oluştu:", error);
      }
    };
    
    fetchPosts();
  }, []);

  // 2. Çekilen verilere göre Fuse arama motorunu ayarla (Gereksiz render'ı önlemek için useMemo)
  const fuse = useMemo(() => new Fuse(allPosts, {
    keys: ['title', 'category'],
    threshold: 0.3,
  }), [allPosts]);

  // 3. Kullanıcı yazı yazdıkça aramayı tetikle
  useEffect(() => {
    setResults(query.length > 2 ? fuse.search(query).map(r => r.item) : []);
  }, [query, fuse]);

  return (
    <div className="relative">
      <div className="flex items-center bg-slate-100 rounded-full px-4 py-2 border border-slate-200">
        <svg className="w-4 h-4 text-slate-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        <input 
          type="text" 
          placeholder="Ara..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-transparent text-[13px] focus:outline-none w-24 xl:w-32"
        />
      </div>
      {results.length > 0 && (
        <div className="absolute top-full mt-2 w-full min-w-[250px] bg-white shadow-2xl rounded-2xl border border-slate-100 p-2 z-[60] overflow-hidden">
          {results.map((post: any) => (
            <Link href={`/${post.slug}`} key={post.slug} onClick={() => setQuery('')} className="block px-4 py-3 text-[14px] text-slate-600 hover:text-[#933c81] hover:bg-slate-50 rounded-lg transition-colors border-b border-slate-50 last:border-0">
              {post.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}