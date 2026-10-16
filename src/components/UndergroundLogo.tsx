import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const UndergroundLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const sizeMap = {
    sm: { shield: 54, textClass: 'text-lg', subClass: 'text-[9px]' },
    md: { shield: 76, textClass: 'text-2xl', subClass: 'text-[11px]' },
    lg: { shield: 110, textClass: 'text-3xl', subClass: 'text-xs' },
    xl: { shield: 140, textClass: 'text-4xl', subClass: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      {/* Shield Emblem matching user's logo attachment */}
      <div className="relative group">
        <svg
          width={currentSize.shield}
          height={currentSize.shield * 1.15}
          viewBox="0 0 200 230"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#e4e4e7" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#ffffff" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Outer Shield Outline */}
          <path
            d="M 28 8 
               L 172 8 
               L 194 30 
               L 194 116 
               C 194 158, 142 196, 100 224 
               C 58 196, 6 158, 6 116 
               L 6 30 
               Z"
            stroke="url(#shieldGrad)"
            strokeWidth="8"
            strokeLinejoin="miter"
            fill="#09090b"
          />

          {/* Monogram U + J geometric styling */}
          <g fill="url(#shieldGrad)" filter="url(#glow)">
            {/* Left U side */}
            <path
              d="M 28 42
                 H 54
                 V 102
                 C 54 118, 66 128, 82 128
                 C 94 128, 104 121, 108 112
                 L 126 124
                 C 118 139, 101 150, 82 150
                 C 51 150, 28 131, 28 102
                 Z"
            />
            {/* Right J top horizontal & stem */}
            <path
              d="M 68 28
                 H 168
                 V 46
                 H 128
                 V 108
                 C 128 126, 116 138, 100 144
                 L 90 126
                 C 98 122, 104 115, 104 106
                 V 46
                 H 68
                 Z"
            />
            {/* J lower right hook accent */}
            <path
              d="M 146 54
                 H 172
                 V 122
                 C 172 148, 150 170, 122 176
                 L 114 156
                 C 134 152, 146 138, 146 122
                 Z"
            />
          </g>
        </svg>
      </div>

      {showText && (
        <div className="mt-3 flex flex-col items-center text-center">
          <span
            className={`font-heading tracking-[0.22em] font-extrabold text-white leading-none ${currentSize.textClass} drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]`}
          >
            UNDERGROUND
          </span>
          <div className="mt-1 flex items-center gap-2">
            <span className="h-[1.5px] w-5 sm:w-8 bg-neutral-400"></span>
            <span
              className={`tracking-[0.35em] font-bold text-neutral-300 uppercase ${currentSize.subClass}`}
            >
              JIU-JITSU
            </span>
            <span className="h-[1.5px] w-5 sm:w-8 bg-neutral-400"></span>
          </div>
        </div>
      )}
    </div>
  );
};
