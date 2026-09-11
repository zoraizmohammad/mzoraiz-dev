const CACHE_VERSION = "mzoraiz-v2";
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const MEDIA_CACHE = `${CACHE_VERSION}-media`;

const STATIC_ASSETS = [
  "/", "/index.html", "/projects.html", "/resume.html", "/about.html",
  "/styles.css", "/project-detail.css", "/script.js", "/project-detail.js",
  "/assets/favicon.svg",
  "/assets/fonts/dm-sans-latin.woff2", "/assets/fonts/dm-sans-latin-ext.woff2",
  "/assets/fonts/dm-mono-400-latin.woff2", "/assets/fonts/dm-mono-400-latin-ext.woff2",
  "/assets/fonts/dm-mono-500-latin.woff2", "/assets/fonts/dm-mono-500-latin-ext.woff2",
  "/assets/fonts/noto-symbols-math.woff2", "/assets/fonts/noto-symbols.woff2"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(STATIC_CACHE).then(cache => cache.addAll(STATIC_ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(key => !key.startsWith(CACHE_VERSION)).map(key => caches.delete(key))
  )));
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.destination === "image" || request.destination === "font") {
    event.respondWith(caches.open(MEDIA_CACHE).then(async cache => {
      const cached = await cache.match(request);
      if (cached) return cached;
      const response = await fetch(request);
      if (response.ok) cache.put(request, response.clone());
      return response;
    }));
    return;
  }

  if (request.destination === "style" || request.destination === "script") {
    event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
      if (response.ok) caches.open(STATIC_CACHE).then(cache => cache.put(request, response.clone()));
      return response;
    })));
  }
});
