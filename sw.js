const CACHE = 'dressage-reader-v8';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/Tests/tests.js',
  'https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300&family=DM+Mono:wght@300;400&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Network-first: always try the network so updates show immediately when online;
// fall back to cache (and to index.html for navigations) when offline.
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(e.request).then(cached => cached || caches.match('/index.html')))
  );
});
