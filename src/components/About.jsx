import React from 'react';
import { 
  Scale, 
  HeartHandshake, 
  Award, 
  Users, 
  Leaf, 
  ShieldCheck, 
  Building2, 
  ChevronsRight,
  Heart
} from 'lucide-react';
import FadeUp from './FadeUp';
import WhatsAppIcon from './WhatsAppIcon';

export default function About() {
  const whatsappUrl = "https://wa.me/5521964199750?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20da%20EcoSan.";

  const compromissos = [
    {
      number: '01',
      title: 'Ética e transparência',
      description: 'Conduzimos nossas relações com responsabilidade, respeito e clareza.',
      icon: Scale,
    },
    {
      number: '02',
      title: 'Compromisso com o cliente',
      description: 'Buscamos compreender cada realidade para entregar soluções aplicáveis e que realmente façam diferença.',
      icon: HeartHandshake,
    },
    {
      number: '03',
      title: 'Qualidade e excelência técnica',
      description: 'Trabalhamos com conhecimento, responsabilidade profissional e melhoria contínua em tudo o que fazemos.',
      icon: Award,
    },
    {
      number: '04',
      title: 'Respeito às pessoas',
      description: 'Acreditamos que bons resultados começam pela valorização, desenvolvimento e cuidado com as pessoas.',
      icon: Users,
    },
    {
      number: '05',
      title: 'Responsabilidade ambiental',
      description: 'Atuamos para prevenir impactos, promover o uso consciente dos recursos e contribuir para operações mais sustentáveis.',
      icon: Leaf,
    },
    {
      number: '06',
      title: 'Conformidade e responsabilidade',
      description: 'Mantemos o compromisso com a legislação, normas técnicas e demais requisitos aplicáveis às atividades de nossos clientes.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-navy-950 text-white relative overflow-hidden">
      {/* Subtle Background Atmospheric Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean Editorial Header */}
        <FadeUp delay={0} yOffset={16}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-7">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 mb-3 block">
                ✳ EcoSan Consultoria e Assessoria
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Missão, Propósito e <span className="text-gold-gradient">Nossos Compromissos</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Soluções estratégicas em QSMS e Engenharia de Segurança para promover ambientes protegidos, conformidade legal e sustentabilidade empresarial.
              </p>
            </div>
          </div>
        </FadeUp>

        {/* Dual Highlight Cards: MISSÃO & NOSSO PROPÓSITO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-20">
          
          {/* Card 1: MISSÃO */}
          <FadeUp delay={0.08} yOffset={16} className="h-full">
            <div className="glass-navy p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-xl h-full flex flex-col justify-between transition-all">
              <div className="space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 block">
                  Missão
                </span>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                  Soluções integradas em Segurança, Saúde, Meio Ambiente e Qualidade
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-2">
                  Promover soluções integradas em Segurança do Trabalho, Saúde Ocupacional, Meio Ambiente e Qualidade, contribuindo para ambientes de trabalho mais seguros, processos eficientes e empresas em conformidade com os requisitos legais.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-400 font-medium">
                <span>Segurança do Trabalho</span>
                <span>•</span>
                <span>Saúde Ocupacional</span>
                <span>•</span>
                <span>Meio Ambiente</span>
                <span>•</span>
                <span>Qualidade (QSMS)</span>
              </div>
            </div>
          </FadeUp>

          {/* Card 2: NOSSO PROPÓSITO */}
          <FadeUp delay={0.12} yOffset={16} className="h-full">
            <div className="glass-navy p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-xl h-full flex flex-col justify-between transition-all">
              <div className="space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 block">
                  Nosso Propósito
                </span>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                  Cuidar de pessoas, proteger o meio ambiente e fortalecer empresas
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-2">
                  Atuamos por meio de uma gestão segura, responsável e de qualidade para transformar as exigências normativas em proteção real e longevidade para os negócios.
                </p>
              </div>

              {/* 3 Direct Points without nested boxes */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-2.5">
                  <Heart className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Cuidar de Pessoas</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Saúde e integridade no trabalho</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Leaf className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Proteger o Meio Ambiente</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Prevenção e sustentabilidade</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Building2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Fortalecer Empresas</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Gestão e conformidade legal</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

        </div>

        {/* Section Sub-Title: Nossos Compromissos */}
        <FadeUp delay={0.15} yOffset={16}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-7">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 block mb-2">
                ✳ Nossos Compromissos
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Princípios que norteiam cada decisão técnica
              </h3>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm text-slate-400 leading-relaxed">
                Valores inegociáveis aplicados no atendimento, na elaboração de laudos e nas rotinas operacionais da EcoSan.
              </p>
            </div>
          </div>
        </FadeUp>

        {/* 6 Clean Commitment Cards */}
        <FadeUp delay={0.18} yOffset={16}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {compromissos.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div
                  key={index}
                  className="glass-navy p-7 rounded-3xl border border-slate-800 shadow-md flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shadow-inner">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-500">
                        {item.number}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white mb-2">
                      {item.title}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeUp>

        {/* Bottom Banner: Clean Editorial Callout */}
        <FadeUp delay={0.2} yOffset={16}>
          <div className="p-8 sm:p-10 rounded-3xl glass-navy border border-slate-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center lg:text-left max-w-2xl">
              <h4 className="text-xl sm:text-2xl font-extrabold text-white">
                Precisa de apoio técnico especializado em QSMS?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Nossa equipe está pronta para avaliar a realidade da sua empresa e propor soluções práticas e definitivas.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-8 py-3.5 rounded-2xl bg-navy-950 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg border border-amber-500/30 hover:bg-emerald-600 hover:border-emerald-500 transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2.5 group cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-white fill-white shrink-0" />
              <span>Falar com Consultor</span>
              <ChevronsRight className="w-4 h-4 text-amber-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
