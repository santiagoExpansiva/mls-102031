/// <mls fileReference="_102031_/l2/www/en/landingpage.ts" enhancement="_102032_/l2/enhancementLandingPage" />

function setEvents() {
    renderVideoSection(sectionVideos);
    setScrollEffects();
    setLoginEvent();
}

function _handleSignIn() {
    const params = {
        type: 'iframeL7',
        action: 'login'
    };
    window.parent.postMessage(params, '*');
}

const sectionVideos: SectionVideos = {
    title: "How It Works",
    real_product: {
        title: "Examples",
        videos: [
            {
                title: "PetShop",
                description: "A simple pet shop application"
            },
            {
                title: "TodoApp",
                description: "A simple todo application"
            },
            {
                title: "IndustryApp",
                description: "A simple industry application"
            },
            {
                title: "EcommerceApp",
                description: "A simple ecommerce application"
            }
        ]
    },
    customization: {
        title: "Easy Customization",
        videos: [
            {
                title: "Support multiple languages",
                description: "Make the application ready for multiple languages and locales"
            },
            {
                title: "Theming",
                description: "Adapt themes and visual identity"
            },
            {
                title: "Layout",
                description: "Adapt the layout to different use cases and user preferences"
            },
            {
                title: "Text Editor",
                description: "Edit custom or AI-generated text with ease"
            },
            {
                title: "Custom Components",
                description: "Use or create custom components and swap them for alternative implementations"
            }
        ]
    },
    business_fit: {
        title: "Adapted to Your Business",
        videos: [
            {
                title: "Business Rules",
                description: "Create business rules, conditions, and automated actions"
            },
            {
                title: "Expand with New Pages",
                description: "Add new pages and connect them to the application menu"
            },
            {
                title: "Access Control",
                description: "Control access, permissions, and protected areas of the application"
            },
            {
                title: "External Integrations",
                description: "Integrate the application with other systems and APIs"
            }
        ]
    },
    technical_architecture: {
        title: "Technical Foundation",
        videos: [
            {
                title: "Interface Technology",
                description: "Inside the frontend architecture and technologies used"
            },
            {
                title: "Application Backend",
                description: "Inside the backend architecture and technologies used"
            },
            {
                title: "Data Layer",
                description: "Inside the data architecture and storage strategy"
            },
            {
                title: "DevOps",
                description: "Monitoring the live system, from errors to traffic and operational metrics"
            }
        ]
    },
    ai_collaboration: {
        title: "AI Working With You",
        videos: [
            {
                title: "From Prompt to System",
                description: "Using an initial prompt, refining requirements, and building complete systems"
            },
            {
                title: "AI Customization",
                description: "How AI helps customize the application after generation"
            },
            {
                title: "AI Workflow",
                description: "How to use AI to manage your workflow and automate tasks"
            },
            {
                title: "AI in Automation",
                description: "Using AI to execute business commands and operational actions"
            }
        ]
    },
    performance: {
        title: "Performance and Scalability",
        videos: [
            {
                title: "Performance by Design",
                description: "Designed for performance from the start"
            },
            {
                title: "Scaling the System",
                description: "Scaling the application to handle increasing load and data"
            },
            {
                title: "Observability",
                description: "Infrastructure and application monitoring in practice"
            },
            {
                title: "Runtime Footprint",
                description: "System resource usage and platform requirements in practice"
            }
        ]
    }
};

