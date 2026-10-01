"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MoveHorizontal, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PopularPlansSection() {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 tracking-tight">Planos mais buscados</h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Condições exclusivas para você planejar a sua próxima conquista.
          </p>
        </div>
        
        {/* Swipe Indicator */}
        <div className="md:hidden flex items-center justify-center gap-2 text-muted-foreground/50 text-xs font-medium mb-5">
          <MoveHorizontal className="w-4 h-4 animate-pulse" />
          <span>Arraste para ver mais</span>
        </div>

        {/* Cards Grid */}
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory gap-5 md:grid md:grid-cols-3 md:overflow-visible md:pb-0 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden">
          
          {/* ★ FEATURED: Nivus — "Mais Popular" */}
          <motion.div whileHover={{ y: -8 }} className="min-w-[82vw] md:min-w-0 snap-center rounded-[2rem] p-6 md:p-8 flex flex-col relative overflow-hidden group bg-primary/[0.08] border-2 border-primary/40 shadow-xl shadow-primary/10 md:scale-[1.03] md:-my-2 transition-all">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent opacity-60"></div>
            
            {/* Badge */}
            <div className="absolute top-0 right-0 flex items-center gap-1.5 bg-primary text-primary-foreground text-[10px] md:text-xs font-bold px-4 py-2 rounded-bl-2xl shadow-md z-10">
              <Star className="w-3 h-3 fill-current" /> MAIS POPULAR
            </div>
            
            <h3 className="text-xl md:text-2xl font-heading font-bold mb-1 relative z-10">VW Nivus</h3>
            <p className="text-muted-foreground text-xs md:text-sm mb-5 relative z-10">Carta de Crédito: <strong className="text-foreground">R$ 120.000,00</strong></p>
            <div className="mb-6 relative z-10">
              <span className="text-xs text-muted-foreground font-medium">Parcelas a partir de</span>
              <div className="text-4xl md:text-5xl font-bold text-primary mt-1">R$ 973<span className="text-base md:text-xl text-foreground font-normal">,50</span></div>
            </div>
            <ul className="space-y-3 mb-8 flex-1 relative z-10">
              <li className="flex items-center text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-primary mr-2.5 shrink-0" /> Consórcio VW + Embracon</li>
              <li className="flex items-center text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-primary mr-2.5 shrink-0" /> Zero juros bancários</li>
              <li className="flex items-center text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-primary mr-2.5 shrink-0" /> Use seu usado como lance</li>
            </ul>
            <Button className="w-full h-14 font-bold text-base rounded-2xl relative z-10 shadow-lg shadow-primary/20">Simular Nivus</Button>
          </motion.div>

          {/* Taos — Standard */}
          <motion.div whileHover={{ y: -8 }} className="min-w-[82vw] md:min-w-0 snap-center rounded-[2rem] p-6 md:p-8 flex flex-col relative overflow-hidden group bg-white/[0.02] border border-white/10 shadow-lg hover:border-white/20 transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-xl md:text-2xl font-heading font-bold mb-1 relative z-10">VW Taos</h3>
            <p className="text-muted-foreground text-xs md:text-sm mb-5 relative z-10">Carta de Crédito: <strong className="text-foreground">R$ 180.000,00</strong></p>
            <div className="mb-6 relative z-10">
              <span className="text-xs text-muted-foreground font-medium">Parcelas a partir de</span>
              <div className="text-4xl md:text-5xl font-bold text-foreground mt-1">R$ 1.460<span className="text-base md:text-xl text-muted-foreground font-normal">,25</span></div>
            </div>
            <ul className="space-y-3 mb-8 flex-1 relative z-10">
              <li className="flex items-center text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-primary/60 mr-2.5 shrink-0" /> Ideal para upgrade premium</li>
              <li className="flex items-center text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-primary/60 mr-2.5 shrink-0" /> Planejamento que cabe no bolso</li>
            </ul>
            <Button variant="outline" className="w-full h-14 font-bold text-base rounded-2xl border-white/10 hover:bg-primary hover:text-white hover:border-primary relative z-10 transition-all">Simular Taos</Button>
          </motion.div>

          {/* Amarok/Imóvel — Standard */}
          <motion.div whileHover={{ y: -8 }} className="min-w-[82vw] md:min-w-0 snap-center rounded-[2rem] p-6 md:p-8 flex flex-col relative overflow-hidden group bg-white/[0.02] border border-white/10 shadow-lg hover:border-white/20 transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-xl md:text-2xl font-heading font-bold mb-1 relative z-10">Amarok ou Imóvel</h3>
            <p className="text-muted-foreground text-xs md:text-sm mb-5 relative z-10">Carta de Crédito: <strong className="text-foreground">R$ 240.000,00</strong></p>
            <div className="mb-6 relative z-10">
              <span className="text-xs text-muted-foreground font-medium">Parcelas a partir de</span>
              <div className="text-4xl md:text-5xl font-bold text-foreground mt-1">R$ 1.947<span className="text-base md:text-xl text-muted-foreground font-normal">,00</span></div>
            </div>
            <ul className="space-y-3 mb-8 flex-1 relative z-10">
              <li className="flex items-center text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-primary/60 mr-2.5 shrink-0" /> Alto poder de compra</li>
              <li className="flex items-center text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-primary/60 mr-2.5 shrink-0" /> Use FGTS para lance (se imóvel)</li>
            </ul>
            <Button variant="outline" className="w-full h-14 font-bold text-base rounded-2xl border-white/10 hover:bg-primary hover:text-white hover:border-primary relative z-10 transition-all">Simular Crédito Maior</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
