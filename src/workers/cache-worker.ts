self.addEventListener('message', async (event) => {
  const { type, url } = event.data;

  if (type === 'cache-track') {
    try {
      const cache = await caches.open('audio-cache');
      const response = await cache.match(url);
      if (response) {
        self.postMessage({ type: 'already-cached', url });
      } else {
        await cache.add(url);
        self.postMessage({ type: 'cached', url });
      }
    } catch (error) {
      // self.postMessage({ type: 'CACHE_ERROR', url, error }); // Maybe add error handling later
    }
  } else if (type === 'cached-urls') {
    const cache = await caches.open('audio-cache');
    const requests = await cache.keys();
    const urls = requests.map(req => req.url);
    self.postMessage({ type: 'cached-urls', urls });
  }
});
