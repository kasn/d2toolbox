import Footer from "@/components/Footer";
import Header from "@/components/layout/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Header />
      <div className="m-14 mt-20">{children}</div>
      <Footer />
    </main>
  );
}
