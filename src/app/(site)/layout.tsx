import NavbarV2 from "@/components/NavbarV2";
import Footer from "@/components/Footer";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <NavbarV2 />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
