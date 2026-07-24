const CACHE_NAME = 'calculator-net-v1';
const ASSETS_TO_CACHE = [
	'/',
	'/manifest.json',
	'/robots.txt',
	'/icon-192.png',
	'/icon-512.png'
];

// Install Event - Pre-cache critical core pages/assets
self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			console.log('[Service Worker] Pre-caching offline assets...');
			return cache.addAll(ASSETS_TO_CACHE);
		}).then(() => self.skipWaiting())
	);
});

// Activate Event - Clean up stale caches
self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cache) => {
					if (cache !== CACHE_NAME) {
						console.log('[Service Worker] Deleting old cache:', cache);
						return caches.delete(cache);
					}
				})
			);
		}).then(() => self.clients.claim())
	);
});

// Fetch Event - Serve cached assets or fetch and cache on-the-fly
self.addEventListener('fetch', (event) => {
	// Only handle GET requests and skip browser extensions/external APIs
	if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
		return;
	}

	event.respondWith(
		caches.match(event.request).then((cachedResponse) => {
			if (cachedResponse) {
				// Fetch the latest version in the background to update the cache (Stale-While-Revalidate)
				fetch(event.request)
					.then((networkResponse) => {
						if (networkResponse.status === 200) {
							caches.open(CACHE_NAME).then((cache) => {
								cache.put(event.request, networkResponse);
							});
						}
					})
					.catch(() => {
						/* Ignore network failures on background revalidation */
					});

				return cachedResponse;
			}

			// If not in cache, fetch from network and save to cache
			return fetch(event.request).then((networkResponse) => {
				if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
					return networkResponse;
				}

				const responseToCache = networkResponse.clone();
				caches.open(CACHE_NAME).then((cache) => {
					cache.put(event.request, responseToCache);
				});

				return networkResponse;
			}).catch(() => {
				// Fallback to offline shell if network fails
				if (event.request.mode === 'navigate') {
					return caches.match('/');
				}
			});
		})
	);
});
