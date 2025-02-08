import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Map() {
    return (
        <div>
            <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: "100vh", width: "100%" }} // Ensure proper rendering
            >
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}