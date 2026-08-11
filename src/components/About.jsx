import React from 'react';
import { UserCheck, Building2, FileCheck2, Scale } from 'lucide-react';
import FadeUp from './FadeUp';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-navy-950 text-white relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header Block */}
        <FadeUp delay={0} yOffset={16} className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 block">
            ✳ Quem Somos
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Solução Abrangente & Estratégica em <span className="text-gold-gradient">QSMS e Engenharia</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A <strong className="text-white">ECOSAN Engenharia & Consultoria</strong> é uma empresa especializada em Segurança do Trabalho, Saúde Ocupacional, Higiene Ocupacional, Meio Ambiente e Gestão Integrada.
          </p>

          <p className="text-sm text-slate-400 leading-relaxed max-w-3xl mx-auto">
            Atuamos ao lado das empresas para garantir o cumprimento rigoroso de todas as obrigações legais, organizar processos operacionais, mitigar riscos de acidentes, evitar passivos trabalhistas e tributários, e potencializar os resultados do negócio.
          </p>
        </FadeUp>

        {/* 4 Pillars Grid */}
        <FadeUp delay={0.08} yOffset={16}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="glass-navy p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all text-center h-full flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-4">
                <UserCheck className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-white uppercase mb-2">Equipe Multidisciplinar</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Engenheiros de segurança, médicos do trabalho, higienistas e peritos ambientais qualificados.
              </p>
            </div>

            <div className="glass-navy p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all text-center h-full flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-4">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-white uppercase mb-2">Abordagem Preventiva</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Laudos e programas ajustados rigorosamente à realidade operacional da sua indústria.
              </p>
            </div>

            <div className="glass-navy p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all text-center h-full flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-4">
                <Scale className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-white uppercase mb-2">Redução FAP / RAT</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Mitigação de alíquotas tributárias e prevenção de passivos e contestações trabalhistas.
              </p>
            </div>

            <div className="glass-navy p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all text-center h-full flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-white uppercase mb-2">Conformidade Total</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                100% de adequação às NRs do MTE e às certificações de Gestão Integrada (ISO 9001/14001/45001).
              </p>
            </div>

          </div>
        </FadeUp>

      </div>
    </section>
  );
}
