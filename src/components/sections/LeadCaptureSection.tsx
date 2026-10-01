"use client";

import { useState } from "react";
import { CheckCircle2, ShieldCheck, ArrowRight, User, Phone, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LeadCaptureSection() {
  const [formData, setFormData] = useState({ name: "", phone: "", goal: "Carro" });

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    const phoneNumber = "5583999999999"; 
    const message = `Olá! Meu nome é *${formData.name}*.\nGostaria de uma simulação de consórcio.\nMeu objetivo é: *${formData.goal}*.`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="simular" className="py-16 md:py-24 relative overflow-hidden bg-background">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 blur-[150px] rounded-full -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto rounded-[2.5rem] border border-white/10 bg-card/40 backdrop-blur-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row relative">
          
          {/* Subtle Top Gradient Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

          {/* Left Side: Copy */}
          <div className="p-10 md:p-16 lg:w-1/2 flex flex-col justify-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight leading-tight text-white">
              Sua simulação <span className="text-primary">gratuita.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-md">
              Descubra a parcela exata para o seu objetivo. Nossa equipe fará a matemática para você não pagar juros.
            </p>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-base md:text-lg text-white/90">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="text-primary w-5 h-5"/>
                </div>
                Atendimento humanizado na PB
              </li>
              <li className="flex items-center gap-4 text-base md:text-lg text-white/90">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="text-primary w-5 h-5"/>
                </div>
                Estratégia de Lance Embutido
              </li>
              <li className="flex items-center gap-4 text-base md:text-lg text-white/90">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="text-primary w-5 h-5"/>
                </div>
                Retorno via WhatsApp em minutos
              </li>
            </ul>
          </div>
          
          {/* Right Side: Form */}
          <div className="p-10 md:p-16 lg:w-1/2 bg-white/[0.02] border-l border-white/5 relative flex flex-col justify-center">
            <form className="space-y-5" onSubmit={handleWhatsAppRedirect}>
              
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-primary tracking-widest uppercase ml-1">Como gosta de ser chamado?</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-muted-foreground/60" />
                  </div>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Seu Nome" 
                    className="flex h-16 w-full rounded-2xl border border-white/10 bg-white/5 pl-12 pr-5 text-base text-white placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all shadow-inner" 
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-primary tracking-widest uppercase ml-1">Seu melhor contato</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-muted-foreground/60" />
                  </div>
                  <input 
                    required
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="(83) 90000-0000" 
                    className="flex h-16 w-full rounded-2xl border border-white/10 bg-white/5 pl-12 pr-5 text-base text-white placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all shadow-inner" 
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-primary tracking-widest uppercase ml-1">O que deseja conquistar?</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Target className="h-5 w-5 text-muted-foreground/60" />
                  </div>
                  <select 
                    value={formData.goal}
                    onChange={(e) => setFormData({...formData, goal: e.target.value})}
                    className="flex h-16 w-full rounded-2xl border border-white/10 bg-white/5 pl-12 pr-5 text-base text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all shadow-inner appearance-none cursor-pointer"
                  >
                    <option value="Carro" className="bg-background text-white">Veículo (Carro)</option>
                    <option value="Imóvel" className="bg-background text-white">Imóvel</option>
                    <option value="Moto" className="bg-background text-white">Motocicleta</option>
                    <option value="Investimento" className="bg-background text-white">Investimento</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-muted-foreground/60"></div>
                  </div>
                </div>
              </div>
              
              <Button type="submit" className="w-full h-16 text-lg font-bold rounded-2xl bg-primary hover:bg-primary/90 text-white mt-6 group shadow-lg shadow-primary/20 transition-all hover:-translate-y-1">
                Ver Minha Parcela Agora <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground/70 mt-6 font-medium">
                <ShieldCheck className="w-4 h-4 text-primary/70" /> Seus dados estão criptografados e 100% seguros.
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
