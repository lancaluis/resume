import { useRouter } from "next/navigation";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

export type Place = {
  id: number;
  name: string;
  slug: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

export type MapProps = {
  places?: Place[];
};

export const Map = ({ places }: MapProps) => {
  const router = useRouter();

  const mapMarkIcon = new Icon({
    iconUrl: "map-marker.png",
    iconSize: [27, 37],
  });

  return (
    <div
      style={{
        width: "100%",
        height: "75vh",
      }}
    >
      <MapContainer
        center={[0, 0]}
        zoom={3}
        minZoom={3}
        zoomControl={true}
        attributionControl={false}
        maxBounds={[
          [180, -180],
          [-180, 180],
        ]}
        style={{ width: "100%", height: "100%", background: "#66D1E6" }}
      >
        <TileLayer url="https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}" />

        {places?.map(({ id, name, location, slug }) => {
          const { latitude, longitude } = location;

          return (
            <Marker
              key={`place-${id}`}
              icon={mapMarkIcon}
              position={[latitude, longitude]}
              title={name}
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
