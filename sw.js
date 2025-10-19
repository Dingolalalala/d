self.addEventListener('push', e => {
  const data = e.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    vibrate: [200, 100, 200], // vibration pattern: vibrate-pause-vibrate
  });
});
