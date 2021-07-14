import React from 'react';
import {Popup} from 'react-leaflet';

const MarkerPopup = (props) => {
  const { placa } = props.data;

  return (
    <Popup>
      <div className="poup-text">{placa}</div>
    </Popup>
  );
};

export default MarkerPopup;
