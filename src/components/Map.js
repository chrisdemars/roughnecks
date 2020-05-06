import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import mapInfo from './data/map.json';
import MapMarker from '../images/marker.png';

const Map = () => {
  const [viewport] = useState({
    center: [-83.353776, 42.42743],
    latitude: 42.42743,
    longitude: -83.353776,
    width: '100vw',
    height: '50vh',
    zoom: 15,
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={`pk.eyJ1IjoiY2hyaXNkZW1hcnMiLCJhIjoiY2s5N2hvejVpMGJzdjNsbGJiNXIzMW9tMSJ9.ISgLlehiXK4-gxIn9R56EA`}
      >
        {mapInfo.features.map((map) => (
          <Marker
            key={map}
            latitude={map.geometry.coordinates[1]}
            longitude={map.geometry.coordinates[0]}
          >
            <img src={MapMarker} alt="Shop marker" />
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
};

export default Map;
