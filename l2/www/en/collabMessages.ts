/// <mls fileReference="_102031_/l2/www/en/collabMessages.ts" enhancement="_102020_enhancementAura"/>

 import { html } from 'lit'; 
 import { customElement } from 'lit/decorators.js';
 import { CollabLitElement } from '/_100554_/l2/collabLitElement.js';

/// **collab_i18n_start**
const message_pt = {
    back: 'Voltar',
    headerSub: 'Hub Operacional',
    headerTitle1: 'O Pulso ',
    headerTitlePulse: 'Unificado',
    headerTitle2: ' da sua Empresa.',
    headerDesc: 'Vá além do simples chat. Collab Messages é o sistema nervoso onde decisões humanas e execução de IA se encontram para impulsionar as missões diárias da sua companhia.',
    feat1Title: 'Sinergia Intersetorial',
    feat1Desc: 'Alinhe Financeiro, Vendas e Operações em uma única thread. Sem mais silos, apenas execução coordenada.',
    feat2Title: 'Integração Nativa de IA',
    feat2Desc: 'Seus Agentes de IA vivem aqui. Peça-lhes para analisar relatórios, disparar fluxos ou atualizar status de projetos instantaneamente.',
    feat3Title: 'Da Conversa à Ação',
    feat3Desc: 'Cada mensagem é um gatilho potencial para atualizações no sistema, garantindo que seu ERP evolua enquanto você fala.',
    chatLiveBadge: 'Operação ao Vivo',
    chatRoleOps: 'Líder de Operações',
    chatMsgOps: '"IA, precisamos priorizar as entregas para a Região A. Verifique a capacidade atual da frota."',
    chatRoleAi: 'Agente de Negócios (IA)',
    chatMsgAi: '"Analisando a Região A... A frota está com 85% de capacidade. Otimizei as rotas. Atualizar o dashboard do gerente?"',
    chatRoleFinance: 'Diretor Financeiro',
    chatMsgFinance: '"Aprovado. Agente, recalcule também a projeção de eficiência de combustível para esta mudança."',
    gridTitle: 'Uma Ferramenta. Todos os Setores.',
    gridDesc: 'Collab Messages quebra a barreira técnica para todos.',
    dept1Title: 'Gestão',
    dept1Quote: '"IA, me dê um resumo da lucratividade operacional de hoje."',
    dept2Title: 'Suporte ao Cliente',
    dept2Quote: '"Agente, verifique se este cliente é elegível para reembolso prioritário baseado no histórico dele."',
    dept3Title: 'Time de Vendas',
    dept3Quote: '"IA, prepare uma cotação personalizada para o Projeto Z usando as últimas regras de margem."',
    ctaTitle1: 'Transforme Diálogo em ',
    ctaTitle2: 'Execução.',
    ctaDesc: 'Pronto para sincronizar toda a sua organização? Entre no Alpha do Collab Messages e experimente o futuro da comunicação operacional.',
    ctaBtn: 'Entrar na Lista de Espera Agora',
    terms: 'Termos',
    privacy: 'Privacidade'
}

const message_en = {
    back: 'Back',
    headerSub: 'Operational Hub',
    headerTitle1: 'The Unified ',
    headerTitlePulse: 'Pulse',
    headerTitle2: ' of Your Enterprise.',
    headerDesc: 'Move beyond simple chat. Collab Messages is the nervous system where human decisions and AI execution meet to drive your company\'s daily missions.',
    feat1Title: 'Cross-Sector Synergy',
    feat1Desc: 'Align Finance, Sales, and Operations in a single thread. No more silos, just coordinated execution.',
    feat2Title: 'Native AI Integration',
    feat2Desc: 'Your AI Agents live here. Ask them to analyze reports, trigger workflows, or update project statuses instantly.',
    feat3Title: 'From Conversation to Action',
    feat3Desc: 'Every message is a potential trigger for system updates, ensuring your system evolves as you talk.',
    chatLiveBadge: 'Live Operation',
    chatRoleOps: 'Operations Lead',
    chatMsgOps: '"Agent, we need to re-prioritize deliveries for Region A. Check the current fleet capacity."',
    chatRoleAi: 'Business Agent (AI)',
    chatMsgAi: '"Analyzing Region A... Fleet is at 85% capacity. I\'ve optimized the routes. Update the manager dashboard?"',
    chatRoleFinance: 'Finance Director',
    chatMsgFinance: '"Approved. Agent, also recalculate the fuel efficiency projection for this route change."',
    gridTitle: 'One Tool. Every Department.',
    gridDesc: 'Collab Messages breaks the technical barrier for everyone.',
    dept1Title: 'Management',
    dept1Quote: '"AI, give me a summary of today\'s operational profitability."',
    dept2Title: 'Customer Support',
    dept2Quote: '"Agent, check if this client is eligible for a priority refund based on their history."',
    dept3Title: 'Sales Team',
    dept3Quote: '"AI, prepare a custom quote for Project Z using the latest margin rules."',
    ctaTitle1: 'Transform Dialogue into ',
    ctaTitle2: 'Execution.',
    ctaDesc: 'Ready to sync your entire organization? Join the Collab Messages Alpha and experience the future of operational communication.',
    ctaBtn: 'Join the Waitlist Now',
    terms: 'Terms',
    privacy: 'Privacy'
}

