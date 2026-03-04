/// <mls fileReference="_102031_/l2/www/pt/corporate.ts" enhancement="_102020_enhancementAura"/>

 import { html } from 'lit'; 
 import { customElement } from 'lit/decorators.js';
 import { CollabLitElement } from '/_100554_/l2/collabLitElement.js';

 @customElement('www--pt--corporate-102031')
 export class CorporatePt102031 extends CollabLitElement {
    
     private _goBack() {
         window.history.back();
     }

     render() {
         return html`
         <div class="bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300 min-h-screen flex flex-col antialiased font-inter">

             <nav class="p-6 border-b border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950 sticky top-0 z-50">
                 <div class="max-w-6xl mx-auto flex justify-between items-center font-inter">
                     <div class="flex items-center text-2xl font-bold tracking-tight">
                         <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ0cmFuc3BhcmVudCIgLz4KICA8dGV4dCB4PSIzMCIgeT0iNTYiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjcyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzQyODVGNCI+QzwvdGV4dD4KICA8dGV4dCB4PSI0MCIgeT0iNDAiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjM4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0VBNDMzNSI+YzwvdGV4dD4KPC9zdmc+Cg==" 
                              alt="C" class="h-10 -mt-1.5 inline-block align-middle">ollab.codes
                     </div>
                     <button @click="${this._goBack}" class="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline bg-transparent border-none cursor-pointer">Voltar</button>
                 </div>
             </nav>

             <header class="py-24 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 font-inter">
                 <div class="max-w-4xl mx-auto px-6">
                     <h1 class="text-xs font-bold uppercase tracking-[0.4em] text-blue-600 mb-4">Entidade Corporativa</h1>
                     <h2 class="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-gray-900 dark:text-white">Collab Engine Inc.</h2>
                     <p class="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-3xl text-inter">
                         A arquitetura por trás da próxima geração de inteligência de negócios e criação automatizada de software.
                     </p>
                 </div>
             </header>

             <main class="flex-grow flex flex-col items-center px-6 py-20 font-inter text-inter">
                 <div class="max-w-2xl w-full">
                     
                     <div class="flex justify-center md:justify-start mb-12 font-inter">
                         <div class="inline-flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-6 py-2 rounded-full text-sm font-semibold border border-blue-100 dark:border-blue-800/30">
                             <span class="relative flex h-3 w-3 text-inter">
                                 <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                 <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                             </span>
                             Roadmap corporativo em desenvolvimento
                         </div>
                     </div>

                     <h3 class="text-3xl font-bold mb-6 tracking-tight text-inter">Nossa Missão Principal</h3>
                     <p class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-12 font-inter">
                         A Collab Engine Inc. é mais do que uma plataforma; é uma visão de como a tecnologia deve servir aos negócios. Estamos construindo as ferramentas que permitirão a cada organização manifestar sua lógica em software com zero fricção técnica.
                     </p>

                     <div class="grid md:grid-cols-2 gap-8 mb-20 font-inter">
                         <div class="p-8 rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
                             <h4 class="text-blue-600 font-bold uppercase text-xs tracking-widest mb-3">Visão</h4>
                             <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                 Estabelecer o padrão global para arquitetura de software impulsionada por IA, onde a intenção é o único requisito.
                             </p>
                         </div>
                         <div class="p-8 rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm text-inter">
                             <h4 class="text-blue-600 font-bold uppercase text-xs tracking-widest mb-3">Compromisso</h4>
                             <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                 Soberania de dados e transparência operacional para cada empresa que se une ao ecossistema Collab.
                             </p>
                         </div>
                     </div>

                     <div class="text-center p-12 bg-gray-900 dark:bg-black rounded-3xl text-white shadow-xl font-inter">
                         <h4 class="text-xl font-bold mb-4 tracking-tight">Consultas Estratégicas e de Investidores</h4>
                         <p class="text-gray-400 mb-8 text-sm">Governança corporativa detalhada e roadmaps estratégicos estarão disponíveis em breve para parceiros autorizados.</p>
                         <a href="mailto:contact@collab.codes" class="text-2xl font-bold hover:text-blue-400 transition underline underline-offset-8 decoration-blue-500/50">
                             contact@collab.codes
                         </a>
                     </div>
                 </div>
             </main>

             <footer class="py-12 border-t border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950 font-inter">
                 <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 tracking-[0.2em] font-medium uppercase font-inter">
                     <p>&copy; 2026 Collab Engine Inc.</p>
                     <div class="flex gap-8">
                         <a href="./terms.html" class="hover:text-blue-600 transition">Termos</a>
                         <a href="./policy.html" class="hover:text-blue-600 transition">Privacidade</a>
                     </div>
                 </div>
             </footer>
         </div>
         `;
     }
 }