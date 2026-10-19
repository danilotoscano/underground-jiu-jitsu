import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

interface InteractiveMapProps {
  className?: string;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ className = '' }) => {
  const address = 'Av. Juaci Sampaio Pontes, 843 - Padre Romualdo, Caucaia - CE, 61600-150';
  const mapsUrl = 'https://maps.app.goo.gl/Rh9Y5WB536vZ65Lb6';

  // Embed map with exact pin at Underground Jiu-Jitsu Caucaia
  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.4287849132176!2d-38.657577524185785!3d-3.716254743126442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74cb1bc3d6065b%3A0x50541fa8ae6ab54a!2sUnderground%20Jiu-Jitsu!5e0!3m2!1spt-BR!2sbr!4v1711200000000!5m2!1spt-BR!2sbr';

  return (
    <div className={`w-full max-w-md mx-auto p-4 sm:p-5 rounded-3xl bg-neutral-900/80 border border-neutral-800 shadow-xl backdrop-blur-sm select-none ${className}`}>
      {/* Header with Title */}
      <div className="flex items-center justify-between mb-3.5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
          </div>
          <div className="text-left">
            <h3 className="font-heading text-lg sm:text-xl font-bold tracking-wider text-white uppercase leading-tight">
              Nossa Localização
            </h3>
            <p className="text-xs text-neutral-400 mt-0.5">
              Toque no mapa para ver como chegar
            </p>
          </div>
        </div>

        <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
          Como Chegar
        </span>
      </div>

      {/* Clickable Map: Clicking opens Google Maps directly */}
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block w-full h-48 sm:h-56 rounded-2xl overflow-hidden border border-neutral-700/80 shadow-inner bg-neutral-950 group cursor-pointer transition-all hover:border-emerald-500/40"
        title="Toque no mapa para abrir rota no Google Maps"
      >
        <iframe
          title="Mapa de Localização Underground Jiu-Jitsu"
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'contrast(1.05) brightness(0.92)' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full pointer-events-none"
        />

        {/* Floating Pin Overlay badge */}
        <div className="absolute top-2.5 left-2.5 pointer-events-none z-10 bg-neutral-950/90 border border-neutral-700/90 rounded-lg px-2.5 py-1 shadow-lg backdrop-blur-sm flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
          <span className="text-[10px] font-bold text-white uppercase tracking-wider">
            Underground Jiu-Jitsu
          </span>
        </div>

        {/* Hover / Tap CTA Pill */}
        <div className="absolute bottom-2.5 right-2.5 z-10 bg-neutral-900/95 border border-neutral-700/90 group-hover:border-emerald-500/50 rounded-xl px-2.5 py-1.5 shadow-lg backdrop-blur-sm flex items-center gap-1.5 text-neutral-200 group-hover:text-white transition-colors">
          <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[11px] font-bold tracking-wide">Abrir no GPS</span>
        </div>
      </a>

      {/* Address Text directly below the map - Clickable without button styling */}
      <div className="mt-3.5 pt-3 border-t border-neutral-800/80 text-center">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs sm:text-sm font-semibold text-neutral-200 hover:text-emerald-400 leading-snug underline decoration-neutral-700 hover:decoration-emerald-400 underline-offset-4 transition-colors cursor-pointer"
          title="Toque para abrir rota no Google Maps"
        >
          {address}
        </a>
      </div>
    </div>
  );
};
