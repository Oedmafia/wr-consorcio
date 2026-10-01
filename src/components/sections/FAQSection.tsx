import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "É realmente sem juros?",
    a: "Sim! Diferente do financiamento que cobra juros compostos altíssimos, no consórcio você paga apenas uma pequena taxa de administração que é fixa e diluída durante todo o prazo do plano. No fim das contas, a economia chega a ser gigantesca comparada a um empréstimo bancário."
  },
  {
    q: "Em quanto tempo serei contemplado?",
    a: "Você pode ser contemplado já no primeiro mês através de sorteios mensais ou ofertando lances (lance fixo ou lance livre). Nossos especialistas auxiliam você em toda a estratégia matemática de lances para acelerar sua conquista."
  },
  {
    q: "Posso usar para imóvel e veículo?",
    a: "Sim! Temos grupos específicos para veículos (carros, motos, utilitários, caminhões) e imóveis (compra de casa/apartamento, construção ou reforma). O crédito é flexível dentro da sua categoria de bem."
  },
  {
    q: "O que é lance embutido?",
    a: "O lance embutido permite que você use até 30% do valor da própria carta de crédito como lance, sem precisar de dinheiro vivo. É a estratégia mais inteligente para antecipar sua contemplação."
  },
  {
    q: "A WR Consórcio é confiável?",
    a: "Somos parceiros autorizados da Embracon, administradora líder no mercado de consórcio Volkswagen. Atuamos em toda a Paraíba com atendimento presencial e suporte personalizado."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 tracking-tight">Dúvidas Frequentes</h2>
          <p className="text-base text-muted-foreground">Tudo o que você precisa saber sobre o consórcio na Paraíba.</p>
        </div>
        
        <Accordion className="w-full space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem 
              key={i} 
              value={`item-${i}`} 
              className="bg-white/[0.03] px-6 md:px-8 rounded-2xl border border-white/10 data-[state=open]:border-primary/30 data-[state=open]:bg-primary/[0.04] transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-bold text-base md:text-lg hover:no-underline py-5 md:py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
