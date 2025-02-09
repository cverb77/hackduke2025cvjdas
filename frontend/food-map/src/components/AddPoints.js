/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

// Custom icon definition
const customIcon = new L.Icon({
  iconUrl: '/marker.png',
  iconSize: [40, 40],  // Adjust size of the icon
  iconAnchor: [15, 45],  // Anchor the icon properly
  popupAnchor: [0, -40], // Position the popup relative to the icon
});

function AddMarker({ onNewPoint }) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      // Display form to gather point details
      const title = prompt('Enter a title for this point (required):');
      if (!title) {
        alert('Title is required.');
        return;
      }
      const food_category = prompt('Enter the food category (required):');
      if (!food_category) {
        alert('Food category is required.');
        return;
      }
      const description = prompt('Enter a description for this point (optional):');
      const email = prompt('Enter your email (optional):');

      onNewPoint({ lat, lon: lng, title, food_category, description, email });
    },
  });
  return null;
}

export default function AddPoints(props) {
  const [points, setPoints] = useState([]);
  const [placementMode, setPlacementMode] = useState(false);  // Toggle point placement mode

  useEffect(() => {
    fetch('http://localhost:5000/points') // https://hackduke2025cvjdas.onrender.com/points for main
      .then((res) => res.json())
      .then((data) => setPoints(data));
  }, []);

  const handleNewPoint = (newPoint) => {
    fetch('http://localhost:5000/points', { // https://hackduke2025cvjdas.onrender.com/points for main
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
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: '62px', padding: '9px', background: 'rgb(87, 28, 28)', textAlign: 'center', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
        <button
          onClick={() => setPlacementMode(!placementMode)}
          style={{
            padding: '10px 20px',
            background: placementMode ? 'rgb(87, 28, 28)' : 'green',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          {placementMode ? "I'd like to keep scrolling" : "I'm ready to place my point!"}
        </button>
      </div>

      <div style={{ flexGrow: 1 }}>
        <MapContainer attributionControl={false} center={[38.8283, -98.5795]} zoom={4.5} style={{ height: 'calc(100% - 62px)', width: '100%', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
          <TileLayer
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=a46d0fbc-36bf-4246-aa0b-bbe8635677e7"
            attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {placementMode && <AddMarker onNewPoint={handleNewPoint} />}

          {points.map((point, idx) => (
            <Marker key={idx} position={[point.lat, point.lon]} icon={customIcon}>
              <Popup>
                <b>{point.title}</b><br />
                <i>Food Category:</i> {point.food_category}<br />
                <i>Description:</i> {point.description || 'None'}<br />
                <i>Email:</i> {point.email || 'Not provided'}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
