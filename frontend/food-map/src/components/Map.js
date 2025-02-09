/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

const customIcon = new L.Icon({
    // icon attribution: <a href="https://www.flaticon.com/free-icons/placeholder" title="placeholder icons">Placeholder icons created by Freepik - Flaticon</a>
    iconUrl: '/marker.png',
    iconSize: [30, 30],  // Adjust size of the icon
    iconAnchor: [15, 45],  // Anchor the icon properly
    popupAnchor: [0, -40], // Position the popup relative to the icon
  });

export default function Map() {
  const [points, setPoints] = useState([]);

  // Fetch points from the backend
  useEffect(() => {
    fetch('http://localhost:5000/points') // fetch('https://hackduke2025cvjdas.onrender.com/points')
      .then((res) => res.json())
      .then((data) => setPoints(data));
  }, []);
  
  const handleNewPoint = (newPoint) => {
    fetch('http://localhost:5000/points', { // fetch('https://hackduke2025cvjdas.onrender.com/points', {
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
    <MapContainer attributionControl={false} center={[33.8283, -98.5795]} zoom={4.5} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=a46d0fbc-36bf-4246-aa0b-bbe8635677e7"
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {points.map((point, idx) => (
        <Marker key={idx} position={[point.lat, point.lon]} icon={customIcon}>
          <Popup>{point.description}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
