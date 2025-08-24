// Minimal SW to satisfy installability + standalone launch
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => self.clients.claim());

// (Optional) pass-through fetch keeps things simple/online-first
self.addEventListener('fetch', () => {});