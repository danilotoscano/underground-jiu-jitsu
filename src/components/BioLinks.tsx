import React, { useState } from 'react';
import {
  CalendarCheck,
  Instagram,
  ArrowUpRight,
  ChevronRight,
  Copy,
  Check,
} from 'lucide-react';

interface BioLinksProps {
  onOpenWhatsApp: (preset?: string) => void;
  onPixCopied?: () => void;
}

export const BioLinks: React.FC<BioLinksProps> = ({
  onOpenWhatsApp,
  onPixCopied,
}) => {
  const [copiedPix, setCopiedPix] = useState(false);
  const pixKey = '85987181673';
  const formattedPixKey = '(85) 98718-1673';

  const googleReviewUrl =
    'https://search.google.com/local/writereview?placeid=ChIJWwbWwxvLwAcRSrVqrmgfVFA';
  const instagramUrl = 'https://www.instagram.com/ctjohngregoo';

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopiedPix(true);
    onPixCopied?.();
    setTimeout(() => {
      setCopiedPix(false);
    }, 2500);
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 space-y-3 select-none">
      {/* 1. Aula experimental */}
      <button
        onClick={() =>
          onOpenWhatsApp(
            'Olá! Gostaria de agendar minha Aula Experimental na Underground Jiu-Jitsu!'
          )
        }
        className="w-full py-3.5 sm:py-4 px-4 sm:px-5 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:brightness-110 text-neutral-950 font-bold shadow-md shadow-emerald-500/25 transition-all flex items-center justify-between group cursor-pointer active:scale-[0.98]"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-black/20 flex items-center justify-center shrink-0">
            <CalendarCheck className="w-5 h-5 text-neutral-950" />
          </div>
          <div className="text-left">
            <span className="block text-sm sm:text-base font-black tracking-wide uppercase leading-tight">
              Agende sua Aula Experimental
            </span>
          </div>
          <span className="text-[11px] sm:text-xs bg-black/25 text-neutral-950 px-2 py-0.5 rounded-md font-black uppercase shrink-0 ml-auto mr-1">
            Grátis
          </span>
        </div>
        <ChevronRight className="w-5 h-5 text-neutral-950 group-hover:translate-x-0.5 transition-transform shrink-0" />
      </button>

      {/* 2. Avaliacao google */}
      <a
        href={googleReviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-3.5 sm:py-4 px-4 sm:px-5 rounded-2xl bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-neutral-100 transition-all flex items-center justify-between group shadow-sm cursor-pointer active:scale-[0.98]"
      >
        <div className="flex items-center gap-3">
          {/* Colorful Google G icon */}
          <div className="w-8 h-8 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
          </div>
          <span className="text-sm sm:text-base font-semibold tracking-wide">
            Avaliação Google
          </span>
          <span className="text-xs sm:text-sm text-amber-400 font-bold ml-1">
            5.0 ★
          </span>
        </div>
        <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" />
      </a>

      {/* 3. pix - Click to copy immediately without opening any window */}
      <button
        onClick={handleCopyPix}
        className={`w-full py-3.5 sm:py-4 px-4 sm:px-5 rounded-2xl border transition-all flex items-center justify-between group shadow-sm cursor-pointer active:scale-[0.98] ${
          copiedPix
            ? 'bg-emerald-950/40 border-emerald-500 text-white shadow-emerald-500/20'
            : 'bg-neutral-900/90 hover:bg-neutral-800 border-neutral-800 hover:border-emerald-500/50 text-neutral-100'
        }`}
        title="Toque para copiar a chave PIX"
      >
        <div className="flex items-center gap-3">
          {/* Green dollar sign (cifrão) */}
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center font-bold text-sm text-emerald-400 shrink-0">
            {copiedPix ? <Check className="w-4 h-4 text-emerald-400" /> : '$'}
          </div>
          <div className="text-left">
            <span className="block text-sm sm:text-base font-semibold tracking-wide">
              {copiedPix ? 'Chave PIX Copiada!' : 'Chave PIX'}
            </span>
          </div>
          <span
            className={`text-xs px-2 py-0.5 rounded font-mono ml-auto mr-1 transition-colors ${
              copiedPix
                ? 'bg-emerald-500/20 text-emerald-300 font-bold'
                : 'text-neutral-400 bg-neutral-800'
            }`}
          >
            {copiedPix ? 'Copiada com sucesso!' : formattedPixKey}
          </span>
        </div>
        {copiedPix ? (
          <Check className="w-5 h-5 text-emerald-400 shrink-0 animate-in zoom-in-75 duration-150" />
        ) : (
          <Copy className="w-5 h-5 text-neutral-500 group-hover:text-emerald-400 group-hover:scale-105 transition-all shrink-0" />
        )}
      </button>

      {/* 4. instagram */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-3.5 sm:py-4 px-4 sm:px-5 rounded-2xl bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 hover:border-pink-500/50 text-neutral-100 transition-all flex items-center justify-between group shadow-sm cursor-pointer active:scale-[0.98]"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-pink-500/15 border border-pink-500/30 flex items-center justify-center shrink-0">
            <Instagram className="w-5 h-5 text-pink-400" />
          </div>
          <span className="text-sm sm:text-base font-semibold tracking-wide">
            Siga no Instagram
          </span>
          <span className="text-xs text-neutral-400">
            @ctjohngregoo
          </span>
        </div>
        <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-pink-400 group-hover:translate-x-0.5 transition-all shrink-0" />
      </a>
    </div>
  );
};
