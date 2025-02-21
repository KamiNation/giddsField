"use client";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { useEffect, useRef } from "react";

const OpenLayersMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new Map({
      target: mapRef.current,
      layers: [new TileLayer({ source: new OSM() })],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });

    return () => map.setTarget(undefined); // Cleanup
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "500px" }} />;
};

export default OpenLayersMap;
