'use client';

import React from 'react';
import Image from 'next/image';
import { MOTOS_DATA } from '@/lib/data';
import { Bike, Check, MessageCircle, Sparkles } from 'lucide-react';

interface FleetSectionProps {
  whatsappNumber: string;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ whatsappNumber }) => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('Todas');

  const categories = ['Todas', 'STREET', 'SCOOTER URBANA'];

  const filteredMotos = selectedCategory === 'Todas'
    ? MOTOS_DATA
    : MOTOS_DATA.filter(m => m.category === selectedCategory);

  const getWhatsappUrl = (motoName: string, weeklyPrice: number) => {
    const text = `Olá! Tenho interesse em alugar a moto *${motoName}* por R$ ${weeklyPrice},00/semana na SCA Locadora de Motos em Passo Fundo RS. Gostaria de saber como prosseguir com o envio de documentos!`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="motos" className="py-16 lg:py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Bike className="w-4 h-4 text-amber-400" />
            <span>Frota SCA Locadora de Motos • Passo Fundo RS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Escolha o Modelo Ideal para Você
          </h2>
          
          <p className="text-slate-400 text-base">
            Motocicletas revisadas com planos a partir de <strong className="text-amber-400 font-bold">R$ 273,00 por semana</strong> e caução único de <strong className="text-white font-bold">R$ 500,00</strong>.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Moto Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8">
          {filteredMotos.map((moto) => {
            return (
              <div
                key={moto.id}
                className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                <div>
                  {/* Image Container & Badges */}
                  <div className="relative h-64 bg-slate-900 overflow-hidden">
                    <Image
                      src={moto.image}
                      alt={moto.name}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Availability & Feature Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      {moto.available ? (
                        <div className="bg-emerald-500 text-slate-950 text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-lg shadow-lg flex items-center gap-1.5 border border-emerald-400">
                          <span className="w-2 h-2 rounded-full bg-slate-950 animate-pulse" />
                          <span>Disponível para Locação</span>
                        </div>
                      ) : (
                        <div className="bg-slate-900/90 text-slate-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border border-slate-700 backdrop-blur-sm">
                          Consulte Próximas Vagas
                        </div>
                      )}

                      {moto.popular && (
                        <div className="bg-amber-400 text-slate-950 text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg shadow-md flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          <span>Destaque</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-[11px] font-bold text-blue-400 uppercase tracking-widest">
                        {moto.category}
                      </span>
                      <h3 className="text-xl font-extrabold text-white mt-1 group-hover:text-amber-400 transition-colors">
                        {moto.name}
                      </h3>
                    </div>

                    {/* Pricing Highlight */}
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-baseline justify-between">
                      <div>
                        <span className="text-xs text-slate-400 block font-medium">
                          Valor Semanal da Locação:
                        </span>
                        <div className="flex items-baseline gap-1 mt-0.5">
                          <span className="text-2xl font-black text-amber-400 tracking-tight">
                            R$ {moto.weeklyPrice},00
                          </span>
                          <span className="text-xs text-slate-400 font-semibold">/semana</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] text-slate-400 uppercase font-semibold">Caução</span>
                        <p className="text-sm font-bold text-slate-200">R$ 500,00</p>
                      </div>
                    </div>

                    {/* Main Features */}
                    <ul className="space-y-2 pt-1 text-xs text-slate-300">
                      {moto.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0">
                  <a
                    href={getWhatsappUrl(moto.name, moto.weeklyPrice)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-md transition-all active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950" />
                    <span>Reservar no WhatsApp • (54) 99613-9870</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