function renderVideoSection(sectionVideos: SectionVideos): void {
    const container = document.getElementById('video-groups-container') as HTMLDivElement | null;
    const mainTitle = document.getElementById('video-main-title') as HTMLHeadingElement | null;

    if (!container || !mainTitle) {
        console.error("Elementos de container de vídeo não encontrados.");
        return;
    }

    // Título Principal
    mainTitle.textContent = sectionVideos.title as string;

    // Função auxiliar para formatar a chave (ex: real_product -> Real Product)
    const formatKey = (key: string): string => {
        return key.split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    // Iterar sobre as entradas do objeto
    Object.entries(sectionVideos).forEach(([key, value]) => {
        // Pulamos a chave 'title' que é o título geral da seção
        if (key === 'title' || typeof value === 'string') return;

        const group = value as VideoGroup;
        const groupTitle = formatKey(key);
        const groupDescription = group.title;

        const groupHtml = `
        <div class="reveal">
            <div class="mb-10">
                <div class="flex items-center gap-4 mb-2">
                    <h4 class="text-2xl font-black tracking-tighter text-slate-900 dark:text-white uppercase italic">
                        ${groupTitle}
                    </h4>
                    <div class="h-px bg-slate-100 dark:bg-slate-800 flex-grow"></div>
                </div>
                <p class="text-sm text-slate-500 font-medium">${groupDescription}</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                ${group.videos.map((video: Video) => `
                    <div class="video-card group cursor-pointer" onclick="alert('Coming soon')">
                        <div class="relative aspect-video bg-slate-100 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 mb-4 transition-all group-hover:border-blue-500/50 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                            <div class="absolute inset-0 flex items-center justify-center">
                                <div class="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-white/20">
                                    <svg class="w-5 h-5 text-blue-500 fill-current" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <h5 class="font-bold text-sm mb-1 group-hover:text-blue-600 transition-colors">${video.title}</h5>
                        <p class="text-[11px] text-slate-500 leading-relaxed line-clamp-2">${video.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

        container.insertAdjacentHTML('beforeend', groupHtml);
    });


}

function setScrollEffects() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function setLoginEvent() {

    const buttons = document.querySelectorAll('.btn-login');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            alert('Coming soon. Please check back shortly.');



        });
    });

}

setEvents()

