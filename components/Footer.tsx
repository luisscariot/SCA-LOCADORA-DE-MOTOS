'use client';

import React from 'react';
import Link from 'next/link';
import { MessageCircle, MapPin, Clock, ShieldCheck, Lock } from 'lucide-react';
import { ScaLogo } from './ScaLogo';

interface FooterProps {
  whatsappNumber: string;
  onOpenPrivacyPolicy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ whatsappNumber, onOpenPrivacyPolicy }) => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Vim pelo site da SCA Locadora de Motos e gostaria de alugar uma moto em Passo Fundo RS.')}`;

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center py-1">
              <ScaLogo className="h-10 sm:h-12" />
            </div>

            <p className="text-xs leading-relaxed text-slate-400">
              SCA Locadora de Motos — Soluções inteligentes de mobilidade em Passo Fundo RS. Veículos revisados, burocracia zero e suporte completo para o seu dia a dia e passeios.
            </p>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Links Rápidos</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#motos" className="hover:text-amber-400 transition-colors">Nossa Frota de Motos</a></li>
              <li><a href="#avaliacoes" className="hover:text-amber-400 transition-colors">Avaliações do Google</a></li>
              <li><a href="#beneficios" className="hover:text-amber-400 transition-colors">Benefícios e Diferenciais</a></li>
              <li><a href="#como-funciona" className="hover:text-amber-400 transition-colors">Passo a Passo de Locação</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">Perguntas Frequentes (FAQ)</a></li>
              <li>
                {onOpenPrivacyPolicy ? (
                  <button
                    onClick={onOpenPrivacyPolicy}
                    className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5"
                  >
                    <Lock className="w-3 h-3 text-amber-400" />
                    <span>Política de Privacidade</span>
                  </button>
                ) : (
                  <Link href="/politica-de-privacidade" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                    <Lock className="w-3 h-3 text-amber-400" />
                    <span>Política de Privacidade</span>
                  </Link>
                )}
              </li>
            </ul>
          </div>

          {/* Operating Hours (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Atendimento</h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Seg a Sex: 08h às 18h</span>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Sábados: 08h às 12h</span>
              </p>
              <p className="text-emerald-400 font-medium pt-1">
                • Atendimento via WhatsApp
              </p>
            </div>
          </div>

          {/* Contact & Unit Location (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Central de Atendimento</h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 font-bold hover:underline"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-400" />
                <span>WhatsApp: (54) 99613-9870</span>
              </a>

              <p className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Passo Fundo — RS</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} SCA Locadora de Motos • Passo Fundo RS. Todos os direitos reservados.</p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {onOpenPrivacyPolicy ? (
              <button
                onClick={onOpenPrivacyPolicy}
                className="hover:text-amber-400 transition-colors underline underline-offset-2 flex items-center gap-1"
              >
                <Lock className="w-3 h-3 text-amber-400" />
                Privacidade & Proteção de Dados (LGPD)
              </button>
            ) : (
              <Link
                href="/politica-de-privacidade"
                className="hover:text-amber-400 transition-colors underline underline-offset-2 flex items-center gap-1"
              >
                <Lock className="w-3 h-3 text-amber-400" />
                Privacidade & Proteção de Dados (LGPD)
              </Link>
            )}

            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Empresa Verificada & Segura
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
