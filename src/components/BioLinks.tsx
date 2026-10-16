import React from 'react';
import {
  CalendarCheck,
  Star,
  Zap,
  Instagram,
  ArrowUpRight,
  ChevronRight,
} from 'lucide-react';

interface BioLinksProps {
  onOpenWhatsApp: (preset?: string) => void;
  onOpenPix: () => void;
}

export const BioLinks: React.FC<BioLinksProps> = ({
  onOpenWhatsApp,
  onOpenPix,
}) => {
  const googleReviewUrl =
    'https://search.google.com/local/writereview?placeid=ChIJWwbWwxvLwAcRSrVqrmgfVFA';
  const instagramUrl = 'https://www.instagram.com/ctjohngregoo';

  return (
    <div className="w-full max-w-sm mx-auto px-4 space-y-2.5 select-none">
      {/* 1. Aula experimental */}
      <button
        onClick={() =>
          onOpenWhatsApp(
            'Olá! Gostaria de agendar minha Aula Experimental na Underground Jiu-Jitsu!'
          )
        }
        className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:brightness-110 text-neutral-950 font-bold shadow-md shadow-emerald-500/20 transition-all flex items-center justify-between group cursor-pointer active:scale-[0.98]"
      >
        <div className="flex items-center gap-2.5">
          <CalendarCheck className="w-4 h-4 text-neutral-950" />
          <span className="text-xs sm:text-sm font-bold tracking-wide uppercase">
            Aula Experimental
          </span>
          <span className="text-[10px] bg-black/20 text-neutral-950 px-1.5 py-0.5 rounded font-extrabold uppercase">
            Grátis
          </span>
        </div>
        <ChevronRight className="w-4 h-4 text-neutral-950/80 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* 2. Avaliacao google */}
      <a
        href={googleReviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-2.5 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-amber-400/50 text-neutral-100 transition-all flex items-center justify-between group shadow-sm cursor-pointer active:scale-[0.98]"
      >
        <div className="flex items-center gap-2.5">
          <div className="flex items-center text-amber-400">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          </div>
          <span className="text-xs sm:text-sm font-semibold tracking-wide">
            Avaliação Google
          </span>
          <span className="text-[11px] text-amber-400 font-bold ml-0.5">
            5.0 ★
          </span>
        </div>
        <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
      </a>

      {/* 3. pix */}
      <button
        onClick={onOpenPix}
        className="w-full py-2.5 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-emerald-500/50 text-neutral-100 transition-all flex items-center justify-between group shadow-sm cursor-pointer active:scale-[0.98]"
      >
        <div className="flex items-center gap-2.5">
          <Zap className="w-4 h-4 text-emerald-400" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide">
            Chave PIX
          </span>
          <span className="text-[10px] text-neutral-400 bg-neutral-800 px-1.5 py-0.5 rounded font-mono">
            Copiar / QR Code
          </span>
        </div>
        <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* 4. instagram */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-2.5 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-pink-500/50 text-neutral-100 transition-all flex items-center justify-between group shadow-sm cursor-pointer active:scale-[0.98]"
      >
        <div className="flex items-center gap-2.5">
          <Instagram className="w-4 h-4 text-pink-400" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide">
            Instagram
          </span>
          <span className="text-[10px] text-neutral-400">
            @ctjohngregoo
          </span>
        </div>
        <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-pink-400 group-hover:translate-x-0.5 transition-all" />
      </a>
    </div>
  );
};
