/// <mls fileReference="_102031_/l2/www/en/landingpage.ts" enhancement="_102020_enhancementAura"/>

 import { html } from 'lit'; 
 import { customElement } from 'lit/decorators.js';
 import { CollabLitElement } from '/_100554_/l2/collabLitElement.js';

/// **collab_i18n_start**
const message_pt = {
    heroDesc: 'A Próxima Geração de Sistemas Corporativos. Defina sua missão e deixe a IA entregar a solução personalizada que seu negócio exige.',
    btnWaitlist: 'Sistema Alpha - Entre na Lista de Espera',
    btnExplore: 'Explorar Recursos',
    feat1Title: 'Focado em Missões',
    feat1Desc: 'Você ou seu analista definem a missão; nossa plataforma constrói a aplicação personalizada que seu negócio precisa.',
    feat2Title: 'IA em Execução',
    feat2Desc: 'Incorpore agentes de IA diretamente em seu app final para automatizar processos e analisar dados em tempo real.',
    feat3Title: 'Sem Taxas de SaaS',
    feat3Desc: 'Pare de pagar por licenças. Pague apenas pela hospedagem em provedores como AWS, com gestão centralizada.',
    feat4Title: 'Agentes Customizados',
    feat4Desc: 'Crie agentes específicos para cada departamento — garantindo eficiência em toda a sua empresa.',
    msgTitle: 'Collab Messages',
    msgDesc: 'O pulso unificado da sua empresa. Um hub onde cada departamento — do Financeiro às Operações — interage com equipes humanas e agentes de IA para impulsionar a execução.',
    msgList1: 'Alinhe gestão, vendas e suporte em uma interface única e fluida.',
    msgList2: 'Direcione agentes de IA para analisar dados complexos ou disparar fluxos via chat.',
    msgList3: 'Visibilidade total para stakeholders em cada "missão" em andamento.',
    chatRoleOps: 'Gerente de Operações',
    chatMsgOps: '"IA, temos um pico de demanda no Projeto X. Analise nossa alocação atual e sugira uma otimização."',
    chatRoleAi: 'Agente de Negócios (IA)',
    chatMsgAi: '"Análise completa. Identifiquei 3 tarefas ociosas no setor de Suporte que podem ser realocadas. Devo notificar os líderes?"',
    chatRoleFinance: 'Diretor Financeiro',
    chatMsgFinance: '"Aprovado. Agente, gere também a previsão de lucratividade baseada nesta nova alocação."',
    advTitle: 'A Vantagem Collab',
    thStrategy: 'Estratégia',
    thSaaS: 'SaaS Tradicional',
    thCollab: 'Collab.codes',
    row1Name: 'Propriedade',
    row1SaaS: 'Preso a licenças e nuvem do fornecedor.',
    row1Collab: 'Sua nuvem, seus dados, suas regras.',
    row2Name: 'Modelo de Custo',
    row2SaaS: 'Licenças mensais caras por usuário.',
    row2Collab: 'Apenas custo direto de hospedagem.',
    row3Name: 'Velocidade',
    row3SaaS: 'Templates rígidos ou código lento.',
    row3Collab: 'Defina a missão, receba a app.',
    ctaTitle: 'Lidere a Transformação.',
    ctaQuote: '"Você ou seu analista definem a missão; nossa plataforma desenvolve o app para suas necessidades."',
    ctaDesc: 'Entre no nosso grupo exclusivo Alpha e comece a construir soluções corporativas sem o custo fixo de SaaS.',
    ctaBtn: 'Sistema Alpha - Entre na Lista Agora',
    footerTagline: 'Collab.codes - Inteligência Corporativa Focada em Missões'
}

