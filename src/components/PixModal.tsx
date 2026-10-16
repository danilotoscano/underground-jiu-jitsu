import React, { useState } from 'react';
import { X, Copy, Check, QrCode, ShieldCheck, Zap } from 'lucide-react';

interface PixModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PixModal: React.FC<PixModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const pixKey = '85987181673';
  const formattedPixKey = '(85) 98718-1673';
  const pixName = 'Underground Jiu-Jitsu • CT John Grego';
  const city = 'Caucaia - CE';

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-sm bg-neutral-900 border border-neutral-700 rounded-3xl p-6 shadow-2xl text-center overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle decorative glow */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
          aria-label="Fechar modal PIX"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Icon & Title */}
        <div className="mx-auto w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3 font-bold text-2xl">
          $
        </div>

        <h3 className="font-heading text-2xl font-bold tracking-wider text-white uppercase">
          Pagamento via PIX
        </h3>
        <p className="text-xs text-neutral-400 mt-1">
          Mensalidades, matrículas e agendamentos
        </p>

        {/* Stylized QR Code Box */}
        <div className="my-5 p-4 rounded-2xl bg-white mx-auto w-48 h-48 flex flex-col items-center justify-center shadow-lg relative group">
          {/* Stylized SVG QR code representation */}
          <svg viewBox="0 0 100 100" className="w-full h-full text-neutral-950">
            {/* Corner Markers */}
            <rect x="5" y="5" width="25" height="25" rx="3" fill="black" />
            <rect x="9" y="9" width="17" height="17" rx="2" fill="white" />
            <rect x="13" y="13" width="9" height="9" fill="black" />

            <rect x="70" y="5" width="25" height="25" rx="3" fill="black" />
            <rect x="74" y="9" width="17" height="17" rx="2" fill="white" />
            <rect x="78" y="13" width="9" height="9" fill="black" />

            <rect x="5" y="70" width="25" height="25" rx="3" fill="black" />
            <rect x="9" y="74" width="17" height="17" rx="2" fill="white" />
            <rect x="13" y="78" width="9" height="9" fill="black" />

            {/* Pattern Dots */}
            <circle cx="45" cy="15" r="3" fill="black" />
            <circle cx="55" cy="15" r="3" fill="black" />
            <circle cx="45" cy="25" r="3" fill="black" />
            <circle cx="55" cy="25" r="3" fill="black" />
            <rect x="35" y="35" width="30" height="30" rx="4" fill="black" />
            <rect x="42" y="42" width="16" height="16" rx="2" fill="white" />
            <circle cx="50" cy="50" r="4" fill="black" />

            <circle cx="15" cy="45" r="3" fill="black" />
            <circle cx="25" cy="45" r="3" fill="black" />
            <circle cx="15" cy="55" r="3" fill="black" />
            <circle cx="75" cy="45" r="3" fill="black" />
            <circle cx="85" cy="55" r="3" fill="black" />
            <circle cx="80" cy="75" r="3" fill="black" />
            <circle cx="70" cy="85" r="3" fill="black" />
            <circle cx="88" cy="88" r="3" fill="black" />
            <circle cx="45" cy="75" r="3" fill="black" />
            <circle cx="55" cy="85" r="3" fill="black" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 rounded-2xl">
            <span className="text-white text-xs font-semibold px-2 py-1 bg-emerald-600 rounded">
              Escaneie no App
            </span>
          </div>
        </div>

        {/* PIX Key Box */}
        <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-800 text-left mb-4">
          <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-1">
            <span>Tipo de Chave: <strong>Telefone / Celular</strong></span>
            <span className="text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> Verificado
            </span>
          </div>
          <div className="font-mono text-sm sm:text-base font-bold text-white tracking-wider">
            {formattedPixKey}
          </div>
          <div className="text-[11px] text-neutral-400 mt-1 border-t border-neutral-800/80 pt-1 flex justify-between">
            <span>{pixName}</span>
            <span>{city}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <button
          onClick={handleCopy}
          className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-emerald-500/20 active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              <span>Chave PIX Copiada com Sucesso!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copiar Chave PIX</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-neutral-500 mt-3">
          Após a transferência, envie o comprovante no WhatsApp da academia para confirmação imediata.
        </p>
      </div>
    </div>
  );
};
