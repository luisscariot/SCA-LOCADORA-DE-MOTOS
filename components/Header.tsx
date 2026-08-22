'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MessageCircle, Menu, X, ShieldCheck } from 'lucide-react';
import { ScaLogo } from './ScaLogo';

interface HeaderProps {
  whatsappNumber: string;
}

export const Header: React.FC<HeaderProps> = ({ whatsappNumber }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Vim pelo site da SCA Locadora de Motos e gostaria de informações sobre o aluguel de motos em Passo Fundo RS.')}`;

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white transition-all shadow-lg">
      {/* Top Banner Notice */}
      <div className="bg-blue-600 text-white text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="font-semibold">SCA Locadora de Motos • Passo Fundo RS:</span> Retirada no mesmo dia • Sem consulta ao SPC/Serasa • Capacete disponível para locação! Consulte valores e disponibilidade.
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center group py-1" title="SCA Locadora de Motos">
            <ScaLogo className="h-10 sm:h-12" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#motos" className="hover:text-amber-400 transition-colors">Nossa Frota</a>
            <a href="#beneficios" className="hover:text-amber-400 transition-colors">Diferenciais</a>
            <a href="#como-funciona" className="hover:text-amber-400 transition-colors">Como Funciona</a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">Perguntas Frequentes</a>
            <a href="#avaliacoes" className="hover:text-amber-400 transition-colors">Avaliações</a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Direct WhatsApp Call to Action */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-md shadow-amber-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>(54) 99613-9870 • Alugar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#motos"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 font-medium hover:text-amber-400"
          >
            Nossa Frota
          </a>
          <a
            href="#beneficios"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 font-medium hover:text-amber-400"
          >
            Diferenciais
          </a>
          <a
            href="#como-funciona"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 font-medium hover:text-amber-400"
          >
            Como Funciona
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 font-medium hover:text-amber-400"
          >
            Perguntas Frequentes
          </a>
          <a
            href="#avaliacoes"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 font-medium hover:text-amber-400"
          >
            Avaliações do Google
          </a>
          <Link
            href="/politica-de-privacidade"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 py-2 text-slate-400 text-sm hover:text-amber-400"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Política de Privacidade (LGPD)</span>
          </Link>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-center shadow-md"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950" />
              (54) 99613-9870 • WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
