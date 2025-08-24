// Minimal SW to satisfy installability + standalone launch
self.addEventListener('install', () => self.skipWaiting());

// 收到前端要求立即切換
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

// 啟用後立刻接管現有分頁
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});