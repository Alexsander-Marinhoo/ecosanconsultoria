import React from 'react';
import { ShieldCheck, HeartPulse, Leaf, HardHat } from 'lucide-react';

export default function QSMSSummaryBar() {
  const pillars = [
    {
      id: 'qualidade',
      title: 'QUALIDADE',
      subtitle: 'ISO 9001 & Processos',
      icon: ShieldCheck,
      color: 'from-amber-500/20 to-amber-600/10',
      borderColor: 'border-amber-500/40',
      textColor: 'text-amber-400',
    },
    {
      id: 'saude',
      title: 'SAÚDE',
      subtitle: 'PCMSO & Saúde Ocupacional',
      icon: HeartPulse,
      color: 'from-amber-500/20 to-amber-600/10',
      borderColor: 'border-amber-500/40',
      textColor: 'text-amber-400',
    },
    {
      id: 'meio-ambiente',
      title: 'MEIO AMBIENTE',
      subtitle: 'Licenciamento & Resíduos',
      icon: Leaf,
      color: 'from-amber-500/20 to-amber-600/10',
      borderColor: 'border-amber-500/40',
      textColor: 'text-amber-400',
    },
    {
      id: 'seguranca',
      title: 'SEGURANÇA',
      subtitle: 'PGR, LTCAT & Laudos',
      icon: HardHat,
      color: 'from-amber-500/20 to-amber-600/10',
      borderColor: 'border-amber-500/40',
      textColor: 'text-amber-400',
    },
  ];

  return (
    <div className="w-full bg-navy-950 border-y border-amber-500/20 py-8 px-4 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {pillars.map((item) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.id}
                className="group p-4 rounded-2xl glass-navy hover:bg-navy-900/90 transition-all duration-300 flex items-center gap-4 border border-amber-500/20 hover:border-amber-500/50 shadow-lg"
              >
                <div className={`w-12 h-12 rounded-xl bg-navy-900 border ${item.borderColor} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-inner`}>
                  <IconComponent className={`w-6 h-6 ${item.textColor}`} />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold tracking-widest text-white uppercase group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-medium">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
