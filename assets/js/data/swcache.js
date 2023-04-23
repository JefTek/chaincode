const resource = [
    /* --- CSS --- */
    '/https://jeftek.com/assets/css/style.css',

    /* --- PWA --- */
    '/https://jeftek.com/app.js',
    '/https://jeftek.com/sw.js',

    /* --- HTML --- */
    '/https://jeftek.com/index.html',
    '/https://jeftek.com/404.html',

    
        '/https://jeftek.com/categories/',
    
        '/https://jeftek.com/tags/',
    
        '/https://jeftek.com/archives/',
    
        '/https://jeftek.com/about/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/https://jeftek.com/assets/img/favicons/android-chrome-192x192.png',
        '/https://jeftek.com/assets/img/favicons/android-chrome-512x512.png',
        '/https://jeftek.com/assets/img/favicons/apple-touch-icon.png',
        '/https://jeftek.com/assets/img/favicons/favicon-16x16.png',
        '/https://jeftek.com/assets/img/favicons/favicon-32x32.png',
        '/https://jeftek.com/assets/img/favicons/favicon.ico',
        '/https://jeftek.com/assets/img/favicons/mstile-150x150.png',
        '/https://jeftek.com/assets/js/dist/categories.min.js',
        '/https://jeftek.com/assets/js/dist/commons.min.js',
        '/https://jeftek.com/assets/js/dist/misc.min.js',
        '/https://jeftek.com/assets/js/dist/page.min.js',
        '/https://jeftek.com/assets/js/dist/post.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    'jeftek.com',

    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
    
];

