import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Poppins fontunu ekledik
import "./globals.css";

// Font ayarları
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Gerekli kalınlıklar
  variable: "--font-poppins", // CSS değişkeni olarak tanımladık
});

export const metadata: Metadata = {
  title: "Ela Design - Web Tasarım Ajansı",
  description: "Terzi işi dijital çözümler",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      {/* Font değişkenini body'e uyguladık */}
      <body className={`${poppins.variable} font-sans antialiased bg-white text-slate-900`}>
        {children}
      </body>
    </html>
  );
}