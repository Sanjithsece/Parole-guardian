import { useState } from 'react';
import ReactMapGL, { Source, Layer } from 'react-map-gl';

const MapComponent = ({ position = { lat: 0, lng: 0 }, restrictedZones = [] }) => {
  const [viewport, setViewport] = useState({
    latitude: position.lat,
    longitude: position.lng,
    zoom: 13
  });

  return (
    <ReactMapGL
      {...viewport}
      onMove={(evt) => setViewport(evt.viewState)}
      style={{ width: '100%', height: '100%' }}
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/streets-v12"
    >
      {restrictedZones.map((zone, index) => (
        <Source
          key={index}
          id={`restricted-zone-${index}`}
          type="geojson"
          data={{
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [zone.center.lng, zone.center.lat]
            }
          }}
        >
          <Layer
            id={`circle-${index}`}
            type="circle"
            paint={{
              'circle-radius': 10, // Use fixed radius for visual clarity
              'circle-color': 'rgba(255, 0, 0, 0.5)'
            }}
          />
        </Source>
      ))}
    </ReactMapGL>
  );
};

export default MapComponent;
