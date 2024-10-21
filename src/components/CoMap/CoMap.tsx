"use client";

import React, { FC } from "react";
import { MapContainer } from "react-leaflet";

import "leaflet-defaulticon-compatibility";

import CoMapComponent from "@/components/CoMap/components/CoMapComponent/CoMapComponent";
import { CoMapProps } from "@/components/CoMap/types";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";

const CoMap: FC<CoMapProps> = ({ position, zoom = 13, onChange }) => {
  return (
    <MapContainer
      style={{ height: "100%", width: "100%" }}
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}>
      <CoMapComponent onChange={onChange} position={position} />
    </MapContainer>
  );
};

export default CoMap;
