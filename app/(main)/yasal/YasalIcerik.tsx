"use client";

import { useState } from "react";
import Link from "next/link";

export default function YasalIcerik() {
  const [activeTab, setActiveTab] = useState("kvkk");

  const companyInfo = {
    title: "Ela Teknoloji ve Tasarım San. Tic. Ltd. Şti.",
    address: "Küçükbakkalköy Mh. Kayışdağı Cd. Ali Ay Sk. No: 3/1 Orkide Apt. Ataşehir - İSTANBUL",
    phone: "0216 576 58 26",
    email: "info@eladesign.org"
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* HERO ALANI */}
      <div className="bg-slate-900 pt-32 pb-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 -translate-y-12 -translate-x-1/3 w-[600px] h-[600px] bg-[#933c81]/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative z-10">
          <p className="text-[14px] font-semibold uppercase tracking-widest text-[#e890d6] mb-4">
            KURUMSAL POLİTİKALAR
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Yasal <span style={{ color: "#e890d6" }}>Bilgilendirme</span>
          </h1>
          <p className="text-slate-300 text-[17px] font-light max-w-2xl">
            Veri güvenliğiniz ve gizliliğiniz bizim için her şeyden önemlidir. Aşağıdaki sekmelerden KVKK, Gizlilik ve Çerez politikalarımızın güncel detaylarına ulaşabilirsiniz.
          </p>
        </div>
      </div>

      {/* İÇERİK ALANI */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 mt-12 flex flex-col md:flex-row gap-12 relative items-start">
        
        {/* SOL MENÜ (SEKMELER) */}
        <div className="w-full md:w-1/4 sticky top-32 flex flex-col gap-2">
          <button 
            onClick={() => setActiveTab("kvkk")}
            className={`text-left px-6 py-4 rounded-xl font-semibold transition-all ${
              activeTab === "kvkk" ? "bg-[#933c81] text-white shadow-lg" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            KVKK Aydınlatma Metni
          </button>
          <button 
            onClick={() => setActiveTab("gizlilik")}
            className={`text-left px-6 py-4 rounded-xl font-semibold transition-all ${
              activeTab === "gizlilik" ? "bg-[#933c81] text-white shadow-lg" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Gizlilik Politikası
          </button>
          <button 
            onClick={() => setActiveTab("cerez")}
            className={`text-left px-6 py-4 rounded-xl font-semibold transition-all ${
              activeTab === "cerez" ? "bg-[#933c81] text-white shadow-lg" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Çerez (Cookie) Politikası
          </button>

          <div className="mt-8 p-6 bg-slate-100 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-4 text-[15px]">Veri Sorumlusu</h4>
            <p className="text-[13px] text-slate-600 leading-relaxed font-medium mb-2">{companyInfo.title}</p>
            <p className="text-[13px] text-slate-500 leading-relaxed mb-4">{companyInfo.address}</p>
            <Link href="mailto:info@eladesign.org" className="text-[#933c81] text-[13px] font-bold hover:underline">
              {companyInfo.email}
            </Link>
          </div>
        </div>

        {/* SAĞ METİN (DİNAMİK İÇERİK) */}
        <div className="w-full md:w-3/4 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
          
          {activeTab === "kvkk" && (
            <div className="animate-in fade-in duration-500 prose prose-slate max-w-none 
              [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mb-6 [&>h2]:mt-10 first:[&>h2]:mt-0
              [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-800 [&>h3]:mb-4 [&>h3]:mt-8
              [&>p]:text-slate-600 [&>p]:leading-relaxed [&>p]:mb-4 [&>p]:text-[16px]
              [&>ul]:text-slate-600 [&>ul]:mb-6 [&>ul>li]:mb-2 [&>ul]:list-disc [&>ul]:pl-5">
              <h2>KVKK Aydınlatma Metni</h2>
              <p>
                <strong>{companyInfo.title}</strong> olarak, müşterilerimizin, çalışanlarımızın ve web sitemizi ziyaret eden tüm bireylerin kişisel verilerinin güvenliğine ve gizliliğine büyük önem vermekteyiz. Bu kapsamda, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verilerinizin toplanma şekilleri, işlenme amaçları, hukuki nedenleri ve haklarınız konularında sizi en şeffaf şekilde bilgilendirmek isteriz.
              </p>

              <h3>1. Veri Sorumlusunun Kimliği</h3>
              <p>
                KVKK uyarınca muhatabınız ve veri sorumlusu; merkezi <strong>{companyInfo.address}</strong> adresinde bulunan <strong>{companyInfo.title}</strong> şirketidir.
              </p>

              <h3>2. Kişisel Verilerin İşlenme Amaçları</h3>
              <p>Şirketimizle paylaştığınız kişisel verileriniz (kimlik, iletişim, müşteri işlem bilgileri vb.);</p>
              <ul>
                <li>Web tasarım, yazılım, dijital pazarlama ve reklam hizmetlerimizin eksiksiz sunulabilmesi,</li>
                <li>Sözleşme süreçlerinin yürütülmesi ve tekliflendirme aşamalarının yönetilmesi,</li>
                <li>Hizmet kalitemizin artırılması ve müşteri memnuniyetine yönelik çalışmaların yapılması,</li>
                <li>Fatura ve muhasebe işlemlerinin yasal mevzuata uygun olarak gerçekleştirilmesi</li>
              </ul>
              <p>amaçlarıyla, KVKK’nın 5. ve 6. maddelerinde belirtilen şartlara uygun olarak işlenmektedir.</p>

              <h3>3. İşlenen Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</h3>
              <p>Toplanan kişisel verileriniz; yasal yükümlülüklerimizi yerine getirmek amacıyla yetkili kamu kurum ve kuruluşlarına, hizmet süreçlerimizi yürütebilmek (örneğin sunucu barındırma, e-fatura kesimi) amacıyla iş ortaklarımıza ve altyapı sağlayıcılarımıza KVKK’nın 8. ve 9. maddelerine uygun olarak aktarılabilmektedir.</p>

              <h3>4. Veri Sahibinin Hakları</h3>
              <p>KVKK’nın 11. maddesi uyarınca veri sahipleri; kişisel verilerinin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, eksik veya yanlış işlenmişse düzeltilmesini isteme ve verilerin silinmesini talep etme haklarına sahiptir. Bu taleplerinizi doğrudan <strong>{companyInfo.email}</strong> adresi üzerinden veri sorumlusuna iletebilirsiniz.</p>
            </div>
          )}

          {activeTab === "gizlilik" && (
            <div className="animate-in fade-in duration-500 prose prose-slate max-w-none 
              [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mb-6 [&>h2]:mt-10 first:[&>h2]:mt-0
              [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-800 [&>h3]:mb-4 [&>h3]:mt-8
              [&>p]:text-slate-600 [&>p]:leading-relaxed [&>p]:mb-4 [&>p]:text-[16px]">
              <h2>Gizlilik Politikası</h2>
              <p>
                <strong>{companyInfo.title}</strong> olarak (bundan böyle "Ela Design" veya "Şirket" olarak anılacaktır), eladesign.org web sitesini ziyaret eden tüm kullanıcıların dijital güvenliğini sağlamak birincil önceliğimizdir.
              </p>
              
              <h3>Bilgi Toplama ve Kullanım</h3>
              <p>
                Sitemizdeki iletişim, randevu veya teklif formlarını doldurduğunuzda, size daha iyi hizmet verebilmek adına adınız, e-posta adresiniz, telefon numaranız ve şirket bilgileriniz gibi bazı bilgileri talep edebiliriz. Bu bilgiler, yalnızca sizinle iletişime geçmek, projelerinizi değerlendirmek ve size özel çözümler sunmak amacıyla kullanılır. Sizin açık rızanız olmadan bu veriler asla pazarlama amacıyla 3. şahıslara satılamaz veya paylaşılamaz.
              </p>

              <h3>Veri Güvenliği Standardımız</h3>
              <p>
                Web sitemiz üzerinden aktarılan tüm veriler SSL (Secure Sockets Layer) teknolojisi ile şifrelenerek korunmaktadır. Modern web mimarisi (Next.js) altyapımız sayesinde veri sızıntılarına karşı en güncel güvenlik protokolleri uygulanmaktadır.
              </p>

              <h3>Dış Bağlantılar (Üçüncü Taraf Linkleri)</h3>
              <p>
                Sitemizde zaman zaman portfolyo sunumu veya referans amacıyla dış web sitelerine bağlantılar (linkler) verebiliriz. Bu dış sitelerin kendi bağımsız gizlilik politikaları bulunmaktadır. Bu nedenle, yönlendirildiğiniz diğer sitelerin içerikleri veya güvenlik uygulamaları hakkında Ela Design herhangi bir sorumluluk kabul etmemektedir.
              </p>
            </div>
          )}

          {activeTab === "cerez" && (
            <div className="animate-in fade-in duration-500 prose prose-slate max-w-none 
              [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mb-6 [&>h2]:mt-10 first:[&>h2]:mt-0
              [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-800 [&>h3]:mb-4 [&>h3]:mt-8
              [&>p]:text-slate-600 [&>p]:leading-relaxed [&>p]:mb-4 [&>p]:text-[16px]
              [&>ul]:text-slate-600 [&>ul]:mb-6 [&>ul>li]:mb-2 [&>ul]:list-disc [&>ul]:pl-5">
              <h2>Çerez (Cookie) Politikası</h2>
              <p>
                Daha hızlı ve kişiselleştirilmiş bir web deneyimi sunabilmek adına, çoğu modern web sitesi gibi <strong>eladesign.org</strong> da çerezler (cookies) kullanmaktadır.
              </p>

              <h3>Çerez (Cookie) Nedir?</h3>
              <p>
                Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınız aracılığıyla bilgisayarınıza veya mobil cihazınıza kaydedilen küçük metin dosyalarıdır. Sitenin düzgün çalışmasını, tercihlerinizi hatırlamasını ve site trafiğinin analiz edilmesini sağlarlar.
              </p>

              <h3>Sitemizde Hangi Çerezleri Kullanıyoruz?</h3>
              <ul>
                <li><strong>Zorunlu Çerezler:</strong> Web sitemizin temel işlevlerini (form gönderimi, sayfa geçişleri, güvenlik) yerine getirebilmesi için kesinlikle gerekli olan, kapatılamayan çerezlerdir.</li>
                <li><strong>Performans ve Analiz Çerezleri:</strong> Sitemizin hangi sayfalarının daha çok ziyaret edildiğini anlamak ve performansı ölçmek için kullandığımız (örn: Google Analytics) isimsiz veriler toplayan çerezlerdir.</li>
                <li><strong>İşlevsellik Çerezleri:</strong> Sitemizi tekrar ziyaret ettiğinizde dil veya menü tercihlerinizi hatırlamamızı sağlayan kolaylık çerezleridir.</li>
              </ul>

              <h3>Çerezleri Nasıl Yönetebilirsiniz?</h3>
              <p>
                Zorunlu çerezler haricindeki diğer çerezlerin kullanımını reddetme hakkına sahipsiniz. İnternet tarayıcınızın (Chrome, Safari, Firefox vb.) "Ayarlar" veya "Gizlilik" bölümüne girerek çerezleri tamamen silebilir, engelleyebilir veya sitemize özel çerez izinlerini yönetebilirsiniz. Çerezleri tamamen engellemeniz durumunda sitemizin bazı fonksiyonlarının tam çalışmayabileceğini hatırlatmak isteriz.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}