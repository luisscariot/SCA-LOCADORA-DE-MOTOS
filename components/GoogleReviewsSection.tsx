'use client';

import React from 'react';
import { Star, MessageSquare, CheckCircle2, ThumbsUp } from 'lucide-react';
import { ScaLogo } from './ScaLogo';

interface Review {
  id: string;
  author: string;
  avatarBg: string;
  initials: string;
  timeAgo: string;
  rating: number;
  statsText: string;
  comment: string;
  ownerReply?: {
    author: string;
    timeAgo: string;
    text: string;
  };
}

const GOOGLE_REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Adriana F Hartmann',
    avatarBg: 'bg-pink-700',
    initials: 'A',
    timeAgo: 'Há 29 semanas',
    rating: 5,
    statsText: '4 avaliações',
    comment: 'Muito boa!! O Luis foi muito gentil!! Só elogios à moto e ao atendimento!!! Se um dia voltar a alugar, com certeza, será com ele!!!',
    ownerReply: {
      author: 'SCA Locadora de Motos',
      timeAgo: 'Há 29 semanas',
      text: 'SCA Locadora de motos, agradece a preferência, Sempre dispostos a bem atender as necessidades de todos.'
    }
  },
  {
    id: '2',
    author: 'Paulo Santos',
    avatarBg: 'bg-amber-600',
    initials: 'P',
    timeAgo: 'Há 29 semanas',
    rating: 5,
    statsText: '3 avaliações',
    comment: 'Super recomendo, otimo atendimento do começo ao fim da locação. Moto econômica e de extrema qualidade!',
    ownerReply: {
      author: 'SCA Locadora de Motos',
      timeAgo: 'Há 29 semanas',
      text: 'SCA Locadora de motos agradece a preferência e parceria!'
    }
  },
  {
    id: '3',
    author: 'Eduardo Rodrigues',
    avatarBg: 'bg-blue-600',
    initials: 'E',
    timeAgo: 'Há 8 semanas',
    rating: 5,
    statsText: '1 avaliação',
    comment: 'Recomendo, fui muito bem atendido'
  },
  {
    id: '4',
    author: 'Vair Papas',
    avatarBg: 'bg-emerald-600',
    initials: 'V',
    timeAgo: 'Há 10 semanas',
    rating: 5,
    statsText: '3 avaliações',
    comment: 'Excelente atendimento! Trabalho como motoboy e precisei deixar minha moto na oficina por 3 dias. Para não ficar parado, aluguei e resolvi tudo rapidamente!'
  },
  {
    id: '5',
    author: 'Allisson Cargnelutti',
    avatarBg: 'bg-slate-700',
    initials: 'A',
    timeAgo: 'Há 11 semanas',
    rating: 5,
    statsText: '1 avaliação',
    comment: 'Ótimo atendimento Motos muito boas Me ajudou quando mais precisava ✔️'
  },
  {
    id: '6',
    author: 'Henrique Ziegler',
    avatarBg: 'bg-indigo-600',
    initials: 'H',
    timeAgo: 'Há 11 semanas',
    rating: 5,
    statsText: '1 avaliação',
    comment: 'Bom atendimento, agilidade comprometimento tudo ok.'
  },
  {
    id: '7',
    author: 'Iury Laimer Bueno',
    avatarBg: 'bg-cyan-700',
    initials: 'I',
    timeAgo: 'Há 12 semanas',
    rating: 5,
    statsText: '2 avaliações',
    comment: 'Atendimento de primeira, moto impecável e processo super ágil.'
  },
  {
    id: '8',
    author: 'alessandro mateus',
    avatarBg: 'bg-[teal-700]',
    initials: 'A',
    timeAgo: 'Há 15 semanas',
    rating: 5,
    statsText: '1 avaliação',
    comment: 'Ótima locadora, aprovou super rápido e a moto é excelente!'
  },
  {
    id: '9',
    author: 'Matheus Marques',
    avatarBg: 'bg-blue-500',
    initials: 'M',
    timeAgo: 'Há 35 semanas',
    rating: 5,
    statsText: '1 avaliação',
    comment: 'Atendimento nota dez, motos revisadas e novas parabéns'
  },
  {
    id: '10',
    author: 'Felipe Zoehler',
    avatarBg: 'bg-slate-700',
    initials: 'F',
    timeAgo: 'Há 40 semanas',
    rating: 5,
    statsText: '5 avaliações',
    comment: 'Ótimo atendimento, fácil contratação e preços justos. Recomendo. Obg Luis.'
  },
  {
    id: '11',
    author: 'Alexandre Da Silva',
    avatarBg: 'bg-amber-700',
    initials: 'A',
    timeAgo: 'Há 40 semanas',
    rating: 5,
    statsText: '2 avaliações',
    comment: 'Ótimo serviço prestado do começo ao fim, profissionalismo 100%'
  },
  {
    id: '12',
    author: 'Vitoria emanuele Da silva amorim',
    avatarBg: 'bg-rose-600',
    initials: 'V',
    timeAgo: 'Há 51 semanas',
    rating: 5,
    statsText: '2 avaliações',
    comment: 'Minha experiência com a empresa foi ótima tive total apoio'
  },
  {
    id: '13',
    author: 'Guilherme Maximo',
    avatarBg: 'bg-pink-600',
    initials: 'G',
    timeAgo: '17 de mai. de 2025',
    rating: 5,
    statsText: '1 avaliação',
    comment: 'Excelente atendimento e compromisso com o cliente.'
  },
  {
    id: '14',
    author: 'Luís Eduardo Vieira',
    avatarBg: 'bg-purple-700',
    initials: 'L',
    timeAgo: '17 de mai. de 2025',
    rating: 5,
    statsText: '2 avaliações',
    comment: 'Ótimas motos, atendimento e comprometimento da locadora, recomendo.'
  },
  {
    id: '15',
    author: 'jose soares',
    avatarBg: 'bg-teal-700',
    initials: 'J',
    timeAgo: '31 de mar. de 2025',
    rating: 5,
    statsText: '1 avaliação',
    comment: 'Excelente atendimento e atenção e a motocicleta praticamente nova ,sem contar na praticidade em fazer a locação tudo dentro dos padrões legais.'
  },
  {
    id: '16',
    author: 'Mateus Diasmoreira',
    avatarBg: 'bg-purple-600',
    initials: 'M',
    timeAgo: '28 de mar. de 2025',
    rating: 5,
    statsText: '1 avaliação',
    comment: 'ótimas motocicletas e atendimento de qualidade e confiança!'
  },
  {
    id: '17',
    author: 'Eder Rosa de Abreu',
    avatarBg: 'bg-indigo-600',
    initials: 'E',
    timeAgo: '11 de mar. de 2025',
    rating: 5,
    statsText: '1 avaliação',
    comment: 'Recomendo SCA Locadora de motos'
  }
];

