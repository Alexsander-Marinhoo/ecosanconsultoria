import React from 'react';
import { ShieldCheck, Users, Zap, TrendingUp, Award, MapPin } from 'lucide-react';
import FadeUp from './FadeUp';
import WhatsAppIcon from './WhatsAppIcon';

export default function Differentials() {
  const whatsappUrl = "https://wa.me/5521964199750?text=Ol%C3%A1%2C%20gostaria%20de%20entender%20mais%20sobre%20os%20diferenciais%20da%20Ecosan.";

  const differentialsList = [
    {
      icon: Users,
      title: 'Equipe Multidisciplinar Própria',
      description: 'Engenheiros de Segurança, Higienistas Ocupacionais e Médicos do Trabalho com vasta experiência em grandes empresas e indústrias.',
    },
    {
      icon: TrendingUp,
      title: 'Redução Real de Custos SST',
      description: 'Análise criteriosa de FAP/RAT e periculosidade para mitigar alíquotas tributárias e reduzir passivos trabalhistas.',
    },
    {
      icon: ShieldCheck,
      title: 'Conformidade Legal & eSocial',
      description: 'Garantia total de adequação às NRs do Ministério do Trabalho e envio correto dos eventos de SST no portal eSocial.',
    },
    {
      icon: MapPin,
      title: 'Agilidade & Proximidade Regional',
      description: 'Sede estratégica em Volta Redonda | RJ, proporcionando atendimento presencial ágil em todo o estado fluminense.',
    },
    {
      icon: Zap,
      title: 'Medições Ambientais de Alta Precisão',
      description: 'Equipamentos calibrados e certificados de acordo com as normas da NHO/FUNDACENTRO e NIOSH.',
    },
    {
      icon: Award,
      title: 'Auditorias SGI ISO Certificadas',
      description: 'Profissionais habilitados em auditorias de Sistemas de Gestão Integrados (ISO 9001, ISO 14001 e ISO 45001).',
    },
  ];

  return (
    <section id="diferenciais" className="py-24 bg-navy-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeUp delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-7">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 mb-3 block">
                ✳ Nossos Diferenciais
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Por que escolher a <span className="text-gold-gradient">Ecosan Engenharia</span>?
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Combinamos rigor técnico de engenharia com visão estratégica de negócios para proteger sua empresa e otimizar seus resultados.
              </p>
            </div>
          </div>
        </FadeUp>

        {/* Grid of Differentials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentialsList.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div
                key={index}
                className="glass-navy p-8 rounded-3xl border border-amber-500/20 shadow-md"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-6 text-amber-400 shadow-inner">
                  <IconComp className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-16 p-8 rounded-3xl glass-navy border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-extrabold text-white mb-1">
              Precisa de adequação urgente em QSMS ou Laudos?
            </h4>
            <p className="text-xs text-slate-300">
              Nossa equipe técnica realiza diagnósticos expressos para demandas urgentes do Ministério do Trabalho e eSocial.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-navy-950 text-white border border-amber-500/30 font-extrabold text-xs uppercase tracking-wider shadow-lg hover:bg-emerald-600 hover:border-emerald-500 transition-all flex items-center justify-center gap-2.5"
          >
            <WhatsAppIcon className="w-4 h-4 text-white fill-white shrink-0" />
            <span>Falar com Engenheiro Agora</span>
          </a>
        </div>

      </div>
    </section>
  );
}
