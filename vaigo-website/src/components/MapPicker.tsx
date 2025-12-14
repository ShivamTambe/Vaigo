// src/components/MapPicker.tsx
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from "react-leaflet";
import L from "leaflet";

interface MapPickerProps {
  onLocationSelect: (lat: number, lng: number) => void;
  defaultCenter?: { lat: number; lng: number };
  className?: string;
  height?: number; // px height override
}

const markerIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function LocationMarker({ onSelect }: { onSelect: (lat: number, lng: number) => void }) {
  const [position, setPosition] = useState<[number, number] | null>(null);

  useMapEvents({
    click(e) {
      if (!e.latlng) return;
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;
      setPosition([lat, lng]);
      onSelect(lat, lng);
    },
  });

  return position ? <Marker position={position} icon={markerIcon} /> : null;
}

// helper component to force Leaflet to recalc size after mount/resize
function ResizeHandler() {
  const map = useMap();
  useEffect(() => {
    // small timeout helps when container animates or is initially collapsed
    const t = setTimeout(() => {
      map.invalidateSize();
    }, 50);

    const onResize = () => map.invalidateSize();
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", onResize);
    };
  }, [map]);

  return null;
}

export const MapPicker: React.FC<MapPickerProps> = ({
  onLocationSelect,
  defaultCenter = { lat: 20.5937, lng: 78.9629 },
  className = "",
  height = 320,
}) => {
  return (
    <div className={className}>
      <MapContainer
        center={defaultCenter}
        zoom={5}
        style={{ height: `${height}px`, width: "100%" }}
        className="rounded-xl border border-gray-300 shadow-sm"
      >
        <ResizeHandler />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker onSelect={onLocationSelect} />
      </MapContainer>
    </div>
  );
};
