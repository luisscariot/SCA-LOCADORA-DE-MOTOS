'use client';

import React, { useState } from 'react';
import { FAQ_DATA, FaqItem } from '@/lib/data';
import { HelpCircle, ChevronDown, Search, MessageCircle } from 'lucide-react';

interface FaqSectionProps {
  whatsappNumber: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ whatsappNumber }) => {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('Todas');

  const categories = ['Todas', 'Geral', 'Contrato', 'Manutenção', 'Pagamento'];

  const filteredFaq = FAQ_DATA.filter((item) => {
    const matchesCategory = activeCategory === 'Todas' || item.category === activeCategory;
    const matchesQuery = searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Tenho uma dúvida sobre o aluguel de motos que não encontrei no FAQ.')}`;

  return (
    <section id="faq" className="py-16 lg:py-24 bg-slate-900 text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perguntas Frequentes
          </h2>

          <p className="text-slate-400 text-base">
            Transparência em primeiro lugar. Veja abaixo as respostas para as principais dúvidas de quem aluga com a SCA Locadora de Motos em Passo Fundo RS.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="mt-8 space-y-4 max-w-2xl mx-auto">
          
          <div className="relative">
            <Search className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar pergunta (ex: caução, manutenção, documentos)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-amber-400 text-slate-950 font-bold'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Accordion List */}
        <div className="mt-10 space-y-3">
          {filteredFaq.length > 0 ? (
            filteredFaq.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-100 hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-amber-400' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-900/80">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center p-8 bg-slate-950 rounded-2xl border border-slate-800 text-slate-400 text-sm">
              Nenhuma pergunta encontrada para sua busca.
            </div>
          )}
        </div>

        {/* Support CTA */}
        <div className="mt-12 text-center p-6 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
          <p className="text-sm font-semibold text-slate-300">
            Ainda tem dúvidas ou prefere falar diretamente com um consultor?
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>Falar com Atendimento no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
