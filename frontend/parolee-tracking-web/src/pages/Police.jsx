import MapComponent from '../components/Navbar';

export default function Police() {
  const position = { lat: 37.7749, lng: -122.4194 };

  return (
    <div className="police-view">
      <div className="alert-badge">Active Alerts: 1</div>
      <div className="map-container">
        <MapComponent position={position} />
      </div>
    </div>
  );
}
