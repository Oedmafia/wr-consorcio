"use client";

import { motion } from "framer-motion";

export function Explore3DSection() {
  return (
    <section id="explore" className="py-16 md:py-24 px-6 bg-background border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">Experiência 3D</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-blue-600">Volkswagen</span>
          </h2>
          <p className="text-muted-foreground text-lg">Gire e visualize cada detalhe antes de decidir</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-primary/5 p-[2px] shadow-[0_0_40px_rgba(0,102,255,0.15)] max-w-6xl mx-auto"
        >
          <div className="bg-background rounded-[2.3rem] overflow-hidden">
            <div className="sketchfab-embed-wrapper">
              <iframe 
                  title="2024 Volkswagen Tiguan L Pro 380TSI 4WD R-line"
                  className="w-full h-[350px] sm:h-[450px] lg:h-[600px]" 
                  frameBorder="0" 
                  allowFullScreen
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  src="https://sketchfab.com/models/0703b26f5c6446dabf1ab3caecce586f/embed?autostart=1&transparent=1&ui_infos=0&ui_watermark=0"
                  loading="lazy">
              </iframe>
            </div>
          </div>
        </motion.div>

        <p className="text-center text-muted-foreground/50 text-sm mt-6">
          Arraste para girar • Scroll para zoom
        </p>
      </div>
    </section>
  );
}
