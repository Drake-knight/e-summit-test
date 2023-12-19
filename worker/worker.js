self.addEventListener("push", (event) => {
    const eventData = event.data.json();

    const options = {
        body: eventData.body,
        icon: "/assets/illustrations/e-cell_logo_white.png",
    };

    event.waitUntil(self.registration.showNotification(eventData.title, options));
});