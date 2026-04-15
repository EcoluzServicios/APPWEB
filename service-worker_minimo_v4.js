const VERSION = 'ecoluz-sw-v4-no-cache';
self.addEventListener('install', event => {
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});
// Sin fetch cacheado para evitar servir HTML viejo.
