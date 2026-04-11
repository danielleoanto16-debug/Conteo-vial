self.addEventListener('fetch', function(event) {
  // Esto permite que la app funcione incluso con internet lento
  event.respondWith(fetch(event.request));
});