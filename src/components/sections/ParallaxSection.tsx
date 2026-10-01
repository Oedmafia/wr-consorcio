"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ParallaxSection() {
  const ref = useRef(null);
  
  // Creates a smooth parallax scrolling effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Move the background from -20% to 20% as we scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden border-y border-white/5">
      {/* Background Image Container */}
      <motion.div 
        style={{ y }}
        className="absolute -inset-[20%] w-[140%] h-[140%] z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          // Using a high-quality dark premium car image from Unsplash as placeholder
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2070&auto=format&fit=crop')" }}
        />
      </motion.div>
      
      {/* Overlays for contrast and blending into the sections above/below */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-0"></div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 tracking-tight drop-shadow-2xl"
        >
          A chave da sua próxima <br/><span className="text-primary">conquista</span>.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto font-medium drop-shadow-xl"
        >
          Esqueça os financiamentos intermináveis. Planeje hoje e dirija amanhã com a força do consórcio Volkswagen.
        </motion.p>
      </div>
    </section>
  );
}
