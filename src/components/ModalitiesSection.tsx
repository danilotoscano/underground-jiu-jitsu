import React from 'react';
import { motion } from 'motion/react';
import { Swords, Medal, MessageCircle } from 'lucide-react';

interface ModalitiesSectionProps {
  onOpenWhatsApp: (customMsg?: string) => void;
}

// Kimono / Gi martial arts icon
const KimonoIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 6 L8 3 L16 3 L20 6 L18 10 L15 9 L15 20 L9 20 L9 9 L6 10 Z" />
    <path d="M8 3 L12 11 L16 3" />
    <path d="M8 13.5 H16" strokeWidth="2.4" />
    <path d="M12 13.5 V18" strokeWidth="2" />
    <path d="M13.5 13.5 V17" strokeWidth="2" />
  </svg>
);

// Martial arts Kick icon for Taekwondo
const KickIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="7" cy="5.5" r="2" fill="currentColor" />
    <path d="M7 8 L9 13.5" />
    <path d="M9 13.5 L8.5 17.5 L7.5 21.5" strokeWidth="2" />
    <path d="M9 13.5 L14.5 11 L21.5 7.5" strokeWidth="2.2" />
    <path d="M8 9.5 L12 9 L13 6.5" />
    <path d="M8 10.5 L6 12" />
  </svg>
);

export const ModalitiesSection: React.FC<ModalitiesSectionProps> = ({ onOpenWhatsApp }) => {
  const modalities = [
    {
      title: 'Jiu-Jitsu Adulto',
      tag: 'Principal',
      desc: 'Iniciantes e graduados. Defesa pessoal, condicionamento físico e competição.',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      icon: Swords,
      whatsappMsg: 'Olá! Tenho interesse na turma de Jiu-Jitsu Adulto na Underground Jiu-Jitsu.',
    },
    {
      title: 'Kids 1',
      tag: '6 a 11 anos',
      desc: 'Coordenação motora, respeito, socialização e disciplina marcial.',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      icon: Medal,
      whatsappMsg: 'Olá! Tenho interesse na turma Kids 1 (6 a 11 anos) na Underground Jiu-Jitsu.',
    },
    {
      title: 'Kids 2',
      tag: '12 a 15 anos',
      desc: 'Foco, autodefesa, autoconfiança, desenvolvimento técnico e esportivo.',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      icon: KimonoIcon,
      whatsappMsg: 'Olá! Tenho interesse na turma Kids 2 (12 a 15 anos) na Underground Jiu-Jitsu.',
    },
    {
      title: 'Taekwondo',
      tag: 'Marcial',
      desc: 'Flexibilidade, velocidade, chutes dinâmicos, disciplina e concentração.',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      icon: KickIcon,
      whatsappMsg: 'Olá! Tenho interesse na turma de Taekwondo na Underground Jiu-Jitsu.',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="w-full px-4 mt-6"
    >
      <div className="max-w-md mx-auto space-y-3.5">
        {/* Modalities Header */}
        <div className="text-center">
          <h3 className="font-heading text-2xl sm:text-3xl font-black tracking-wider text-white uppercase">
            Nossas Modalidades
          </h3>
          <p className="text-xs text-neutral-400 mt-0.5">
            Metodologia estruturada para todas as idades e objetivos
          </p>
        </div>

        {/* 2x2 Modalities Grid with discreet WhatsApp button on right */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {modalities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
                className="p-3.5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-emerald-500/30 transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5 gap-2">
                    <span className="text-sm font-bold text-white flex items-center gap-1.5">
                      <Icon className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item.title}</span>
                    </span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${item.badgeColor} shrink-0`}>
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-snug">
                    {item.desc}
                  </p>
                </div>

                {/* Discreet WhatsApp action button on the right */}
                <div className="mt-2.5 pt-2 border-t border-neutral-800/60 flex items-center justify-end">
                  <button
                    onClick={() => onOpenWhatsApp(item.whatsappMsg)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/25 text-[10px] font-semibold transition-all cursor-pointer active:scale-95"
                    title={`Tenho interesse em ${item.title}`}
                  >
                    <MessageCircle className="w-3 h-3 text-emerald-400" />
                    <span>Tenho interesse</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};
