import { useState, useCallback, memo } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
  opacity: 0.7,
};

const center = {
  lat: 33.959990,
  lng: -117.412590,
};

const MyMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return isLoaded && (
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={15}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
    />
  );
};

export default memo(MyMap);
