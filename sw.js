// Sadece uygulama olarak yüklenebilmesi için; hiçbir şeyi önbelleğe almaz.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
