"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Check if footer is taking over (same logic as SiteHeader)
      const footer = document.querySelector('footer');
      let isFooterDominant = false;
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        if (footerRect.top < window.innerHeight * 0.7) {
          isFooterDominant = true;
        }
      }

      // Show only after Hero, hide when footer takes over
      setIsVisible(scrollY > 500 && !isFooterDominant);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="md:hidden fixed bottom-0 left-0 w-full p-4 pb-7 bg-background/60 backdrop-blur-2xl border-t border-white/10 z-50"
        >
          <Button 
            onClick={() => document.getElementById('simular')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full h-13 text-base font-bold rounded-2xl bg-primary text-white shadow-lg shadow-primary/25 active:scale-95 transition-all"
          >
            Fazer Simulação Agora
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
