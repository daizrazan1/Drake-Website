// Drake Fan Site — Service Worker
const CACHE_NAME = 'drake-site-v6';

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
  '/drake-icon-512.png',
  '/music/track-01.m4a'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all(
        urlsToCache.map((url) =>
          cache.add(url).catch((err) => {
            console.warn('[SW] Failed to cache', url, err);
          })
        )
      )
    )
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

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const isDocument = event.request.destination === 'document';

  if (isDocument) {
    // Network-first for HTML/PHP pages so content is always fresh
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200 || response.type !== 'basic') return response;
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request).then((cached) => cached || caches.match('/index.php')))
    );
  } else {
    // Cache-first for static assets (CSS, JS, images, audio)
    event.respondWith(
      caches.match(event.request).then((cached) => {
        return cached || fetch(event.request).then((response) => {
          if (!response || response.status !== 200 || response.type !== 'basic') return response;
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          return response;
        });
      })
    );
  }
});
