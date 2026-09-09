import { StaticImageData } from 'next/image';
import hondaCg160Img from '@/src/assets/images/honda_fan_160_user_1786141408440.jpg';
import yamahaStreetImg from '@/src/assets/images/yamaha_street_red_1786137303307.jpg';
import hondaScooterImg from '@/src/assets/images/honda_scooter_white_1786137326718.jpg';
import yamahaScooterImg from '@/src/assets/images/yamaha_scooter_blue_1786137315434.jpg';

export interface Moto {
  id: string;
  name: string;
  brand: string;
  category: 'STREET' | 'SCOOTER URBANA';
  engine: string;
  tankSize: string;
  weeklyPrice: number;
  monthlyWeeklyPrice: number;
  dailyPrice: number;
  deposit: number;
  image: string | StaticImageData;
  badge?: string;
  available?: boolean;
  popular?: boolean;
  features: string[];
  specs: {
    brakes: string;
    start: string;
    weight: string;
    trunkCapacity: string;
  };
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Geral' | 'Contrato' | 'Manutenção' | 'Pagamento';
}

export const MOTOS_DATA: Moto[] = [
  {
    id: 'yamaha-street',
    name: 'Yamaha Factor 150',
    brand: 'Yamaha',
    category: 'STREET',
    engine: '149 cc - Flex',
    tankSize: '15.7 Litros',
    weeklyPrice: 273,
    monthlyWeeklyPrice: 273,
    dailyPrice: 39,
    deposit: 500,
    image: yamahaStreetImg,
    popular: true,
    available: true,
    badge: 'Disponível',
    features: [
      'Painel digital completo com função ECO',
      'Assento ergonômico e ótima estabilidade',
      'Excelente dirigibilidade e conforto',
      'Capacete disponível para locação'
    ],
    specs: {
      brakes: 'Disco Dianteiro / Tambor Traseiro',
      start: 'Elétrica',
      weight: '125 kg',
      trunkCapacity: 'Pronta para suporte de carga'
    }
  },
  {
    id: 'honda-street',
    name: 'Honda CG 160',
    brand: 'Honda',
    category: 'STREET',
    engine: '162,7 cc - Flex',
    tankSize: '16.1 Litros',
    weeklyPrice: 287,
    monthlyWeeklyPrice: 287,
    dailyPrice: 41,
    deposit: 500,
    image: hondaCg160Img,
    popular: false,
    available: false,
    features: [
      'Novo Design & Tecnologia',
      'Injeção Eletrônica PGM-FI',
      'Freios CBS com acionamento combinado',
      'Capacete disponível para locação'
    ],
    specs: {
      brakes: 'Disco Dianteiro / Tambor Traseiro (CBS)',
      start: 'Elétrica',
      weight: '116 kg',
      trunkCapacity: 'Suporta Suporte para Baú'
    }
  },
  {
    id: 'honda-scooter',
    name: 'Honda PCX',
    brand: 'Honda',
    category: 'SCOOTER URBANA',
    engine: '124,9 cc - Flex',
    tankSize: '8.0 Litros',
    weeklyPrice: 273,
    monthlyWeeklyPrice: 273,
    dailyPrice: 39,
    deposit: 500,
    image: hondaScooterImg,
    popular: false,
    features: [
      'Câmbio automático V-MATIC (sem embreagem)',
      'Perfeita e prática para passeio e rotina urbana',
      'Porta-objetos amplo interno sob o banco',
      'Capacete disponível para locação'
    ],
    specs: {
      brakes: 'CBS Integrado',
      start: 'Elétrica',
      weight: '108 kg',
      trunkCapacity: 'Espaço interno porta-capacete'
    }
  },
  {
    id: 'yamaha-scooter',
    name: 'Yamaha NMAX 160 ABS',
    brand: 'Yamaha',
    category: 'SCOOTER URBANA',
    engine: '155 cc - Gasolina',
    tankSize: '7.1 Litros',
    weeklyPrice: 273,
    monthlyWeeklyPrice: 273,
    dailyPrice: 39,
    deposit: 500,
    image: yamahaScooterImg,
    popular: true,
    features: [
      'Sistema de freios ABS nas duas rodas',
      'Transmissão automática CVT ideal para passeio',
      'Iluminação Full LED e chave presencial Smart Key',
      'Capacete disponível para locação'
    ],
    specs: {
      brakes: 'Disco nas duas rodas com ABS',
      start: 'Elétrica Smart Key',
      weight: '131 kg',
      trunkCapacity: 'Porta-objetos amplo de 25 Litros'
    }
  }
];

