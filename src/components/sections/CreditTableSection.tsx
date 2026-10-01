"use client";

import { motion } from "framer-motion";
import { Calculator, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const creditOptions = [
  { credit: "120.000,00", installment: "973,50", highlighted: false },
  { credit: "130.000,00", installment: "1.054,63", highlighted: false },
  { credit: "140.000,00", installment: "1.135,75", highlighted: false },
  { credit: "150.000,00", installment: "1.216,88", highlighted: true }, // Nivus reference
  { credit: "160.000,00", installment: "1.298,00", highlighted: false },
  { credit: "180.000,00", installment: "1.460,25", highlighted: true }, // Taos reference
  { credit: "200.000,00", installment: "1.622,50", highlighted: false },
  { credit: "220.000,00", installment: "1.784,75", highlighted: false }, // Corrigido do marketing
  { credit: "240.000,00", installment: "1.947,00", highlighted: true }, // Amarok reference
];

export function CreditTableSection() {
  return (
    <section className="py-16 md:py-24 bg-background border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-bold mb-6">
            <Calculator className="w-4 h-4" /> Tabela Oficial VW
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 tracking-tight">Tabela de <span className="text-primary">Créditos</span></h2>
          <p className="text-base md:text-xl text-muted-foreground">
            Planos lineares da Volkswagen com a Embracon. Escolha o valor que atende sua necessidade.
          </p>
        </div>

        <div className="bg-card rounded-3xl md:rounded-[2.5rem] border border-border/50 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-2 bg-secondary/30 p-4 md:p-6 border-b border-border/50 text-center">
            <div className="font-bold font-heading text-lg md:text-xl text-foreground">Carta de Crédito</div>
            <div className="font-bold font-heading text-lg md:text-xl text-primary">Parcelas a partir</div>
          </div>
          
          {/* Table Body */}
          <div className="divide-y divide-border/30">
            {creditOptions.map((option, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                key={idx} 
                className={`grid grid-cols-2 p-4 md:p-6 text-center items-center transition-colors hover:bg-secondary/10 ${option.highlighted ? 'bg-primary/5' : ''}`}
              >
                <div className="flex items-center justify-center gap-2">
                  {option.highlighted && <CheckCircle2 className="w-4 h-4 text-primary hidden md:block" />}
                  <span className="font-medium text-base md:text-lg">R$ {option.credit}</span>
                </div>
                <div className="font-bold text-lg md:text-2xl text-foreground">
                  <span className="text-sm md:text-base text-muted-foreground font-normal mr-1">R$</span>
                  {option.installment}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button className="w-full md:w-auto px-8 h-14 font-bold text-lg rounded-xl shadow-[0_0_30px_-10px_var(--color-primary)]">
            Quero uma simulação personalizada
          </Button>
          <p className="text-xs text-muted-foreground mt-4">
            Valores sujeitos a alteração de acordo com o IPCA ou tabela do fabricante. *Crédito de 220k ajustado matematicamente.
          </p>
        </div>
      </div>
    </section>
  );
}
