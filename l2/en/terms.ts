/// <mls fileReference="_102031_/l2/en/terms.ts" enhancement="_102020_enhancementAura"/>

 import { html } from 'lit'; 
 import { customElement } from 'lit/decorators.js';
 import { CollabLitElement } from '/_100554_/l2/collabLitElement.js';

/// **collab_i18n_start**
const message_pt = {
    back: 'Voltar',
    title: 'Termos de Serviço',
    lastUpdated: 'Última atualização: 20 de fevereiro de 2026',
    intro: 'Estes Termos de Serviço ("Termos") regem o uso da plataforma Collab operada pela <strong>Collab Engine Inc.</strong> Ao acessar ou usar a plataforma, você concorda em cumprir estes Termos.',
    s1Title: '1. Descrição do Serviço',
    s1Desc: 'O Collab é uma plataforma de software que permite aos usuários projetar, construir e operar aplicações usando inteligência artificial. A plataforma é fornecida "como está" e pode evoluir ao longo do tempo à medida que introduzimos novos recursos e melhorias.',
    s2Title: '2. Elegibilidade',
    s2Desc: 'Você deve usar uma conta válida do Google, GitHub ou GitLab para acessar a plataforma. Você é o único responsável por manter a segurança de sua conta externa e por qualquer atividade que ocorra sob seu perfil.',
    s3Title: '3. Uso Aceitável',
    s3Intro: 'Você concorda em não:',
    s3Item1: 'Usar a plataforma para quaisquer atividades ilegais ou não autorizadas.',
    s3Item2: 'Tentar obter acesso não autorizado aos nossos sistemas ou contas de outros usuários.',
    s3Item3: 'Interferir ou interromper a operação da plataforma.',
    s3Item4: 'Abusar, ameaçar ou interromper o serviço para outros usuários.',
    s4Title: '4. Propriedade Intelectual',
    s4Desc: 'A plataforma Collab, incluindo seu software, design, ativos de marca e conteúdo original, é de propriedade exclusiva da <strong>Collab Engine Inc.</strong>',
    s4BadgeTitle: 'Propriedade do Usuário',
    s4BadgeDesc: 'Você retém a propriedade total de qualquer código, aplicação ou conteúdo que criar usando as ferramentas da plataforma.',
    s5Title: '5. Encerramento de Conta',
    s5Desc: 'Reservamo-nos o direito de suspender ou encerrar seu acesso se você violar estes Termos ou usar a plataforma de forma indevida que prejudique o serviço. Você pode parar de usar a plataforma e solicitar a exclusão da conta a qualquer momento.',
    s6Title: '6. Isenção de Garantias',
    s6Label: 'Aviso Legal',
    s6Desc: 'A plataforma é fornecida "como está" e "conforme disponível", sem garantias de qualquer tipo, expressas ou implícitas. Não garantimos que o serviço será ininterrupto, seguro ou livre de erros.',
    s7Title: '7. Limitação de Responsabilidade',
    s7Desc: 'Na extensão máxima permitida por lei, a Collab Engine Inc. não será responsável por quaisquer danos indiretos, incidentais ou consequenciais decorrentes do uso ou da incapacidade de usar a plataforma.',
    s8Title: '8. Alterações nos Termos',
    s8Desc: 'Podemos atualizar estes Termos periodicamente para refletir mudanças em nosso serviço ou requisitos legais. O uso continuado da plataforma após as atualizações constitui sua aceitação dos Termos revisados.',
    s9Title: '9. Lei Regente',
    s9Desc: 'Estes Termos são regidos e interpretados de acordo com as leis do <strong>Estado de Delaware, Estados Unidos</strong>, sem levar em conta seus princípios de conflito de leis.',
    s10Title: '10. Contato',
    officialWebsite: 'Site Oficial',
    footer: 'Todos os direitos reservados.'
}

