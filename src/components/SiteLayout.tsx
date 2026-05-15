import { Footer } from "./Footer";
import { Header } from "./Header";
import { TopBar } from "./TopBar";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
