import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SCA Locadora de Motos | Aluguel de Motos Sem Burocracia',
  description: 'SCA Locadora de Motos — Aluguel de motos com manutenção 100% inclusa, capacete disponível para locação e aprovação rápida no WhatsApp. Fature mais com a SCA.',
  keywords: ['aluguel de moto', 'locadora de moto', 'SCA Locadora de Motos', 'SCA Aluguel de Motos', 'moto para ifood', 'locação de motocicletas'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body suppressHydrationWarning className="bg-slate-950 text-slate-100 antialiased selection:bg-amber-400 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
