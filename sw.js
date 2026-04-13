const CACHE_NAME = 'calculadora-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Instala el Service Worker y guarda los archivos básicos en caché
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Permite que la App responda incluso sin internet
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
