import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
<StatsChart stats={stats} />

function MapView () {
  return (
    <MapContainer
      center={[8.6195, 0.8248]}
      zoom={7}
      scrollWheelZoom={true}
      style={{
        height: "500px",
        width: "100%",
        borderRadius: "15px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default MapView;