import React, { FC, useEffect } from "react";
import { Marker, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet";

import { CoMapProps } from "@/components/CoMap/types";

const CoMapComponent: FC<Omit<CoMapProps, "zoom">> = ({ position, onChange }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(position);
  }, [position, map]);

  useMapEvents({
    move: (e) => {
      if (e?.target?._animateToCenter && onChange) {
        onChange({
          lat: e.target._animateToCenter.lat,
          long: e.target._animateToCenter.lng,
        });
      }
    },
  });

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </>
  );
};

export default CoMapComponent;
