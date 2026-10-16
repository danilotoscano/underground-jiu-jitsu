import React from 'react';
import { motion } from 'motion/react';
import { Swords, Medal, MessageCircle } from 'lucide-react';

interface ModalitiesSectionProps {
  onOpenWhatsApp: (customMsg?: string) => void;
}

// Kimono / Gi martial arts icon
const KimonoIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
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
const KickIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
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
      className="w-full max-w-md mx-auto px-4 mt-7"
    >
      <div className="space-y-4">
        {/* Modalities Header */}
        <div className="text-center">
          <h3 className="font-heading text-2xl sm:text-3xl font-black tracking-wider text-white uppercase">
            Nossas Modalidades
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            Metodologia estruturada para todas as idades e objetivos
          </p>
        </div>

        {/* 2x2 Modalities Grid with enhanced visibility */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {modalities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
                className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-emerald-500/40 transition-all text-left flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-2 gap-2">
                    <span className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
                      </div>
                      <span>{item.title}</span>
                    </span>
                    <span className={`text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full border ${item.badgeColor} shrink-0`}>
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mt-1">
                    {item.desc}
                  </p>
                </div>

                {/* WhatsApp action button */}
                <div className="mt-3 pt-2.5 border-t border-neutral-800/80 flex items-center justify-end">
                  <button
                    onClick={() => onOpenWhatsApp(item.whatsappMsg)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 text-xs font-bold transition-all cursor-pointer active:scale-95"
                    title={`Tenho interesse em ${item.title}`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
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
