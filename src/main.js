import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<div class="relative min-h-screen overflow-hidden flex flex-col justify-between">
  <!-- Glowing Background Orbs -->
  <div class="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>
  <div class="absolute bottom-[-10%] right-[15%] w-[450px] h-[450px] bg-gradient-to-tr from-purple-600/20 to-pink-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>

  <!-- Header / Navigation -->
  <header class="relative z-10 border-b border-slate-800/80 glass-card px-6 py-4">
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="p-2 rounded-xl bg-slate-900/80 border border-slate-800 shadow-inner flex items-center gap-2">
          <img src="${viteLogo}" class="w-6 h-6" alt="Vite Logo" />
          <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Tailwind v4</span>
        </div>
        <h1 class="text-lg font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          Vite + Vanilla JS
        </h1>
      </div>
      
      <div class="flex items-center gap-4">
        <a href="https://tailwindcss.com/docs/v4-beta" target="_blank" rel="noopener noreferrer" 
           class="text-xs font-medium text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5">
          <svg class="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
          </svg>
          Tailwind v4 Docs
        </a>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer" 
           class="text-xs font-medium text-slate-400 hover:text-purple-400 transition-colors">
          Vite Docs
        </a>
      </div>
    </div>
  </header>

  <!-- Hero Content -->
  <main class="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center flex-1 flex flex-col justify-center items-center">
    
    <!-- Hero Badges -->
    <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card border-slate-700/50 mb-8 animate-bounce-slow">
      <span class="flex h-2 w-2 relative">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span class="text-xs font-medium text-slate-300">
        Tailwind CSS <span class="text-cyan-400 font-semibold">v4.0</span> + <span class="text-purple-400 font-semibold">@tailwindcss/vite</span> configurado com sucesso!
      </span>
    </div>

    <!-- Title & Subtitle -->
    <h2 class="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 max-w-3xl leading-tight">
      Desenvolva com extrema velocidade usando <span class="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">Vite & Tailwind v4</span>
    </h2>
    <p class="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
      Seu ambiente de desenvolvimento rápido em HTML Vanilla com JavaScript e o compilador de alto desempenho Tailwind CSS v4 via plugin oficial do Vite.
    </p>

    <!-- Interactive Elements -->
    <div class="flex flex-col sm:flex-row items-center gap-4 mb-14">
      <button id="counter" type="button" 
              class="px-6 py-3.5 rounded-xl glass-card glass-card-hover text-sm font-semibold text-slate-200 cursor-pointer flex items-center justify-center">
      </button>

      <div class="glass-card px-5 py-3 rounded-xl flex items-center gap-3 border-slate-800">
        <code class="text-xs font-mono text-cyan-300">src/main.js</code>
        <span class="text-xs text-slate-500">| HMR Ativo</span>
      </div>
    </div>

    <!-- Feature Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left w-full">
      
      <div class="glass-card glass-card-hover p-6 rounded-2xl">
        <div class="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
          <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 class="text-base font-bold text-white mb-2">Build Ultra-Rápido</h3>
        <p class="text-xs text-slate-400 leading-relaxed">
          Sem arquivos de configuração pesados. Tailwind v4 usa a nova engine em Rust/JS nativa para Vite.
        </p>
      </div>

      <div class="glass-card glass-card-hover p-6 rounded-2xl">
        <div class="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
          <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        </div>
        <h3 class="text-base font-bold text-white mb-2">Sem postcss.config</h3>
        <p class="text-xs text-slate-400 leading-relaxed">
          Tudo configurado diretamente em <code class="text-purple-300">vite.config.js</code> através do plugin <code class="text-purple-300">@tailwindcss/vite</code>.
        </p>
      </div>

      <div class="glass-card glass-card-hover p-6 rounded-2xl">
        <div class="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
          <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 class="text-base font-bold text-white mb-2">Import Simplificado</h3>
        <p class="text-xs text-slate-400 leading-relaxed">
          Basta adicionar <code class="text-emerald-300">@import "tailwindcss";</code> no seu arquivo CSS principal para carregar todas as camadas.
        </p>
      </div>

    </div>
  </main>

  <!-- Footer -->
  <footer class="relative z-10 border-t border-slate-800/80 glass-card px-6 py-4 text-center">
    <p class="text-xs text-slate-500">
      Projeto Vite HTML + JavaScript Vanilla com Tailwind CSS v4 pronto para uso.
    </p>
  </footer>
</div>
`

setupCounter(document.querySelector('#counter'))
