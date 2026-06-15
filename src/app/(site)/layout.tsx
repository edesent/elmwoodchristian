import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VersionSwitch from "@/components/VersionSwitch";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <VersionSwitch current="v1" />
    </div>
  );
}
