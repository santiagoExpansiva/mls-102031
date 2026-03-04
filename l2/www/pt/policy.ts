/// <mls fileReference="_102031_/l2/www/pt/policy.ts" enhancement="_102020_enhancementAura"/>

 import { html } from 'lit'; 
 import { customElement } from 'lit/decorators.js';
 import { CollabLitElement } from '/_100554_/l2/collabLitElement.js';

 @customElement('www--pt--policy-102031')
 export class PolicyPt102031 extends CollabLitElement {
    
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
                     <button @click="${this._goBack}" class="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline bg-transparent border-none cursor-pointer">Voltar</button>
                 </div>
             </nav>

             <main class="max-w-4xl mx-auto px-6 py-12 md:py-20 font-inter text-inter">
                 <div class="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-800">
                     
                     <header class="border-b border-gray-100 dark:border-gray-800 pb-8 mb-8">
                         <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">Política de Privacidade</h1>
                         <p class="text-sm text-gray-500 dark:text-gray-400">Última atualização: 20 de fevereiro de 2026</p>
                     </header>

                     <article class="prose prose-blue dark:prose-invert max-w-none space-y-8">
                         
                         <section>
                             <p class="leading-relaxed">
                                 A Collab Engine Inc. ("Collab", "nós", "nosso") opera o Collab Engine disponível em 
                                 <a href="https://collab.codes" class="text-blue-600 dark:text-blue-400 font-medium hover:underline">https://collab.codes</a>.
                                 Esta Política de Privacidade explica como coletamos, usamos e protegemos suas informações.
                             </p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">1. Informações que Coletamos</h2>
                             <p class="mb-4">Coletamos apenas as informações necessárias para operar o Collab Engine.</p>
                             <p class="mb-2">Quando você entra usando um provedor de autenticação de terceiros, como Google, GitHub ou GitLab, podemos coletar:</p>
                             <ul class="list-disc pl-6 space-y-2 text-sm md:text-base">
                                 <li>Seu nome</li>
                                 <li>Seu endereço de e-mail</li>
                                 <li>Sua imagem de perfil (avatar)</li>
                             </ul>
                             <div class="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-800 dark:text-blue-300 border border-blue-100 dark:border-blue-800/30 text-sm">
                                 <strong>Nota:</strong> Nós não coletamos senhas. A autenticação é tratada inteiramente pelo provedor externo.
                             </div>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">2. Como Usamos Suas Informações</h2>
                             <p>Usamos suas informações para:</p>
                             <ul class="list-disc pl-6 space-y-2 mt-2">
                                 <li>Fornecer acesso ao Collab Engine</li>
                                 <li>Identificá-lo dentro do sistema</li>
                                 <li>Comunicar informações importantes relacionadas ao serviço</li>
                                 <li>Melhorar a plataforma e a experiência do usuário</li>
                                 <li>Manter a segurança e prevenir acessos não autorizados</li>
                             </ul>
                             <p class="mt-4 font-semibold text-gray-900 dark:text-white">Nós não vendemos suas informações pessoais.</p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">3. Privacidade de E-mail</h2>
                             <p>Seu endereço de e-mail é tratado como confidencial e não é exibido publicamente para outros usuários. Usamos seu e-mail apenas para identificação de conta, notificações de serviço e comunicações relacionadas à segurança.</p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">4. Provedores de Autenticação</h2>
                             <p>A autenticação é realizada através de provedores confiáveis (Google, GitHub, GitLab). Recebemos apenas informações básicas de perfil e não acessamos suas senhas ou conteúdo de contas externas.</p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">5. Armazenamento e Segurança de Dados</h2>
                             <p>Implementamos salvaguardas técnicas e organizacionais razoáveis para proteger suas informações, incluindo servidores seguros, comunicações criptografadas (HTTPS) e controles de acesso. No entanto, nenhum sistema pode garantir segurança absoluta.</p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">6. Compartilhamento de Dados</h2>
                             <p>Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando exigido por lei ou para proteger a segurança e integridade da plataforma.</p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">7. Retenção de Dados</h2>
                             <p>Retemos suas informações apenas pelo tempo necessário para fornecer o serviço ou cumprir obrigações legais. Você pode solicitar a exclusão de sua conta e dados associados.</p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">8. Privacidade de Crianças</h2>
                             <p>O Collab não se destina a indivíduos com menos de 13 anos. Não coletamos intencionalmente informações pessoais de crianças.</p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">9. Alterações nesta Política</h2>
                             <p>Podemos atualizar esta Política de Privacidade de tempos em tempos. As atualizações serão postadas nesta página com a data revisada.</p>
                         </section>

                         <section class="border-t border-gray-100 dark:border-gray-800 pt-8 mt-12">
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">10. Contato</h2>
                             <div class="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                                 <p class="font-bold text-gray-900 dark:text-white">Collab Engine Inc.</p>
                                 <p>E-mail: <a href="mailto:legal@collab.codes" class="text-blue-600 dark:text-blue-400 hover:underline">legal@collab.codes</a></p>
                                 <p>Website: <a href="https://collab.codes" class="text-blue-600 dark:text-blue-400 hover:underline">https://collab.codes</a></p>
                             </div>
                         </section>

                     </article>
                 </div>
             </main>

             <footer class="py-12 text-center text-gray-400 dark:text-gray-600 text-xs border-t border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950">
                 <p>&copy; 2026 Collab Engine Inc. Todos os direitos reservados.</p>
             </footer>

         </div>
         `;
     }
 }