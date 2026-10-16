import React from 'react';
import { motion } from 'motion/react';
import { Clock, MessageCircle } from 'lucide-react';

interface WorkingHoursSectionProps {
  onOpenWhatsApp: (customMsg?: string) => void;
}

export const WorkingHoursSection: React.FC<WorkingHoursSectionProps> = ({ onOpenWhatsApp }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="w-full px-4 mt-6 mb-8"
    >
      <div className="max-w-md mx-auto">
        {/* Singular: Horário de Funcionamento Box */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 text-center relative overflow-hidden shadow-lg">
          <div className="flex items-center justify-center gap-2 text-emerald-400 mb-1">
            <Clock className="w-4 h-4 text-emerald-400" />
            <h4 className="font-heading text-lg font-bold tracking-wider uppercase text-white">
              Horário de Funcionamento
            </h4>
          </div>
          
          <div className="my-2 py-1.5 px-4 rounded-xl bg-neutral-950/80 border border-neutral-800/80 inline-block">
            <span className="font-heading text-2xl font-black text-emerald-400 tracking-wider">
              07h às 22h
            </span>
            <span className="block text-[11px] text-neutral-400">
              Segunda a Sexta-feira
            </span>
          </div>

          <p className="text-xs text-neutral-300 mt-1.5">
            Horários específicos por turma: <strong>consulte a grade atualizada via WhatsApp</strong>.
          </p>

          <button
            onClick={() => onOpenWhatsApp('Olá! Gostaria de consultar a grade de horários da Underground Jiu-Jitsu.')}
            className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-neutral-200 hover:text-white border border-neutral-700 transition-all cursor-pointer active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Consultar Grade no WhatsApp</span>
          </button>
        </div>
      </div>
    </motion.section>
  );
};
