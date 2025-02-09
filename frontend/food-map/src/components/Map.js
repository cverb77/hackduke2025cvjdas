import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

const customIcon = new L.Icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png'), // Default Leaflet icon path (or custom path)
    iconSize: [30, 45],  // Adjust size of the icon
    iconAnchor: [15, 45],  // Anchor the icon properly
    popupAnchor: [0, -40], // Position the popup relative to the icon
  });

export default function Map() {
  const [points, setPoints] = useState([]);

  // Fetch points from the backend
  useEffect(() => {
    fetch('https://hackduke2025cvjdas.onrender.com')
      .then((res) => res.json())
      .then((data) => setPoints(data));
  }, []);
  
  const handleNewPoint = (newPoint) => {
    fetch('https://hackduke2025cvjdas.onrender.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPoint),
    }).then(() => {
      setPoints([...points, newPoint]);
    });
  };

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {points.map((point, idx) => (
        <Marker key={idx} position={[point.lat, point.lon]} icon={customIcon}>
          <Popup>{point.description}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
