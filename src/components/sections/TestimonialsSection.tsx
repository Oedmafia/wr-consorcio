"use client";

import { MoveHorizontal } from "lucide-react";
import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-background relative overflow-hidden border-t border-white/5">
      {/* Background Decorators */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-10 md:mb-16 tracking-tight">Quem planejou, <span className="text-primary">conquistou.</span></h2>
        
        {/* Swipe Indicator */}
        <div className="md:hidden flex items-center justify-center gap-2 text-muted-foreground/50 text-xs font-medium mb-5">
          <MoveHorizontal className="w-4 h-4 animate-pulse" />
          <span>Arraste para ver mais</span>
        </div>

        {/* Mobile Swipeable Carousel */}
        <div className="flex overflow-x-auto pt-4 pb-8 -mx-4 px-4 snap-x snap-mandatory gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pt-0 md:pb-0 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden">
          {[
            { name: "João S.", asset: "VW Amarok V6", city: "Campina Grande", time: "Contemplado em 10 meses", quote: "Graças à WR Consórcio consegui tirar minha picape 0km sem me endividar com juros de banco." },
            { name: "Maria F.", asset: "Apartamento em JP", city: "João Pessoa", time: "Contemplada em 6 meses", quote: "O suporte deles na hora do lance foi fundamental. Em 6 meses estava com a chave do meu apê." },
            { name: "Carlos E.", asset: "VW Taos Highline", city: "Patos - PB", time: "Contemplado em 8 meses", quote: "Transparência do começo ao fim. A estratégia do lance embutido me fez pegar meu carro zero rápido." }
          ].map((review, i) => (
            <div key={i} className="min-w-[82vw] md:min-w-0 snap-center p-6 md:p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 shadow-lg hover:border-white/20 transition-all duration-500 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Quote mark */}
              <div className="text-5xl text-primary/15 font-serif font-bold leading-none mb-2 relative z-10">"</div>
              
              <p className="text-muted-foreground text-base leading-relaxed mb-6 relative z-10">{review.quote}</p>
              
              {/* Attribution */}
              <div className="flex items-center gap-4 pt-5 border-t border-white/5 relative z-10">
                <div className="w-11 h-11 rounded-full overflow-hidden relative border-2 border-primary/20 shrink-0">
                  <Image src={`https://i.pravatar.cc/100?img=${i+30}`} alt={review.name} fill sizes="44px" className="object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-foreground text-sm">{review.name}</p>
                  <p className="text-[11px] font-bold text-primary uppercase tracking-wider">{review.asset}</p>
                  <p className="text-[10px] text-muted-foreground/50 mt-0.5">{review.city} · {review.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
