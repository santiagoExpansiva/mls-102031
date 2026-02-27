/// <mls fileReference="_102031_/l2/en/initial2.ts" enhancement="_102020_enhancementAura"/>

 import { html } from 'lit'; 
 import { customElement } from 'lit/decorators.js';
 import { CollabLitElement } from '/_100554_/l2/collabLitElement.js';

/// **collab_i18n_start**
const message_pt = {
    heroTitle1: 'Collab é uma plataforma ',
    heroTitleAi: 'impulsionada por IA',
    heroTitle2: ' para projetar e construir aplicações de software.',
    heroDesc: 'Transformando lógica de negócios complexa em software funcional através de inteligência focada em missões.',
    btnCreateTitle: 'Criar Novo Projeto',
    btnCreateDesc: 'Inicie uma nova missão. Defina seus requisitos e deixe a IA ajudá-lo a construir sua aplicação do zero.',
    btnExploreTitle: 'Explorar Projetos',
    btnExploreDesc: 'Descubra o que outros estão construindo. Inspire-se com soluções da comunidade e arquiteturas estabelecidas.',
    aiTitle: 'Utilização de IA',
    aiDesc: 'A Inteligência Artificial interpretou a intenção do negócio para gerar arquiteturas robustas e agentes de execução.',
    messagesTitle: 'Collab Messages',
    messagesDesc: 'Um hub de comunicação centralizado onde humanos e agentes de IA interagem para a evolução do projeto.',
    learnMore: 'Saiba mais',
    aboutTitle: 'Sobre a Collab Engine Inc.',
    aboutDesc: 'Somos uma empresa de software construindo ferramentas de próxima geração. Nossa missão é unir visão e execução.',
    aboutLink: 'Saiba mais sobre a corporação',
    supportTitle: 'Suporte & Contato',
    terms: 'Termos de Serviço',
    privacy: 'Política de Privacidade'
}

const message_en = {
    heroTitle1: 'Collab is an ',
    heroTitleAi: 'AI-powered',
    heroTitle2: ' platform for designing and building software applications.',
    heroDesc: 'Transforming complex business logic into functional software through mission-driven intelligence.',
    btnCreateTitle: 'Create New Project',
    btnCreateDesc: 'Start a new mission. Define your requirements and let AI help you build your custom application from scratch.',
    btnExploreTitle: 'Explore Projects',
    btnExploreDesc: 'Discover what others are building. Get inspired by community solutions and established software architectures.',
    aiTitle: 'AI Utilization',
    aiDesc: 'Artificial Intelligence interpreted business intent to generate robust architectures and real-time execution agents.',
    messagesTitle: 'Collab Messages',
    messagesDesc: 'A centralized communication hub where humans and AI agents interact, ensuring project evolution.',
    learnMore: 'Learn more',
    aboutTitle: 'About Collab Engine Inc.',
    aboutDesc: 'We are a software company building next-generation development tools. Our mission is to bridge the gap between vision and execution.',
    aboutLink: 'Learn more about the corporation',
    supportTitle: 'Support & Contact',
    terms: 'Terms of Service',
    privacy: 'Privacy Policy'
}

type MessageType = typeof message_en;

