import React, { useState } from 'react';
import { MapPin, Phone, Instagram, Sparkles, Eye, ShieldCheck, Flame } from 'lucide-react';

interface CoverBannerProps {
  onOpenStorefrontModal?: () => void;
}

export const GymCoverBanner: React.FC<CoverBannerProps> = ({ onOpenStorefrontModal }) => {
  const [lightsOn, setLightsOn] = useState(true);

  return (
    <div className="relative w-full overflow-hidden bg-neutral-950 border-b border-neutral-800/80">
      {/* Top ambient status bar */}
      <div className="absolute top-2 left-0 right-0 z-20 flex items-center justify-between px-4 text-[11px] font-medium text-neutral-400">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 backdrop-blur-md border border-neutral-800">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-neutral-200">Caucaia - CE</span>
        </div>

        <div className="inline-flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 backdrop-blur-md border border-neutral-800">
          <Flame className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
          <span className="text-neutral-200">Tatame Aberto • 07h às 22h</span>
        </div>
      </div>

      {/* Atmospheric Facade Architecture - Night Storefront */}
      <div className="relative h-64 sm:h-72 md:h-80 w-full flex flex-col justify-between p-4 pt-10 select-none overflow-hidden">
        {/* Concrete textured wall background */}
        <div 
          className="absolute inset-0 bg-neutral-950 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950 opacity-95"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 10%, rgba(255, 255, 255, 0.08) 0%, transparent 60%),
                              linear-gradient(to bottom, #18181b 0%, #09090b 60%, #050505 100%)`
          }}
        />

        {/* Textured concrete micro-pattern */}
        <div 
          className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />

        {/* Realistic Gooseneck Overhead Spotlights (as seen in photo) */}
        <div className="relative z-10 w-full max-w-md mx-auto flex justify-around px-8 pt-1">
          {/* Left Lamp Arm & Fixture */}
          <div className="relative flex flex-col items-center">
            <div className="w-1.5 h-7 bg-neutral-600 rounded-t shadow"></div>
            <div className="w-7 h-3 bg-neutral-300 rounded-full shadow-lg border border-neutral-700"></div>
            {lightsOn && (
              <div className="absolute top-8 w-24 sm:w-32 h-36 bg-gradient-to-b from-amber-100/35 via-amber-200/10 to-transparent blur-md transform -translate-x-1/2 left-1/2 pointer-events-none rounded-b-full"></div>
            )}
          </div>

          {/* Right Lamp Arm & Fixture */}
          <div className="relative flex flex-col items-center">
            <div className="w-1.5 h-7 bg-neutral-600 rounded-t shadow"></div>
            <div className="w-7 h-3 bg-neutral-300 rounded-full shadow-lg border border-neutral-700"></div>
            {lightsOn && (
              <div className="absolute top-8 w-24 sm:w-32 h-36 bg-gradient-to-b from-amber-100/35 via-amber-200/10 to-transparent blur-md transform -translate-x-1/2 left-1/2 pointer-events-none rounded-b-full"></div>
            )}
          </div>
        </div>

        {/* Illuminated Signboard (Authentic reproduction of the exterior sign in image.png) */}
        <div className="relative z-10 w-full max-w-sm sm:max-w-md mx-auto my-auto">
          <div className={`relative rounded-xl border-2 transition-all duration-500 overflow-hidden shadow-2xl ${
            lightsOn 
              ? 'border-neutral-700 bg-neutral-950/95 shadow-[0_10px_35px_rgba(0,0,0,0.9),0_0_20px_rgba(255,255,255,0.08)]' 
              : 'border-neutral-800 bg-neutral-950/90'
          }`}>
            {/* Top Lightbar Reflection */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

            <div className="p-3.5 sm:p-4 text-center">
              {/* Top crests & Center Title */}
              <div className="flex items-center justify-between gap-2">
                {/* Left circular badge (John Grego) */}
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-neutral-600/80 bg-neutral-900/90 flex flex-col items-center justify-center p-0.5 shadow-inner">
                  <span className="text-[7px] sm:text-[8px] font-bold tracking-tight text-neutral-400">JOHN</span>
                  <span className="text-[8px] sm:text-[9px] font-black text-white">GREGO</span>
                  <span className="text-[6px] text-neutral-500 uppercase">CT BJJ</span>
                </div>

                {/* Center Big Bold Name */}
                <div className="flex-1 flex flex-col items-center">
                  <h1 className="font-heading text-2xl sm:text-3xl font-black tracking-wider text-white uppercase leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    UNDERGROUND
                  </h1>
                  <h2 className="font-heading text-xl sm:text-2xl font-black tracking-widest text-neutral-200 uppercase leading-none mt-0.5">
                    JIU-JITSU
                  </h2>
                </div>

                {/* Right circular academy seal */}
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-neutral-600/80 bg-neutral-900/90 flex flex-col items-center justify-center p-0.5 shadow-inner">
                  <ShieldCheck className="w-4 h-4 text-neutral-300" />
                  <span className="text-[7px] sm:text-[8px] font-bold text-neutral-300">CAUCAIA</span>
                </div>
              </div>

              {/* Bottom sign contacts line (as in real sign) */}
              <div className="mt-2.5 pt-2 border-t border-neutral-800/80 flex items-center justify-center gap-3 sm:gap-5 text-[10px] sm:text-xs text-neutral-300 font-medium">
                <div className="inline-flex items-center gap-1">
                  <Phone className="w-3 h-3 text-emerald-400" />
                  <span>(85) 98718-1673</span>
                </div>
                <span className="text-neutral-600">•</span>
                <div className="inline-flex items-center gap-1">
                  <Instagram className="w-3 h-3 text-pink-400" />
                  <span>@ctjohngregoo</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Storefront: Glass sliding doors & Tatami Peek */}
        <div className="relative z-10 w-full max-w-sm sm:max-w-md mx-auto mt-2">
          {/* Roll-up metal shutter housing */}
          <div className="h-2 w-full bg-neutral-800 rounded-sm border-t border-neutral-700"></div>

          {/* Glass Doors with interior training mats hint */}
          <div className="h-10 sm:h-12 w-full bg-gradient-to-b from-neutral-900/60 to-neutral-950/90 border-x-2 border-b-2 border-neutral-800 rounded-b-lg flex items-center justify-between px-3 relative overflow-hidden backdrop-blur-[2px]">
            {/* Interior tatami mats perspective & wall fan hint */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-neutral-900/40 to-blue-950/20 pointer-events-none"></div>

            <div className="relative z-10 flex items-center gap-2 text-[10px] text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>Fachada Oficial • CT John Grego</span>
            </div>

            <button
              onClick={() => setLightsOn(!lightsOn)}
              className="relative z-10 text-[10px] px-2 py-0.5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 border border-neutral-700 flex items-center gap-1 transition-colors cursor-pointer"
              title="Alternar iluminação da fachada"
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>{lightsOn ? 'Luz Ligada' : 'Luz Apagada'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
