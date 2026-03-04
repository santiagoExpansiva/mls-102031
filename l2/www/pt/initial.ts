/// <mls fileReference="_102031_/l2/www/pt/initial.ts" enhancement="_102020_enhancementAura"/>

 import { html } from 'lit'; 
 import { customElement } from 'lit/decorators.js';
 import { CollabLitElement } from '/_100554_/l2/collabLitElement.js';

 @customElement('www--pt--initial-102031')
 export class Initial102031 extends CollabLitElement {
    
     // Lógica para o botão de Login (Sign In)
     private _handleSignIn() {
         const params = {
             type: 'iframeL7',
             action: 'login'
         };
         window.parent.postMessage(params, '*');
     }

     render() {
         return html`
         <div class="bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300 min-h-screen flex flex-col antialiased">

             <nav class="p-6 border-b border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950 sticky top-0 z-50">
                 <div class="max-w-6xl mx-auto flex justify-between items-center">
                     <div class="flex items-center gap-2 text-2xl font-bold">
                         <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ0cmFuc3BhcmVudCIgLz4KICA8dGV4dCB4PSIzMCIgeT0iNTYiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjcyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzQyODVGNCI+QzwvdGV4dD4KICA8dGV4dCB4PSI0MCIgeT0iNDAiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjM4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0VBNDMzNSI+YzwvdGV4dD4KPC9zdmc+Cg==" 
                              alt="C" class="h-10 -mt-2">ollab.codes
                     </div>
                     <div class="flex items-center gap-6">
                         <button @click="${this._handleSignIn}" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-full font-semibold transition shadow-md">
                             Entrar
                         </button>
                     </div>
                 </div>
             </nav>

             <main class="flex-grow flex items-center justify-center px-6 py-16">
                 <div class="max-w-4xl w-full">
                     
                     <section class="mb-20">
                         <h1 class="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                             Collab é uma plataforma <span class="text-blue-600 font-black italic">impulsionada por IA</span> para projetar e construir aplicações de software.
                         </h1>
                         <p class="text-xl text-gray-500 dark:text-gray-400 font-light max-w-2xl">
                             Transformando lógica de negócios complexa em software funcional através de inteligência focada em missões.
                         </p>
                     </section>

                     <div class="grid md:grid-cols-2 gap-12 mb-20">
                         <div class="group border-l-2 border-gray-200 dark:border-gray-800 pl-8 hover:border-blue-500 transition-colors">
                             <h2 class="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Utilização de IA</h2>
                             <p class="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                 A Inteligência Artificial está incorporada em nosso núcleo, interpretando a intenção do negócio para gerar arquiteturas robustas e agentes de execução em tempo real.
                             </p>
                             <a href="./ai-features.html" class="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white hover:text-blue-600 group-hover:translate-x-1 transition-all">
                                 Saiba mais <span class="ml-2">→</span>
                             </a>
                         </div>

                         <div class="group border-l-2 border-gray-200 dark:border-gray-800 pl-8 hover:border-blue-500 transition-colors">
                             <h2 class="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Collab Messages</h2>
                             <p class="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                 Um hub de comunicação centralizado onde humanos e agentes de IA interagem, garantindo que cada mensagem se traduza diretamente na evolução do projeto.
                             </p>
                             <a href="./collab-messages.html" class="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white hover:text-blue-600 group-hover:translate-x-1 transition-all">
                                 Saiba mais <span class="ml-2">→</span>
                             </a>
                         </div>
                     </div>

                     <section class="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                         <div class="flex flex-col md:flex-row justify-between gap-12">
                             <div class="max-w-xl">
                                 <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Sobre a Collab Engine Inc.</h2>
                                 <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                     Somos uma empresa de software construindo ferramentas de desenvolvimento de próxima geração impulsionadas por inteligência artificial. Nossa missão é diminuir a distância entre a visão e a execução.
                                 </p>
                                 <a href="./corporate.html" class="text-blue-600 dark:text-blue-400 font-semibold hover:underline decoration-2 underline-offset-4">
                                     Saiba mais sobre a corporação
                                 </a>
                             </div>
                             
                             <div class="border-t md:border-t-0 md:border-l border-gray-100 dark:border-gray-800 pt-8 md:pt-0 md:pl-8 flex flex-col justify-center">
                                 <h3 class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 font-inter">Suporte & Contato</h3>
                                 <a href="mailto:contact@collab.codes" class="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 transition tracking-tight">
                                     contact@collab.codes
                                 </a>
                             </div>
                         </div>
                     </section>
                 </div>
             </main>

             <footer class="py-10 border-t border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950 mt-auto">
                 <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 tracking-widest uppercase font-inter">
                     <p>&copy; 2026 Collab Engine Inc.</p>
                     <div class="flex gap-8">
                         <a href="./terms.html" class="hover:text-blue-600 transition">Termos de Serviço</a>
                         <a href="./privacy.html" class="hover:text-blue-600 transition">Política de Privacidade</a>
                     </div>
                 </div>
             </footer>
         </div>
         `;
     }
 }