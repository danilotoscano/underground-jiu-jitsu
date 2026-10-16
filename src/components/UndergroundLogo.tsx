import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const UndergroundLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const [imgError, setImgError] = useState(false);

  const sizeMap = {
    sm: 'w-24 max-w-[100px]',
    md: 'w-36 max-w-[150px]',
    lg: 'w-48 max-w-[200px]',
    xl: 'w-60 max-w-[250px]',
  };

  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      {/* Try loading uploaded logo file if placed in public, otherwise render pixel-perfect vector */}
      {!imgError ? (
        <img
          src="/logo.webp"
          alt="Underground Jiu-Jitsu Logo Oficial"
          className={`${sizeMap[size]} h-auto object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]`}
          onError={() => {
            // Also try logo.png
            const img = new Image();
            img.src = '/logo.png';
            img.onload = () => {
              // logo.png exists
            };
            img.onerror = () => {
              setImgError(true);
            };
          }}
        />
      ) : (
        /* Exact vector recreation of academia-jiu-jitsu-caucaia-underground.webp */
        <div className={`${sizeMap[size]} flex flex-col items-center`}>
          <svg
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto drop-shadow-[0_4px_24px_rgba(255,255,255,0.12)]"
          >
            {/* Pure black backdrop if needed, transparent on container */}
            <defs>
              <linearGradient id="whiteGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#F4F4F5" />
              </linearGradient>
            </defs>

            {/* Shield Outline - authentic geometry from attachment 1 */}
            <path
              d="M 165 85
                 L 335 85
                 L 380 130
                 L 380 270
                 L 250 365
                 L 120 270
                 L 120 130
                 Z"
              stroke="#FFFFFF"
              strokeWidth="14"
              strokeLinejoin="miter"
              fill="none"
            />

            {/* Stylized UJ Monogram inside shield */}
            <g fill="#FFFFFF">
              {/* Top horizontal crossbar */}
              <path
                d="M 185 106
                   H 355
                   V 142
                   H 285
                   V 255
                   L 250 280
                   L 235 268
                   V 142
                   H 185
                   Z"
              />

              {/* Left 'U' body with diagonal cut */}
              <path
                d="M 148 135
                   H 192
                   V 245
                   C 192 270, 208 285, 230 285
                   C 238 285, 246 282, 252 276
                   L 230 252
                   C 224 256, 218 256, 214 250
                   V 200
                   L 248 166
                   L 225 143
                   L 192 176
                   V 135
                   H 148
                   Z"
              />

              {/* Right 'J' descending hook & lower wing */}
              <path
                d="M 312 142
                   H 355
                   V 260
                   C 355 298, 325 330, 275 342
                   L 262 312
                   C 292 304, 312 284, 312 260
                   Z"
              />
            </g>

            {/* Typography: UNDERGROUND with octagonal chamfers */}
            <text
              x="250"
              y="420"
              textAnchor="middle"
              fill="#FFFFFF"
              fontFamily="'Teko', 'Impact', 'Arial Black', sans-serif"
              fontSize="68"
              fontWeight="900"
              letterSpacing="0.08em"
            >
              UNDERGROUND
            </text>

            {/* Divider lines and JIU-JITSU */}
            <line x1="45" y1="446" x2="160" y2="446" stroke="#FFFFFF" strokeWidth="4.5" />
            <text
              x="250"
              y="455"
              textAnchor="middle"
              fill="#FFFFFF"
              fontFamily="'Montserrat', sans-serif"
              fontSize="24"
              fontWeight="800"
              letterSpacing="0.32em"
            >
              JIU-JITSU
            </text>
            <line x1="340" y1="446" x2="455" y2="446" stroke="#FFFFFF" strokeWidth="4.5" />
          </svg>
        </div>
      )}
    </div>
  );
};
