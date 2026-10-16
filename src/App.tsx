import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { UndergroundLogo } from './components/UndergroundLogo';
import { GymCoverBanner } from './components/GymCoverBanner';
import { BioLinks } from './components/BioLinks';
import { ModalitiesSection } from './components/ModalitiesSection';
import { InteractiveMap } from './components/InteractiveMap';
import { WorkingHoursSection } from './components/WorkingHoursSection';
import { PixModal } from './components/PixModal';
import { WhatsAppModal } from './components/WhatsAppModal';
import {
  MessageCircle,
  MapPin,
  Check,
} from 'lucide-react';

export default function App() {
  const [isPixOpen, setIsPixOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const mapSectionRef = useRef<HTMLDivElement>(null);

  const phoneRaw = '5585987181673';
  const fullAddress = 'Av. Juaci Sampaio Pontes, 843 - Padre Romualdo, Caucaia - CE, 61600-150';

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopiedAddress(true);
    showToast('Endereço copiado para a área de transferência!');
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleScrollToMap = () => {
    mapSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenWhatsAppPreset = (customMsg?: string) => {
    if (customMsg) {
      const encoded = encodeURIComponent(customMsg);
      window.open(`https://wa.me/${phoneRaw}?text=${encoded}`, '_blank', 'noopener,noreferrer');
    } else {
      setIsWhatsAppOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-start relative overflow-x-hidden selection:bg-amber-400 selection:text-black">
      {/* Atmospheric Darkened Background Image Effect */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/capa-ctjohn.png"
          alt=""
          className="w-full h-full object-cover object-center filter brightness-[0.18] contrast-125 scale-105 blur-[1.5px]"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-neutral-950/85 bg-gradient-to-b from-neutral-950/80 via-neutral-950/90 to-neutral-950" />
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 z-50 px-4 py-2 rounded-full bg-emerald-500 text-neutral-950 font-bold text-xs shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <Check className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Biosite Container - Generous, high-res responsive layout */}
      <main className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-xl min-h-screen flex flex-col bg-neutral-950/92 backdrop-blur-md shadow-2xl border-x border-neutral-900/60 pb-16">
        {/* 1. Cover: Real Photo Header (from attachment 2) */}
        <GymCoverBanner />

        {/* 2. Brand Identity Header & Real Logo (attachment 1) */}
        <section className="relative px-4 pt-3 pb-2 text-center z-20">
          {/* Logo badge with clean border and depth */}
          <div className="inline-block p-2 rounded-2xl bg-black border border-neutral-800 shadow-[0_8px_25px_rgba(0,0,0,0.85)]">
            <UndergroundLogo size="md" />
          </div>

          {/* Subtitle & Address */}
          <div className="mt-2">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[1px] w-5 bg-neutral-800"></span>
              <p className="text-xs sm:text-sm font-bold tracking-widest text-neutral-300 uppercase">
                CT John Grego • Caucaia - CE
              </p>
              <span className="h-[1px] w-5 bg-neutral-800"></span>
            </div>

            <button
              onClick={handleScrollToMap}
              className="mt-1.5 inline-flex items-center gap-1.5 text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors cursor-pointer group"
            >
              <MapPin className="w-3.5 h-3.5 text-red-500 group-hover:scale-110 transition-transform" />
              <span className="underline decoration-neutral-800 underline-offset-2">
                Av. Juaci Sampaio Pontes, 843
              </span>
            </button>
          </div>
        </section>

        {/* 3. Main Action Links */}
        <section className="w-full mt-2">
          <BioLinks
            onOpenWhatsApp={handleOpenWhatsAppPreset}
            onOpenPix={() => setIsPixOpen(true)}
          />
        </section>

        {/* 4. Nossas Modalidades (Antes do Mapa) */}
        <ModalitiesSection
          onOpenWhatsApp={handleOpenWhatsAppPreset}
        />

        {/* 5. Interactive Google Maps Section with smooth reveal */}
        <motion.section
          ref={mapSectionRef}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="w-full px-4 mt-6 scroll-mt-6"
        >
          <InteractiveMap
            onCopyAddress={handleCopyAddress}
            copied={copiedAddress}
          />
        </motion.section>

        {/* 6. Horário de Funcionamento (No fim) */}
        <WorkingHoursSection
          onOpenWhatsApp={handleOpenWhatsAppPreset}
        />
      </main>

      {/* Floating Quick Action WhatsApp Button */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => setIsWhatsAppOpen(true)}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_6px_25px_rgba(16,185,129,0.5)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
          title="Falar no WhatsApp"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
          <MessageCircle className="w-5 h-5 fill-neutral-950" />
          <span>WhatsApp</span>
        </button>
      </div>

      {/* Modals */}
      <PixModal
        isOpen={isPixOpen}
        onClose={() => setIsPixOpen(false)}
      />

      <WhatsAppModal
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
        phoneRaw={phoneRaw}
      />
    </div>
  );
}
