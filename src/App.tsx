import React, { useState, useRef } from 'react';
import { UndergroundLogo } from './components/UndergroundLogo';
import { GymCoverBanner } from './components/GymCoverBanner';
import { BioLinks } from './components/BioLinks';
import { InteractiveMap } from './components/InteractiveMap';
import { ModalitiesFooter } from './components/ModalitiesFooter';
import { PixModal } from './components/PixModal';
import { WhatsAppModal } from './components/WhatsAppModal';
import {
  MessageCircle,
  MapPin,
  Check,
  Flame,
  Award,
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
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 z-50 px-4 py-2 rounded-full bg-emerald-500 text-neutral-950 font-bold text-xs shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <Check className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Biosite Container */}
      <main className="w-full max-w-sm sm:max-w-md min-h-screen flex flex-col bg-neutral-950 shadow-2xl border-x border-neutral-900/60 pb-12">
        {/* 1. Cover: Real Photo Header (from attachment 2) */}
        <GymCoverBanner />

        {/* 2. Brand Identity Header & Real Logo (attachment 1) */}
        <section className="relative px-4 pt-0 pb-4 text-center -mt-16 z-20">
          {/* Logo badge with clean border and depth */}
          <div className="inline-block p-2.5 rounded-3xl bg-black border-2 border-neutral-800 shadow-[0_12px_35px_rgba(0,0,0,0.95)]">
            <UndergroundLogo size="md" />
          </div>

          {/* Subtitle & Address */}
          <div className="mt-2.5">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[1px] w-5 bg-neutral-800"></span>
              <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">
                CT John Grego • Caucaia - CE
              </p>
              <span className="h-[1px] w-5 bg-neutral-800"></span>
            </div>

            <button
              onClick={handleScrollToMap}
              className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] text-neutral-400 hover:text-white transition-colors cursor-pointer group"
            >
              <MapPin className="w-3 h-3 text-red-500 group-hover:scale-110 transition-transform" />
              <span className="underline decoration-neutral-800 underline-offset-4">
                Av. Juaci Sampaio Pontes, 843
              </span>
            </button>
          </div>

          {/* Modalities badges */}
          <div className="mt-2.5 flex flex-wrap items-center justify-center gap-1.5 text-[10px] font-medium text-neutral-400">
            <span className="px-2 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 flex items-center gap-1 text-neutral-300">
              <Flame className="w-2.5 h-2.5 text-amber-500" /> Jiu-Jitsu Adulto & Kids
            </span>
            <span className="px-2 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 flex items-center gap-1 text-neutral-300">
              <Award className="w-2.5 h-2.5 text-cyan-400" /> Taekwondo
            </span>
          </div>
        </section>

        {/* 3. Main Action Links: Exactly 4 compact buttons in requested order */}
        <section className="w-full mt-1">
          <BioLinks
            onOpenWhatsApp={handleOpenWhatsAppPreset}
            onOpenPix={() => setIsPixOpen(true)}
          />
        </section>

        {/* 4. Interactive Google Maps Section */}
        <section ref={mapSectionRef} className="w-full px-4 mt-6 scroll-mt-6">
          <InteractiveMap
            onCopyAddress={handleCopyAddress}
            copied={copiedAddress}
          />
        </section>

        {/* 5. Modalities & Working Hours Footer */}
        <ModalitiesFooter
          onOpenWhatsApp={() =>
            handleOpenWhatsAppPreset('Olá! Gostaria de consultar a grade de horários da Underground Jiu-Jitsu.')
          }
        />
      </main>

      {/* Floating Quick Action WhatsApp Button */}
      <div className="fixed bottom-4 right-4 z-40">
        <button
          onClick={() => setIsWhatsAppOpen(true)}
          className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs uppercase tracking-wider shadow-[0_4px_20px_rgba(16,185,129,0.4)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
          title="Falar no WhatsApp"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <MessageCircle className="w-4 h-4 fill-neutral-950" />
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
