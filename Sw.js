const cacheName = 'penitencia-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './icon.png'
];

// Instala o Service Worker e faz o cache dos arquivos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// Responde com os arquivos do cache quando estiver offline
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});