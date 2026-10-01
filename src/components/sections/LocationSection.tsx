"use client";

import { MapPin, Navigation, Map } from "lucide-react";

export function LocationSection() {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" /> Atendimento Regional e Online
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 md:mb-8 tracking-tight">Onde você estiver, <br className="hidden md:block"/><span className="text-primary">estamos perto.</span></h2>
            <p className="text-base md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Com nossa matriz estratégica, <strong>cobrimos toda a Paraíba e região Nordeste</strong>. Nossa equipe de especialistas vai até você, oferecendo a segurança de um atendimento olho no olho.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-secondary/30 border border-border rounded-lg text-sm font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Atendimento em Domicílio
              </div>
              <div className="px-4 py-2 bg-secondary/30 border border-border rounded-lg text-sm font-bold flex items-center gap-2">
                <Map className="w-4 h-4 text-primary" /> Cobertura Total PB
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Matriz */}
              <div className="md:col-span-2 bg-gradient-to-br from-primary/10 to-transparent p-6 md:p-8 rounded-3xl border border-primary/20 relative overflow-hidden group shadow-lg">
                <div className="absolute top-0 right-0 p-6 text-primary/5 group-hover:text-primary/10 transition-colors">
                  <MapPin className="w-32 h-32 md:w-48 md:h-48 -mr-10 -mt-10" />
                </div>
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-md">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-foreground">Matriz Operacional</h3>
                    <p className="text-sm font-medium text-primary uppercase tracking-widest">Campina Grande - PB</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm md:text-base relative z-10 max-w-[90%]">Nossa sede física estruturada para coordenar as aprovações de crédito e dar suporte a toda a rede de consultores do estado.</p>
              </div>

              {/* Cidades Atendidas */}
              <div className="bg-card p-6 md:p-8 rounded-3xl border border-border/50 shadow-lg flex flex-col justify-center">
                <h4 className="font-bold mb-5 text-foreground flex items-center gap-2 text-lg"><Navigation className="w-5 h-5 text-primary" /> Cidades Foco</h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm md:text-base text-muted-foreground font-medium"><MapPin className="w-4 h-4 text-primary/70 shrink-0" /> João Pessoa e Cabedelo</li>
                  <li className="flex items-center gap-3 text-sm md:text-base text-muted-foreground font-medium"><MapPin className="w-4 h-4 text-primary/70 shrink-0" /> Patos e Sertão</li>
                  <li className="flex items-center gap-3 text-sm md:text-base text-muted-foreground font-medium"><MapPin className="w-4 h-4 text-primary/70 shrink-0" /> Guarabira e Brejo</li>
                  <li className="flex items-center gap-3 text-sm md:text-base text-muted-foreground font-medium"><MapPin className="w-4 h-4 text-primary/70 shrink-0" /> Sousa e Cajazeiras</li>
                </ul>
              </div>

              {/* Proximidade */}
               <div className="bg-gradient-to-b from-card to-secondary/10 p-6 md:p-8 rounded-3xl border border-border/50 shadow-lg flex flex-col justify-center relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-background border border-border flex items-center justify-center mb-6 shadow-sm">
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                  </span>
                </div>
                <h4 className="font-bold mb-3 text-xl">Mais perto de você</h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Não importa a sua cidade, temos um consultor treinado na sua região pronto para tomar um café e explicar o plano.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
