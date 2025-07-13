self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('echoword-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/echoword/',
        '/echoword/index.html',
        '/echoword/manifest.json',
        '/echoword/icon-192.png',
        '/echoword/icon-512.png'
        // Add more files if needed
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
