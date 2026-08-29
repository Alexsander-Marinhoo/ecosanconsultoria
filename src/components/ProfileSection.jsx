import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Briefcase, 
  Cpu, 
  Camera, 
  ChevronRight,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import FadeUp from './FadeUp';

function LinkedInIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.49 1.49 0 1 0 0 2.98 1.49 1.49 0 0 0 0-2.98Z"/>
    </svg>
  );
}

export default function ProfileSection() {
  /* 
   * FOTO DE PERFIL DO CLIENTE:
   * Foto oficial tratada e upscaled em public/san-alves-portrait.jpg
   */
  const [imgSrc, setImgSrc] = useState('/san-alves-portrait.jpg');
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    if (imgSrc === '/san-alves-portrait.jpg') {
      setImgSrc('/sandroalves.jpg');
    } else {
      setHasError(true);
    }
  };

  // Setores de atuação citados no currículo
  const sectores = [
    'Ambientes Industriais',
    'Logística',
    'Óleo & Gás',
    'Celulose & Papel',
    'Siderurgia',
    'Mineração',
    'Construção Civil',
    'Energia Renovável'
  ];

  // Normas ISO dominadas
  const isoStandards = [
    { code: 'ISO 9001', name: 'Gestão da Qualidade' },
    { code: 'ISO 14001', name: 'Gestão Ambiental' },
    { code: 'ISO 45001', name: 'Saúde e Segurança Ocupacional' },
    { code: 'ISO 19011', name: 'Auditoria de Sistemas de Gestão' },
    { code: 'ISO 31000', name: 'Gestão de Riscos' }
  ];

  // Metodologias de análise de risco
  const methodologies = [
    'HAZOP', 'HAZID', 'What-If', 'LOPA', 'BowTie', 'APR', 'FMEA'
  ];

  // Programas legais e passivos
  const legalFrameworks = [
    'Responsabilidade Técnica', 'Auditorias Integradas', 'eSocial', 
    'FAP & RAT', 'GILRAT', 'Investigação de Acidentes', 'Programas Legais'
  ];

  return (
    <section id="especialista" className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800/80">
      {/* Dynamic Background Glow Effects */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeUp delay={0} yOffset={16}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-7">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 mb-3 block">
                ✳ Responsável Técnico & Liderança
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Quem Está à Frente das <span className="text-gold-gradient">Nossas Soluções</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Mais de 17 anos de excelência técnica em QSMS, Higiene Ocupacional e Engenharia de Segurança em grandes indústrias do Brasil.
              </p>
            </div>
          </div>
        </FadeUp>

        {/* Main Content Grid: Left Photo Card / Right Bio Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: Profile Photo Avatar & Quick Stats */}
          <div className="lg:col-span-5 flex flex-col items-center lg:sticky lg:top-28">
            <FadeUp delay={0.1} yOffset={20} className="w-full max-w-md">
              
              {/* Executive Profile Card */}
              <div className="relative group p-6 sm:p-8 rounded-3xl glass-navy border border-amber-500/30 shadow-2xl flex flex-col items-center text-center">
                
                {/* Years Experience Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-gradient text-slate-950 font-black text-xs shadow-md mb-2">
                  <Award className="w-3.5 h-3.5" />
                  <span>+17 Anos de Experiência</span>
                </div>

                {/* Circular Profile Avatar with Golden Gradient Ring */}
                <div className="relative my-4">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-amber-300 to-amber-600 shadow-2xl shadow-amber-500/20 relative group">
                    <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-navy-950 flex items-center justify-center">
                      {!hasError ? (
                        <img 
                          src={imgSrc} 
                          alt="San Alves - Responsável Técnico QSMS"
                          onError={handleImageError}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-slate-900 text-slate-400">
                          <Camera className="w-10 h-10 text-amber-400/60 mb-1" />
                          <span className="text-xs font-semibold text-slate-200">Foto de Perfil</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Active Status Badge */}
                  <div className="absolute bottom-2 right-2 bg-navy-950 p-1.5 rounded-full border border-amber-500/40 shadow-lg" title="Consultor Ativo">
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 animate-pulse"></div>
                  </div>
                </div>

                {/* Profile Identity Details */}
                <div className="space-y-1 mb-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block">
                    Responsável Técnico & Diretor QSMS
                  </span>
                  <h3 className="text-2xl font-extrabold text-white">
                    San Alves
                  </h3>
                  <p className="text-xs text-slate-400">
                    Engenheiro Responsável & Consultor Especialista
                  </p>
                </div>

                {/* LinkedIn Badge / Direct Link Button */}
                <a
                  href="https://www.linkedin.com/in/ssandroalvess/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-3 bg-slate-900/90 hover:bg-[#0077b5]/20 rounded-xl border border-slate-800 hover:border-[#0077b5]/50 text-center flex items-center justify-center gap-2 text-xs font-semibold text-slate-200 hover:text-sky-300 transition-all group shadow-md mb-4"
                >
                  <LinkedInIcon className="w-4 h-4 text-[#0077b5] shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Perfil Oficial no LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                </a>

                {/* Quick Metric Stats Grid */}
                <div className="grid grid-cols-2 gap-3 w-full pt-4 border-t border-slate-800/80">
                  <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-800 text-center">
                    <div className="text-xl font-extrabold text-amber-400">17+</div>
                    <div className="text-[10px] font-semibold text-slate-300 uppercase tracking-wide">Anos de Atuação</div>
                  </div>
                  <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-800 text-center">
                    <div className="text-xl font-extrabold text-amber-400">100%</div>
                    <div className="text-[10px] font-semibold text-slate-300 uppercase tracking-wide">Conformidade Legal</div>
                  </div>
                </div>

              </div>

            </FadeUp>
          </div>

          {/* RIGHT COLUMN: Full Curriculum Bio & Structured Competencies */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Bio Narrative Card */}
            <FadeUp delay={0.15} yOffset={20}>
              <div className="glass-navy p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-5 relative">
                
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5 border-b border-slate-800 pb-4">
                  <Briefcase className="w-6 h-6 text-amber-400 shrink-0" />
                  <span>Trajetória Profissional e Liderança</span>
                </h3>

                {/* Paragraph 1 */}
                <p className="text-base text-slate-300 leading-relaxed">
                  Atuo há mais de <strong className="text-amber-400 font-bold">17 anos em Segurança do Trabalho, Higiene Ocupacional, QSMS, Gestão de Riscos e Sistemas de Gestão Integrados</strong> em ambientes de alta complexidade como indústrias, logística, óleo e gás, celulose e papel, siderurgia, mineração, construção civil e energia renovável.
                </p>

                {/* Paragraph 2 */}
                <p className="text-base text-slate-300 leading-relaxed">
                  Possuo sólida experiência em <strong className="text-white">Responsabilidade Técnica</strong>, conformidade regulatória, auditorias rigorosas, gestão de riscos ocupacionais e ambientais, investigação de acidentes, programas legais e estratégias para elisão de passivos trabalhistas e tributários (<strong className="text-white">eSocial, FAP, RAT e GILRAT</strong>).
                </p>

                {/* Paragraph 3 */}
                <p className="text-base text-slate-300 leading-relaxed">
                  Tenho sólida atuação com normas internacionais (<strong className="text-amber-300 font-semibold">ISO 9001, ISO 14001, ISO 45001, ISO 19011 e ISO 31000</strong>) e metodologias avançadas de análise de riscos (<strong className="text-amber-300 font-semibold">HAZOP, HAZID, What-If, LOPA, BowTie, APR e FMEA</strong>).
                </p>

                {/* Synthesis Conclusion */}
                <div className="pt-2 border-t border-slate-800/80">
                  <p className="text-sm text-slate-300 italic flex items-start gap-2">
                    <span className="text-amber-400 text-lg font-serif">“</span>
                    <span>Minha trajetória combina liderança técnica, melhoria contínua, governança corporativa, rigorosa conformidade e o fortalecimento de uma cultura genuína de segurança.</span>
                  </p>
                </div>

              </div>
            </FadeUp>

            {/* Setores de Atuação */}
            <FadeUp delay={0.2} yOffset={20}>
              <div className="glass-navy p-6 rounded-3xl border border-slate-800">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-amber-400 mb-4 flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  <span>Setores de Atuação & Ambientes Operacionais</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {sectores.map((sec, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-slate-900 text-slate-200 text-xs font-semibold border border-slate-800 flex items-center gap-1.5 hover:border-amber-500/40 transition-colors"
                    >
                      <ChevronRight className="w-3 h-3 text-amber-400" />
                      {sec}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Normas ISO & Metodologias Grid */}
            <FadeUp delay={0.25} yOffset={20}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* ISO Standards */}
                <div className="glass-navy p-5 rounded-3xl border border-slate-800">
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Sistemas de Gestão & ISO</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {isoStandards.map((iso, idx) => (
                      <li key={idx} className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800/60">
                        <span className="font-extrabold text-amber-300">{iso.code}</span>
                        <span className="text-[11px] text-slate-400">{iso.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Methodologies */}
                <div className="glass-navy p-5 rounded-3xl border border-slate-800">
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Metodologias de Análise de Risco</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {methodologies.map((method, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-300 text-xs font-bold border border-amber-500/20"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-slate-800">
                    <span className="text-[11px] font-bold text-slate-400 block mb-2 uppercase">Gestão Tributária & Legais:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {legalFrameworks.map((framework, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-[11px]">
                          {framework}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </FadeUp>

          </div>

        </div>

      </div>
    </section>
  );
}
