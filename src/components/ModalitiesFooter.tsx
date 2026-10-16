import React from 'react';
import { Clock, Shield, Sparkles, MessageCircle, Heart, Award, Users } from 'lucide-react';

interface ModalitiesFooterProps {
  onOpenWhatsApp: () => void;
}

export const ModalitiesFooter: React.FC<ModalitiesFooterProps> = ({ onOpenWhatsApp }) => {
  const modalities = [
    {
      title: 'Jiu-Jitsu Adulto',
      tag: 'Principal',
      desc: 'Iniciantes e graduados. Defesa pessoal, condicionamento físico e competição.',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      icon: Award,
    },
    {
      title: 'Kids 1',
      tag: '6 a 11 anos',
      desc: 'Coordenação motora, respeito, socialização e disciplina marcial.',
      badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      icon: Heart,
    },
    {
      title: 'Kids 2',
      tag: '12 a 15 anos',
      desc: 'Foco, autodefesa, autoconfiança, desenvolvimento técnico e esportivo.',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      icon: Shield,
    },
    {
      title: 'Taekwondo',
      tag: 'Marcial',
      desc: 'Flexibilidade, velocidade, chutes dinâmicos, disciplina e concentração.',
      badgeColor: 'bg-red-500/10 text-red-400 border-red-500/20',
      icon: Sparkles,
    },
  ];

  return (
    <footer className="w-full mt-8 border-t border-neutral-800/80 bg-neutral-950/90 pt-8 pb-16 px-4">
      <div className="max-w-md mx-auto space-y-6">
        {/* Modalities Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 font-medium mb-2">
            <Users className="w-3.5 h-3.5 text-amber-400" />
            <span>Nossas Modalidades</span>
          </div>
          <h3 className="font-heading text-2xl font-bold tracking-wider text-white uppercase">
            Treinos & Graduações
          </h3>
          <p className="text-xs text-neutral-400 mt-0.5">
            Metodologia estruturada para todas as idades e objetivos
          </p>
        </div>

        {/* 2x2 Modalities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {modalities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-3.5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 transition-all text-left"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-bold text-white flex items-center gap-1.5">
                    <Icon className="w-4 h-4 text-neutral-400" />
                    {item.title}
                  </span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${item.badgeColor}`}>
                    {item.tag}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400 leading-snug">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Hours / Schedule Box */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 text-center relative overflow-hidden">
          <div className="flex items-center justify-center gap-2 text-amber-400 mb-1">
            <Clock className="w-4 h-4" />
            <span className="font-heading text-lg font-bold tracking-wider uppercase text-white">
              Horários de Funcionamento
            </span>
          </div>
          
          <div className="my-2 py-2 px-4 rounded-xl bg-neutral-950/80 border border-neutral-800/80 inline-block">
            <span className="font-heading text-2xl font-black text-amber-400 tracking-wider">
              07h às 22h
            </span>
            <span className="block text-[11px] text-neutral-400">
              Segunda a Sexta-feira
            </span>
          </div>

          <p className="text-xs text-neutral-300 mt-2">
            Horários específicos por turma: <strong>consulte a grade atualizada via WhatsApp</strong>.
          </p>

          <button
            onClick={onOpenWhatsApp}
            className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-neutral-200 hover:text-white border border-neutral-700 transition-all cursor-pointer active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Consultar Grade no WhatsApp</span>
          </button>
        </div>

        {/* Footer Credits & Legal */}
        <div className="pt-6 border-t border-neutral-900 text-center space-y-2 text-[11px] text-neutral-500">
          <p className="text-neutral-400 font-medium">
            Underground Jiu-Jitsu • CT John Grego
          </p>
          <p>
            Av. Juaci Sampaio Pontes, 843 - Padre Romualdo, Caucaia - CE, 61600-150
          </p>
          <p className="text-[10px] text-neutral-600">
            © {new Date().getFullYear()} Underground Jiu-Jitsu. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