const message_en = {
    heroDesc: 'The Next Generation of Enterprise Systems. Define your mission and let AI deliver the custom solution your business demands.',
    btnWaitlist: 'Alpha System - Join the Waitlist',
    btnExplore: 'Explore Features',
    feat1Title: 'Mission-Driven',
    feat1Desc: 'You or your analyst define the mission; our platform builds the custom application your business needs.',
    feat2Title: 'AI in Execution',
    feat2Desc: 'Embed AI agents directly into your final app to automate processes and analyze data in real-time.',
    feat3Title: 'No SaaS Fees',
    feat3Desc: 'Stop paying for licenses. Pay only for hosting on providers like AWS, with centralized management.',
    feat4Title: 'Custom Agents',
    feat4Desc: 'Create specific agents for every department—ensuring efficiency across your entire enterprise.',
    msgTitle: 'Collab Messages',
    msgDesc: 'The universal pulse of your company. A unified hub where every department — from Finance to Operations — interacts with human teams and AI agents to drive daily business execution.',
    msgList1: 'Align management, sales, and support in one seamless interface.',
    msgList2: 'Direct AI agents to analyze complex data or trigger workflows via chat.',
    msgList3: 'Total operational visibility for stakeholders on every "mission" in progress.',
    chatRoleOps: 'Operations Manager',
    chatMsgOps: '"AI, we have a peak in demand for Project X. Analyze our current resource allocation and suggest an optimization to avoid delays."',
    chatRoleAi: 'Business Agent (AI)',
    chatMsgAi: '"Analysis complete. I\'ve identified 3 idle tasks in the Support sector that can be reallocated. Should I notify the leads and update the timeline?"',
    chatRoleFinance: 'Finance Director',
    chatMsgFinance: '"Approved. Also, generate the profitability forecast based on this new allocation for the next meeting."',
    advTitle: 'The Collab Advantage',
    thStrategy: 'Strategy',
    thSaaS: 'Traditional SaaS',
    thCollab: 'Collab.codes',
    row1Name: 'Ownership',
    row1SaaS: 'Locked into vendor fees & cloud.',
    row1Collab: 'Your cloud, your data, your rules.',
    row2Name: 'Cost Model',
    row2SaaS: 'Expensive monthly per-user licenses.',
    row2Collab: 'Direct cloud hosting costs only.',
    row3Name: 'Velocity',
    row3SaaS: 'Rigid templates or slow coding.',
    row3Collab: 'Define mission, get results.',
    ctaTitle: 'Join the Transformation.',
    ctaQuote: '"You or your analyst define the mission; our platform develops the custom app for your needs."',
    ctaDesc: 'Join our exclusive Alpha group and start building enterprise solutions without SaaS overhead.',
    ctaBtn: 'Join the Alpha Now',
    footerTagline: 'Collab.codes - Mission-Driven Enterprise Intelligence'
}

