'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Zap, Clock, MessageCircle, ArrowRight, CheckCircle2, Star, Sparkles, Bike } from 'lucide-react';
import { ScaLogo } from './ScaLogo';
import yamahaStreetImg from '@/src/assets/images/yamaha_street_red_1786137303307.jpg';

interface HeroProps {
  whatsappNumber: string;
}

export const Hero: React.FC<HeroProps> = ({ whatsappNumber }) => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de consultar as motos disponíveis para aluguel imediato na SCA Locadora de Motos em Passo Fundo RS.')}`;

  return (
    <section className="relative bg-slate-950 text-white pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Background Glows & Patterns */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-300 text-xs font-semibold">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <span>SCA LOCADORA DE MOTOS • PASSO FUNDO RS</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              Aluguel de Motos em Passo Fundo RS <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">Sem Burocracia</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Motocicletas 100% revisadas com planos a partir de <strong className="text-white font-bold">R$ 273,00/semana</strong>. Manutenção programada inclusa, caução de R$ 500,00 e aprovação descomplicada no WhatsApp.
            </p>

            {/* Mobile-Only Moto Showcase (Appears before Rapidez card on mobile) */}
            <div className="block lg:hidden pt-1 pb-2">
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 p-1.5 shadow-2xl">
                <Image
                  src={yamahaStreetImg}
                  alt="Yamaha Factor 150 - SCA Locadora de Motos Passo Fundo RS"
                  priority
                  className="w-full h-64 sm:h-72 object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />

                {/* Compact Floating Top Banner */}
                <div className="absolute top-3 left-3 right-3 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800/80 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1 bg-[#1A204C] rounded-md border border-amber-400/30 flex items-center justify-center shrink-0">
                      <ScaLogo className="h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-white leading-tight">Yamaha Factor 150</p>
                      <p className="text-[9px] text-slate-400 leading-tight">Passo Fundo RS</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30 shrink-0 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Disponível
                  </span>
                </div>

                {/* Compact Floating Bottom Rating */}
                <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-800/80 shadow-md flex items-center gap-1.5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-300 font-semibold">5.0</span>
                </div>
              </div>
            </div>

            {/* Value Pillars Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Rapidez</h4>
                  <p className="text-[11px] text-slate-400">Passo Fundo RS</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Preço Fixo</h4>
                  <p className="text-[11px] text-slate-400">R$ 273,00 / semana</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Caução Acessível</h4>
                  <p className="text-[11px] text-slate-400">R$ 500,00 único</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-base shadow-xl shadow-amber-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950" />
                <span>ALUGAR NO WHATSAPP • (54) 99613-9870</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#motos"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-base border border-slate-700 transition-all"
              >
                <Bike className="w-5 h-5 text-amber-400" />
                <span>Ver Modelos Disponíveis</span>
              </a>
            </div>

            {/* Quick Guarantees */}
            <div className="flex flex-wrap gap-y-2 gap-x-6 text-xs text-slate-400 pt-2 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Sem consulta SPC/Serasa</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Capacete disponível para locação</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Manutenção preventiva inclusa</span>
              </div>
            </div>

          </div>

          {/* Right Image / Showcase Column (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-amber-400 rounded-2xl blur-lg opacity-30 animate-pulse-glow" />

              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 p-2 shadow-2xl">
                <Image
                  src={yamahaStreetImg}
                  alt="Yamaha Factor 150 - SCA Locadora de Motos Passo Fundo RS"
                  priority
                  className="w-full h-80 sm:h-96 object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />

                {/* Compact Floating Top Banner */}
                <div className="absolute top-3.5 left-3.5 right-3.5 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-800/80 shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1 bg-[#1A204C] rounded-lg border border-amber-400/30 flex items-center justify-center shrink-0">
                      <ScaLogo className="h-4.5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white leading-tight">Yamaha Factor 150</p>
                      <p className="text-[10px] text-slate-400 leading-tight">Pronta entrega em Passo Fundo RS</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30 shrink-0 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Disponível
                  </span>
                </div>

                {/* Compact Floating Bottom Rating */}
                <div className="absolute bottom-3.5 left-3.5 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800/80 shadow-xl flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-300 font-semibold">5.0</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
