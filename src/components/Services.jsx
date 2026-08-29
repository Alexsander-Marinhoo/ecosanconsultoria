import React, { useState, useEffect, useRef } from 'react';
import { 
  HardHat, 
  Leaf, 
  SlidersHorizontal, 
  Scale, 
  CheckCircle2, 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  MoveRight, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import FadeUp from './FadeUp';
import WhatsAppIcon from './WhatsAppIcon';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const tabsRef = useRef(null);

  // Dynamic initial count: 3 on Mobile (< 1024px), 6 on Desktop (>= 1024px)
  const getInitialCount = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024 ? 6 : 3;
    }
    return 6;
  };

  const [visibleCount, setVisibleCount] = useState(getInitialCount);

  useEffect(() => {
    const handleResize = () => {
      const targetCount = window.innerWidth >= 1024 ? 6 : 3;
      if (visibleCount === 3 || visibleCount === 6) {
        setVisibleCount(targetCount);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [visibleCount]);

  const categories = [
    { id: 'all', label: 'Todos os Serviços' },
    { id: 'seguranca', label: 'Segurança & Higiene Ocupacional', icon: HardHat },
    { id: 'meio-ambiente', label: 'Meio Ambiente', icon: Leaf },
    { id: 'auditorias', label: 'Auditorias SGI (ISO)', icon: SlidersHorizontal },
    { id: 'tributaria', label: 'Gestão Tributária SST', icon: Scale },
  ];

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setVisibleCount(window.innerWidth >= 1024 ? 6 : 3);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setVisibleCount(window.innerWidth >= 1024 ? 6 : 3);
  };

  const scrollTabs = (direction) => {
    if (tabsRef.current) {
      const scrollAmount = direction === 'left' ? -220 : 220;
      tabsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const servicesList = [
    // Segurança do Trabalho & Higiene
    {
      id: 'pgr',
      category: 'seguranca',
      categoryName: 'Segurança do Trabalho',
      title: 'PGR — Programa de Gerenciamento de Riscos',
      description: 'Elaboração completa do inventário de riscos ocupacionais e plano de ação conforme a nova NR-01.',
      details: ['Inventário de Riscos', 'Plano de Ação Contínuo', 'Matriz de Risco Ocupacional'],
    },
    {
      id: 'pcmso',
      category: 'seguranca',
      categoryName: 'Saúde Ocupacional',
      title: 'PCMSO — Controle Médico de Saúde Ocupacional',
      description: 'Planejamento e coordenação de exames admissionais, periódicos e demissionais conforme NR-07.',
      details: ['Cronograma de Exames', 'Atestado de Saúde (ASO)', 'Relatório Analítico Anual'],
    },
    {
      id: 'ltcat',
      category: 'seguranca',
      categoryName: 'Segurança & Previdência',
      title: 'LTCAT — Laudo Técnico Ambientais',
      description: 'Laudo conclusivo para comprovação de aposentadoria especial perante o INSS / eSocial.',
      details: ['Avaliação de Agentes Nocivos', 'Enquadramento Previdenciário', 'Adequação eSocial'],
    },
    {
      id: 'avaliacoes-ambientais',
      category: 'seguranca',
      categoryName: 'Higiene Ocupacional',
      title: 'Avaliações Ambientais Quantitativas',
      description: 'Medição precisa de ruído ocupacional, dosimetrias, estresse térmico (calor), vapores e químicos.',
      details: ['Dosimetria de Ruído', 'IBUTG (Calor)', 'Amostragem Química NHO/NIOSH'],
    },
    {
      id: 'aet-pca-ppr',
      category: 'seguranca',
      categoryName: 'Ergonomia & Programas',
      title: 'AET, PCA e PPR',
      description: 'Análise Ergonômica do Trabalho (NR-17), Programa de Conservação Auditiva e Proteção Respiratória.',
      details: ['Adequação Postural NR-17', 'Conservação Auditiva', 'Seleção de EPIs Respiratórios'],
    },
    {
      id: 'apr-hazop',
      category: 'seguranca',
      categoryName: 'Análise de Riscos',
      title: 'APR & HAZOP — Gerenciamento de Riscos',
      description: 'Análise Prévia de Risco e metodologia HAZOP para processos industriais de alto risco.',
      details: ['Mapeamento Processual', 'Prevenção de Sinistros', 'Permissão de Trabalho (PT)'],
    },

    // Meio Ambiente
    {
      id: 'residuos',
      category: 'meio-ambiente',
      categoryName: 'Meio Ambiente',
      title: 'Gerenciamento de Resíduos Sólidos (PGRS)',
      description: 'Elaboração e implementação do Plano de Gerenciamento de Resíduos Industriais e Comerciais.',
      details: ['Classificação NBR 10004', 'Manifesto MTR', 'Destinação Final Licenciada'],
    },
    {
      id: 'licenciamento',
      category: 'meio-ambiente',
      categoryName: 'Licenciamento',
      title: 'Licenciamento Ambiental & Outorgas',
      description: 'Acompanhamento completo de Licença Prévia (LP), de Instalação (LI) e Operação (LO) junto aos órgãos ambientais.',
      details: ['Licença Prévia e Operação', 'Outorga de Água', 'Condicionantes Ambientais'],
    },
    {
      id: 'estudos-impacto',
      category: 'meio-ambiente',
      categoryName: 'Estudos Ambientais',
      title: 'Estudos de Impacto & Monitoramento',
      description: 'Avaliação de impactos ambientais, programas de monitoramento de efluentes e adequação legal.',
      details: ['Relatórios de Impacto', 'Monitoramento de Efluentes', 'Conformidade CONAMA'],
    },

    // Auditorias SGI (ISO)
    {
      id: 'iso-9001',
      category: 'auditorias',
      categoryName: 'SGI & ISO',
      title: 'ISO 9001 — Gestão da Qualidade',
      description: 'Consultoria para implementação, mapeamento de processos e auditoria interna na norma ISO 9001.',
      details: ['Padronização de Processos', 'Auditoria Interna', 'Certificação ISO 9001'],
    },
    {
      id: 'iso-14001',
      category: 'auditorias',
      categoryName: 'SGI & ISO',
      title: 'ISO 14001 — Gestão Ambiental',
      description: 'Estruturação do Sistema de Gestão Ambiental para mitigação de impactos e melhoria contínua.',
      details: ['Levantamento de Aspectos', 'Requisitos Legais Ambientais', 'Auditoria ISO 14001'],
    },
    {
      id: 'iso-45001',
      category: 'auditorias',
      categoryName: 'SGI & ISO',
      title: 'ISO 45001 — Saúde e Segurança Ocupacional',
      description: 'Implementação da norma internacional de saúde e segurança no trabalho com foco em prevenção.',
      details: ['Cultura de Segurança', 'Engajamento de Equipes', 'Auditoria ISO 45001'],
    },

    // Gestão Tributária SST
    {
      id: 'fap-rat',
      category: 'tributaria',
      categoryName: 'Gestão Tributária SST',
      title: 'Gestão & Contestação de FAP e RAT',
      description: 'Auditoria técnica das alíquotas do FAP/RAT para identificação de cobranças indevidas e contestação.',
      details: ['Auditoria de Alíquotas', 'Contestação FAP', 'Nexo Técnico Epidemiológico (NTEP)'],
    },
    {
      id: 'reducao-passivos',
      category: 'tributaria',
      categoryName: 'Passivos & Perícias',
      title: 'Redução de Custos & Assistência Pericial',
      description: 'Acompanhamento em perícias trabalhistas de insalubridade/periculosidade e elisão fiscal de tributos SST.',
      details: ['Assistência Pericial Judicial', 'Quesitamento Técnico', 'Prevenção de Passivos'],
    },
  ];

  const filteredServices = servicesList.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const defaultLimit = typeof window !== 'undefined' && window.innerWidth >= 1024 ? 6 : 3;
  const isCollapsed = filteredServices.length > defaultLimit && visibleCount <= defaultLimit;
  const displayedServices = isCollapsed ? filteredServices.slice(0, defaultLimit) : filteredServices;

  const getWhatsappServiceUrl = (serviceTitle) => {
    return `https://wa.me/5521964199750?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20proposta%20para%20o%20servi%C3%A7o%3A%20${encodeURIComponent(serviceTitle)}`;
  };

  return (
    <section id="servicos" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeUp delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-7">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-500 mb-3 block">
                ✳ Áreas de Atuação & Serviços
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Soluções Especializadas em <span className="text-amber-500">QSMS</span> para sua Empresa
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Navegue pelas nossas áreas de expertise técnica e selecione o serviço necessário para garantir conformidade e segurança jurídica.
              </p>
            </div>
          </div>
        </FadeUp>

        {/* Search Bar & Filter Tabs */}
        <FadeUp delay={0.15}>
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
            
            {/* Category Tabs Wrapper */}
            <div className="relative flex flex-col gap-1.5 w-full lg:w-auto overflow-hidden">
              
              {/* Swipe / Scroll Hint Indicator */}
              <div className="flex items-center justify-between px-1 text-[11px] font-bold text-amber-600 uppercase tracking-wider">
                <span className="inline-flex items-center gap-1.5 animate-pulse">
                  <MoveRight className="w-3.5 h-3.5 text-amber-500" />
                  <span>Deslize ou use as setas para ver todas as áreas</span>
                </span>

                {/* Arrow Controls */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => scrollTabs('left')}
                    className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:bg-amber-500 hover:text-navy-950 flex items-center justify-center transition-colors"
                    title="Rolar para esquerda"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => scrollTabs('right')}
                    className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:bg-amber-500 hover:text-navy-950 flex items-center justify-center transition-colors"
                    title="Rolar para direita"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Scrollable Tabs Row */}
              <div
                ref={tabsRef}
                className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-1.5 px-1 w-full shrink-0 scroll-smooth"
              >
                {categories.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleCategoryChange(tab.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-extrabold tracking-wide uppercase transition-all shrink-0 whitespace-nowrap ${
                      activeCategory === tab.id
                        ? 'bg-gold-gradient text-navy-950 shadow-md scale-[1.02]'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Box */}
            <div className="relative w-full lg:w-72 shrink-0">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Buscar serviço ou laudo (ex: PGR, LTCAT, ISO)..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

          </div>
        </FadeUp>

        {/* Relative Grid Wrapper for Cards & Gradient Cutout Mask */}
        <div className="relative">
          
          {/* Services Cards Grid */}
          <FadeUp delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedServices.map((service) => (
              <div
                key={service.id}
                className="card-executive p-6 rounded-2xl flex flex-col justify-between h-full"
              >
                <div>
                  <span className="text-[11px] font-extrabold text-amber-600 uppercase tracking-wider block mb-3">
                    {service.categoryName}
                  </span>

                  <h3 className="text-base font-extrabold text-slate-900 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 mb-4 leading-relaxed font-normal">
                    {service.description}
                  </p>

                    {/* Details Bullet List */}
                    <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-100">
                      {service.details.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                {/* Request Button */}
                <a
                  href={getWhatsappServiceUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-navy-950 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-md border border-amber-500/20 hover:bg-emerald-600 hover:border-emerald-500 hover:shadow-emerald-900/30 transform hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white fill-white shrink-0" />
                  <span>Solicitar Orçamento</span>
                </a>
              </div>
            ))}
          </div>
        </FadeUp>

          {/* Gradient Overlay & Clickable Floating Text Trigger */}
          {isCollapsed && (
            <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white via-white/95 to-transparent z-20 flex flex-col items-center justify-end pb-4 pointer-events-none">
              <button
                onClick={() => setVisibleCount(filteredServices.length)}
                className="pointer-events-auto flex flex-col items-center gap-2 px-8 py-4 rounded-2xl bg-navy-950 text-amber-400 border border-amber-500/50 hover:bg-navy-900 hover:border-amber-400 shadow-2xl transition-all cursor-pointer group transform hover:-translate-y-1 max-w-sm sm:max-w-md text-center"
              >
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white group-hover:text-amber-300 transition-colors">
                  Clique para ver todos os {filteredServices.length} serviços de QSMS
                </span>
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-400 animate-bounce">
                  <span>Expandir lista de laudos</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
            </div>
          )}

        </div>

        {/* Collapse Button if all cards are currently expanded */}
        {!isCollapsed && filteredServices.length > defaultLimit && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount(defaultLimit)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              <span>Mostrar Menos</span>
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        )}

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-sm text-slate-500 mb-4">Nenhum serviço encontrado para a busca "{searchQuery}".</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); setVisibleCount(defaultLimit); }}
              className="px-4 py-2 rounded-lg bg-gold-gradient text-navy-950 text-xs font-extrabold uppercase shadow-md"
            >
              Limpar Filtros
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
