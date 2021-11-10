const cacheName = 'v1';
const cacheAssets = [
  './thankYou.html',
  './signUp.html',
  './signIn.html',
  './forgotPassword.html',
  './app.js',
  './service-worker.js',
  './style/',
  './style/style.css',
  './style/img/',
  './style/img/logo.png',
  './style/img/mainImg.png',
  './style/fonts/',
  './style/fonts/HelveticaNeue/',
  './style/fonts/HelveticaNeue/HelveticaNeueCyr-Medium.eot',
  './style/fonts/HelveticaNeue/HelveticaNeueCyr-Medium.otf',
  './style/fonts/HelveticaNeue/HelveticaNeueCyr-Medium.svg',
  './style/fonts/HelveticaNeue/HelveticaNeueCyr-Medium.ttf',
  './style/fonts/HelveticaNeue/HelveticaNeueCyr-Medium.woff'
];

self.addEventListener('install', (event) => {
  console.log('Service Worker: Installed');

  event.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log('Service Worker: Caching Files');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
      .catch((err) => console.log(err))
  );
});

self.addEventListener('activate', (event) => {
  console.log('Serive Worker: Activated');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  console.log('Service Worker: Fetching');
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
