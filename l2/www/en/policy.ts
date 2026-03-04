/// <mls fileReference="_102031_/l2/www/en/policy.ts" enhancement="_102020_enhancementAura"/>

 import { html } from 'lit'; 
 import { customElement } from 'lit/decorators.js';
 import { CollabLitElement } from '/_100554_/l2/collabLitElement.js';

/// **collab_i18n_start**
const message_pt = {
    back: 'Voltar',
    title: 'Política de Privacidade',
    lastUpdated: 'Última atualização: 20 de fevereiro de 2026',
    intro: 'A Collab Engine Inc. ("Collab", "nós", "nosso") opera o Collab Engine disponível em ',
    intro2: '. Esta Política de Privacidade explica como coletamos, usamos e protegemos suas informações.',
    s1Title: '1. Informações que Coletamos',
    s1Desc: 'Coletamos apenas as informações necessárias para operar o Collab Engine.',
    s1Auth: 'Quando você entra usando um provedor de autenticação de terceiros, como Google, GitHub ou GitLab, podemos coletar:',
    s1Item1: 'Seu nome',
    s1Item2: 'Seu endereço de e-mail',
    s1Item3: 'Sua imagem de perfil (avatar)',
    s1Note: 'Nós não coletamos senhas. A autenticação é tratada inteiramente pelo provedor externo.',
    s2Title: '2. Como Usamos Suas Informações',
    s2Desc: 'Usamos suas informações para:',
    s2Item1: 'Fornecer acesso ao Collab Engine',
    s2Item2: 'Identificá-lo dentro do sistema',
    s2Item3: 'Comunicar informações importantes relacionadas ao serviço',
    s2Item4: 'Melhorar a plataforma e a experiência do usuário',
    s2Item5: 'Manter a segurança e prevenir acessos não autorizados',
    s2Note: 'Nós não vendemos suas informações pessoais.',
    s3Title: '3. Privacidade de E-mail',
    s3Desc: 'Seu endereço de e-mail é tratado como confidencial e não é exibido publicamente para outros usuários. Usamos seu e-mail apenas para identificação de conta, notificações de serviço e comunicações relacionadas à segurança.',
    s4Title: '4. Provedores de Autenticação',
    s4Desc: 'A autenticação é realizada através de provedores confiáveis (Google, GitHub, GitLab). Recebemos apenas informações básicas de perfil e não acessamos suas senhas ou conteúdo de contas externas.',
    s5Title: '5. Armazenamento e Segurança de Dados',
    s5Desc: 'Implementamos salvaguardas técnicas e organizacionais razoáveis para proteger suas informações, incluindo servidores seguros, comunicações criptografadas (HTTPS) e controles de acesso. No entanto, nenhum sistema pode garantir segurança absoluta.',
    s6Title: '6. Compartilhamento de Dados',
    s6Desc: 'Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando exigido por lei ou para proteger a segurança e integridade da plataforma.',
    s7Title: '7. Retenção de Dados',
    s7Desc: 'Retemos suas informações apenas pelo tempo necessário para fornecer o serviço ou cumprir obrigações legais. Você pode solicitar a exclusão de sua conta e dados associados.',
    s8Title: '8. Privacidade de Crianças',
    s8Desc: 'O Collab não se destina a indivíduos com menos de 13 anos. Não coletamos intencionalmente informações pessoais de crianças.',
    s9Title: '9. Alterações nesta Política',
    s9Desc: 'Podemos atualizar esta Política de Privacidade de tempos em tempos. As atualizações serão postadas nesta página com a data revisada.',
    s10Title: '10. Contato',
    footer: 'Todos os direitos reservados.'
}

const message_en = {
    back: 'Back',
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: February 20, 2026',
    intro: 'Collab Engine Inc. ("Collab", "we", "our", or "us") operates the Collab Engine available at ',
    intro2: '. This Privacy Policy explains how we collect, use, and protect your information.',
    s1Title: '1. Information We Collect',
    s1Desc: 'We collect only the information necessary to operate the Collab Engine.',
    s1Auth: 'When you sign in using a third-party authentication provider such as Google, GitHub, or GitLab, we may collect:',
    s1Item1: 'Your name',
    s1Item2: 'Your email address',
    s1Item3: 'Your profile avatar image',
    s1Note: 'Note: We do not collect passwords. Authentication is handled entirely by the external provider.',
    s2Title: '2. How We Use Your Information',
    s2Desc: 'We use your information to:',
    s2Item1: 'Provide access to the Collab Engine',
    s2Item2: 'Identify you within the system',
    s2Item3: 'Communicate important service-related information',
    s2Item4: 'Improve the platform and user experience',
    s2Item5: 'Maintain security and prevent unauthorized access',
    s2Note: 'We do not sell your personal information.',
    s3Title: '3. Email Privacy',
    s3Desc: 'Your email address is treated as confidential and is not publicly displayed to other users. We use your email only for account identification, service notifications, and security-related communications.',
    s4Title: '4. Authentication Providers',
    s4Desc: 'Authentication is performed through trusted third-party providers (Google, GitHub, GitLab). We receive only basic profile information and do not access your passwords or external account content.',
    s5Title: '5. Data Storage and Security',
    s5Desc: 'We implement reasonable technical and organizational safeguards to protect your information, including secure servers, encrypted communications (HTTPS), and access controls. However, no system can guarantee absolute security.',
    s6Title: '6. Data Sharing',
    s6Desc: 'We do not sell, rent, or share your personal information with third parties, except when required by law or to protect the security and integrity of the platform.',
    s7Title: '7. Data Retention',
    s7Desc: 'We retain your information only as long as necessary to provide the service or comply with legal obligations. You may request deletion of your account and associated data.',
    s8Title: '8. Children\'s Privacy',
    s8Desc: 'Collab is not intended for individuals under the age of 13. We do not knowingly collect personal information from children.',
    s9Title: '9. Changes to This Policy',
    s9Desc: 'We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised date.',
    s10Title: '10. Contact',
    footer: 'All rights reserved.'
}

