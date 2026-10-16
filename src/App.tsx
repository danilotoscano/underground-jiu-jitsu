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
  Share2,
  CalendarCheck,
  ShieldAlert,
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

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Underground Jiu-Jitsu | Biosite Oficial',
          text: 'Conheça a Underground Jiu-Jitsu em Caucaia - CE. Agende sua aula experimental gratuita!',
          url: window.location.href,
        });
      } catch {
        // User cancelled share
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Link do Biosite copiado!');
    }
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
        <div className="fixed top-5 z-50 px-4 py-2.5 rounded-full bg-emerald-500 text-neutral-950 font-bold text-xs shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <Check className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Biosite Container */}
      <main className="w-full max-w-lg min-h-screen flex flex-col bg-neutral-950 shadow-2xl border-x border-neutral-900/60 pb-12">
        {/* 1. Cover Banner: Storefront night facade matching image.png */}
        <GymCoverBanner />

        {/* 2. Brand Identity Header & Logo matching academia-jiu-jitsu-caucaia-underground.webp */}
        <section className="relative px-4 pt-0 pb-5 text-center -mt-14 z-20">
          {/* Logo badge with neon glow & clean circular backing */}
          <div className="inline-block p-2 rounded-3xl bg-neutral-950 border-2 border-neutral-800 shadow-[0_12px_30px_rgba(0,0,0,0.85)]">
            <UndergroundLogo size="md" showText={false} />
          </div>

          {/* Typography Header */}
          <div className="mt-3">
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-wider text-white uppercase leading-none drop-shadow-md">
              Underground Jiu-Jitsu
            </h1>
            <div className="flex items-center justify-center gap-2 mt-1">
              <span className="h-[1px] w-6 bg-neutral-700"></span>
              <p className="text-xs sm:text-sm font-semibold tracking-widest text-neutral-400 uppercase">
                Centro de Treinamento • Caucaia - CE
              </p>
              <span className="h-[1px] w-6 bg-neutral-700"></span>
            </div>
          </div>

          {/* Highlights & Tags */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 text-[11px] font-medium text-neutral-300">
            <span className="px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 flex items-center gap-1">
              <Flame className="w-3 h-3 text-amber-500" /> Jiu-Jitsu Adulto & Kids
            </span>
            <span className="px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 flex items-center gap-1">
              <Award className="w-3 h-3 text-cyan-400" /> Taekwondo
            </span>
            <span className="px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 flex items-center gap-1 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Aula Experimental Gratuita
            </span>
          </div>

          {/* Address snippet with quick click */}
          <button
            onClick={handleScrollToMap}
            className="mt-3 inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer group"
          >
            <MapPin className="w-3.5 h-3.5 text-red-500 group-hover:scale-110 transition-transform" />
            <span className="underline decoration-neutral-700 underline-offset-4">
              Av. Juaci Sampaio Pontes, 843 - Caucaia
            </span>
          </button>
        </section>

        {/* 3. Main Action Links */}
        <section className="w-full">
          <BioLinks
            onOpenWhatsApp={handleOpenWhatsAppPreset}
            onOpenPix={() => setIsPixOpen(true)}
            onScrollToMap={handleScrollToMap}
            onShare={handleShare}
          />
        </section>

        {/* 4. Interactive Google Maps Section */}
        <section ref={mapSectionRef} className="w-full max-w-md mx-auto px-4 mt-7 scroll-mt-6">
          <InteractiveMap
            onCopyAddress={handleCopyAddress}
            copied={copiedAddress}
          />
        </section>

        {/* 5. Modalities & Working Hours Footer */}
        <ModalitiesFooter
          onOpenWhatsApp={() => handleOpenWhatsAppPreset('Olá! Gostaria de consultar a grade de horários da Underground Jiu-Jitsu.')}
        />
      </main>

      {/* Floating Quick Action WhatsApp Button */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => setIsWhatsAppOpen(true)}
          className="relative flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs uppercase tracking-wider shadow-[0_6px_25px_rgba(16,185,129,0.45)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
          title="Falar no WhatsApp"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <MessageCircle className="w-5 h-5 fill-neutral-950" />
          <span className="hidden sm:inline">WhatsApp</span>
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
