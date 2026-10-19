import React from 'react';
import { X, MessageCircle, CalendarCheck, Clock, CreditCard, HelpCircle, ArrowRight } from 'lucide-react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  phoneRaw: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  phoneRaw,
}) => {
  if (!isOpen) return null;

  const options = [
    {
      title: 'Agendar Aula Experimental',
      desc: 'Garanta sua vaga no tatame gratuitamente',
      icon: CalendarCheck,
      badge: 'Mais pedido',
      message: 'Olá! Gostaria de agendar uma aula experimental gratuita na Underground Jiu-Jitsu.',
      accent: 'emerald',
    },
    {
      title: 'Consultar Horários das Turmas',
      desc: 'Jiu-Jitsu Adulto, Jiu-Jitsu Kids 1, Jiu-Jitsu Kids 2 ou Taekwondo',
      icon: Clock,
      message: 'Olá! Gostaria de conferir a grade de horários das aulas da Underground Jiu-Jitsu.',
      accent: 'blue',
    },
    {
      title: 'Planos e Matrícula',
      desc: 'Valores mensais, semestrais e condições',
      icon: CreditCard,
      message: 'Olá! Gostaria de saber os valores dos planos e condições de matrícula.',
      accent: 'amber',
    },
    {
      title: 'Falar com Atendente / Dúvidas',
      desc: 'Tirar outras dúvidas sobre a academia',
      icon: HelpCircle,
      message: 'Olá! Gostaria de tirar algumas dúvidas sobre a academia Underground Jiu-Jitsu.',
      accent: 'neutral',
    },
  ];

  const handleLaunchWhatsApp = (customMsg: string) => {
    const encoded = encodeURIComponent(customMsg);
    const url = `https://wa.me/${phoneRaw}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-neutral-900 border border-neutral-700/80 rounded-t-3xl sm:rounded-3xl p-5 sm:p-6 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative ambient bar */}
        <div className="w-12 h-1.5 bg-neutral-700 rounded-full mx-auto mb-4 sm:hidden"></div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <MessageCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-wider text-white uppercase leading-none">
              Atendimento WhatsApp
            </h3>
            <p className="text-xs text-neutral-400 mt-0.5">
              Escolha o assunto para atendimento imediato:
            </p>
          </div>
        </div>

        {/* Options list */}
        <div className="space-y-2.5 my-3">
          {options.map((opt, i) => {
            const Icon = opt.icon;
            return (
              <button
                key={i}
                onClick={() => handleLaunchWhatsApp(opt.message)}
                className="w-full text-left p-3.5 rounded-2xl bg-neutral-950/80 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 transition-all flex items-center justify-between group cursor-pointer active:scale-[0.99]"
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2.5 rounded-xl ${
                    opt.accent === 'emerald' ? 'bg-emerald-500/15 text-emerald-400' :
                    opt.accent === 'blue' ? 'bg-blue-500/15 text-blue-400' :
                    opt.accent === 'amber' ? 'bg-amber-500/15 text-amber-400' :
                    'bg-neutral-800 text-neutral-300'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {opt.title}
                      </span>
                      {opt.badge && (
                        <span className="text-[9px] font-semibold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.5 rounded">
                          {opt.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-neutral-400 mt-0.5 leading-snug">
                      {opt.desc}
                    </p>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </button>
            );
          })}
        </div>

        {/* Direct chat button */}
        <div className="mt-4 pt-3 border-t border-neutral-800 flex flex-col gap-2">
          <button
            onClick={() => handleLaunchWhatsApp('Olá! Entrei em contato através do Biosite da Underground Jiu-Jitsu.')}
            className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Abrir Conversa em Branco</span>
          </button>
          <p className="text-[11px] text-center text-neutral-500">
            Número oficial: (85) 98718-1673 • Caucaia - CE
          </p>
        </div>
      </div>
    </div>
  );
};
