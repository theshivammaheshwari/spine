import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 flex justify-center px-4 pointer-events-none`}>
        <div className={`w-full max-w-5xl transition-all duration-500 rounded-full pointer-events-auto border flex items-center justify-between px-6 py-3 ${scrolled ? "bg-white/70 backdrop-blur-xl border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]" : "bg-white/40 backdrop-blur-md border-white/20 shadow-none"}`}>
          <Link to="/" className="font-display text-lg md:text-xl font-bold flex items-center gap-2" onClick={() => setMobileOpen(false)}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-blue-600 flex items-center justify-center text-white text-xs">HC</div>
            <span className="hidden sm:block text-foreground tracking-tight">Harshvardhan<span className="text-primary">Clinic</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-1 bg-white/50 p-1 rounded-full border border-white/60">
            {navLinks.map((l) => (
              <Link 
                key={l.path} 
                to={l.path} 
                className={`text-sm font-medium transition-all px-4 py-1.5 rounded-full ${pathname === l.path ? "bg-white text-primary shadow-sm" : "text-foreground/70 hover:text-foreground hover:bg-white/50"}`}
              >
                {l.label}
              </Link>
            ))}
          </div>
          
          <div className="hidden md:flex items-center gap-3">
             <Link to="/contact" className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 hover:scale-105 transition-all shadow-md shadow-primary/20">
              <Calendar className="w-4 h-4" /> Book
            </Link>
          </div>

          <button className="md:hidden text-foreground p-2 rounded-full hover:bg-white/50 transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.95 }} className="fixed top-20 left-4 right-4 z-40 md:hidden bg-white/90 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl overflow-hidden p-2">
            <div className="flex flex-col gap-1 p-2">
              {navLinks.map((l) => (
                <Link 
                  key={l.path} 
                  to={l.path} 
                  onClick={() => setMobileOpen(false)}
                  className={`text-base font-semibold transition-all px-4 py-3 rounded-2xl ${pathname === l.path ? "bg-primary/10 text-primary" : "text-foreground/70 hover:bg-black/5 hover:text-foreground"}`}
                >
                  {l.label}
                </Link>
              ))}
              <div className="h-[1px] bg-border/50 my-2" />
              <a href="tel:+919588925771" className="inline-flex items-center justify-center gap-2 w-full h-12 rounded-2xl bg-primary text-primary-foreground text-base font-semibold mt-1">
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
