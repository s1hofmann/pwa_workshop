const CURRENT_CACHES = {
    static: 'static-cache-v1',
    dynamic: 'dynamic-cache-v1'
};

self.oninstall = (event) => {
    console.log('[Service Worker] Installing service worker...', event);
    event.waitUntil(
        caches.open(CURRENT_CACHES.static)
            .then(cache => {
                    cache.addAll(
                        [
                            './',
                            './index.html',
                            './img/icons/app-icon-48x48.png',
                            './img/icons/app-icon-96x96.png',
                            './img/icons/app-icon-144x144.png',
                            './img/icons/app-icon-192x192.png',
                            './img/icons/app-icon-256x256.png',
                            './img/icons/app-icon-384x384.png',
                            './img/icons/app-icon-512x512.png',
                            './img/icons/apple-icon-76x76.png',
                            './img/icons/apple-icon-114x114.png',
                            './img/icons/apple-icon-144x144.png',
                            './img/icons/apple-icon-152x152.png',
                            './img/icons/apple-icon-60x60.png',
                            './img/icons/apple-icon-57x57.png',
                            './img/icons/apple-icon-72x72.png',
                            './img/icons/apple-icon-180x180.png',
                            './img/icons/apple-icon-120x120.png',
                            './img/logo.png'
                        ]
                    )
                        .catch(error => console.log('Failed to initialize HTML cache:', error));
                }
            )
    );
};

self.onactivate = (event) => {
    // TODO Implement me
};

self.onfetch = (event) => {
    // TODO Implement me
};
