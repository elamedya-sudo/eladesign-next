import Link from "next/link";
import Image from "next/image";
import postsData from "@/data/posts.json"; // JSON verimizi buraya çağırıyoruz

export default function LatestArticles() {
  return (
    <section className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-24">
        
        {/* Başlık ve Tümünü Gör Butonu */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Ela Akademi</h2>
            <p className="text-slate-600 text-[17px] max-w-2xl font-light">
              Dijital dünyadaki son trendler, web teknolojileri ve pazarlama ipuçları hakkında uzman ekibimizin kaleminden güncel makaleler.
            </p>
          </div>
          <Link href="/blog" className="inline-flex items-center justify-center px-6 py-3 border-2 border-slate-200 text-slate-700 font-semibold rounded-full hover:border-[#933c81] hover:text-[#933c81] transition-all whitespace-nowrap bg-white">
            Tüm Yazıları Gör
          </Link>
        </div>

        {/* Dinamik Blog Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* JSON verisinden sadece en yeni 3 tanesini (slice) alıyoruz */}
          {postsData.slice(0, 3).map((post) => (
            <Link key={post.id} href={`/${post.slug}`} className="group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              
              {/* Resim Alanı */}
              <div className="relative w-full aspect-[640/290] bg-slate-100 overflow-hidden">
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-white/90 backdrop-blur-sm text-[#933c81] text-[12px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-sm">
                    {post.category}
                  </span>
                </div>
                {post.image ? (
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                )}
              </div>

              {/* İçerik Alanı */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-[13px] font-medium text-slate-400 mb-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#933c81] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-[15px] leading-relaxed font-light line-clamp-3 mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center text-[#933c81] font-semibold text-[14px]">
                  Devamını Oku
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}