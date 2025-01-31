import { useRouter } from "next/navigation";

import { Places } from "../../types";

import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

export const Map = ({ places }: Places) => {
  const router = useRouter();

  const mapMarkIcon = new Icon({
    iconUrl: "map-marker.png",
    iconSize: [27, 37],
  });

  return (
    <div className="w-full h-[70vh]">
      <MapContainer
        center={[0, 0]}
        zoom={2}
        minZoom={2}
        zoomControl={true}
        attributionControl={false}
        maxBounds={[
          [180, -180],
          [-180, 180],
        ]}
        style={{ width: "100%", height: "100%", background: "#66D1E6" }}
      >
        <TileLayer url="https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}" />

        {places?.map(({ id, title, location, slug }) => {
          const { latitude, longitude } = location;

          return (
            <Marker
              key={`place-${id}`}
              icon={mapMarkIcon}
              position={[latitude, longitude]}
              title={title}
              eventHandlers={{
                click: () => {
                  router.push(`/trips/${slug}`);
                },
              }}
            />
          );
        })}
      </MapContainer>
    </div>
  );
};