type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = {
    'en': message_en,
    'pt': message_pt
}
/// **collab_i18n_end**

 @customElement('www--en--collab-messages-102031')
 export class CollabMessagesEn102031 extends CollabLitElement {
    
     private myMessage: MessageType = messages['en'];

     private _goBack() {
         window.history.back();
     }

     render() {
         return html`
         <div class="bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300 antialiased font-inter min-h-screen flex flex-col">

             <nav class="p-6 border-b border-gray-100 dark:border-gray-900 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md sticky top-0 z-50">
                 <div class="max-w-6xl mx-auto flex justify-between items-center text-inter">
                     <div class="flex items-center gap-2 text-xl font-bold tracking-tight">
                         <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ0cmFuc3BhcmVudCIgLz4KICA8dGV4dCB4PSIzMCIgeT0iNTYiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjcyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzQyODVGNCI+QzwvdGV4dD4KICA8dGV4dCB4PSI0MCIgeT0iNDAiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjM4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0VBNDMzNSI+YzwvdGV4dD4KPC9zdmc+Cg==" 
                              alt="C" class="h-8 -mt-1 inline-block align-middle">ollab.codes
                     </div>
                     <button @click="${this._goBack}" class="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline bg-transparent border-none cursor-pointer">
                        ${this.myMessage.back}
                     </button>
                 </div>
             </nav>

             <header class="py-24 px-6 text-center bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-900">
                 <div class="max-w-4xl mx-auto">
                     <h1 class="text-xs font-bold uppercase tracking-[0.4em] text-teal-500 mb-6 font-inter">${this.myMessage.headerSub}</h1>
                     <h2 class="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
                         ${this.myMessage.headerTitle1}<span class="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent italic">${this.myMessage.headerTitlePulse}</span>${this.myMessage.headerTitle2}
                     </h2>
                     <p class="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-3xl mx-auto">
                         ${this.myMessage.headerDesc}
                     </p>
                 </div>
             </header>

             <main class="max-w-6xl mx-auto px-6 py-20 font-inter">
                 
                 <div class="grid md:grid-cols-2 gap-16 mb-32 items-center">
                     <div class="order-2 md:order-1">
                         <div class="space-y-10">
                             <div class="flex gap-6 group">
                                 <div class="shrink-0 w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">🏢</div>
                                 <div>
                                     <h4 class="text-xl font-bold mb-2 tracking-tight">${this.myMessage.feat1Title}</h4>
                                     <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">${this.myMessage.feat1Desc}</p>
                                 </div>
                             </div>
                             <div class="flex gap-6 group">
                                 <div class="shrink-0 w-14 h-14 rounded-2xl bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">🤖</div>
                                 <div>
                                     <h4 class="text-xl font-bold mb-2 tracking-tight">${this.myMessage.feat2Title}</h4>
                                     <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">${this.myMessage.feat2Desc}</p>
                                 </div>
                             </div>
                             <div class="flex gap-6 group text-inter">
                                 <div class="shrink-0 w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">📈</div>
                                 <div>
                                     <h4 class="text-xl font-bold mb-2 tracking-tight text-inter">${this.myMessage.feat3Title}</h4>
                                     <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed text-inter">${this.myMessage.feat3Desc}</p>
                                 </div>
                             </div>
                         </div>
                     </div>

                     <div class="order-1 md:order-2 bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 shadow-2xl border border-gray-100 dark:border-gray-800 relative">
                         <div class="absolute -top-4 -right-4 bg-teal-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">${this.myMessage.chatLiveBadge}</div>
                         <div class="space-y-6">
                             <div class="flex flex-col items-start">
                                 <span class="text-[10px] text-gray-500 mb-1 ml-2 uppercase font-bold tracking-tighter">${this.myMessage.chatRoleOps}</span>
                                 <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl rounded-tl-none text-sm max-w-[85%]">
                                     ${this.myMessage.chatMsgOps}
                                 </div>
                             </div>
                             <div class="flex flex-col items-end">
                                 <span class="text-[10px] text-blue-500 mb-1 mr-2 uppercase font-bold tracking-tighter italic">${this.myMessage.chatRoleAi}</span>
                                 <div class="bg-blue-600 p-4 rounded-2xl rounded-tr-none text-sm max-w-[85%] text-white shadow-md">
                                     ${this.myMessage.chatMsgAi}
                                 </div>
                             </div>
                             <div class="flex flex-col items-start">
                                 <span class="text-[10px] text-gray-500 mb-1 ml-2 uppercase font-bold tracking-tighter">${this.myMessage.chatRoleFinance}</span>
                                 <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl rounded-tl-none text-sm max-w-[85%]">
                                     ${this.myMessage.chatMsgFinance}
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>

                 <div class="text-center mb-16 text-inter">
                     <h3 class="text-3xl font-black mb-4 tracking-tighter uppercase text-inter">${this.myMessage.gridTitle}</h3>
                     <p class="text-gray-500 dark:text-gray-400 text-inter">${this.myMessage.gridDesc}</p>
                 </div>

                 <div class="grid md:grid-cols-3 gap-6 mb-32">
                     <div class="p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition">
                         <h5 class="font-bold text-blue-600 mb-2 uppercase text-xs tracking-widest">${this.myMessage.dept1Title}</h5>
                         <p class="text-sm text-gray-600 dark:text-gray-400 italic leading-relaxed">${this.myMessage.dept1Quote}</p>
                     </div>
                     <div class="p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition">
                         <h5 class="font-bold text-teal-600 mb-2 uppercase text-xs tracking-widest">${this.myMessage.dept2Title}</h5>
                         <p class="text-sm text-gray-600 dark:text-gray-400 italic leading-relaxed">${this.myMessage.dept2Quote}</p>
                     </div>
                     <div class="p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition">
                         <h5 class="font-bold text-purple-600 mb-2 uppercase text-xs tracking-widest">${this.myMessage.dept3Title}</h5>
                         <p class="text-sm text-gray-600 dark:text-gray-400 italic leading-relaxed">${this.myMessage.dept3Quote}</p>
                     </div>
                 </div>

                 <div class="bg-gray-900 dark:bg-black rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden font-inter">
                     <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#3b82f633,transparent)] pointer-events-none"></div>
                     <h3 class="text-4xl md:text-6xl font-black mb-8 leading-none tracking-tighter italic relative z-10">
                        ${this.myMessage.ctaTitle1}<span class="bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">${this.myMessage.ctaTitle2}</span>
                     </h3>
                     <p class="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto relative z-10">
                         ${this.myMessage.ctaDesc}
                     </p>
                     <button class="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-full font-bold text-xl transition shadow-xl animate-pulse relative z-10">
                         ${this.myMessage.ctaBtn}
                     </button>
                 </div>
             </main>

             <footer class="py-12 border-t border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950 font-inter mt-auto">
                 <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400 uppercase tracking-[0.2em] font-medium text-inter">
                     <p>&copy; 2026 Collab Engine Inc.</p>
                     <div class="flex gap-8">
                         <a href="./terms.html" class="hover:text-blue-600 transition">${this.myMessage.terms}</a>
                         <a href="./policy.html" class="hover:text-blue-600 transition">${this.myMessage.privacy}</a>
                     </div>
                 </div>
             </footer>
         </div>
         `;
     }
 }