export const BENEFITS_DATA: Benefit[] = [
  {
    id: 'b1',
    title: 'Manutenção 100% Inclusa',
    description: 'Revisões periódicas, pastilhas de freio e desgaste natural de pneus inclusos no contrato.',
    iconName: 'Wrench'
  },
  {
    id: 'b2',
    title: 'Suporte & Socorro 24 Horas',
    description: 'Ocorreu um imprevisto? Nossa equipe de apoio realiza o atendimento rápido ou a substituição da moto.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'b3',
    title: 'Capacete Disponível para Locação',
    description: 'Disponibilizamos capacetes com certificação INMETRO higienizados para locação junto com sua moto, com valores adicionais.',
    iconName: 'HardHat'
  },
  {
    id: 'b4',
    title: 'Seguro Contra Terceiros',
    description: 'Tranquilidade total para o seu dia a dia e passeios com proteção ativa contra imprevistos.',
    iconName: 'Shield'
  },
  {
    id: 'b5',
    title: 'Análise Descomplicada',
    description: 'Sem consulta restritiva ao SPC/Serasa. Apenas CNH válida e comprovante de residência.',
    iconName: 'FileCheck'
  },
  {
    id: 'b6',
    title: 'Quilometragem Flexível',
    description: 'Planos ajustados à sua rotina, permitindo rodar para passeio, lazer ou deslocamento pessoal.',
    iconName: 'Gauge'
  }
];

export const STEPS_DATA = [
  {
    step: '01',
    title: 'Escolha o Modelo',
    subtitle: 'Navegue pelo nosso catálogo (Street ou Scooter Urbana ideal para passeio) e selecione sua moto.'
  },
  {
    step: '02',
    title: 'Envio Rápido via WhatsApp',
    subtitle: 'Envie foto da sua CNH e comprovante pelo WhatsApp (54) 99613-9870. Nossa análise leva apenas alguns minutos.'
  },
  {
    step: '03',
    title: 'Contrato Digital Transparente',
    subtitle: 'Sem pegadinhas ou taxas ocultas. Assine pelo celular com total segurança.'
  },
  {
    step: '04',
    title: 'Retire e Comece a Rodar em Passo Fundo RS',
    subtitle: 'Pegue a moto revisada e pronta para rodar na nossa unidade em Passo Fundo RS.'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'f1',
    category: 'Geral',
    question: 'Quais documentos são necessários para alugar uma moto na SCA Locadora de Motos?',
    answer: 'Você precisa de CNH válida (categoria A ou AB, provisória ou definitiva), comprovante de residência atualizado em seu nome ou de parente de 1º grau, e cadastro no WhatsApp.'
  },
  {
    id: 'f-poucos-dias',
    category: 'Contrato',
    question: 'Posso locar uma moto por poucos dias?',
    answer: 'Sim, poderá locar por no mínimo 3 dias, consulte valores com nosso atendimento.'
  },
  {
    id: 'f2',
    category: 'Pagamento',
    question: 'Como funciona o pagamento semanal e o valor do caução?',
    answer: 'Os planos semanais são a partir de R$ 273,00 por semana (Yamaha Factor 150 por R$ 273,00/semana e Honda CG 160 por R$ 287,00/semana). O valor do caução é R$ 500,00, devolvido ao final do contrato após vistoria.'
  },
  {
    id: 'f3',
    category: 'Manutenção',
    question: 'Como faço quando a moto precisar de revisão ou manutenção?',
    answer: 'Todas as revisões periódicas e manutenções preventivas são agendadas sem nenhum custo adicional para você em nossa oficina credenciada da SCA Locadora de Motos.'
  },
  {
    id: 'f4',
    category: 'Contrato',
    question: 'Capacete acompanha o aluguel da moto?',
    answer: 'Não, mas disponibilizamos capacete para locação com custo adicional. Consulte valores e disponibilidade!'
  },
  {
    id: 'f5',
    category: 'Geral',
    question: 'Onde fica a SCA Locadora de Motos?',
    answer: 'Estamos localizados na cidade de Passo Fundo RS. Atendemos você com agilidade e retirada imediata!'
  },
  {
    id: 'f6',
    category: 'Contrato',
    question: 'Existe fidelidade mínima no contrato?',
    answer: 'Temos planos flexíveis a partir de R$ 273,00/semana sem burocracia.'
  }
];
