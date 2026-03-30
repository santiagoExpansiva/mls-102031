/// <mls fileReference="_102031_/l2/www/en/pricing.ts" enhancement="_102032_/l2/enhancementLandingPage" />


class PricingPage1 {
    private isAnnual = false;

    constructor() {
        this.setEvents();
    }

    setEvents() {
        this.setScrollEffects();
        this.setBillingToggle();
        this.setFaqAccordion();
    }

    setScrollEffects() {
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
        }, observerOptions);
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }

    setBillingToggle() {
        const btnMonthly = document.getElementById('btn-monthly');
        const btnAnnual = document.getElementById('btn-annual');
        if (!btnMonthly || !btnAnnual) return;

        btnMonthly.addEventListener('click', () => this.setMonthly());
        btnAnnual.addEventListener('click', () => this.setAnnual());
    }

    setMonthly() {
        this.isAnnual = false;
        const btnMonthly = document.getElementById('btn-monthly');
        const btnAnnual = document.getElementById('btn-annual');
        if (btnMonthly) {
            btnMonthly.classList.add('bg-white', 'text-slate-900');
            btnMonthly.classList.remove('text-white/70');
        }
        if (btnAnnual) {
            btnAnnual.classList.remove('bg-white', 'text-slate-900');
            btnAnnual.classList.add('text-white/70');
        }
        document.querySelectorAll('.price-monthly').forEach(el => el.classList.remove('hidden'));
        document.querySelectorAll('.price-annual').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('.price-annual-note').forEach(el => el.classList.add('hidden'));
    }

    setAnnual() {
        this.isAnnual = true;
        const btnMonthly = document.getElementById('btn-monthly');
        const btnAnnual = document.getElementById('btn-annual');
        if (btnAnnual) {
            btnAnnual.classList.add('bg-white', 'text-slate-900');
            btnAnnual.classList.remove('text-white/70');
        }
        if (btnMonthly) {
            btnMonthly.classList.remove('bg-white', 'text-slate-900');
            btnMonthly.classList.add('text-white/70');
        }
        document.querySelectorAll('.price-monthly').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('.price-annual').forEach(el => el.classList.remove('hidden'));
        document.querySelectorAll('.price-annual-note').forEach(el => el.classList.remove('hidden'));
    }

    setFaqAccordion() {
        const triggers = document.querySelectorAll('.faq-trigger');
        triggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const item = trigger.closest('.faq-item');
                if (!item) return;
                const body = item.querySelector('.faq-body');
                const icon = trigger.querySelector('.faq-icon');
                if (!body) return;

                const isOpen = !body.classList.contains('hidden');

                // Close all
                document.querySelectorAll('.faq-body').forEach(b => b.classList.add('hidden'));
                document.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('rotate-180'));

                // Open clicked if it was closed
                if (!isOpen) {
                    body.classList.remove('hidden');
                    if (icon) icon.classList.add('rotate-180');
                }
            });
        });
    }
}

new PricingPage1();
