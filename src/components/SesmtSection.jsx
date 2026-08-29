import React from 'react';
import { 
  Users, 
  ShieldCheck, 
  Factory, 
  ClipboardCheck, 
  Clock, 
  MessageSquare, 
  Sparkles, 
  Building2, 
  ChevronsRight,
  UserCheck,
  Zap,
  FileCheck2,
  Briefcase,
  HardHat
} from 'lucide-react';
import FadeUp from './FadeUp';
import WhatsAppIcon from './WhatsAppIcon';

export default function SesmtSection() {
  const whatsappUrl = "https://wa.me/5521964199750?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20proposta%20para%20Terceiriza%C3%A7%C3%A3o%20de%20SESMT%20e%20M%C3%A3o%20de%20Obra%20Especializada.";

  const whyHireList = [
    {
      icon: UserCheck,
      title: 'Profissionais Qualificados e Experientes',
      description: 'Corpo técnico altamente capacitado e com sólida vivência prática em diferentes segmentos e níveis de risco.',
    },
    {
      icon: HardHat,
      title: 'Técnicos de Seg. do Trabalho e Meio Ambiente',
      description: 'Alocação dedicada de TSTs e TMAs habilitados, atualizados com as mais recentes NRs e diretrizes ambientais.',
    },
    {
      icon: Building2,
      title: 'Composição e Estruturação do SESMT',
      description: 'Dimensionamento adequado conforme a NR-04, desde o apoio pontual até a implantação completa do serviço.',
    },
    {
      icon: ShieldCheck,
      title: 'Atendimento às Exigências Legais de SST',
      description: 'Rigorosa conformidade jurídica, mitigação de passivos trabalhistas e envio pontual dos eventos de SST no eSocial.',
    },
    {
      icon: Factory,
      title: 'Experiência em Ambientes Industriais e Operacionais',
      description: 'Domínio de rotinas em indústrias de alta complexidade, plantas químicas, siderurgia, mineração, logística e obras.',
    },
    {
      icon: ClipboardCheck,
      title: 'Gestão de Riscos, Inspeções e Treinamentos',
      description: 'Apoio contínuo no chão de fábrica com inspeções ativas, emissão de APRs/PTs, DDS, diálogos diários e documentação.',
    },
    {
      icon: Clock,
      title: 'Flexibilidade Contratual Sob Demanda',
      description: 'Modelos ágeis para contratos temporários, paradas de manutenção programadas, projetos específicos ou operações contínuas.',
    },
    {
      icon: Zap,
      title: 'Eficiência e Redução de Sobrecarga Interna',
      description: 'Sua empresa foca no core business enquanto garantimos a gestão operacional e a excelência em SSMA.',
    },
  ];

  const availableRoles = [
    {
      title: 'Técnicos de Segurança do Trabalho (TST)',
      desc: 'Atuação direta no campo, emissão de permissões, inspeção de EPIs/EPCs e auditorias de conformidade com as NRs.',
    },
    {
      title: 'Técnicos de Meio Ambiente (TMA)',
      desc: 'Controle de resíduos (PGRS), monitoramento de efluentes, condicionantes de licenças e atendimento a órgãos ambientais.',
    },
    {
      title: 'Especialistas em SST & QSMS',
      desc: 'Supervisão técnica, elaboração de inventários de riscos, coordenação de brigadas e suporte estratégico à liderança.',
    }
  ];

  return (
    <section id="sesmt" className="py-24 bg-navy-950 text-white relative overflow-hidden border-t border-amber-500/20">
      {/* Ambient Decorative Lighting */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeUp delay={0} yOffset={16}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-7">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 mb-3 block">
                ✳ Alocação & Terceirização
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Terceirização de SESMT e <span className="text-gold-gradient">Mão de Obra Especializada</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Profissionais qualificados para fortalecer a Segurança, Saúde e Meio Ambiente (SSMA) da sua empresa com agilidade e respaldo técnico.
              </p>
            </div>
          </div>
        </FadeUp>

        {/* Narrative & Modality Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Main Overview Card */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <FadeUp delay={0.08} yOffset={16} className="h-full">
              <div className="glass-navy p-8 sm:p-10 rounded-3xl border border-amber-500/30 shadow-2xl h-full flex flex-col justify-between space-y-6">
                
                <div className="space-y-5">
                  <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        Equipe Qualificada para sua Operação
                      </h3>
                      <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                        Flexibilidade, Rigor Técnico e Conformidade Legal
                      </p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    Conte com uma equipe qualificada para atender às demandas de <strong className="text-white">SESMT, Segurança do Trabalho e Meio Ambiente</strong>, com profissionais capacitados e experiência consolidada em diferentes segmentos industriais e operacionais.
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    Disponibilizamos <strong className="text-amber-400">Técnicos de Segurança do Trabalho</strong>, <strong className="text-amber-400">Técnicos de Meio Ambiente</strong> e <strong className="text-white">profissionais especializados em SST e QSMS</strong>, rigorosamente selecionados de acordo com o perfil, porte e grau de risco da sua operação.
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    Nossa atuação pode contemplar desde a disponibilização de profissionais para compor sua equipe até a <strong className="text-white font-semibold">terceirização estruturada do SESMT</strong>, proporcionando maior eficiência, controle e segurança na gestão das obrigações legais e dos processos de SSMA.
                  </p>
                </div>

                {/* Badges / Highlights Summary */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80 text-center">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-amber-400 font-extrabold text-sm mb-0.5">NR-04 & NRs</div>
                    <div className="text-[11px] text-slate-400 font-medium">Dimensionamento Legal</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-amber-400 font-extrabold text-sm mb-0.5">Sob Demanda</div>
                    <div className="text-[11px] text-slate-400 font-medium">Contratos Flexíveis</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-amber-400 font-extrabold text-sm mb-0.5">Zero Passivos</div>
                    <div className="text-[11px] text-slate-400 font-medium">Gestão & Conformidade</div>
                  </div>
                </div>

              </div>
            </FadeUp>
          </div>

          {/* Right Column: Alocação de Perfis Específicos */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <FadeUp delay={0.12} yOffset={16} className="h-full flex flex-col gap-4">
              
              <div className="px-2">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  Perfis Especializados Prontos para Alocação
                </span>
              </div>

              {availableRoles.map((role, idx) => (
                <div 
                  key={idx} 
                  className="glass-navy p-5 rounded-2xl border border-amber-500/20 shadow-md flex-1 flex flex-col justify-center"
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h4 className="text-sm sm:text-base font-extrabold text-white">
                      {role.title}
                    </h4>
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                      <Briefcase className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {role.desc}
                  </p>
                </div>
              ))}

              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 flex items-center gap-3">
                <FileCheck2 className="w-5 h-5 text-amber-400 shrink-0" />
                <p className="text-xs text-slate-300">
                  Supervisão técnica contínua com respaldo do Responsável Técnico QSMS da Ecosan.
                </p>
              </div>

            </FadeUp>
          </div>

        </div>

        {/* Section Sub-Title: "Por que contratar nossa equipe?" */}
        <FadeUp delay={0.15} yOffset={16}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-7">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 mb-2 block">
                ✳ Benefícios Exclusivos
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Por que Contratar a <span className="text-gold-gradient">Nossa Equipe de SESMT</span>?
              </h3>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                Estrutura completa, rápida mobilização e segurança técnica para elevar o padrão preventivo da sua empresa.
              </p>
            </div>
          </div>
        </FadeUp>

        {/* 8 Why Hire Cards Grid */}
        <FadeUp delay={0.18} yOffset={16}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {whyHireList.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="glass-navy p-6 rounded-3xl border border-slate-800 shadow-md flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-5 text-amber-400 shadow-inner">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h4 className="text-base font-bold text-white mb-2.5 leading-snug">
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

        {/* Closing Conversion Banner / Pitch */}
        <FadeUp delay={0.2} yOffset={16}>
          <div className="relative rounded-3xl p-8 sm:p-12 glass-navy border border-amber-500/40 shadow-2xl overflow-hidden text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Background Glow behind banner */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-amber-500/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 max-w-2xl space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 block">
                ✳ Segurança Jurídica & Operacional
              </span>

              <h4 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Sua empresa precisa de profissionais preparados.
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Nós fornecemos a experiência e a estrutura necessária para apoiar uma gestão de SSMA mais eficiente, segura e alinhada aos requisitos legais.
              </p>

              <div className="pt-2 text-amber-300 font-bold text-sm sm:text-base flex items-center justify-center lg:justify-start gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Terceirize seu SESMT com quem entende de Segurança, Saúde e Meio Ambiente.</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="relative z-10 shrink-0 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-navy-950 text-white font-black text-xs uppercase tracking-wider shadow-2xl border border-amber-500/30 hover:bg-emerald-600 hover:border-emerald-500 transition-all transform hover:-translate-y-1 inline-flex items-center justify-center gap-3 group cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-white fill-white shrink-0" />
                <span>Solicitar Equipe / Terceirização</span>
                <ChevronsRight className="w-4 h-4 text-amber-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </FadeUp>

      </div>
    </section>
  );
}