const messages: { [key: string]: MessageType } = {
    'en': message_en,
    'pt': message_pt
}
/// **collab_i18n_end**

 @customElement('en--initial2-102031')
 export class Initial2En102031 extends CollabLitElement {
    
     private myMessage: MessageType = messages['en'];

     private _handleAction(action: string) {
         const params = {
             type: 'iframeL7',
             action: action
         };
         window.parent.postMessage(params, '*');
     }

     render() {
         return html`
         <div class="bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300 min-h-screen flex flex-col antialiased">

             <main class="flex-grow flex flex-col items-center px-6 py-12 md:py-20 text-inter">
                 <div class="max-w-4xl w-full">
                     
                     <header class="mb-16 text-center md:text-left">
                         <div class="flex items-center justify-center md:justify-start text-5xl md:text-8xl font-black mb-8 tracking-tighter">
                             <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ0cmFuc3BhcmVudCIgLz4KICA8dGV4dCB4PSIzMCIgeT0iNTYiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjcyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzQyODVGNCI+QzwvdGV4dD4KICA8dGV4dCB4PSI0MCIgeT0iNDAiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjM4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0VBNDMzNSI+YzwvdGV4dD4KPC9zdmc+Cg==" 
                                  alt="C" class="h-20 md:h-32 -mt-2 md:-mt-4">
                             <span>ollab.codes</span>
                         </div>
                         
                         <h2 class="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
                             ${this.myMessage.heroTitle1}<span class="text-blue-600 font-black italic">${this.myMessage.heroTitleAi}</span>${this.myMessage.heroTitle2}
                         </h2>
                         <p class="text-xl text-gray-500 dark:text-gray-400 font-light max-w-2xl mx-auto md:mx-0">
                             ${this.myMessage.heroDesc}
                         </p>
                     </header>

                     <section class="grid md:grid-cols-2 gap-6 mb-20">
                         <button @click="${() => this._handleAction('create-project')}" class="group relative bg-blue-600 hover:bg-blue-700 p-8 rounded-3xl text-left transition-all shadow-xl hover:-translate-y-1">
                             <div class="bg-white/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-2xl text-white font-bold">
                                 +
                             </div>
                             <h3 class="text-2xl font-bold text-white mb-2 tracking-tight">${this.myMessage.btnCreateTitle}</h3>
                             <p class="text-blue-100 text-sm leading-relaxed">
                                 ${this.myMessage.btnCreateDesc}
                             </p>
                         </button>

                         <button @click="${() => this._handleAction('explore-projects')}" class="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 rounded-3xl text-left transition-all hover:border-blue-500 shadow-sm hover:shadow-md hover:-translate-y-1">
                             <div class="bg-blue-50 dark:bg-blue-900/30 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-2xl text-blue-600">
                                 🔭
                             </div>
                             <h3 class="text-2xl font-bold mb-2 tracking-tight text-gray-900 dark:text-white">${this.myMessage.btnExploreTitle}</h3>
                             <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                 ${this.myMessage.btnExploreDesc}
                             </p>
                         </button>
                     </section>

                     <div class="grid md:grid-cols-2 gap-12 mb-20">
                         <div class="group border-l-2 border-gray-200 dark:border-gray-800 pl-8 hover:border-blue-500 transition-colors">
                             <h2 class="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 font-inter">${this.myMessage.aiTitle}</h2>
                             <p class="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                                 ${this.myMessage.aiDesc}
                             </p>
                             <a href="./ai-features.html" class="inline-flex items-center text-sm font-semibold hover:text-blue-600 transition-all">
                                 ${this.myMessage.learnMore} <span class="ml-2">→</span>
                             </a>
                         </div>

                         <div class="group border-l-2 border-gray-200 dark:border-gray-800 pl-8 hover:border-blue-500 transition-colors">
                             <h2 class="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 font-inter">${this.myMessage.messagesTitle}</h2>
                             <p class="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                                 ${this.myMessage.messagesDesc}
                             </p>
                             <a href="./collab-messages.html" class="inline-flex items-center text-sm font-semibold hover:text-blue-600 transition-all">
                                 ${this.myMessage.learnMore} <span class="ml-2">→</span>
                             </a>
                         </div>
                     </div>

                     <section class="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                         <div class="flex flex-col md:flex-row justify-between gap-12 text-center md:text-left">
                             <div class="max-w-xl">
                                 <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">${this.myMessage.aboutTitle}</h2>
                                 <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-sm">
                                     ${this.myMessage.aboutDesc}
                                 </p>
                                 <a href="./corporate.html" class="text-blue-600 dark:text-blue-400 font-semibold hover:underline decoration-2 underline-offset-4 text-sm font-inter">
                                     ${this.myMessage.aboutLink}
                                 </a>
                             </div>
                             
                             <div class="border-t md:border-t-0 md:border-l border-gray-100 dark:border-gray-800 pt-8 md:pt-0 md:pl-8 flex flex-col justify-center text-center md:text-left font-inter">
                                 <h3 class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 font-inter">${this.myMessage.supportTitle}</h3>
                                 <a href="mailto:contact@collab.codes" class="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 transition tracking-tight">
                                     contact@collab.codes
                                 </a>
                             </div>
                         </div>
                     </section>
                 </div>
             </main>

             <footer class="py-10 border-t border-gray-100 dark:border-gray-900 mt-auto bg-white dark:bg-gray-950 font-inter">
                 <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 tracking-widest uppercase">
                     <p>&copy; 2026 Collab Engine Inc.</p>
                     <div class="flex gap-8">
                         <a href="./terms.html" class="hover:text-blue-600 transition text-[10px]">${this.myMessage.terms}</a>
                         <a href="./policy.html" class="hover:text-blue-600 transition text-[10px]">${this.myMessage.privacy}</a>
                     </div>
                 </div>
             </footer>
         </div>
         `;
     }
 }