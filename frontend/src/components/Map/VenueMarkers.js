import React, { Fragment } from 'react'
import {Marker} from 'react-leaflet';
import { TruckLocationIcon } from "./VenueLocationIcon";
import MarkerPopup from './MarkerPopup';

const TruckMarkers = (props) => {
  const { camiones } = props;

  return (
    <Fragment>
      <Marker position={camiones.coordenadas} icon={TruckLocationIcon}>
        <MarkerPopup data={camiones} />
      </Marker>
    </Fragment>
  );
};

export default TruckMarkers;
