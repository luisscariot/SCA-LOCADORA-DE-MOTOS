'use client';

import React from 'react';
import { STEPS_DATA } from '@/lib/data';
import { Compass, CheckCircle, ArrowRight } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="como-funciona" className="py-16 lg:py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-4 h-4 text-amber-400" />
            <span>Fluxo Rápido & Descomplicado</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Como Alugar Sua Moto em 4 Passos Simples
          </h2>

          <p className="text-slate-400 text-base">
            Sem burocracia, sem filas longas e sem depender de aprovação bancária.
          </p>
        </div>

        {/* Steps Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {STEPS_DATA.map((stepItem, index) => (
            <div
              key={stepItem.step}
              className="relative bg-slate-900 rounded-2xl border border-slate-800 p-6 space-y-4 shadow-xl hover:border-slate-700 transition-all group"
            >
              {/* Step Number Tag */}
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-amber-400 font-mono">
                  {stepItem.step}
                </span>
                <span className="p-2 rounded-xl bg-slate-950 text-slate-400 text-xs font-bold border border-slate-800">
                  Etapa {index + 1}/4
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-white group-hover:text-amber-400 transition-colors">
                {stepItem.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {stepItem.subtitle}
              </p>

              {index < STEPS_DATA.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                  <ArrowRight className="w-6 h-6 text-slate-700" />
                </div>
              )}
            </div>
          ))}

        </div>

        {/* Quick Requirements Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300 text-xs sm:text-sm flex flex-wrap items-center justify-center gap-6">
          <span className="font-bold text-white uppercase text-xs tracking-wider">Requisitos Básicos:</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-400" /> CNH A ou AB válida</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-400" /> Comprovante de Residência</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-400" /> Caução de Garantia</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-400" /> Idade mínima 21 anos</span>
        </div>

      </div>
    </section>
  );
};
