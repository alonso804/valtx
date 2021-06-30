import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

function MyMap() {
    const position = [-12.0850812,-76.9798157]
    return (
        <Map
          className="map"
          center={position}
          zoom={13}
          style={{ height: 500, width: 500 }}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </Map>
    );
}

export default MyMap;