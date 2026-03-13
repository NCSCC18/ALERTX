// service-worker.js
import { ExpoPushNotifications } from 'expo-notifications/sw';

self.addEventListener('push', (event) => {
  event.waitUntil(
    self.registration.showNotification(event.data.title, {
      body: event.data.body,
    })
  );
});