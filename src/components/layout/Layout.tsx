import { cn } from "@/utils";
import BacktoTop from "./BacktoTop";
import Footer from "./Footer";
import Header from "./Header";
import { Montserrat, Lato } from "next/font/google";

type LayoutProps = {
  children: React.ReactNode;
};

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={cn(
        "flex flex-col min-h-screen",
        montserrat.variable,
        lato.variable
      )}
    >
      <Header />
      <main className="flex-grow flex flex-col min-h-[600px]">{children}</main>
      <Footer />
      <BacktoTop />
    </div>
  );
};

export default Layout;
