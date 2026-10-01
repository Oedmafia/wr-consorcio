"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MapPin, TrendingUp, Calculator, Clock, Car } from "lucide-react";

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeInUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-16 md:py-24 bg-background relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "50px" }}
          variants={staggerContainer}
          className="mb-12 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-bold mb-4 md:mb-6">
            <TrendingUp className="w-4 h-4" /> O Fim dos Juros Abusivos
          </div>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 md:mb-6 tracking-tight max-w-3xl">
            Pare de pagar por dois carros para ter um.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-base md:text-xl text-muted-foreground max-w-2xl">
            Nossa estratégia usa matemática e lances embutidos para colocar a chave na sua mão muito mais rápido.
          </motion.p>
        </motion.div>

        {/* Premium Stacked Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[500px] bg-primary/10 blur-[120px] -z-10 rounded-full"></div>

          {/* Card 1 - Matemática */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="md:col-span-2 glass-card rounded-[2rem] p-8 md:p-10 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mb-8 shadow-lg shadow-primary/20">
              <Calculator className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-foreground">Assessoria Matemática</h3>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg">
              Consórcio não é loteria. Calculamos a porcentagem exata que você precisa ofertar para garantir sua contemplação rápida.
            </p>
          </motion.div>

          {/* Card 2 - Zero Juros */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="glass-card rounded-[2rem] p-8 md:p-10 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-14 h-14 rounded-2xl bg-secondary border border-border flex items-center justify-center mb-8 shadow-inner">
              <ShieldCheck className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold font-heading mb-4 text-gradient">Zero Juros.</h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              Você paga apenas uma pequena taxa de administração fixa e transparente diluída nas parcelas.
            </p>
          </motion.div>

          {/* Card 3 - Lance Embutido */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="glass-card rounded-[2rem] p-8 md:p-10 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-14 h-14 rounded-2xl bg-secondary border border-border flex items-center justify-center mb-8 shadow-inner">
              <Clock className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold font-heading mb-4 text-foreground">Lance Embutido</h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              Use até 30% do próprio valor da carta de crédito para dar o lance e antecipar a sua conquista sem dinheiro vivo.
            </p>
          </motion.div>

          {/* Card 4 - Poder de Compra */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="glass-card rounded-[2rem] p-8 md:p-10 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-tl from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-14 h-14 rounded-2xl bg-secondary border border-border flex items-center justify-center mb-8 shadow-inner">
              <Car className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold font-heading mb-4 text-foreground">Poder de Compra à Vista</h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              Ao ser contemplado, seu dinheiro tem o peso de compra à vista. Consiga enormes descontos na concessionária.
            </p>
          </motion.div>

          {/* Card 5 - CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="md:col-span-3 bg-gradient-to-r from-primary to-blue-700 p-8 md:p-10 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-primary/30 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold font-heading mb-2 text-white">Pronto para acelerar?</h3>
              <p className="text-blue-100 text-base md:text-lg">Últimas 4 cotas do grupo Volkswagen com estratégia de lance rápido.</p>
            </div>
            <button className="relative z-10 w-full md:w-auto px-8 py-4 bg-white text-primary font-bold text-lg rounded-xl hover:scale-105 transition-transform duration-300 shadow-xl">
              Reservar Minha Cota
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
