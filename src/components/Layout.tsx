import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
