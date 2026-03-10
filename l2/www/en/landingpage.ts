/// <mls fileReference="_102031_/l2/www/en/landingpage.ts" enhancement="_102020_enhancementAura" />

import { CollabPageElement } from '/_100554_/l2/collabPageElement.js';
import { customElement } from 'lit/decorators.js';
import { globalState, initState, setState } from '/_100554_/l2/collabState.js';

@customElement('www--en--landingpage-102031')
export class Landingpage102031 extends CollabPageElement {
    initPage() {
        this.setEvents();
    }

    setEvents() {
        this.setScrollEffects();
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
                alert('Coming soon. Please check back shortly.');
                /*
                const params = {
                    type: 'iframeL7',
                    action: 'login'
                };
                window.parent.postMessage(params, '*');
                */
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
}

