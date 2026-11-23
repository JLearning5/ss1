if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {
    // The worksheet and reflection are still usable online when caching is unavailable.
  });
}
