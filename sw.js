const CACHE_NAME = "static_cache"
const STATIC_ASSETS = [
    '/index.html',
    '/index.js',
    // '/js/script.js',
    // '/js/Stack.js'
]

async function preCache() {
    const cache = await caches.open(CACHE_NAME)
    return cache.addAll(STATIC_ASSETS)
}

self.addEventListener('install', event => {
    console.log("SW Installed");
    event.waitUntil(preCache());
})

self.addEventListener('activate', event => {
    console.log("SW activate");
})


async function fetchAssets(event) {
    try{
        const responce = fetch(event.request)
        return responce
    } catch (err) {
        const cache = await caches.open(CACHE_NAME)
        return cache.match(event.request)
    }
}

self.addEventListener('fetch', event => {
    console.log("SW fetch");
    event.responfWith(fetchAssets(event))
})
