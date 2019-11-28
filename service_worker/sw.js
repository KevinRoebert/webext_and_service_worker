console.log("Service Worker: Hello World");

self.addEventListener('fetch', function (event) {
    event.respondWith(
        fetch(event.request)
    );
});