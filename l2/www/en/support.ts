/// <mls fileReference="_102031_/l2/www/en/support.ts" enhancement="_102032_/l2/enhancementLandingPage" />


class SupportPage {
    constructor() {
        this.setEvents();
    }

    setEvents() {
        this.setScrollEffects();
        this.setLiveChatButtonEvent();
    }

    setScrollEffects() {
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
        }, observerOptions);
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }

    setLiveChatButtonEvent() {
        const btn = document.querySelector('#btnLiveChat');
        if (!btn) return;
        btn.addEventListener('click', this.handleLiveChatButtonClick);
    }

    handleLiveChatButtonClick() {
        alert('Coming soon. Please check back shortly.');
    }
}

new SupportPage();