'use client';

import React from 'react';
import { BENEFITS_DATA } from '@/lib/data';
import { Wrench, ShieldCheck, HardHat, Shield, FileCheck, Gauge, CheckCircle2, Award } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="w-6 h-6 text-amber-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
  HardHat: <HardHat className="w-6 h-6 text-blue-400" />,
  Shield: <Shield className="w-6 h-6 text-amber-400" />,
  FileCheck: <FileCheck className="w-6 h-6 text-emerald-400" />,
  Gauge: <Gauge className="w-6 h-6 text-blue-400" />,
};

export const BenefitsSection: React.FC = () => {
  return (
    <section id="beneficios" className="py-16 lg:py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>Por que escolher a SCA Locadora de Motos?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tudo o Que Você Precisa para Rodar Tranquilo
          </h2>

          <p className="text-slate-400 text-base">
            Eliminamos os riscos e custos surpresa. Nosso modelo de locação foi desenhado para maximizar o seu lucro líquido semanal.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS_DATA.map((benefit) => (
            <div
              key={benefit.id}
              className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {ICON_MAP[benefit.iconName] || <CheckCircle2 className="w-6 h-6 text-amber-400" />}
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                {benefit.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Highlight Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-900/60 via-slate-900 to-slate-900 border border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-black text-white">Pronto para faturar com sua nova moto?</h4>
            <p className="text-sm text-slate-300">
              Processo de análise 100% online. Envie foto da sua CNH e retire a chave hoje mesmo.
            </p>
          </div>

          <a
            href="#motos"
            className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shrink-0 transition-all shadow-md"
          >
            Ver Frota Disponível →
          </a>
        </div>

      </div>
    </section>
  );
};
