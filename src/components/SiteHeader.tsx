"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#beneficios", label: "Vantagens" },
  { href: "#depoimentos", label: "Clientes" },
  { href: "#faq", label: "FAQ" },
  { href: "#simular", label: "Simular" },
];

export function SiteHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      let isFooterDominant = false;
      
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        if (footerRect.top < window.innerHeight * 0.5) {
          isFooterDominant = true;
        }
      }

      setIsVisible(!isFooterDominant);
      
      // Close menu on scroll
      if (menuOpen) setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 border-b border-white/5 bg-background/70 backdrop-blur-2xl transition-transform duration-500 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          <div 
            className="font-heading font-bold text-xl md:text-2xl tracking-tighter cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            WR<span className="text-primary">Consórcio</span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-muted-foreground/80">
            {navLinks.slice(0, 3).map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <Button 
            className="hidden md:flex font-bold rounded-full px-6 shadow-sm text-sm" 
            size="sm"
            onClick={() => handleNavClick("#simular")}
          >
            Falar com Especialista
          </Button>
          
          {/* Mobile Hamburger */}
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl pt-24 px-8"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-2xl font-heading font-bold text-foreground py-4 border-b border-white/5 hover:text-primary transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-10"
            >
              <Button 
                className="w-full h-14 text-lg font-bold rounded-2xl"
                onClick={() => handleNavClick("#simular")}
              >
                Falar com Especialista
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
