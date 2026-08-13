import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white px-4 text-center">
      <h1 className="text-6xl font-black text-amber-400 mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-2">Página não encontrada</h2>
      <p className="text-slate-400 max-w-md mb-8">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 text-slate-950 font-bold rounded-xl hover:bg-amber-300 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Voltar para a página inicial
      </Link>
    </div>
  );
}
