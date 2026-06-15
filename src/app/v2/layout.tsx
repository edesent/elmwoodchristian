import NavbarV2 from "@/components/NavbarV2";
import Footer from "@/components/Footer";
import VersionSwitch from "@/components/VersionSwitch";

export default function V2Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <NavbarV2 />
      <main className="flex-1">{children}</main>
      <Footer />
      <VersionSwitch current="v2" />
    </div>
  );
}
