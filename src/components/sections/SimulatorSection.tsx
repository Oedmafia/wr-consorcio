"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const tabelaPrecos = [
  { credito: 45000, parcela: 365.05 },
  { credito: 50000, parcela: 405.63 },
  { credito: 55000, parcela: 446.19 },
  { credito: 60000, parcela: 486.75 },
  { credito: 65000, parcela: 527.31 },
  { credito: 70000, parcela: 567.89 },
  { credito: 75000, parcela: 608.44 },
  { credito: 80000, parcela: 649.00 },
  { credito: 85000, parcela: 689.56 },
  { credito: 90000, parcela: 730.13 },
  { credito: 100000, parcela: 811.25 },
  { credito: 120000, parcela: 973.50 },
  { credito: 130000, parcela: 1054.63 },
  { credito: 140000, parcela: 1135.75 },
  { credito: 150000, parcela: 1215.88 },
  { credito: 160000, parcela: 1298.00 },
  { credito: 180000, parcela: 1460.25 },
  { credito: 200000, parcela: 1622.50 },
  { credito: 220000, parcela: 1784.75 },
  { credito: 240000, parcela: 1947.00 }
];

function getParcela(credito: number) {
  const item = tabelaPrecos.find(p => p.credito === credito);
  if (item) return item.parcela;
  for (let i = 0; i < tabelaPrecos.length - 1; i++) {
      if (credito > tabelaPrecos[i].credito && credito < tabelaPrecos[i + 1].credito) {
          const ratio = (credito - tabelaPrecos[i].credito) / (tabelaPrecos[i + 1].credito - tabelaPrecos[i].credito);
          return tabelaPrecos[i].parcela + ratio * (tabelaPrecos[i + 1].parcela - tabelaPrecos[i].parcela);
      }
  }
  return tabelaPrecos[tabelaPrecos.length - 1].parcela;
}

function formatCurrency(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function SimulatorSection() {
  const [credit, setCredit] = useState(100000);
  const [parcela, setParcela] = useState(getParcela(100000));

  useEffect(() => {
    setParcela(getParcela(credit));
  }, [credit]);

  const whatsappUrl = `https://wa.me/5583999999999?text=${encodeURIComponent(`Olá! Simulei um crédito de ${formatCurrency(credit)} com parcelas de ${formatCurrency(parcela)} e gostaria de mais informações.`)}`;

  return (
    <section id="simulador" className="py-16 md:py-24 px-6 bg-background border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">Simulador</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Calcule sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-blue-600">parcela</span>
          </h2>
          <p className="text-muted-foreground">Valores reais da tabela Embracon</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Slider Crédito */}
            <div className="flex flex-col justify-center">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <label className="text-muted-foreground font-medium">Carta de Crédito</label>
                  <span className="text-2xl md:text-3xl font-bold text-foreground">{formatCurrency(credit)}</span>
                </div>
                
                <div className="relative pt-1">
                  <input 
                    type="range" 
                    min="45000" 
                    max="240000" 
                    value={credit} 
                    step="5000"
                    onChange={(e) => setCredit(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  {/* Custom CSS for slider thumb would go in globals.css, but accent-primary handles it well enough */}
                </div>
                
                <div className="flex justify-between text-xs text-muted-foreground/60 mt-4 font-medium tracking-wide">
                  <span>R$ 45k</span>
                  <span>R$ 240k</span>
                </div>
              </div>
            </div>

            {/* Result Box */}
            <div className="bg-gradient-to-br from-primary/90 to-blue-600 rounded-3xl p-8 text-center flex flex-col justify-center shadow-lg shadow-primary/20 border border-white/10">
              <p className="text-white/80 mb-3 font-medium">Parcela mensal a partir de</p>
              <div className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-md">
                {formatCurrency(parcela)}
              </div>

              <div className="border-t border-white/20 pt-5 mt-2">
                <p className="text-white/60 text-sm font-medium mb-1">Crédito Total</p>
                <p className="font-bold text-xl text-white">{formatCurrency(credit)}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center h-14 px-10 bg-primary text-white font-bold text-lg rounded-full shadow-lg shadow-primary/25 hover:scale-105 active:scale-95 transition-all"
            >
              Quero Esta Parcela →
            </a>
            <p className="text-muted-foreground/50 text-xs mt-5">
              *Valores sujeitos a alteração. Consulte condições com o especialista.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
