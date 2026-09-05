import React from 'react';
import Logo from './Logo';
import { Phone, Mail, MapPin } from 'lucide-react';

function LinkedInIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.49 1.49 0 1 0 0 2.98 1.49 1.49 0 0 0 0-2.98Z"/>
    </svg>
  );
}

export default function Footer() {
  const whatsappUrl = "https://wa.me/5521964199750?text=Ol%C3%A1%2C%20gostaria%20de%20entrar%20em%20contato%20com%20a%20Ecosan.";
  const linkedinUrl = "https://www.linkedin.com/in/ssandroalvess/";
  const developerIgUrl = "https://www.instagram.com/alexsander.code/";

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      if (window.lenisInstance) {
        window.lenisInstance.scrollTo(element, { offset: -80, duration: 1.2 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="rodape" className="bg-navy-950 text-slate-400 text-xs border-t border-amber-500/20 pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Institutional */}
          <div className="lg:col-span-5 text-left">
            <div className="mb-4">
              <Logo size="lg" variant="light" />
            </div>
            
            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              Consultoria e Assessoria Especializada em Engenharia de Segurança do Trabalho, Saúde Ocupacional, Higiene Ocupacional, Meio Ambiente e Gestão Integrada (QSMS).
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="hover:text-amber-400 transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" onClick={(e) => handleNavClick(e, '#sobre')} className="hover:text-amber-400 transition-colors">Sobre a Consultoria</a>
              </li>
              <li>
                <a href="#sesmt" onClick={(e) => handleNavClick(e, '#sesmt')} className="hover:text-amber-400 transition-colors">Terceirização de SESMT & Mão de Obra</a>
              </li>
              <li>
                <a href="#servicos" onClick={(e) => handleNavClick(e, '#servicos')} className="hover:text-amber-400 transition-colors">Segurança do Trabalho & PGR</a>
              </li>
              <li>
                <a href="#servicos" onClick={(e) => handleNavClick(e, '#servicos')} className="hover:text-amber-400 transition-colors">Meio Ambiente & Licenciamento</a>
              </li>
              <li>
                <a href="#servicos" onClick={(e) => handleNavClick(e, '#servicos')} className="hover:text-amber-400 transition-colors">Auditorias SGI (ISO 9001, 14001, 45001)</a>
              </li>
              <li>
                <a href="#diferenciais" onClick={(e) => handleNavClick(e, '#diferenciais')} className="hover:text-amber-400 transition-colors">Gestão Tributária SST & FAP</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-4 text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2">
              Contato Direto
            </h4>

            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>WhatsApp / Tel:</strong> +55 (21) 96419-9750</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:ecosaneng.consultoriadeqsms@gmail.com"
                  className="inline-flex items-center gap-2.5 text-slate-300 hover:text-amber-400 transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>E-mail:</strong> ecosaneng.consultoriadeqsms@gmail.com</span>
                </a>
              </li>

              <li>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>LinkedIn:</strong> San Alves</span>
                </a>
              </li>

              <li className="inline-flex items-center gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span><strong>Atendimento:</strong> Volta Redonda | RJ</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Developer Credits Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Ecosan Consultoria e Assessoria em HSEQ/QSMS. Todos os direitos reservados.</p>
          
          {/* Developer Credit Link to Instagram */}
          <p className="flex items-center gap-1.5">
            <span>Desenvolvido por</span>
            <a
              href={developerIgUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-extrabold text-amber-400 hover:text-amber-300 hover:underline transition-colors inline-flex items-center gap-1"
            >
              <svg className="w-3.5 h-3.5 fill-current text-amber-400" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Alex.Code</span>
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
