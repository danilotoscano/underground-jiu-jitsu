import React from 'react';
import {
  MessageCircle,
  CalendarCheck,
  Instagram,
  MapPin,
  Star,
  Zap,
  Phone,
  Share2,
  ExternalLink,
  ChevronRight,
  Shield,
  ArrowUpRight,
} from 'lucide-react';

interface BioLinksProps {
  onOpenWhatsApp: (preset?: string) => void;
  onOpenPix: () => void;
  onScrollToMap: () => void;
  onShare: () => void;
}

export const BioLinks: React.FC<BioLinksProps> = ({
  onOpenWhatsApp,
  onOpenPix,
  onScrollToMap,
  onShare,
}) => {
  const instagramUrl = 'https://www.instagram.com/ctjohngregoo';
  const googleReviewUrl = 'https://search.google.com/local/writereview?placeid=ChIJWwbWwxvLwAcRSrVqrmgfVFA';
  const googleMapsUrl = 'https://maps.app.goo.gl/Rh9Y5WB536vZ65Lb6';

  return (
    <div className="w-full max-w-md mx-auto px-4 space-y-3 select-none">
      {/* 1. HERO CTA: Agendar Aula Experimental */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500 group-hover:duration-200 animate-tilt"></div>
        <button
          onClick={() => onOpenWhatsApp('Olá! Gostaria de agendar minha Aula Experimental na Underground Jiu-Jitsu!')}
          className="relative w-full p-4 rounded-2xl bg-neutral-900 border border-neutral-700/80 hover:border-emerald-500/80 transition-all flex items-center justify-between shadow-xl cursor-pointer active:scale-[0.98]"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-emerald-500 text-neutral-950 flex items-center justify-center font-bold shadow-lg shadow-emerald-500/30">
              <CalendarCheck className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="font-heading text-lg sm:text-xl font-bold tracking-wider text-white uppercase leading-none">
                  Aula Experimental
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  Gratuita
                </span>
              </div>
              <p className="text-xs text-neutral-300 mt-1">
                Com agendamento • Garanta sua vaga no tatame
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all shrink-0 ml-1" />
        </button>
      </div>

      {/* 2. WhatsApp Atendimento Rápido */}
      <button
        onClick={() => onOpenWhatsApp()}
        className="w-full p-4 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 border border-neutral-800 hover:border-emerald-500/50 hover:bg-neutral-850 transition-all flex items-center justify-between group shadow-lg cursor-pointer active:scale-[0.98]"
      >
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shadow-inner">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div className="text-left">
            <h4 className="font-bold text-sm text-white group-hover:text-emerald-400 transition-colors">
              Fale Conosco no WhatsApp
            </h4>
            <p className="text-xs text-neutral-400 mt-0.5">
              (85) 98718-1673 • Atendimento rápido
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
          <span className="hidden sm:inline">Online</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
        </div>
      </button>

      {/* 3. Instagram Oficial */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-pink-500/50 hover:bg-neutral-850 transition-all flex items-center justify-between group shadow-lg cursor-pointer active:scale-[0.98]"
      >
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-md">
            <Instagram className="w-5 h-5" />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <h4 className="font-bold text-sm text-white group-hover:text-pink-400 transition-colors">
                Instagram Oficial
              </h4>
              <span className="text-[10px] bg-pink-500/20 text-pink-300 border border-pink-500/30 px-1.5 py-0.2 rounded font-semibold">
                @ctjohngregoo
              </span>
            </div>
            <p className="text-xs text-neutral-400 mt-0.5">
              Treinos diários, fotos, vídeos e novidades
            </p>
          </div>
        </div>
        <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-all" />
      </a>

      {/* 4. Localização & Como Chegar (Google Maps) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <button
          onClick={onScrollToMap}
          className="p-3.5 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-blue-500/50 hover:bg-neutral-850 transition-all flex items-center justify-between group shadow-md cursor-pointer text-left active:scale-[0.98]"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-white group-hover:text-blue-400 transition-colors">
                Como Chegar
              </h4>
              <p className="text-[11px] text-neutral-400 leading-tight">
                Mapa interativo
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-white" />
        </button>

        {/* 5. Chave PIX */}
        <button
          onClick={onOpenPix}
          className="p-3.5 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-emerald-500/50 hover:bg-neutral-850 transition-all flex items-center justify-between group shadow-md cursor-pointer text-left active:scale-[0.98]"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-white group-hover:text-emerald-400 transition-colors">
                Chave PIX
              </h4>
              <p className="text-[11px] text-neutral-400 leading-tight">
                Copiar chave / QR Code
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-white" />
        </button>
      </div>

      {/* 6. Avaliação do Google (5 Estrelas) */}
      <a
        href={googleReviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-amber-400/60 hover:bg-neutral-850 transition-all flex items-center justify-between group shadow-lg cursor-pointer active:scale-[0.98]"
      >
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-amber-400/15 border border-amber-400/30 text-amber-400 flex items-center justify-center shadow-inner">
            <Star className="w-5 h-5 fill-amber-400" />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                Avaliação no Google
              </h4>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <p className="text-xs text-neutral-400 mt-0.5">
              Deixe seu feedback e nos ajude a crescer no Google
            </p>
          </div>
        </div>
        <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 transition-all" />
      </a>

      {/* Quick Utility Row: Compartilhar biosite & Ligar */}
      <div className="pt-1 flex items-center justify-center gap-3">
        <button
          onClick={onShare}
          className="flex-1 py-2.5 px-3 rounded-xl bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white text-xs font-medium flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <Share2 className="w-3.5 h-3.5 text-neutral-400" />
          <span>Compartilhar Biosite</span>
        </button>

        <a
          href="tel:5585987181673"
          className="flex-1 py-2.5 px-3 rounded-xl bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white text-xs font-medium flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <Phone className="w-3.5 h-3.5 text-emerald-400" />
          <span>Ligar Direto</span>
        </a>
      </div>
    </div>
  );
};
