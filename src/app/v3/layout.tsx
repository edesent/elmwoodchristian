import NavbarV3 from "@/components/NavbarV3";
import Footer from "@/components/Footer";

export default function V3Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen flex flex-col bg-cream-warm">
      <NavbarV3 />
      <main className="flex-1">{children}</main>
      <Footer variant="brown" showVerse={false} />
    </div>
  );
}
