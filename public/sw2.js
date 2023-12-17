/* eslint-disable no-undef */
self.addEventListener("push", (event) => {
    const eventData = event.data.json();

    const options = {
        body: eventData.body,
        icon: '/assets/illustrations/e-cell_logo_white.png',
    };

    event.waitUntil(self.registration.showNotification(eventData.title, options));
});


self.addEventListener('notificationclick', function (event) {
    event.notification.close()
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (clientList) {
            if (clientList.length > 0) {
                let client = clientList[0]
                for (let i = 0; i < clientList.length; i++) {
                    if (clientList[i].focused) {
                        client = clientList[i]
                    }
                }
                return client.focus()
            }
            return clients.openWindow('/')
        })
    )
})

self.addEventListener('message', async event => {
    if (event.data && event.data.action === 'CACHE_NEW_ROUTE') {
        caches.open('others').then(cache =>
            cache.match(event.source.url).then(res => {
                if (res === undefined) {
                    return cache.add(event.source.url)
                }
            })
        )
    }
})