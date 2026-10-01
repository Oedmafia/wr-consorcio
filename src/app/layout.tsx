import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WR Consórcio Oficial | Conquiste seu Carro ou Imóvel sem Juros na Paraíba",
  description: "A WR Consórcio ajuda você a planejar a compra do seu carro, moto ou imóvel com parcelas justas, sem juros e lances inteligentes. Atendimento em toda a Paraíba.",
  keywords: ["Consórcio", "Volkswagen", "Embracon", "Carro zero", "Sem Juros", "Imóvel", "Paraíba", "Campina Grande", "João Pessoa", "WR Consórcio"],
  authors: [{ name: "WR Consórcio Oficial" }],
  creator: "WR Consórcio",
  publisher: "WR Consórcio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "WR Consórcio Oficial | Acelerando Conquistas",
    description: "Planeje a compra do seu carro ou imóvel com a segurança do Consórcio Volkswagen e Embracon na Paraíba.",
    url: "https://wrconsorcio.com.br",
    siteName: "WR Consórcio Oficial",
    images: [
      {
        url: "/hero-car.jpg",
        width: 1200,
        height: 630,
        alt: "WR Consórcio Volkswagen",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WR Consórcio Oficial",
    description: "Conquiste seu carro ou imóvel sem juros.",
    images: ["/hero-car.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${syne.variable} ${dmSans.variable} antialiased font-sans bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
