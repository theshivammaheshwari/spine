import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Why Us", path: "/why-us" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Gallery", path: "/gallery" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 z-[60] h-1 gradient-hero transition-all duration-150" style={{ width: `${scrollProgress}%` }} />
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-soft py-2" : "bg-transparent py-4"}`}>
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link to="/" className="font-display text-lg md:text-xl font-bold text-primary" onClick={() => setMobileOpen(false)}>
            Dr. Harshvardhan Chiropractic Clinic<span className="text-accent">.</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link 
                key={l.path} 
                to={l.path} 
                className={`text-sm font-medium transition-colors ${pathname === l.path ? "text-primary" : "text-foreground/70 hover:text-primary"}`}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" className="inline-flex items-center gap-2 h-9 px-4 rounded-full gradient-hero text-primary-foreground text-sm font-medium">
              <Phone className="w-4 h-4" /> Book Now
            </Link>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden glass mx-4 mt-2 rounded-2xl overflow-hidden">
              <div className="flex flex-col p-4 gap-3">
                {navLinks.map((l) => (
                  <Link 
                    key={l.path} 
                    to={l.path} 
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm font-medium transition-colors py-2 ${pathname === l.path ? "text-primary" : "text-foreground/70 hover:text-primary"}`}
                  >
                    {l.label}
                  </Link>
                ))}
                <a href="tel:+919588925771" className="inline-flex items-center justify-center gap-2 w-full h-10 rounded-full gradient-hero text-primary-foreground text-sm font-medium mt-2">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
