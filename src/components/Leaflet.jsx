import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Leaflet = () => {
       return (
        <div>
            <MapContainer center={[23.852162, 90.653669]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
                <Marker position={[23.854974, 90.653476]}>
                    <Popup>Tadaa! Here  where I live</Popup>
                </Marker>
                <div className="map-content">
                    <span>Majedul Hasan,</span>
                    <br />
                    <span>Location: Madhabdi, Bangladesh</span>
                    <br />
                    <span>Email: hasanmajedul@gmail.com</span>
                </div>
            </MapContainer>
        </div>
    )
}

export default Leaflet




//       <link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet@1/dist/leaflet.min.css">
// <script src="https://cdn.jsdelivr.net/npm/leaflet@1/dist/leaflet-src.min.js"></script>

