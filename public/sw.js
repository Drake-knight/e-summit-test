
import { cleanupOutdatedCaches, precacheAndRoute } from "workbox-precaching";
import { clientsClaim } from "workbox-core";

self.skipWaiting();
clientsClaim();
cleanupOutdatedCaches();

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            new Response(JSON.stringify({ type: "offline" }), {
                headers: { "Content-Type": "application/json" },
            })
        );
    }
});

self.addEventListener("push", (event) => {
    const eventData = event.data.json();

    const options = {
        body: eventData.body,
        icon: "/assets/illustrations/e-cell_logo_white.png",
    };

    event.waitUntil(self.registration.showNotification(eventData.title, options));
});
