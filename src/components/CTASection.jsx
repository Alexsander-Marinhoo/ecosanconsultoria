import React from 'react';
import { PhoneCall, ShieldCheck, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function CTASection() {
  const whatsappUrl = "https://wa.me/5521964199750?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20técnica%20de%20diagn%C3%B3stico%20em%20QSMS.";

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-navy-950 via-navy-900 to-slate-950 text-white relative overflow-hidden">
      {/* Glowing Orbs */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-navy p-10 sm:p-14 rounded-3xl border border-amber-500/40 shadow-2xl text-center relative overflow-hidden">
          
          {/* Clean Top Label */}
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 block mb-4">
            ✳ Diagnóstico Técnico Especializado
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
            Pronto para garantir <span className="text-gold-gradient">100% de conformidade em QSMS</span> e reduzir riscos?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Entre em contato direto com o Eng. San Alves. Avaliamos a situação documental e operacional da sua empresa para propor soluções eficientes e econômicas.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-navy-950 text-white font-extrabold text-sm uppercase tracking-wider shadow-xl border border-amber-500/30 hover:bg-emerald-600 hover:border-emerald-500 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3"
            >
              <WhatsAppIcon className="w-5 h-5 text-white fill-white shrink-0" />
              <span>Solicitar Diagnóstico via WhatsApp</span>
            </a>

            <a
              href="tel:+5521964199750"
              className="w-full sm:w-auto px-7 py-4 rounded-xl glass-navy hover:bg-navy-850 text-slate-200 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-amber-500/30 transition-all"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Ligar: (21) 96419-9750</span>
            </a>
          </div>

          {/* Guarantee Footer inside Card */}
          <div className="mt-10 pt-6 border-t border-slate-800 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              Atendimento em todo o RJ
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              Engenharia Responsável CREA
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              Proposta Técnica sem Compromisso
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
