"use client";

import React, { FC, useEffect } from "react";

import L from "leaflet";
import "leaflet-defaulticon-compatibility";

import { CoMapProps } from "@/components/CoMap/types";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";

const CoMap: FC<CoMapProps> = ({ position, zoom = 13 }) => {
  useEffect(() => {
    const container = L.DomUtil.get("map");

    if (container != null) {
      container["_leaflet_id"] = null;
    }

    const map = L.map("map").setView(position, zoom);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    L.marker(position).addTo(map);
  }, [position, zoom]);

  return <div id={"map"} style={{ height: "100%", width: "100%" }} />;
};

export default CoMap;
