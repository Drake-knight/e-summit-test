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
    const eventData = event.data;

    const options = {
        body: eventData.body,
        icon: "/assets/illustrations/e-cell_logo_white_wo_captions.png",
    };

    event.waitUntil(self.registration.showNotification(eventData.title, options));
});

// self.addEventListener('notificationclick', function (event) {
//     event.notification.close()
//     event.waitUntil(
//         clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (clientList) {
//             if (clientList.length > 0) {
//                 let client = clientList[0]
//                 for (let i = 0; i < clientList.length; i++) {
//                     if (clientList[i].focused) {
//                         client = clientList[i]
//                     }
//                 }
//                 return client.focus()
//             }
//             return clients.openWindow('/')
//         })
//     )
// })