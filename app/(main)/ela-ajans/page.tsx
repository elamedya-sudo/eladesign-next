"use client";

import Image from "next/image";

export default function ElaAjansPage() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("IBAN kopyalandı!");
  };

  const bankalar = [
    {
      name: "Finansbank / EnPara (03663)",
      logo: "/images/banka/enpara.png",
      swift: "FNNBTRISXXX",
      accounts: [
        { type: "TL", iban: "TR49 0015 7000 0000 0134 3729 48" },
        { type: "USD", iban: "TR03 0015 7000 0000 0134 4332 37" },
        { type: "EUR", iban: "TR56 0015 7000 0000 0134 4332 53" }
      ]
    },
    {
      name: "Halkbank / Kavacık Şb. (1473)",
      logo: "/images/banka/halkbank.png",
      swift: "TRHBTR2A",
      accounts: [
        { type: "TL", iban: "TR87 0001 2001 4730 0010 1018 66" },
        { type: "USD", iban: "TR13 0001 2001 4730 0053 1003 88" },
        { type: "EUR", iban: "TR98 0001 2001 4730 0058 1003 72" }
      ]
    },
    {
      name: "Garanti BBVA / Küçükbakkalköy Şb.",
      logo: "/images/banka/garanti.png",
      swift: "TGBATRISXXX",
      accounts: [
        { type: "TL", iban: "TR86 0006 2000 7690 0006 2907 25" },
        { type: "USD", iban: "TR05 0006 2000 7690 0009 0486 32" },
        { type: "EUR", iban: "TR32 0006 2000 7690 0009 0486 31" }
      ]
    }
  ];

  return (
    <div className="max-w-[1000px] mx-auto px-6 py-20">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Ela Teknoloji ve Tasarım San. Tic. Ltd. Şti.</h1>
        <div className="text-slate-600 space-y-1">
          <p><strong>Vergi Dairesi / No:</strong> Kozyatağı VD. / 3292175962</p>
          <p><strong>Adres:</strong> K.Bakkalköy Mahallesi, Kayışdağı Cd. Ali Ay Sk. No: 3/1 Orkide Apt. Ataşehir - İSTANBUL</p>
          <p><strong>Tel:</strong> 0216 576 58 26 | <strong>Email:</strong> info@eladesign.org</p>
        </div>
      </div>

      <div className="space-y-8">
        {bankalar.map((banka, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              {/* Logo alanı için placeholder; logoları ekleyince otomatik görünecek */}
              <div className="w-12 h-12 relative">
                <Image src={banka.logo} alt={banka.name} fill className="object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">{banka.name}</h3>
                <p className="text-xs text-slate-500">SWIFT: {banka.swift}</p>
              </div>
            </div>
            
            <div className="grid gap-3">
              {banka.accounts.map((acc, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center justify-between bg-slate-50 p-4 rounded-lg border border-slate-100 gap-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-[#933c81] text-white text-[10px] font-bold px-2 py-1 rounded">{acc.type}</span>
                    <code className="font-mono text-sm text-slate-800">{acc.iban}</code>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(acc.iban)}
                    className="text-[#933c81] text-[11px] font-bold hover:underline transition-all"
                  >
                    KOPYALA
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}