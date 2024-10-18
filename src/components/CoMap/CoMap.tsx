"use client";

import React, { FC, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

import "leaflet-defaulticon-compatibility";

import CoMapComponent from "@/components/CoMap/components/CoMapComponent/CoMapComponent";
import { CoMapProps } from "@/components/CoMap/types";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";

const CoMap: FC<CoMapProps> = ({ position, zoom = 13 }) => {
  return (
    <MapContainer
      style={{ height: "100%", width: "100%" }}
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}>
      <CoMapComponent position={position} />
    </MapContainer>
  );
};

export default CoMap;
