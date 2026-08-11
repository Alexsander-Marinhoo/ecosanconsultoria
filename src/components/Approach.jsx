import React from 'react';
import { SearchCheck, SlidersHorizontal, Scale, ChevronsRight } from 'lucide-react';
import FadeUp from './FadeUp';

export default function Approach() {
  const whatsappUrl = "https://wa.me/5521964199750?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20abordagem%20técnica%20da%20Ecosan.";

  return (
    <section className="py-24 bg-slate-100 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeUp delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-7">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-500 mb-3 block">
                ✳ Nossa Abordagem Técnica
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Metodologia prática para conformidade, segurança e redução de custos
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm text-slate-600 leading-relaxed">
                Atuamos de forma preventiva e estratégica, integrando a engenharia de segurança, a medicina do trabalho e a gestão ambiental aos objetivos do seu negócio.
              </p>
            </div>
          </div>
        </FadeUp>

        {/* 3 Executive Pillar Cards */}
        <FadeUp delay={0.08} yOffset={16}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-6">
            
            {/* Card 1: Light Executive */}
            <div className="relative bg-white text-slate-900 p-8 pb-14 rounded-3xl border border-slate-200/90 shadow-xl hover:shadow-2xl hover:border-amber-500/40 transition-all flex flex-col justify-between group h-full">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                  <SearchCheck className="w-7 h-7 text-slate-800" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-500 transition-colors">
                  1. Mapeamento & Documentação Legal
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Elaboração rigorosa de PGR, PCMSO, LTCAT, PCA, PPR e Laudos com medições quantitativas de ruído, calor e agentes químicos conforme as NRs vigentes.
                </p>
              </div>

              {/* Pill Cutout Button at Bottom-Left */}
              <div className="absolute -bottom-4 left-6 z-10">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy-950 text-white font-extrabold text-xs shadow-xl border border-amber-500/30 hover:bg-amber-500 hover:text-navy-950 transition-all transform group-hover:translate-x-1"
                >
                  <span>Saiba Mais</span>
                  <ChevronsRight className="w-4 h-4 text-amber-400 group-hover:text-navy-950" />
                </a>
              </div>
            </div>

            {/* Card 2: Featured Gold Accent */}
            <div className="relative bg-gold-gradient text-navy-950 p-8 pb-14 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 flex flex-col justify-between group h-full">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-navy-950/10 border border-navy-950/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <SlidersHorizontal className="w-7 h-7 text-navy-950" />
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-navy-950 text-amber-300 font-extrabold text-[10px] uppercase mb-3">
                  Destaque Estratégico
                </span>
                <h3 className="text-xl font-extrabold text-navy-950 mb-3">
                  2. Gestão Integrada & Auditorias SGI
                </h3>
                <p className="text-xs text-navy-950/80 leading-relaxed font-medium">
                  Implementação e auditoria interna em normas ISO 9001 (Qualidade), ISO 14001 (Meio Ambiente) e ISO 45001 (Saúde e Segurança) para excelência operacional.
                </p>
              </div>

              {/* Pill Cutout Button at Bottom-Left */}
              <div className="absolute -bottom-4 left-6 z-10">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy-950 text-amber-300 font-extrabold text-xs shadow-xl border border-navy-950/40 hover:bg-navy-900 transition-all transform group-hover:translate-x-1"
                >
                  <span>Saiba Mais</span>
                  <ChevronsRight className="w-4 h-4 text-amber-400" />
                </a>
              </div>
            </div>

            {/* Card 3: Dark Navy Contrast */}
            <div className="relative bg-navy-900 text-white p-8 pb-14 rounded-3xl border border-amber-500/30 shadow-xl hover:shadow-2xl hover:border-amber-500/60 transition-all flex flex-col justify-between group h-full">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Scale className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  3. Gestão Tributária SST & FAP/RAT
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Análise criteriosa de FAP, RAT e nexo técnico. Redução direta de custos trabalhistas e tributários através da elisão fiscal e prevenção de passivos.
                </p>
              </div>

              {/* Pill Cutout Button at Bottom-Left */}
              <div className="absolute -bottom-4 left-6 z-10">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-gradient text-navy-950 font-extrabold text-xs shadow-xl hover:brightness-110 transition-all transform group-hover:translate-x-1"
                >
                  <span>Saiba Mais</span>
                  <ChevronsRight className="w-4 h-4 text-navy-950" />
                </a>
              </div>
            </div>

          </div>
        </FadeUp>

      </div>
    </section>
  );
}
