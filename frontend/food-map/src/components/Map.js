import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

function AddMarker({ onNewPoint }) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      const description = prompt('Enter a description for this point:');
      if (description) {
        onNewPoint({ lat, lon: lng, description });
      }
    },
  });
  return null;
}

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
      <AddMarker onNewPoint={handleNewPoint} />
      {points.map((point, idx) => (
        <Marker key={idx} position={[point.lat, point.lon]}>
          <Popup>{point.description}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
