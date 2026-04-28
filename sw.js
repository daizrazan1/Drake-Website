// Drake Fan Site — Service Worker
const CACHE_NAME = 'drake-site-v4';

const urlsToCache = [
  '/',
  '/index.php',
  '/about.php',
  '/albums.php',
  '/singles.php',
  '/ovo.php',
  '/song-recommender.php',
  '/css/modern-styles.css',
  '/js/navigation.js',
  '/data.json',
  '/manifest.json',
  '/drake-icon-192.png',
  '/drake-icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache).catch(() => {}))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') return response;
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      }).catch(() => {
        if (event.request.destination === 'document') {
          return caches.match('/index.php');
        }
      });
    })
  );
});
