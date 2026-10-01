"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PoloCapturePage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      {/* HEADER MINIMALISTA (Foco total na conversão, sem links de fuga) */}
      <header className="w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-center">
          <div className="font-heading font-bold text-2xl tracking-tighter">
            WR<span className="text-primary">Consórcio</span>
          </div>
        </div>
      </header>

      <main>
        <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 px-6 overflow-hidden">
          {/* Fundo estilizado */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
          
          <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Esquerda: Copy + Benefícios Específicos */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-primary/20 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                Oportunidade 0km
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold leading-[1.1] mb-6">
                O seu <span className="text-primary">VW Polo Track</span> novo sem pagar juros abusivos.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Pare de enriquecer bancos. Com o consórcio WR, você entra num grupo em andamento e conquista o carro mais vendido do Brasil pagando parcelas que cabem no seu bolso: <strong>a partir de R$ 849/mês.</strong>
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-primary w-5 h-5" />
                  </div>
                  <p className="text-foreground font-medium">Lances embutidos permitidos.</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-primary w-5 h-5" />
                  </div>
                  <p className="text-foreground font-medium">Use seu usado como lance na Paraíba.</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-primary w-5 h-5" />
                  </div>
                  <p className="text-foreground font-medium">100% de transparência e garantia.</p>
                </div>
              </div>
            </motion.div>

            {/* Direita: Formulário de Captura "Above the Fold" */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-card border border-primary/30 shadow-[0_0_50px_-15px_var(--color-primary)] rounded-3xl p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
                
                <h3 className="text-2xl font-bold font-heading mb-2">Simulação Gratuita</h3>
                <p className="text-muted-foreground text-sm mb-8">Descubra as reais chances de contemplação e a estratégia de lances ideal para você.</p>
                
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Qual o seu nome?</label>
                    <input type="text" placeholder="Ex: Carlos Silva" className="flex h-12 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Seu melhor WhatsApp</label>
                    <input type="tel" placeholder="(83) 90000-0000" className="flex h-12 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Você tem um usado para dar de lance?</label>
                    <select className="flex h-12 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                      <option>Sim, tenho um carro usado.</option>
                      <option>Não, vou ofertar lance em dinheiro.</option>
                      <option>Apenas sorteio mensal por enquanto.</option>
                    </select>
                  </div>
                  <Button size="lg" className="w-full h-14 text-lg font-bold shadow-lg hover:scale-[1.02] transition-transform mt-4">
                    Receber Minha Simulação <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
                
                <p className="text-xs text-center text-muted-foreground mt-6 flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Seus dados estão criptografados.
                </p>
              </div>
            </motion.div>

          </div>
        </section>
      </main>
      
      {/* Footer Minimalista */}
      <footer className="border-t border-border/50 py-8 mt-12 bg-secondary/20">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© 2026 WR Consórcio. Venda Autorizada.</p>
        </div>
      </footer>
    </div>
  );
}
