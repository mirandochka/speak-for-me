const C = "speakforme-v4";
const FILES = ["./", "index.html", "manifest.json", "icon-180.png", "icon-192.png", "icon-512.png", "audio/map.json", "audio/0b59343f07.m4a", "audio/184eb63a90.m4a", "audio/1966dd5bd2.m4a", "audio/22959ede33.m4a", "audio/250e436ac2.m4a", "audio/2765080bd8.m4a", "audio/28bb4d6f2b.m4a", "audio/2c34fe1cca.m4a", "audio/397570d60b.m4a", "audio/3f6a14f49f.m4a", "audio/40090ea2c4.m4a", "audio/5397e0583f.m4a", "audio/55c5a325bc.m4a", "audio/5af408dbc3.m4a", "audio/69f8527ee0.m4a", "audio/6a151a67b7.m4a", "audio/6abc5354a1.m4a", "audio/734aa9b914.m4a", "audio/73f87b83f1.m4a", "audio/79fbcf0718.m4a", "audio/7a837be472.m4a", "audio/816c52fd2b.m4a", "audio/8729b39f15.m4a", "audio/b64253d505.m4a", "audio/c2a1b7bb5a.m4a", "audio/d18274fdab.m4a", "audio/dc17b5ea9a.m4a", "audio/e498ae5312.m4a", "audio/ec38905ba3.m4a", "audio/ec74492e1b.m4a", "audio/f0e1f34ff7.m4a", "audio/f363d95785.m4a", "audio/f4db86d0e1.m4a"];
self.addEventListener("install", e => { e.waitUntil(caches.open(C).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(C).then(c => c.put(e.request, copy)); return r; })
    .catch(() => caches.match(e.request, { ignoreSearch: true })));
});
