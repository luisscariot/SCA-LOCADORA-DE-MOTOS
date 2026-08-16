import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Lock, FileText, CheckCircle2, Phone, Instagram, MapPin, Calendar } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppFloatingButton } from '@/components/WhatsAppFloatingButton';

export const metadata: Metadata = {
  title: 'Política de Privacidade e Proteção de Dados | SCA Locadora de Motos',
  description: 'Conheça a Política de Privacidade e proteção de dados da SCA Locadora de Motos em Passo Fundo RS, em conformidade com as normas legais e a LGPD.',
};

export default function PoliticaPrivacidadePage() {
  const whatsappNumber = '5554996139870';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de tirar dúvidas sobre a Política de Privacidade e proteção de dados da SCA Locadora de Motos.')}`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Header whatsappNumber={whatsappNumber} />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para o início</span>
          </Link>
        </div>

        {/* Header Title */}
        <div className="border-b border-slate-800 pb-8 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Transparência e Segurança</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Política de Privacidade e Proteção de Dados
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            SCA Locadora de Motos • Passo Fundo – RS
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xl space-y-8 text-slate-300 leading-relaxed">
          {/* Main Statement */}
          <div className="p-5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-100 text-base sm:text-lg font-medium leading-relaxed">
            A <strong>SCA Locadora de Motos</strong> valoriza a privacidade e a proteção dos dados pessoais de seus clientes e visitantes.
          </div>

          {/* 1. Finalidade */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-amber-400 shrink-0" />
              <span>1. Coleta e Finalidade dos Dados</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 pl-7">
              As informações coletadas por meio de formulários de contato, WhatsApp, telefone ou outros canais de atendimento são utilizadas exclusivamente para fins de atendimento, locação de veículos, elaboração de contratos, suporte ao cliente e comunicação relacionada aos serviços oferecidos.
            </p>
          </div>

          {/* 2. Compartilhamento */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>2. Não Compartilhamento Comercial de Dados</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 pl-7">
              A <strong>SCA Locadora de Motos não vende, aluga ou compartilha dados pessoais com terceiros para fins comerciais</strong>. As informações poderão ser compartilhadas apenas quando estritamente necessário para cumprimento de obrigações legais ou regulatórias.
            </p>
          </div>

          {/* 3. Segurança */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
              <Lock className="w-5 h-5 text-blue-400 shrink-0" />
              <span>3. Medidas de Segurança</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 pl-7">
              Adotamos medidas razoáveis e adequadas de segurança para proteger os dados pessoais contra acesso não autorizado, perda, alteração ou divulgação indevida.
            </p>
          </div>

          {/* 4. Consentimento */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
              <span>4. Consentimento do Usuário</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 pl-7">
              Ao utilizar nossos serviços, o usuário concorda com a coleta e utilização das informações conforme descrito nesta Política de Privacidade.
            </p>
          </div>

          {/* Contact Details */}
          <div className="mt-10 p-6 rounded-xl bg-slate-950/80 border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Canal de Atendimento e Dúvidas sobre Privacidade
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Para dúvidas sobre privacidade ou qualquer solicitação relacionada aos seus dados pessoais, entre em contato:
            </p>

            <div className="space-y-2 text-sm text-slate-200">
              <p className="font-semibold text-white">SCA Locadora de Motos</p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: </span>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold hover:underline">
                  (54) 99613-9870
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Instagram: </span>
                <a href="https://instagram.com/scalocadorapf" target="_blank" rel="noopener noreferrer" className="text-pink-400 font-bold hover:underline">
                  @scalocadorapf
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Passo Fundo – RS</span>
              </p>
            </div>
          </div>

          {/* Footer of Policy */}
          <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Última atualização: <strong>Agosto de 2026</strong></span>
            </div>
            <Link
              href="/"
              className="text-amber-400 hover:underline font-medium"
            >
              Voltar ao site
            </Link>
          </div>
        </div>
      </main>

      <Footer whatsappNumber={whatsappNumber} />
      <WhatsAppFloatingButton whatsappNumber={whatsappNumber} />
    </div>
  );
}
