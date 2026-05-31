import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer"; // Footer'ı içeri aldık
import FloatingButtons from "@/components/layout/FloatingButtons";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {children}
        <FloatingButtons />
      </main>
      <Footer /> {/* Footer'ı sayfanın en altına yerleştirdik */}
    </div>
  );
}