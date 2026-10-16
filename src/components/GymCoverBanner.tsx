import React, { useState } from 'react';

export const GymCoverBanner: React.FC = () => {
  const [useFallback, setUseFallback] = useState(false);

  return (
    <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden bg-neutral-950 select-none border-b border-neutral-800">
      {/* 1. Primary: Load the exact capa-ctjohn photo */}
      {!useFallback ? (
        <img
          src="/capa-ctjohn.png"
          alt="Fachada Underground Jiu-Jitsu"
          className="w-full h-full object-cover object-[center_30%]"
          onError={() => setUseFallback(true)}
        />
      ) : (
        /* 2. Clean photographic background without cluttered text behind logo */
        <div className="relative w-full h-full bg-[#16181b] overflow-hidden flex flex-col justify-center items-center">
          {/* Wall texture and night gradient */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 40%, #25292f 0%, #141619 65%, #08080a 100%)'
            }}
          />

          {/* Gooseneck Lamps & Lighting */}
          <div className="absolute top-2 w-full max-w-xs mx-auto flex justify-between px-8">
            <div className="flex flex-col items-center">
              <div className="w-1 h-5 bg-neutral-500"></div>
              <div className="w-5 h-2 bg-neutral-200 rounded-full"></div>
              <div className="w-20 h-28 bg-gradient-to-b from-amber-100/25 via-amber-200/5 to-transparent blur-md rounded-full pointer-events-none"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-1 h-5 bg-neutral-500"></div>
              <div className="w-5 h-2 bg-neutral-200 rounded-full"></div>
              <div className="w-20 h-28 bg-gradient-to-b from-amber-100/25 via-amber-200/5 to-transparent blur-md rounded-full pointer-events-none"></div>
            </div>
          </div>

          {/* Signboard facade */}
          <div className="relative z-10 w-full max-w-xs px-4 text-center">
            <div className="bg-[#0b0c0e] border border-neutral-700/80 rounded-xl py-3 px-4 shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
              <h2 className="font-heading text-2xl sm:text-3xl font-black tracking-wider text-white uppercase leading-none">
                UNDERGROUND
              </h2>
              <h3 className="font-heading text-lg sm:text-xl font-black tracking-widest text-neutral-300 uppercase leading-none mt-0.5">
                JIU-JITSU
              </h3>
            </div>
          </div>
        </div>
      )}

      {/* Smooth bottom gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent pointer-events-none" />
    </div>
  );
};
