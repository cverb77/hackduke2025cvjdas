/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

// Custom icon definition
const customIcon = new L.Icon({
  iconUrl: '/marker.png',
  iconSize: [30, 30],  // Adjust size of the icon
  iconAnchor: [15, 45],  // Anchor the icon properly
  popupAnchor: [0, -40], // Position the popup relative to the icon
});

// Marker-adding logic (enabled only in placement mode)
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
  const [placementMode, setPlacementMode] = useState(false);  // Toggle point placement mode

  // Fetch points from the backend
  useEffect(() => {
    fetch('https://hackduke2025cvjdas.onrender.com/points')
      .then((res) => res.json())
      .then((data) => setPoints(data));
  }, []);

  const handleNewPoint = (newPoint) => {
    fetch('https://hackduke2025cvjdas.onrender.com/points', {
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
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column'}}>
        {/*change height above to make the bar not dissapear/get messed up */}
      {/* Top bar for placement mode button */}
      <div style={{ height: '62px', padding: '9px', background: 'rgb(87, 28, 28)', textAlign: 'center', 
        verticalAlign: 'center', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}>
        <button
          onClick={() => setPlacementMode(!placementMode)}
          style={{
            padding: '10px 20px',
            background: placementMode ? 'rbg(87, 28, 28)' : 'green',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
            verticalAlign: 'center',
          }}
        >
          {placementMode ? "I'd like to keep scrolling" : "I'm ready to place my point!"}
        </button>
      </div>

      {/* Map container */}
      <div style={{ flexGrow: 1}}>
        <MapContainer attributionControl={false} center={[51.505, -0.09]} zoom={13} style={{ height: 'calc(100% - 62px)', 
        width: '100%', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }} >
            {/*change height above to make the bar not dissapear/get messed up */}
          <TileLayer
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Enable point placement only when placementMode is active */}
          {placementMode && <AddMarker onNewPoint={handleNewPoint} />}

          {/* Display markers */}
          {points.map((point, idx) => (
            <Marker key={idx} position={[point.lat, point.lon]} icon={customIcon}>
              <Popup>{point.description}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