type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = {
    'en': message_en,
    'pt': message_pt
}
/// **collab_i18n_end**

 @customElement('www--en--policy-102031')
 export class PolicyEn102031 extends CollabLitElement {
    
     private myMessage: MessageType = messages['en'];

     private _goBack() {
         window.history.back();
     }

     render() {
         return html`
         <div class="bg-gray-50 text-gray-800 dark:bg-gray-950 dark:text-gray-300 transition-colors duration-300 antialiased min-h-screen">

             <nav class="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 font-inter">
                 <div class="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center text-inter">
                     <button @click="${this._goBack}" class="flex items-center text-xl font-bold text-gray-900 dark:text-white bg-transparent border-none cursor-pointer">
                         <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ0cmFuc3BhcmVudCIgLz4KICA8dGV4dCB4PSIzMCIgeT0iNTYiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjcyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzQyODVGNCI+QzwvdGV4dD4KICA8dGV4dCB4PSI0MCIgeT0iNDAiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjM4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0VBNDMzNSI+YzwvdGV4dD4KPC9zdmc+Cg==" 
                              alt="C" class="h-8 -mt-2.5 inline-block align-middle">ollab.codes
                     </button>
                     <button @click="${this._goBack}" class="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline bg-transparent border-none cursor-pointer">
                        ${this.myMessage.back}
                     </button>
                 </div>
             </nav>

             <main class="max-w-4xl mx-auto px-6 py-12 md:py-20 font-inter text-inter text-inter">
                 <div class="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-800 text-inter">
                     
                     <header class="border-b border-gray-100 dark:border-gray-800 pb-8 mb-8">
                         <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">${this.myMessage.title}</h1>
                         <p class="text-sm text-gray-500 dark:text-gray-400 text-inter">${this.myMessage.lastUpdated}</p>
                     </header>

                     <article class="prose prose-blue dark:prose-invert max-w-none space-y-8 text-inter">
                         
                         <section>
                             <p class="leading-relaxed">
                                 ${this.myMessage.intro}
                                 <a href="https://collab.codes" class="text-blue-600 dark:text-blue-400 font-medium">https://collab.codes</a>${this.myMessage.intro2}
                             </p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">${this.myMessage.s1Title}</h2>
                             <p class="mb-4">${this.myMessage.s1Desc}</p>
                             <p class="mb-2">${this.myMessage.s1Auth}</p>
                             <ul class="list-disc pl-6 space-y-2">
                                 <li>${this.myMessage.s1Item1}</li>
                                 <li>${this.myMessage.s1Item2}</li>
                                 <li>${this.myMessage.s1Item3}</li>
                             </ul>
                             <div class="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-800 dark:text-blue-300 border border-blue-100 dark:border-blue-800/30 text-sm">
                                 <strong>${this.myMessage.s1Note}</strong>
                             </div>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">${this.myMessage.s2Title}</h2>
                             <p>${this.myMessage.s2Desc}</p>
                             <ul class="list-disc pl-6 space-y-2 mt-2">
                                 <li>${this.myMessage.s2Item1}</li>
                                 <li>${this.myMessage.s2Item2}</li>
                                 <li>${this.myMessage.s2Item3}</li>
                                 <li>${this.myMessage.s2Item4}</li>
                                 <li>${this.myMessage.s2Item5}</li>
                             </ul>
                             <p class="mt-4 font-semibold text-gray-900 dark:text-white">${this.myMessage.s2Note}</p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight text-inter">${this.myMessage.s3Title}</h2>
                             <p class="text-inter">${this.myMessage.s3Desc}</p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight text-inter">${this.myMessage.s4Title}</h2>
                             <p class="text-inter">${this.myMessage.s4Desc}</p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight text-inter">${this.myMessage.s5Title}</h2>
                             <p class="text-inter">${this.myMessage.s5Desc}</p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight text-inter">${this.myMessage.s6Title}</h2>
                             <p class="text-inter">${this.myMessage.s6Desc}</p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight text-inter">${this.myMessage.s7Title}</h2>
                             <p class="text-inter">${this.myMessage.s7Desc}</p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight text-inter">${this.myMessage.s8Title}</h2>
                             <p class="text-inter">${this.myMessage.s8Desc}</p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight text-inter">${this.myMessage.s9Title}</h2>
                             <p class="text-inter">${this.myMessage.s9Desc}</p>
                         </section>

                         <section class="border-t border-gray-100 dark:border-gray-800 pt-8 mt-12 text-inter">
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight text-inter">${this.myMessage.s10Title}</h2>
                             <div class="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 text-inter">
                                 <p class="font-bold text-gray-900 dark:text-white">Collab Engine Inc.</p>
                                 <p>Email: <a href="mailto:legal@collab.codes" class="text-blue-600 dark:text-blue-400">legal@collab.codes</a></p>
                                 <p>Website: <a href="https://collab.codes" class="text-blue-600 dark:text-blue-400">https://collab.codes</a></p>
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