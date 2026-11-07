// Minimal service worker: makes the site installable. It caches nothing, so updates deploy instantly.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
