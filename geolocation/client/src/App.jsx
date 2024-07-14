
// // src/App.js
// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import Navbar from './components/Navbar';

// const App = () => {
//   const [shops, setShops] = useState([
//     { id: 1, lat: 19.0596, lon: 72.8295, name: 'Bandra West' },
//     { id: 2, lat: 19.1185, lon: 72.8418, name: 'Andheri West' },
//     { id: 3, lat: 19.1285, lon: 72.8418, name: 'jog West' },
//     { id: 4, lat: 19.1385, lon: 72.8418, name: 'mid West' },
//     { id: 4, lat: 19.1330609, lon: 72.8377145, name: 'Andheri West azad' }
//   ]);

//   const [userLocation, setUserLocation] = useState(null);
//   const [nearbyShop, setNearbyShop] = useState(null);

 

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const userLoc = {
//             lat: position.coords.latitude,
//             lon: position.coords.longitude
//           };
//           // setUserLocation(userLoc);
//           checkNearbyShops(userLoc);
//         },
//         (error) => {
//           console.error("Error obtaining location:", error);
//           alert("Location access denied");
//         }
//       );
//     } else {
//       alert("Geolocation is not supported by this browser.");
//     }
//   }, []);

//   const checkNearbyShops = (userLoc) => {
//     const distance = (lat1, lon1, lat2, lon2) => {
//       const toRad = (value) => (value * Math.PI) / 180;
//       const R = 6371e3; // metres
//       const φ1 = toRad(lat1);
//       const φ2 = toRad(lat2);
//       const Δφ = toRad(lat2 - lat1);
//       const Δλ = toRad(lon2 - lon1);

//       const a =
//         Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//         Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//       const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//       const d = R * c;
//       return d;
//     };

//     shops.forEach((shop) => {
//       const dist = distance(userLoc.lat, userLoc.lon, shop.lat, shop.lon);
//       console.log(`Distance to ${shop.name}: ${dist} meters`);
//       if (dist <= 500) {
//         setNearbyShop(shop);
//         alert(`Myntra shop nearby: ${shop.name}`);
//       }
//     });
//   };

//   return (
//     <div>
//       <Navbar />
//       <h1>Nearby Shops</h1>
//       <MapContainer center={[19.0558, 72.8342]} zoom={13} style={{ height: '600px', width: '100%' }}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         {shops.map(shop => (
//           <Marker key={shop.id} position={[shop.lat, shop.lon]}>
//             <Popup>{shop.name}</Popup>
//           </Marker>
//         ))}
//         {userLocation && (
//           <Marker position={[userLocation.lat, userLocation.lon]}>
//             <Popup>Your Location</Popup>
//           </Marker>
//         )}
//       </MapContainer>
//     </div>
//   );
// };

// export default App;
// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import Navbar from './components/Navbar';

// const App = () => {
//   const [shops, setShops] = useState([
//     { id: 1, lat: 19.0596, lon: 72.8295, name: 'Bandra West' },
//     { id: 2, lat: 19.1185, lon: 72.8418, name: 'Andheri West' },
//     { id: 3, lat: 19.1285, lon: 72.8418, name: 'jog West' },
//     { id: 4, lat: 19.1385, lon: 72.8418, name: 'mid West' },
//     { id: 5, lat: 19.1330609, lon: 72.8377145, name: 'Andheri West azad' }
//   ]);

//   const [userLocation, setUserLocation] = useState(null);
//   const [nearbyShop, setNearbyShop] = useState(null);

//   useEffect(() => {
//     requestLocationAccess();
//   }, []);

//   const requestLocationAccess = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           console.log("Location access granted");
//           const userLoc = {
//             lat: position.coords.latitude,
//             lon: position.coords.longitude
//           };
//           setUserLocation(userLoc);
//           checkNearbyShops(userLoc);
//         },
//         (error) => {
//           console.error("Error obtaining location:", error);
//           alert("Location access denied");
//         }
//       );
//     } else {
//       alert("Geolocation is not supported by this browser.");
//     }
//   };

//   const checkNearbyShops = (userLoc) => {
//     const distance = (lat1, lon1, lat2, lon2) => {
//       const toRad = (value) => (value * Math.PI) / 180;
//       const R = 6371e3; // metres
//       const φ1 = toRad(lat1);
//       const φ2 = toRad(lat2);
//       const Δφ = toRad(lat2 - lat1);
//       const Δλ = toRad(lon2 - lon1);

//       const a =
//         Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//         Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//       const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//       const d = R * c;
//       return d;
//     };

//     shops.forEach((shop) => {
//       const dist = distance(userLoc.lat, userLoc.lon, shop.lat, shop.lon);
//       console.log(`Distance to ${shop.name}: ${dist} meters`);
//       if (dist <= 500) {
//         setNearbyShop(shop);
//         alert(`Myntra shop nearby: ${shop.name}`);
//       }
//     });
//   };

//   return (
//     <div>
//       <Navbar />
//       <h1>Nearby Shops</h1>
//       <MapContainer center={[19.0558, 72.8342]} zoom={13} style={{ height: '600px', width: '100%' }}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         {shops.map(shop => (
//           <Marker key={shop.id} position={[shop.lat, shop.lon]}>
//             <Popup>{shop.name}</Popup>
//           </Marker>
//         ))}
//         {userLocation && (
//           <Marker position={[userLocation.lat, userLocation.lon]}>
//             <Popup>Your Location</Popup>
//           </Marker>
//         )}
//         {nearbyShop && (
//           <Marker position={[nearbyShop.lat, nearbyShop.lon]}>
//             <Popup>{`Myntra shop nearby: ${nearbyShop.name}`}</Popup>
//           </Marker>
//         )}
//       </MapContainer>
//       {nearbyShop && (
//         <div className="fixed top-20 right-0 bg-pink p-4 shadow">
//           <p className="text-sm text-[#170035] font-bold">
//             Myntra shop nearby: {nearbyShop.name}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Navbar from './components/Navbar';

const App = () => {
  const [shops, setShops] = useState([
    { id: 1, lat: 19.0596, lon: 72.8295, name: 'Myntra-Bandra West' },
    // { id: 2, lat: 19.1185, lon: 72.8418, name: 'Andheri West' },
    { id: 3, lat: 19.1285, lon: 72.8418, name: ' Myntra-Azad nagar, Andheri west' },
    { id: 4, lat: 19.1385, lon: 72.8418, name: 'Myntra-SV Road' },
    { id: 5, lat: 19.1330609, lon: 72.8377145, name: 'Myntra-Andheri West' }
  ]);

  const [userLocation, setUserLocation] = useState(null);
  const [nearbyShop, setNearbyShop] = useState(null);

  useEffect(() => {
    requestLocationAccess();
  }, []);

  const requestLocationAccess = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Location access granted");
          const userLoc = {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          };
          setUserLocation(userLoc);
          checkNearbyShops(userLoc);
        },
        (error) => {
          console.error("Error obtaining location:", error);
          alert("Location access denied");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const checkNearbyShops = (userLoc) => {
    const distance = (lat1, lon1, lat2, lon2) => {
      const toRad = (value) => (value * Math.PI) / 180;
      const R = 6371e3; // metres
      const φ1 = toRad(lat1);
      const φ2 = toRad(lat2);
      const Δφ = toRad(lat2 - lat1);
      const Δλ = toRad(lon2 - lon1);

      const a =
        Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      const d = R * c;
      return d;
    };

    shops.forEach((shop) => {
      const dist = distance(userLoc.lat, userLoc.lon, shop.lat, shop.lon);
      console.log(`Distance to ${shop.name}: ${dist} meters`);
      if (dist <= 500) {
        setNearbyShop(shop);
        setTimeout(()=>{

          alert(`Myntra shop nearby: ${shop.name}`);
        },3000);
      }
    });
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setUserLocation(null); // Reset userLocation when tab becomes visible
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Nearby Shops</h1>
      <MapContainer center={[19.0558, 72.8342]} zoom={13} style={{ height: '600px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {shops.map(shop => (
          <Marker key={shop.id} position={[shop.lat, shop.lon]}>
            <Popup>{shop.name}</Popup>
          </Marker>
        ))}
        {userLocation && (
          <Marker position={[userLocation.lat, userLocation.lon]}>
            <Popup>Your Location</Popup>
          </Marker>
        )}
        {nearbyShop && (
          <Marker position={[nearbyShop.lat, nearbyShop.lon]}>
            <Popup>{`Myntra shop nearby: ${nearbyShop.name}`}</Popup>
          </Marker>
        )}
      {nearbyShop && (
        <div className="fixed top-24  right-0 bg-pink p-4 shadow">
          <p className="text-sm border-2 p-2 rounded-full text-[#170035] font-bold">
            Myntra shop nearby: {nearbyShop.name}
          </p>
        </div>
      )}
      </MapContainer>
    </div>
  );
};

export default App;


