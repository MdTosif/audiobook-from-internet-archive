// src/workers/cache-worker.ts

const CACHE_NAME = 'audio-cache';

self.addEventListener('message', (event) => {
  const { type, url } = event.data;

  if (type === 'get-cached-urls') {
    caches.open(CACHE_NAME).then((cache) => {
      cache.keys().then((keys) => {
        const urls = keys.map((request) => request.url);
        self.postMessage({ type: 'cached-urls', urls });
      });
    });
  } else if (type === 'cache-track' && url) {
    caches.open(CACHE_NAME).then((cache) => {
      cache.match(url).then((response) => {
        if (!response) {
          fetch(url)
            .then((res) => {
              if (res.ok) {
                cache.put(url, res.clone());
                self.postMessage({ type: 'cached', url });
              }
            })
            .catch((err) => {
              console.error('Failed to cache audio:', err);
            });
        } else {
          self.postMessage({ type: 'already-cached', url });
        }
      });
    });
  }
});