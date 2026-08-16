'use client';

import React, { useEffect } from 'react';
import { X, ShieldCheck, Lock, FileText, CheckCircle2, Phone, Instagram, MapPin, Calendar, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappNumber?: string;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose,
  whatsappNumber = '5554996139870',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de tirar dúvidas sobre a Política de Privacidade e proteção de dados da SCA Locadora de Motos.')}`;

  return (
    <div
      id="privacy-policy-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="privacy-policy-modal-card"
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Política de Privacidade e Proteção de Dados
              </h2>
              <p className="text-xs text-slate-400">
                SCA Locadora de Motos • Em conformidade com a LGPD
              </p>
            </div>
          </div>
          <button
            id="close-privacy-policy-modal"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - Scrollable content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 text-sm leading-relaxed text-slate-300">
          {/* Introduction Card */}
          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-wider">
              <Lock className="w-4 h-4" />
              <span>Compromisso e Transparência</span>
            </div>
            <p className="text-slate-200">
              A <strong>SCA Locadora de Motos</strong> valoriza a privacidade e a proteção dos dados pessoais de seus clientes e visitantes.
            </p>
          </div>

          {/* Section: Finalidade */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-400" />
              1. Coleta e Finalidade dos Dados
            </h3>
            <p>
              As informações coletadas por meio de formulários de contato, WhatsApp, telefone ou outros canais de atendimento são utilizadas <strong>exclusivamente</strong> para fins de atendimento, locação de veículos, elaboração de contratos, suporte ao cliente e comunicação relacionada aos serviços oferecidos.
            </p>
          </div>

          {/* Section: Compartilhamento */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              2. Não Compartilhamento Comercial
            </h3>
            <p>
              A <strong>SCA Locadora de Motos não vende, aluga ou compartilha dados pessoais com terceiros para fins comerciais</strong>. As informações poderão ser compartilhadas apenas quando estritamente necessário para cumprimento de obrigações legais ou regulatórias.
            </p>
          </div>

          {/* Section: Segurança */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Lock className="w-4 h-4 text-blue-400" />
              3. Segurança da Informação
            </h3>
            <p>
              Adotamos medidas razoáveis e proporcionais de segurança para proteger os dados pessoais contra acesso não autorizado, perda, alteração ou divulgação indevida.
            </p>
          </div>

          {/* Section: Consentimento */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              4. Consentimento do Usuário
            </h3>
            <p>
              Ao utilizar nossos serviços e canais de atendimento, o usuário concorda com a coleta e utilização das informações conforme descrito nesta Política de Privacidade.
            </p>
          </div>

          {/* Contact Box */}
          <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Dúvidas ou Solicitações sobre seus Dados Pessoais
            </h4>
            <p className="text-xs text-slate-400">
              Para dúvidas sobre privacidade ou para solicitar atualização ou exclusão de seus dados, entre em contato direto conosco:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span className="font-semibold">WhatsApp: (54) 99613-9870</span>
              </a>

              <a
                href="https://instagram.com/scalocadorapf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-400 hover:bg-pink-500/20 transition-colors"
              >
                <Instagram className="w-4 h-4 shrink-0" />
                <span className="font-semibold">Instagram: @scalocadorapf</span>
              </a>

              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300 sm:col-span-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Passo Fundo – RS</span>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="flex items-center gap-2 text-xs text-slate-500 pt-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>Última atualização: <strong>Agosto de 2026</strong></span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-900/90 text-xs">
          <Link
            href="/politica-de-privacidade"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-medium transition-colors"
          >
            <span>Ver página completa</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
