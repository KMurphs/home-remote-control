// Set this to true for production
var doCache = true;

// Name our cache
var CACHE_NAME = 'home-remote-app-v1';

// Delete old caches that are not our current one!
self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
    .then(keyList =>
      Promise.all(keyList.map(key => {
        if (!cacheWhitelist.includes(key)) {
          console.log('Deleting cache: ' + key)
          return caches.delete(key);
        }
      }))
    )
  );
});

// The first time the user starts up the PWA, 'install' is triggered.
self.addEventListener('install', function(event) {
  if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.addAll([
          '/',
          'index',
          'favicon.ico',
          'launcher-icon-2x.png',
          'launcher-icon-3x.png',
          'launcher-icon-4x.png',
          'launcher-icon-5x.png',
          'manifest.json',
          'css/index.css',
          'css/uikit.min.css',
          'js/ws.js',
          'js/templates.js',
          'js/keys.js',
          'js/mustache.min.js',
          'js/uikit.min.js',
          'js/uikit-icons.min.js'
        ]);
      })
    );
  }
});


// When the webpage goes to fetch files, we intercept that request and serve up the matching fi
// if we have them
self.addEventListener('fetch', function(event) {
  if (doCache) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    );
  }
});