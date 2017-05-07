// configuration
const
  version = '1.0.0',
  CACHE = version + '::PWAsite',
  offlineURL = '/offline/',
  installFilesEssential = [
    '/',
    '/manifest.webmanifest',
  ].concat(offlineURL),
  installFilesDesirable = [
    '/images/2associes-logo.png',
  ];

// install static assets
function installStaticFiles() {
  return caches.open(CACHE)
  .then(cache => {
    // cache desirable files
    cache.addAll(installFilesDesirable);
    // cache essential files
    return cache.addAll(installFilesEssential);
  });
}

// clear old caches
function clearOldCaches() {
  return caches.keys()
  .then(keylist => {
    return Promise.all(
      keylist
      .filter(key => key !== CACHE)
      .map(key => caches
      .delete(key),
    ));
  });
}

// application installation
self.addEventListener('install', event => {
  console.log('service worker: install');
  // cache core files
  event.waitUntil(
    installStaticFiles()
    .then(() => self.skipWaiting()),
  );
});

// application activated
self.addEventListener('activate', event => {
  console.log('service worker: activate');
  // delete old caches
  event.waitUntil(
    clearOldCaches()
    .then(() => self.clients.claim()),
  );
});