export const GoogleReviewsSection: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-16 lg:py-24 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-4 h-4" />
            <span>Avaliações Reais no Google</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            O que Nossos Clientes Dizem
          </h2>

          <p className="text-slate-400 text-base">
            Depoimentos e avaliações de quem aluga motos na <strong className="text-white">SCA Locadora de Motos em Passo Fundo RS</strong>.
          </p>

          {/* Google Score Badge */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <div className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 shadow-md">
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span className="font-bold text-white text-sm">5.0</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs text-slate-400 font-medium">no Google</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {GOOGLE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-slate-950 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors shadow-lg"
            >
              <div className="space-y-3">
                {/* User Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${review.avatarBg} text-white font-bold flex items-center justify-center shrink-0 text-sm shadow-inner`}>
                      {review.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm leading-snug flex items-center gap-1.5">
                        {review.author}
                      </h4>
                      <p className="text-[11px] text-slate-400">{review.statsText}</p>
                    </div>
                  </div>

                  <span className="text-[11px] text-slate-500 shrink-0 font-medium">{review.timeAgo}</span>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  &quot;{review.comment}&quot;
                </p>
              </div>

              {/* Owner Reply if available */}
              {review.ownerReply && (
                <div className="pt-3 border-t border-slate-900 bg-slate-900/60 p-3.5 rounded-xl space-y-1.5 mt-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2">
                      <div className="p-1 bg-[#1A204C] rounded border border-amber-400/40">
                        <ScaLogo className="h-4" />
                      </div>
                      <span className="font-bold text-amber-400">{review.ownerReply.author}</span>
                      <span className="text-[10px] bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded font-semibold">Proprietário</span>
                    </div>
                    <span className="text-slate-500">{review.ownerReply.timeAgo}</span>
                  </div>
                  <p className="text-[11px] text-slate-300 italic pl-1">
                    {review.ownerReply.text}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center pt-4">
          <div className="inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-950 px-4 py-2 rounded-xl border border-slate-800">
            <ThumbsUp className="w-4 h-4 text-emerald-400" />
            <span>Avaliações públicas extraídas da página oficial da SCA Locadora de Motos no Google</span>
          </div>
        </div>

      </div>
    </section>
  );
};
