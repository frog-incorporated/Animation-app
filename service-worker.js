const CACHE = 'animapp-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './service-worker.js',
  // add any other static files here, e.g.:
  // './icon-192.png',
  // './icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
