/// <mls fileReference="_102031_/l2/www/pt/collabMessages.ts" enhancement="_102020_enhancementAura"/>

 import { html } from 'lit'; 
 import { customElement } from 'lit/decorators.js';
 import { CollabLitElement } from '/_100554_/l2/collabLitElement.js';

 @customElement('www--pt--collab-messages-102031')
 export class CollabMessagesPt102031 extends CollabLitElement {
    
     private _goBack() {
         window.history.back();
     }

     render() {
         return html`
         <div class="bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300 antialiased font-inter min-h-screen flex flex-col">

             <nav class="p-6 border-b border-gray-100 dark:border-gray-900 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md sticky top-0 z-50">
                 <div class="max-w-6xl mx-auto flex justify-between items-center text-inter">
                     <div class="flex items-center text-xl font-bold tracking-tight">
                         <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ0cmFuc3BhcmVudCIgLz4KICA8dGV4dCB4PSIzMCIgeT0iNTYiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjcyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzQyODVGNCI+QzwvdGV4dD4KICA8dGV4dCB4PSI0MCIgeT0iNDAiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjM4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0VBNDMzNSI+YzwvdGV4dD4KPC9zdmc+Cg==" 
                              alt="C" class="h-8 -mt-1 inline-block align-middle">ollab.codes
                     </div>
                     <button @click="${this._goBack}" class="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline bg-transparent border-none cursor-pointer">Voltar</button>
                 </div>
             </nav>

             <header class="py-24 px-6 text-center bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-900">
                 <div class="max-w-4xl mx-auto">
                     <h1 class="text-xs font-bold uppercase tracking-[0.4em] text-teal-500 mb-6 font-inter italic">Hub Operacional</h1>
                     <h2 class="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight text-inter">
                         O Pulso <span class="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent italic">Unificado</span> da sua Empresa.
                     </h2>
                     <p class="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-3xl mx-auto">
                         Vá além do simples chat. Collab Messages é o sistema nervoso onde decisões humanas e execução de IA se encontram para impulsionar as missões diárias da sua companhia.
                     </p>
                 </div>
             </header>

             <main class="max-w-6xl mx-auto px-6 py-20 font-inter text-inter">
                 
                 <div class="grid md:grid-cols-2 gap-16 mb-32 items-center">
                     <div class="order-2 md:order-1">
                         <div class="space-y-10">
                             <div class="flex gap-6 group">
                                 <div class="shrink-0 w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">🏢</div>
                                 <div>
                                     <h4 class="text-xl font-bold mb-2 tracking-tight">Sinergia Intersetorial</h4>
                                     <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Alinhe Financeiro, Vendas e Operações em uma única thread. Sem mais silos, apenas execução coordenada.</p>
                                 </div>
                             </div>
                             <div class="flex gap-6 group">
                                 <div class="shrink-0 w-14 h-14 rounded-2xl bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">🤖</div>
                                 <div>
                                     <h4 class="text-xl font-bold mb-2 tracking-tight">Integração Nativa de IA</h4>
                                     <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Seus Agentes de IA vivem aqui. Peça-lhes para analisar relatórios, disparar fluxos ou atualizar status de projetos instantaneamente.</p>
                                 </div>
                             </div>
                             <div class="flex gap-6 group">
                                 <div class="shrink-0 w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">📈</div>
                                 <div>
                                     <h4 class="text-xl font-bold mb-2 tracking-tight">Da Conversa à Ação</h4>
                                     <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed text-inter">Cada mensagem é um gatilho potencial para atualizações no sistema, garantindo que seu ERP evolua enquanto você fala.</p>
                                 </div>
                             </div>
                         </div>
                     </div>

                     <div class="order-1 md:order-2 bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 shadow-2xl border border-gray-100 dark:border-gray-800 relative">
                         <div class="absolute -top-4 -right-4 bg-teal-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">Operação ao Vivo</div>
                         <div class="space-y-6">
                             <div class="flex flex-col items-start">
                                 <span class="text-[10px] text-gray-500 mb-1 ml-2 uppercase font-bold tracking-tighter">Líder de Operações</span>
                                 <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl rounded-tl-none text-sm max-w-[85%]">
                                     "IA, precisamos priorizar as entregas para a Região A. Verifique a capacidade atual da frota."
                                 </div>
                             </div>
                             <div class="flex flex-col items-end">
                                 <span class="text-[10px] text-blue-500 mb-1 mr-2 uppercase font-bold tracking-tighter italic">Agente de Negócios (IA)</span>
                                 <div class="bg-blue-600 p-4 rounded-2xl rounded-tr-none text-sm max-w-[85%] text-white shadow-md">
                                     "Analisando... Frota está com 85% de ocupação. Otimizei as rotas para incluir mais entregas. Atualizar o dashboard?"
                                 </div>
                             </div>
                             <div class="flex flex-col items-start">
                                 <span class="text-[10px] text-gray-500 mb-1 ml-2 uppercase font-bold tracking-tighter text-inter">Diretor Financeiro</span>
                                 <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl rounded-tl-none text-sm max-w-[85%]">
                                     "Aprovado. Agente, recalcule também a projeção de eficiência de combustível para esta mudança."
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>

                 <div class="text-center mb-16">
                     <h3 class="text-3xl font-black mb-4 tracking-tighter uppercase text-inter">Uma Ferramenta. Todos os Setores.</h3>
                     <p class="text-gray-500 dark:text-gray-400">Collab Messages quebra a barreira técnica para todos.</p>
                 </div>

                 <div class="grid md:grid-cols-3 gap-6 mb-32 text-inter">
                     <div class="p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition">
                         <h5 class="font-bold text-blue-600 mb-2 uppercase text-xs tracking-widest">Gestão</h5>
                         <p class="text-sm text-gray-600 dark:text-gray-400 italic leading-relaxed">"IA, me dê um resumo da lucratividade operacional de hoje."</p>
                     </div>
                     <div class="p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition">
                         <h5 class="font-bold text-teal-600 mb-2 uppercase text-xs tracking-widest">Suporte ao Cliente</h5>
                         <p class="text-sm text-gray-600 dark:text-gray-400 italic leading-relaxed">"Agente, verifique se este cliente é elegível para reembolso prioritário baseado no histórico."</p>
                     </div>
                     <div class="p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition">
                         <h5 class="font-bold text-purple-600 mb-2 uppercase text-xs tracking-widest">Time de Vendas</h5>
                         <p class="text-sm text-gray-600 dark:text-gray-400 italic leading-relaxed">"IA, prepare uma cotação personalizada usando as regras de margem mais recentes."</p>
                     </div>
                 </div>

                 <div class="bg-gray-900 dark:bg-black rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden font-inter">
                     <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#3b82f633,transparent)] pointer-events-none"></div>
                     <h3 class="text-4xl md:text-6xl font-black mb-8 leading-none tracking-tighter italic relative z-10">Transforme Diálogo em <span class="bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">Execução.</span></h3>
                     <p class="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto relative z-10">
                         Pronto para sincronizar toda a sua organização? Entre no Alpha do Collab Messages e experimente o futuro da comunicação operacional.
                     </p>
                     <button class="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-full font-bold text-xl transition shadow-xl animate-pulse relative z-10">
                         Entrar na Lista de Espera Agora
                     </button>
                 </div>
             </main>

             <footer class="py-12 border-t border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950 font-inter mt-auto">
                 <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400 uppercase tracking-[0.2em] font-medium font-inter">
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