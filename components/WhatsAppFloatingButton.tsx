'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface WhatsAppFloatingButtonProps {
  whatsappNumber: string;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({ whatsappNumber }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de tirar dúvidas sobre o aluguel de motos na SCA Locadora de Motos.')}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-auto">
      {/* Quick Tooltip Popup */}
      {showTooltip && (
        <div className="bg-slate-900 border border-slate-700 text-white p-3.5 rounded-2xl shadow-2xl max-w-xs relative animate-bounce text-xs space-y-1">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 p-1 bg-slate-800 rounded-full text-slate-400 hover:text-white"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <p className="font-bold text-amber-400">Atendimento SCA Locadora de Motos</p>
          </div>
          <p className="text-slate-300 text-[11px]">
            Precisa de uma moto ainda hoje? Clique abaixo e fale direto com nosso consultor!
          </p>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
        aria-label="Atendimento no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-slate-950 text-slate-950" />
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-slate-950 animate-ping" />
      </a>
    </div>
  );
};
