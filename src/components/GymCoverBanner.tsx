import React, { useState } from 'react';

export const GymCoverBanner: React.FC = () => {
  const [useFallback, setUseFallback] = useState(false);

  return (
    <div className="relative w-full h-36 sm:h-40 md:h-44 overflow-hidden bg-neutral-950 select-none border-b border-neutral-800/80">
      {/* 1. Primary: Load uploaded photo if present */}
      {!useFallback ? (
        <img
          src="/capa-ctjohn.png"
          alt="Fachada Underground Jiu-Jitsu CT John Grego"
          className="w-full h-full object-cover object-[center_32%]"
          onError={() => setUseFallback(true)}
        />
      ) : (
        /* 2. Compact cover with overhead lights and centered signboard */
        <div className="relative w-full h-full bg-[#181a1d] overflow-hidden flex flex-col justify-center items-center">
          {/* Night concrete wall gradient */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 35%, #292d33 0%, #15171a 60%, #0a0a0c 100%)'
            }}
          />

          {/* Stucco micro texture */}
          <div 
            className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
            }}
          />

          {/* Realistic Overhead Spotlights with Light Cones */}
          <div className="absolute top-1 w-full max-w-sm mx-auto flex justify-around px-8">
            {/* Left Spotlight */}
            <div className="relative flex flex-col items-center">
              <div className="w-1 h-3.5 bg-neutral-600 rounded-t"></div>
              <div className="w-5 h-1.5 bg-neutral-200 rounded-full shadow-md border border-neutral-600"></div>
              <div className="absolute top-3.5 w-20 sm:w-24 h-24 bg-gradient-to-b from-amber-100/35 via-amber-200/10 to-transparent blur-md rounded-full pointer-events-none transform -translate-x-1/2 left-1/2"></div>
            </div>

            {/* Right Spotlight */}
            <div className="relative flex flex-col items-center">
              <div className="w-1 h-3.5 bg-neutral-600 rounded-t"></div>
              <div className="w-5 h-1.5 bg-neutral-200 rounded-full shadow-md border border-neutral-600"></div>
              <div className="absolute top-3.5 w-20 sm:w-24 h-24 bg-gradient-to-b from-amber-100/35 via-amber-200/10 to-transparent blur-md rounded-full pointer-events-none transform -translate-x-1/2 left-1/2"></div>
            </div>
          </div>

          {/* Center Storefront Signboard with Badges */}
          <div className="relative z-10 w-full max-w-xs sm:max-w-sm mx-auto px-3 mt-3">
            <div className="bg-[#0e0f11] border-2 border-neutral-700/80 rounded-xl px-3 py-2 shadow-[0_8px_25px_rgba(0,0,0,0.9),0_0_12px_rgba(255,255,255,0.06)] text-center relative overflow-hidden">
              <div className="flex items-center justify-between gap-2">
                {/* Left Round Badge */}
                <div className="w-7 h-7 rounded-full border border-neutral-600 bg-neutral-900/90 flex flex-col items-center justify-center shrink-0 shadow-inner">
                  <span className="text-[5px] font-bold text-neutral-400">JOHN</span>
                  <span className="text-[6px] font-black text-white">GREGO</span>
                </div>

                {/* Center Big Bold Name */}
                <div className="flex-1 flex flex-col items-center">
                  <span className="font-heading text-lg sm:text-xl font-black tracking-wider text-white uppercase leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    UNDERGROUND
                  </span>
                  <span className="font-heading text-sm sm:text-base font-black tracking-widest text-neutral-200 uppercase leading-none mt-0.5">
                    JIU-JITSU
                  </span>
                </div>

                {/* Right Round Badge */}
                <div className="w-7 h-7 rounded-full border border-neutral-600 bg-neutral-900/90 flex flex-col items-center justify-center shrink-0 shadow-inner">
                  <span className="text-[5px] font-bold text-neutral-300">CT</span>
                  <span className="text-[5px] font-black text-white">CEARÁ</span>
                </div>
              </div>

              {/* Contacts Line */}
              <div className="mt-1 pt-1 border-t border-neutral-800/80 flex items-center justify-center gap-3 text-[9px] text-neutral-300 font-medium">
                <span>(85) 98718-1673</span>
                <span className="text-neutral-600">•</span>
                <span>@ctjohngregoo</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Smooth bottom gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none" />
    </div>
  );
};
