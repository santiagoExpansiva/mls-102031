/// <mls fileReference="_102031_/l2/www/en/index.ts" enhancement="_102032_/l2/enhancementLandingPage" />

function prepareNavigation() {
    type Lang = 'pt' | 'en';
    const SUPPORTED: Lang[] = ['pt', 'en'];
    const DEFAULT: Lang   = 'en';
    const browserLang = (navigator.language || DEFAULT)
        .slice(0, 2)
        .toLowerCase();
    console.info(browserLang)
    const lang = SUPPORTED.includes(browserLang as Lang) ? browserLang as Lang : DEFAULT;

    const messages: Record<Lang, string> = {
        pt: 'Seja bem-vindo ao Collab.codes! Você está sendo redirecionado à página inicial.',
        en: 'Welcome to Collab.codes! You are being redirected to the home page.'
    };

    const msg = document.querySelector('#msg');
    if (!msg) return;
    msg.textContent = messages[lang];

    setTimeout(() => {
        const dest = `./landingpage${lang}.html`;
        //${location.search}${location.hash}`;
        window.location.replace(dest);
    }, 2000);
}

prepareNavigation();
