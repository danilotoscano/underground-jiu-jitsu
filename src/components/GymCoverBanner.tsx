import React, { useState, useEffect, useRef } from 'react';
import { Camera, RefreshCw } from 'lucide-react';

export const GymCoverBanner: React.FC = () => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check if user uploaded a custom photo in this session/browser
    const saved = localStorage.getItem('underground_facade_photo');
    if (saved) {
      setPhotoUrl(saved);
    } else {
      // Check if image.png or capa.jpg is in /public
      const testImg = new Image();
      testImg.src = '/image.png';
      testImg.onload = () => setPhotoUrl('/image.png');
      testImg.onerror = () => {
        const testImg2 = new Image();
        testImg2.src = '/capa.jpg';
        testImg2.onload = () => setPhotoUrl('/capa.jpg');
      };
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setPhotoUrl(result);
        localStorage.setItem('underground_facade_photo', result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden bg-neutral-950 select-none">
      {photoUrl ? (
        /* Real Photo Displayed Cleanly */
        <img
          src={photoUrl}
          alt="Fachada Underground Jiu-Jitsu"
          className="w-full h-full object-cover object-center"
        />
      ) : (
        /* Realistic Photographic Rendering of the Storefront from attachment 2 */
        <div className="relative w-full h-full bg-neutral-950 overflow-hidden flex flex-col justify-end">
          {/* Night sky & dark concrete wall gradient */}
          <div 
            className="absolute inset-0 bg-neutral-950"
            style={{
              background: 'radial-gradient(ellipse at 50% 30%, #202428 0%, #0d0f11 50%, #050505 100%)'
            }}
          />

          {/* Wall texture */}
          <div 
            className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
            }}
          />

          {/* Storefront Signboard (Underground Jiu-Jitsu) illuminated from real photo */}
          <div className="relative z-10 w-full max-w-sm mx-auto px-6 mb-8 text-center">
            {/* Spotlights glow */}
            <div className="absolute -top-8 left-1/4 w-20 h-20 bg-amber-100/20 blur-xl rounded-full pointer-events-none"></div>
            <div className="absolute -top-8 right-1/4 w-20 h-20 bg-amber-100/20 blur-xl rounded-full pointer-events-none"></div>

            <div className="bg-[#111315] border border-neutral-700/80 rounded-xl px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.9)]">
              <div className="flex items-center justify-between gap-3">
                <div className="w-8 h-8 rounded-full border border-neutral-600 bg-neutral-900 flex flex-col items-center justify-center">
                  <span className="text-[6px] text-neutral-400 font-bold">JOHN</span>
                  <span className="text-[7px] text-white font-extrabold">GREGO</span>
                </div>

                <div className="flex-1">
                  <h2 className="font-heading text-2xl font-black tracking-wider text-white leading-none">
                    UNDERGROUND
                  </h2>
                  <h3 className="font-heading text-lg font-black tracking-widest text-neutral-200 leading-none mt-0.5">
                    JIU-JITSU
                  </h3>
                </div>

                <div className="w-8 h-8 rounded-full border border-neutral-600 bg-neutral-900 flex flex-col items-center justify-center">
                  <span className="text-[6px] text-neutral-400 font-bold">CEARÁ</span>
                </div>
              </div>

              <div className="mt-2 pt-1.5 border-t border-neutral-800 text-[10px] text-neutral-400 flex justify-center gap-3">
                <span>(85) 98718-1673</span>
                <span>•</span>
                <span>@ctjohngregoo</span>
              </div>
            </div>
          </div>

          {/* Glass storefront view */}
          <div className="relative z-10 w-full h-12 bg-gradient-to-t from-neutral-900/90 to-transparent border-t border-neutral-800"></div>
        </div>
      )}

      {/* Bottom smooth gradient blend into biosite body */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent pointer-events-none" />

      {/* Hidden file input for uploading the real photo file */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      {/* Discreet photo selector button on top right */}
      <button
        onClick={() => fileInputRef.current?.click()}
        className="absolute top-3 right-3 z-30 p-2 rounded-full bg-black/60 hover:bg-black/80 text-neutral-400 hover:text-white border border-neutral-700/60 backdrop-blur-md transition-all cursor-pointer shadow-lg"
        title="Inserir / Trocar foto real da capa"
      >
        <Camera className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
