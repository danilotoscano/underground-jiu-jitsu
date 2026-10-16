import React, { useState } from 'react';
import { MapPin, Navigation, Compass, Copy, Check, ExternalLink, Car } from 'lucide-react';

interface InteractiveMapProps {
  onCopyAddress: () => void;
  copied: boolean;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ onCopyAddress, copied }) => {
  const address = 'Av. Juaci Sampaio Pontes, 843 - Padre Romualdo, Caucaia - CE, 61600-150';
  const mapsUrl = 'https://maps.app.goo.gl/Rh9Y5WB536vZ65Lb6';
  const wazeUrl = 'https://waze.com/ul?q=Av.+Juaci+Sampaio+Pontes,+843+-+Padre+Romualdo,+Caucaia+-+CE';
  const encodedAddress = encodeURIComponent(address);

  // We embed Google Maps search view centered exactly on this location
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="w-full bg-neutral-900/90 rounded-2xl border border-neutral-800 p-4 sm:p-5 shadow-xl backdrop-blur-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-3.5">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading text-lg sm:text-xl font-bold tracking-wider text-white uppercase leading-none">
              Como Chegar • Localização Exata
            </h3>
            <p className="text-[11px] sm:text-xs text-neutral-400 mt-0.5">
              Padre Romualdo, Caucaia - Ceará
            </p>
          </div>
        </div>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 px-2.5 py-1.5 rounded-lg border border-neutral-700 transition-colors"
        >
          <span>Abrir App</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Interactive Google Maps Frame - Compact size */}
      <div className="relative w-full h-36 sm:h-44 rounded-xl overflow-hidden border border-neutral-700/80 shadow-inner bg-neutral-950">
        <iframe
          title="Mapa de Localização Underground Jiu-Jitsu"
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'contrast(1.05) brightness(0.92)' }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />

        {/* Floating Pin Overlay badge */}
        <div className="absolute top-2 left-2 pointer-events-none z-10 bg-neutral-950/90 border border-neutral-700/90 rounded-lg px-2.5 py-1 shadow-lg backdrop-blur-sm flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
          <span className="text-[10px] font-bold text-white uppercase tracking-wider">
            Underground Jiu-Jitsu
          </span>
        </div>
      </div>

      {/* Address Text Box with 1-Click Copy */}
      <div className="mt-3.5 p-3 rounded-xl bg-neutral-950/70 border border-neutral-800 flex items-center justify-between gap-3">
        <div className="text-left text-xs sm:text-sm text-neutral-300">
          <p className="font-medium text-white">{address}</p>
          <p className="text-[11px] text-neutral-400 mt-0.5">
            Fácil acesso, próximo a vias principais com estacionamento em frente
          </p>
        </div>

        <button
          onClick={onCopyAddress}
          className="shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-neutral-200 hover:text-white border border-neutral-700 transition-all cursor-pointer active:scale-95"
          title="Copiar endereço completo"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-neutral-400" />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>

      {/* Direct GPS Action Buttons (Maps, Waze, Uber) */}
      <div className="grid grid-cols-2 gap-2 mt-3">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-neutral-800/80 hover:bg-neutral-700/90 text-neutral-200 hover:text-white text-xs font-semibold border border-neutral-700 transition-all active:scale-98 shadow-sm"
        >
          <Navigation className="w-3.5 h-3.5 text-blue-400" />
          <span>Rota Google Maps</span>
        </a>

        <a
          href={wazeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-neutral-800/80 hover:bg-neutral-700/90 text-neutral-200 hover:text-white text-xs font-semibold border border-neutral-700 transition-all active:scale-98 shadow-sm"
        >
          <Car className="w-3.5 h-3.5 text-cyan-400" />
          <span>Rota via Waze</span>
        </a>
      </div>
    </div>
  );
};
