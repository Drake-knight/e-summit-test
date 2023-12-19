self.addEventListener("push", (event) => {
    const eventData = event.data.json();
    const options = {
        body: eventData.body,
        icon: "/assets/illustrations/e-cell_logo_white.png",
    };
    event.waitUntil(self.registration.showNotification(eventData.title, options));
});

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        // Activate the new service worker and reload the page
        self.skipWaiting();
    } else if (event.data && event.data.type === 'UPDATE_AVAILABLE') {
        // Perform actions when a new version is available (optional)
        // For example, you can notify the user or show a custom UI

        // To force a page reload, you can use the following code
        self.clients.matchAll({ type: 'window' }).then((clients) => {
            clients.forEach((client) => {
                client.postMessage({ type: 'RELOAD_PAGE' });
            });
        });
    }
});