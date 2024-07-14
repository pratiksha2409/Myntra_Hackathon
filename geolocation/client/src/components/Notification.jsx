import React, { useState } from 'react';
import axios from 'axios';

function Notification() {
  const [userLocation, setUserLocation] = useState(null);

  const handleGeolocation = async () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async position => {
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
        try {
          const response = await axios.post('http://localhost:5000/api/geolocation', {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
          const nearbyShops = response.data;

          const nearbyMyntraShop = nearbyShops.find(shop => shop.name.includes('Myntra'));
          if (nearbyMyntraShop) {
            showNotification('Myntra Shop Near You', `You are near ${nearbyMyntraShop.name}`);
          }
        } catch (error) {
          console.error('Error fetching nearby shops:', error);
        }
      }, error => {
        console.error('Geolocation error:', error);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const showNotification = (title, body) => {
    if (Notification.permission === 'granted') {
      new Notification(title, { body });
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification(title, { body });
        }
      });
    }
  };

  return (
    <div>
      <h1>Shop</h1>
      <button onClick={() => Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          showNotification('Permission granted!', 'You will now receive notifications.');
        }
      })}>
        Allow Notifications
      </button>
      <button onClick={handleGeolocation}>Get Nearby Shops</button>
    </div>
  );
}

export default Notification;
