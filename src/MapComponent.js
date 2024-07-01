import { Map, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export const MapComponent = () => {
  console.log("accessToken", accessToken);

  return (
    <>
      <Map
        mapboxAccessToken={accessToken}
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        style={{ width: '100vw', height: '100vh' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <NavigationControl showCompass={false} position="bottom-right" />
      </Map>
    </>
  );
};