type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = {
    'en': message_en,
    'pt': message_pt
}
/// **collab_i18n_end**

 @customElement('www--en--landingpage-102031')
 export class LandingpageEn102031 extends CollabLitElement {
    
     private myMessage: MessageType = messages['en'];

     private _handleWaitlist() {
         const params = {
             type: 'iframeL7',
             action: 'join-waitlist'
         };
         window.parent.postMessage(params, '*');
     }

     render() {
         return html`
         <div class="bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300 antialiased font-inter">

             <header class="min-h-screen flex flex-col justify-center items-center text-center text-white px-4 relative overflow-hidden"
                     style="background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.85)), url('https://collab.codes/www/20260203090434/pt/l3/_100529_/images/startl7.avif'); background-size: cover; background-position: center;">
                 
                 <h1 class="text-5xl md:text-8xl font-black mb-6 flex items-center justify-center tracking-tighter">
                     <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ0cmFuc3BhcmVudCIgLz4KICA8dGV4dCB4PSIzMCIgeT0iNTYiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjcyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzQyODVGNCI+QzwvdGV4dD4KICA8dGV4dCB4PSI0MCIgeT0iNDAiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjM4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0VBNDMzNSI+YzwvdGV4dD4KPC9zdmc+Cg==" 
                          alt="C" class="h-16 md:h-24 ">ollab.codes
                 </h1>
                 
                 <p class="text-xl md:text-3xl max-w-3xl font-light mb-10 leading-relaxed italic">
                     ${this.myMessage.heroDesc}
                 </p>
                 
                 <div class="flex flex-col md:flex-row gap-6">
                     <button @click="${this._handleWaitlist}" class="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-bold transition shadow-2xl animate-pulse text-xl">
                         ${this.myMessage.btnWaitlist}
                     </button>
                     <a href="#features" class="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-full font-bold transition text-xl">
                         ${this.myMessage.btnExplore}
                     </a>
                 </div>
             </header>

             <section id="features" class="py-32 px-6 max-w-7xl mx-auto text-inter">
                 <div class="grid md:grid-cols-4 gap-10">
                     <div class="bg-white dark:bg-gray-900 p-10 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all hover:-translate-y-2">
                         <div class="text-blue-500 mb-6 text-4xl">🎯</div>
                         <h3 class="text-xl font-bold mb-4 tracking-tight">${this.myMessage.feat1Title}</h3>
                         <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                             ${this.myMessage.feat1Desc}
                         </p>
                     </div>
                     <div class="bg-white dark:bg-gray-900 p-10 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all hover:-translate-y-2 text-inter">
                         <div class="text-blue-500 mb-6 text-4xl">🤖</div>
                         <h3 class="text-xl font-bold mb-4 tracking-tight">${this.myMessage.feat2Title}</h3>
                         <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed text-inter">
                             ${this.myMessage.feat2Desc}
                         </p>
                     </div>
                     <div class="bg-white dark:bg-gray-900 p-10 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all hover:-translate-y-2">
                         <div class="text-blue-500 mb-6 text-4xl">☁️</div>
                         <h3 class="text-xl font-bold mb-4 tracking-tight">${this.myMessage.feat3Title}</h3>
                         <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                             ${this.myMessage.feat3Desc}
                         </p>
                     </div>
                     <div class="bg-white dark:bg-gray-900 p-10 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all hover:-translate-y-2">
                         <div class="text-blue-500 mb-6 text-4xl">🧩</div>
                         <h3 class="text-xl font-bold mb-4 tracking-tight">${this.myMessage.feat4Title}</h3>
                         <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                             ${this.myMessage.feat4Desc}
                         </p>
                     </div>
                 </div>
             </section>

             <section class="py-32 bg-gray-900 dark:bg-black text-white overflow-hidden relative">
                 <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
                     <div>
                         <h2 class="text-4xl md:text-6xl font-black mb-8 tracking-tighter italic text-inter">${this.myMessage.msgTitle}</h2>
                         <p class="text-gray-400 text-xl mb-10 leading-relaxed font-light">
                             ${this.myMessage.msgDesc}
                         </p>
                         <ul class="space-y-6">
                             <li class="flex items-start gap-4 text-inter font-bold">
                                 <span class="bg-blue-600 rounded-full p-1.5 text-[10px] mt-1">✓</span> 
                                 <span class="text-gray-200">${this.myMessage.msgList1}</span>
                             </li>
                             <li class="flex items-start gap-4 text-inter font-bold">
                                 <span class="bg-blue-600 rounded-full p-1.5 text-[10px] mt-1">✓</span> 
                                 <span class="text-gray-200">${this.myMessage.msgList2}</span>
                             </li>
                             <li class="flex items-start gap-4 text-inter font-bold">
                                 <span class="bg-blue-600 rounded-full p-1.5 text-[10px] mt-1">✓</span> 
                                 <span class="text-gray-200">${this.myMessage.msgList3}</span>
                             </li>
                         </ul>
                     </div>

                     <div class="bg-gray-800 dark:bg-gray-900 rounded-[3rem] p-10 shadow-2xl border border-gray-700 relative text-inter">
                         <div class="absolute -top-4 -right-4 bg-blue-500 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">Active Mission</div>
                         <div class="space-y-8">
                             <div class="flex flex-col items-start">
                                 <span class="text-[10px] text-gray-500 mb-2 ml-2 uppercase font-bold tracking-widest text-inter">${this.myMessage.chatRoleOps}</span>
                                 <div class="bg-gray-700 dark:bg-gray-800 p-5 rounded-3xl rounded-tl-none text-sm max-w-[90%] leading-relaxed">
                                     ${this.myMessage.chatMsgOps}
                                 </div>
                             </div>
                             <div class="flex flex-col items-end">
                                 <span class="text-[10px] text-blue-400 mb-2 mr-2 uppercase font-bold tracking-widest italic">${this.myMessage.chatRoleAi}</span>
                                 <div class="bg-blue-600 p-5 rounded-3xl rounded-tr-none text-sm max-w-[90%] text-white shadow-xl leading-relaxed">
                                     ${this.myMessage.chatMsgAi}
                                 </div>
                             </div>
                             <div class="flex flex-col items-start">
                                 <span class="text-[10px] text-gray-500 mb-2 ml-2 uppercase font-bold tracking-widest">${this.myMessage.chatRoleFinance}</span>
                                 <div class="bg-gray-700 dark:bg-gray-800 p-5 rounded-3xl rounded-tl-none text-sm max-w-[90%] leading-relaxed">
                                     ${this.myMessage.chatMsgFinance}
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </section>

             <section class="py-32 px-6 max-w-5xl mx-auto text-inter">
                 <h2 class="text-4xl font-black text-center mb-16 tracking-tighter uppercase italic">${this.myMessage.advTitle}</h2>
                 <div class="overflow-x-auto rounded-[2.5rem] border border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden">
                     <table class="w-full text-left bg-white dark:bg-gray-900">
                         <thead>
                             <tr class="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 text-inter">
                                 <th class="p-8 font-bold uppercase text-xs tracking-[0.2em]">${this.myMessage.thStrategy}</th>
                                 <th class="p-8 font-bold uppercase text-xs tracking-[0.2em] text-gray-400">${this.myMessage.thSaaS}</th>
                                 <th class="p-8 font-bold uppercase text-xs tracking-[0.2em] text-blue-500">${this.myMessage.thCollab}</th>
                             </tr>
                         </thead>
                         <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
                             <tr>
                                 <td class="p-8 font-bold">${this.myMessage.row1Name}</td>
                                 <td class="p-8 text-gray-500 text-sm">${this.myMessage.row1SaaS}</td>
                                 <td class="p-8 font-semibold text-green-600 dark:text-green-500">${this.myMessage.row1Collab}</td>
                             </tr>
                             <tr>
                                 <td class="p-8 font-bold text-inter">${this.myMessage.row2Name}</td>
                                 <td class="p-8 text-gray-500 text-sm text-inter">${this.myMessage.row2SaaS}</td>
                                 <td class="p-8 font-semibold text-green-600 dark:text-green-500 text-inter">${this.myMessage.row2Collab}</td>
                             </tr>
                             <tr>
                                 <td class="p-8 font-bold text-inter">${this.myMessage.row3Name}</td>
                                 <td class="p-8 text-gray-500 text-sm text-inter">${this.myMessage.row3SaaS}</td>
                                 <td class="p-8 font-black text-blue-600 text-lg italic tracking-tight underline decoration-blue-500/30 underline-offset-4">${this.myMessage.row3Collab}</td>
                             </tr>
                         </tbody>
                     </table>
                 </div>
             </section>

             <section class="py-32 bg-blue-600 text-white text-center px-6 relative overflow-hidden">
                 <div class="max-w-4xl mx-auto relative z-10">
                     <h2 class="text-5xl md:text-7xl font-black mb-8 italic tracking-tighter">${this.myMessage.ctaTitle}</h2>
                     <p class="text-xl md:text-2xl text-blue-100 mb-12 italic leading-relaxed">
                         ${this.myMessage.ctaQuote}
                     </p>
                     <p class="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
                        ${this.myMessage.ctaDesc}
                     </p>
                     <button @click="${this._handleWaitlist}" class="bg-white text-blue-600 px-16 py-6 rounded-full font-black text-2xl hover:bg-gray-100 transition shadow-2xl uppercase tracking-widest">
                         ${this.myMessage.ctaBtn}
                     </button>
                 </div>
             </section>

             <footer class="py-16 text-center text-gray-400 dark:text-gray-600 text-[10px] border-t border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950 uppercase tracking-[0.4em] font-semibold text-inter">
                 <p class="mb-2">${this.myMessage.footerTagline}</p>
                 <p>&copy; 2026 Collab Engine Inc.</p>
             </footer>

         </div>
         `;
     }
 }