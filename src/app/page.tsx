import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/sections/HeroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { Explore3DSection } from "@/components/sections/Explore3DSection";
import { PopularPlansSection } from "@/components/sections/PopularPlansSection";
import { SimulatorSection } from "@/components/sections/SimulatorSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { LeadCaptureSection } from "@/components/sections/LeadCaptureSection";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { CreditTableSection } from "@/components/sections/CreditTableSection";
import { ParallaxSection } from "@/components/sections/ParallaxSection";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden selection:bg-primary selection:text-primary-foreground">
      <SiteHeader />

      <main>
        <HeroSection />
        <BenefitsSection />
        <Explore3DSection />
        <TestimonialsSection />
        <SimulatorSection />
        <LocationSection />
        <PopularPlansSection />
        <CreditTableSection />
        <FAQSection />
        <ParallaxSection />
        <LeadCaptureSection />
      </main>

      {/* FOOTER (Grand Finale) */}
      <footer className="bg-background relative border-t border-white/5 min-h-[80vh] flex flex-col justify-center py-20 pb-32 md:pb-20 overflow-hidden">
        {/* Ambient Footer Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[150px] rounded-full -z-10 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-8 mb-16 md:mb-20">
            
            {/* Brand Column */}
            <div className="lg:col-span-5">
              <div className="font-heading font-bold text-3xl md:text-4xl tracking-tighter mb-4">
                WR<span className="text-primary">Consórcio</span>
              </div>
              <p className="text-muted-foreground/80 max-w-sm text-sm md:text-base leading-relaxed">
                Acelerando conquistas e construindo patrimônio com segurança, transparência e sem juros na Paraíba. O seu planejamento levado a sério.
              </p>
              <div className="mt-6 inline-flex flex-col items-start px-4 py-3 rounded-2xl bg-white/5 border border-white/10 shadow-inner">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <div className="font-bold text-sm text-white">Parceiro Autorizado</div>
                </div>
                <div className="text-muted-foreground/60 text-xs font-medium mt-1">Consórcio Volkswagen e Embracon</div>
              </div>
            </div>
            
            {/* Links Columns */}
            <div className="lg:col-span-7 flex flex-col sm:flex-row gap-10 sm:gap-16 lg:justify-end">
              
              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider text-white/90">Atendimento</h4>
                <ul className="space-y-3 text-sm text-muted-foreground/70 font-medium">
                  <li><a href="https://wa.me/5583999999999" className="hover:text-primary transition-colors flex items-center gap-2">(83) 90000-0000</a></li>
                  <li><a href="mailto:contato@wrconsorcio.com.br" className="hover:text-primary transition-colors flex items-center gap-2">contato@wrconsorcio.com.br</a></li>
                  <li className="leading-relaxed">Campina Grande - PB<br/>e Filiais</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider text-white/90">Social</h4>
                <ul className="space-y-3 text-sm text-muted-foreground/70 font-medium">
                  <li><a href="https://www.instagram.com/wrconsorciooficial.pb/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">Instagram</a></li>
                  <li><a href="https://wa.me/5583999999999" className="hover:text-primary transition-colors flex items-center gap-2">WhatsApp</a></li>
                </ul>
              </div>

            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground/50 font-medium">
            <p>© {new Date().getFullYear()} WR Consórcio Oficial PB. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>

      <MobileStickyCTA />
    </div>
  );
}
