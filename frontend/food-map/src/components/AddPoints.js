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

function AddMarker({ setLat, setLon }) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setLat(lat);
      setLon(lng);
    },
  });
  return null;
}

export default function AddPoints(props) {

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '10px', border: props.invalidForm ? '4px solid red' : ''}}>
      <div style={{ flexGrow: 1 }}>
        <MapContainer attributionControl={false} center={[38.8283, -98.5795]} zoom={4.5} style={{ height: '100%', width: '100%', borderRadius: '10px'}}>
          <TileLayer
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=a46d0fbc-36bf-4246-aa0b-bbe8635677e7"
            attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {props.placementMode && <AddMarker setLat={props.setLat} setLon={props.setLon} />}

          {props.lat && (
            <Marker position={[props.lat, props.lon]} icon={customIcon}>
              <Popup>Your Marker</Popup>
            </Marker>
          )}

          {props.points.map((point, idx) => (
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