const message_en = {
    back: 'Back',
    title: 'Terms of Service',
    lastUpdated: 'Last updated: February 20, 2026',
    intro: 'These Terms of Service ("Terms") govern your use of the Collab platform operated by <strong>Collab Engine Inc.</strong> By accessing or using the platform, you agree to be bound by these Terms.',
    s1Title: '1. Description of Service',
    s1Desc: 'Collab is a software platform that enables users to design, build, and operate applications using artificial intelligence. The platform is provided "as is" and may evolve over time as we introduce new features and improvements.',
    s2Title: '2. Eligibility',
    s2Desc: 'You must use a valid account from Google, GitHub, or GitLab to access the platform. You are solely responsible for maintaining the security of your external account and for any activity that occurs under your profile.',
    s3Title: '3. Acceptable Use',
    s3Intro: 'You agree not to:',
    s3Item1: 'Use the platform for any illegal or unauthorized activities.',
    s3Item2: 'Attempt to gain unauthorized access to our systems or other users\' accounts.',
    s3Item3: 'Interfere with or disrupt the operation of the platform.',
    s3Item4: 'Abuse, threaten, or disrupt the service for other users.',
    s4Title: '4. Intellectual Property',
    s4Desc: 'The Collab platform, including its software, design, brand assets, and original content, is the exclusive property of <strong>Collab Engine Inc.</strong>',
    s4BadgeTitle: 'User Ownership',
    s4BadgeDesc: 'You retain full ownership of any code, applications, or content you create using the platform\'s tools.',
    s5Title: '5. Account Termination',
    s5Desc: 'We reserve the right to suspend or terminate your access if you violate these Terms or misuse the platform in a way that harms the service. You may stop using the platform and request account deletion at any time.',
    s6Title: '6. Disclaimer of Warranties',
    s6Label: 'Legal Disclaimer',
    s6Desc: 'The platform is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the service will be uninterrupted, secure, or error-free.',
    s7Title: '7. Limitation of Liability',
    s7Desc: 'To the maximum extent permitted by law, Collab Engine Inc. shall not be liable for any indirect, incidental, or consequential damages arising out of your use or inability to use the platform.',
    s8Title: '8. Changes to Terms',
    s8Desc: 'We may update these Terms from time to time to reflect changes in our service or legal requirements. Continued use of the platform after updates constitutes your acceptance of the revised Terms.',
    s9Title: '9. Governing Law',
    s9Desc: 'These Terms are governed by and construed in accordance with the laws of the <strong>State of Delaware, United States</strong>, without regard to its conflict of law principles.',
    s10Title: '10. Contact',
    officialWebsite: 'Official Website',
    footer: 'All rights reserved.'
}

