"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroCarImg from "../../../../public/hero-car.jpg";

const fadeInUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 lg:pt-40 lg:pb-32 px-6 overflow-hidden flex flex-col">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      
      {/* Mobile-only background car image — gives visual depth on phones */}
      <div className="absolute inset-0 -z-10 lg:hidden">
        <Image 
          src={heroCarImg} 
          alt="" 
          fill 
          sizes="100vw"
          className="object-cover opacity-[0.08]" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
      </div>
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 flex-1">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-2xl relative z-10 w-full flex flex-col gap-6 lg:gap-8"
        >
          {/* Main Content */}
          <div className="flex flex-col justify-center">
            {/* Scarcity Badge */}
            <motion.div variants={fadeInUp} className="inline-flex self-start items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm font-bold mb-5 md:mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              ÚLTIMAS 3 COTAS: Grupo Exclusivo VW
            </motion.div>

            {/* Title — scaled down on mobile for readability */}
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.08] mb-5 md:mb-6 tracking-tight"
            >
              Saia de carro novo com o <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-blue-600 drop-shadow-sm">
                Lance Embutido
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-base md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed"
            >
              Use até 30% da própria carta para dar o lance. A WR Consórcio aplica <strong className="text-foreground">estratégia matemática</strong> para você ser contemplado mais rápido, sem depender apenas da sorte.
            </motion.p>
            
            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className="h-14 px-8 text-base sm:text-lg rounded-full font-bold shadow-lg shadow-primary/25 hover:scale-[1.03] active:scale-95 transition-all duration-300"
                onClick={() => document.getElementById('simular')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Fazer Simulação Agora <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 px-8 text-base sm:text-lg rounded-full font-medium border-white/10 hover:bg-white/5 transition-colors" 
                onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Entender como funciona
              </Button>
            </motion.div>
          </div>

          {/* Social Proof */}
          <motion.div variants={fadeInUp} className="mt-4 lg:mt-auto pt-4 lg:pt-6">
            <div className="rounded-2xl p-4 sm:p-5 flex items-center gap-4 bg-white/[0.03] border border-white/5">
              <div className="flex -space-x-3 shrink-0">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-xs overflow-hidden relative shadow-sm">
                    <Image src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Cliente" fill sizes="40px" className="object-cover"/>
                  </div>
                ))}
              </div>
              <div>
                <p className="font-bold text-foreground text-sm leading-tight">Mais de 5.000</p>
                <p className="text-muted-foreground text-xs">sonhos realizados na PB</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Desktop Image — large card with car photo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[500px] hidden lg:block rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent z-10 pointer-events-none"></div>
          <Image 
            src={heroCarImg} 
            alt="Volkswagen Nivus 0km" 
            fill 
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