/*import { CollabLandingPage } from '_102032_/l2/collabLandingPage';
import { customElement } from 'lit/decorators.js';

@customElement('www--en--landingpage-102031')
export class Landingpage102031 extends CollabLandingPage {

    firstUpdated() {
        this.setEvents();
    }

    setEvents() {
        this.renderVideoSection(this.sectionVideos);
        this.setScrollEffects();
        this.setLoginEvent();
    }

    setScrollEffects() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }

    setLoginEvent() {

        const buttons = document.querySelectorAll('.btn-login');

        buttons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                //alert('Coming soon. Please check back shortly.');
                
                const params = {
                    type: 'iframeL7',
                    action: 'login'
                };
                window.parent.postMessage(params, '*');
                
            });
        });

    }

    _handleSignIn() {
        const params = {
            type: 'iframeL7',
            action: 'login'
        };
        window.parent.postMessage(params, '*');
    }

    sectionVideos: SectionVideos = {
        title: "How It Works",
        real_product: {
            title: "Examples",
            videos: [
                {
                    title: "PetShop",
                    description: "A simple pet shop application"
                },
                {
                    title: "TodoApp",
                    description: "A simple todo application"
                },
                {
                    title: "IndustryApp",
                    description: "A simple industry application"
                },
                {
                    title: "EcommerceApp",
                    description: "A simple ecommerce application"
                }
            ]
        },
        customization: {
            title: "Easy Customization",
            videos: [
                {
                    title: "Support multiple languages",
                    description: "Make the application ready for multiple languages and locales"
                },
                {
                    title: "Theming",
                    description: "Adapt themes and visual identity"
                },
                {
                    title: "Layout",
                    description: "Adapt the layout to different use cases and user preferences"
                },
                {
                    title: "Text Editor",
                    description: "Edit custom or AI-generated text with ease"
                },
                {
                    title: "Custom Components",
                    description: "Use or create custom components and swap them for alternative implementations"
                }
            ]
        },
        business_fit: {
            title: "Adapted to Your Business",
            videos: [
                {
                    title: "Business Rules",
                    description: "Create business rules, conditions, and automated actions"
                },
                {
                    title: "Expand with New Pages",
                    description: "Add new pages and connect them to the application menu"
                },
                {
                    title: "Access Control",
                    description: "Control access, permissions, and protected areas of the application"
                },
                {
                    title: "External Integrations",
                    description: "Integrate the application with other systems and APIs"
                }
            ]
        },
        technical_architecture: {
            title: "Technical Foundation",
            videos: [
                {
                    title: "Interface Technology",
                    description: "Inside the frontend architecture and technologies used"
                },
                {
                    title: "Application Backend",
                    description: "Inside the backend architecture and technologies used"
                },
                {
                    title: "Data Layer",
                    description: "Inside the data architecture and storage strategy"
                },
                {
                    title: "DevOps",
                    description: "Monitoring the live system, from errors to traffic and operational metrics"
                }
            ]
        },
        ai_collaboration: {
            title: "AI Working With You",
            videos: [
                {
                    title: "From Prompt to System",
                    description: "Using an initial prompt, refining requirements, and building complete systems"
                },
                {
                    title: "AI Customization",
                    description: "How AI helps customize the application after generation"
                },
                {
                    title: "AI Workflow",
                    description: "How to use AI to manage your workflow and automate tasks"
                },
                {
                    title: "AI in Automation",
                    description: "Using AI to execute business commands and operational actions"
                }
            ]
        },
        performance: {
            title: "Performance and Scalability",
            videos: [
                {
                    title: "Performance by Design",
                    description: "Designed for performance from the start"
                },
                {
                    title: "Scaling the System",
                    description: "Scaling the application to handle increasing load and data"
                },
                {
                    title: "Observability",
                    description: "Infrastructure and application monitoring in practice"
                },
                {
                    title: "Runtime Footprint",
                    description: "System resource usage and platform requirements in practice"
                }
            ]
        }
    };

    renderVideoSection(sectionVideos: SectionVideos): void {
        const container = document.getElementById('video-groups-container') as HTMLDivElement | null;
        const mainTitle = document.getElementById('video-main-title') as HTMLHeadingElement | null;

        if (!container || !mainTitle) {
            console.error("Elementos de container de vídeo não encontrados.");
            return;
        }

        // Título Principal
        mainTitle.textContent = sectionVideos.title as string;

        // Função auxiliar para formatar a chave (ex: real_product -> Real Product)
        const formatKey = (key: string): string => {
            return key.split('_')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        };

        // Iterar sobre as entradas do objeto
        Object.entries(sectionVideos).forEach(([key, value]) => {
            // Pulamos a chave 'title' que é o título geral da seção
            if (key === 'title' || typeof value === 'string') return;

            const group = value as VideoGroup;
            const groupTitle = formatKey(key);
            const groupDescription = group.title;

            const groupHtml = `
        <div class="reveal">
            <div class="mb-10">
                <div class="flex items-center gap-4 mb-2">
                    <h4 class="text-2xl font-black tracking-tighter text-slate-900 dark:text-white uppercase italic">
                        ${groupTitle}
                    </h4>
                    <div class="h-px bg-slate-100 dark:bg-slate-800 flex-grow"></div>
                </div>
                <p class="text-sm text-slate-500 font-medium">${groupDescription}</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                ${group.videos.map((video: Video) => `
                    <div class="video-card group cursor-pointer" onclick="alert('Coming soon')">
                        <div class="relative aspect-video bg-slate-100 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 mb-4 transition-all group-hover:border-blue-500/50 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                            <div class="absolute inset-0 flex items-center justify-center">
                                <div class="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-white/20">
                                    <svg class="w-5 h-5 text-blue-500 fill-current" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <h5 class="font-bold text-sm mb-1 group-hover:text-blue-600 transition-colors">${video.title}</h5>
                        <p class="text-[11px] text-slate-500 leading-relaxed line-clamp-2">${video.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

            container.insertAdjacentHTML('beforeend', groupHtml);
        });


    }


}*/

interface Video {
    title: string;
    description: string;
}

interface VideoGroup {
    title: string;
    videos: Video[];
}

interface SectionVideos {
    title: string;
    [key: string]: string | VideoGroup; 
}