type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = {
    'en': message_en,
    'pt': message_pt
}
/// **collab_i18n_end**

 @customElement('en--terms-102031')
 export class TermsEn102031 extends CollabLitElement {
    
     private myMessage: MessageType = messages['en'];

     private _goBack() {
         window.history.back();
     }

     render() {
         return html`
         <div class="bg-gray-50 text-gray-800 dark:bg-gray-950 dark:text-gray-300 transition-colors duration-300 antialiased min-h-screen font-inter text-inter">

             <nav class="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                 <div class="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center text-inter">
                     <button @click="${this._goBack}" class="flex items-center text-xl font-bold text-gray-900 dark:text-white bg-transparent border-none cursor-pointer p-0">
                         <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ0cmFuc3BhcmVudCIgLz4KICA8dGV4dCB4PSIzMCIgeT0iNTYiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjcyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzQyODVGNCI+QzwvdGV4dD4KICA8dGV4dCB4PSI0MCIgeT0iNDAiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjM4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0VBNDMzNSI+YzwvdGV4dD4KPC9zdmc+Cg==" 
                              alt="C" class="h-8 -mt-2.5 inline-block align-middle">ollab.codes
                     </button>
                     <button @click="${this._goBack}" class="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline bg-transparent border-none cursor-pointer">
                        ${this.myMessage.back}
                     </button>
                 </div>
             </nav>

             <main class="max-w-4xl mx-auto px-6 py-12 md:py-20 text-inter">
                 <div class="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-800 text-inter">
                     
                     <header class="border-b border-gray-100 dark:border-gray-800 pb-8 mb-8">
                         <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">${this.myMessage.title}</h1>
                         <p class="text-sm text-gray-500 dark:text-gray-400 text-inter">${this.myMessage.lastUpdated}</p>
                     </header>

                     <article class="prose prose-blue dark:prose-invert max-w-none space-y-8 text-inter">
                         
                         <section>
                             <p class="leading-relaxed text-lg" .innerHTML="${this.myMessage.intro}"></p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">${this.myMessage.s1Title}</h2>
                             <p class="leading-relaxed text-inter">${this.myMessage.s1Desc}</p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight text-inter">${this.myMessage.s2Title}</h2>
                             <p class="leading-relaxed">${this.myMessage.s2Desc}</p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">${this.myMessage.s3Title}</h2>
                             <p class="mb-4">${this.myMessage.s3Intro}</p>
                             <ul class="list-disc pl-6 space-y-3 leading-relaxed">
                                 <li>${this.myMessage.s3Item1}</li>
                                 <li>${this.myMessage.s3Item2}</li>
                                 <li>${this.myMessage.s3Item3}</li>
                                 <li>${this.myMessage.s3Item4}</li>
                             </ul>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight text-inter">${this.myMessage.s4Title}</h2>
                             <p class="mb-6 leading-relaxed" .innerHTML="${this.myMessage.s4Desc}"></p>
                             <div class="p-6 bg-green-50 dark:bg-green-900/20 rounded-2xl text-green-800 dark:text-green-300 border border-green-100 dark:border-green-800/30 flex items-start gap-4">
                                 <span class="text-2xl">💡</span>
                                 <div>
                                    <p class="font-bold mb-1 uppercase text-xs tracking-wider">${this.myMessage.s4BadgeTitle}</p>
                                    <p class="italic">${this.myMessage.s4BadgeDesc}</p>
                                 </div>
                             </div>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">${this.myMessage.s5Title}</h2>
                             <p class="leading-relaxed">${this.myMessage.s5Desc}</p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight text-inter">${this.myMessage.s6Title}</h2>
                             <p class="uppercase text-[10px] font-black tracking-[0.2em] text-gray-500 mb-2 font-inter">${this.myMessage.s6Label}</p>
                             <p class="leading-relaxed text-inter">${this.myMessage.s6Desc}</p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight text-inter">${this.myMessage.s7Title}</h2>
                             <p class="leading-relaxed text-inter">${this.myMessage.s7Desc}</p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight text-inter">${this.myMessage.s8Title}</h2>
                             <p class="leading-relaxed text-inter">${this.myMessage.s8Desc}</p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight text-inter">${this.myMessage.s9Title}</h2>
                             <p class="leading-relaxed text-inter" .innerHTML="${this.myMessage.s9Desc}"></p>
                         </section>

                         <section class="border-t border-gray-100 dark:border-gray-800 pt-10 mt-12 text-inter">
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">${this.myMessage.s10Title}</h2>
                             <div class="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                 <div>
                                     <p class="font-bold text-xl text-gray-900 dark:text-white mb-1 text-inter">Collab Engine Inc.</p>
                                     <p class="text-blue-600 dark:text-blue-400 font-medium text-inter">legal@collab.codes</p>
                                 </div>
                                 <button class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-8 py-3 rounded-2xl text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition text-inter">
                                     ${this.myMessage.officialWebsite}
                                 </button>
                             </div>
                         </section>

                     </article>
                 </div>
             </main>

             <footer class="py-12 text-center text-gray-400 dark:text-gray-600 text-xs border-t border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950 text-inter">
                 <p>&copy; 2026 Collab Engine Inc. ${this.myMessage.footer}</p>
             </footer>

         </div>
         `;
     }
 }