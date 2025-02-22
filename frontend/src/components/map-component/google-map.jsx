import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  Polyline,
  useLoadScript,
} from "@react-google-maps/api";
import { MapWrapper } from "./index.style";
import {
  calculateDistance,
  getLocationDetails,
} from "../../utilities/basicFunctions";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "0px",
  border: "0px",
  objectFit: "cover",
};

// Default location (e.g., your business or home location)
const defaultLocation = {
  lat: 37.7749, //San Francisco
  lng: -122.4194,
};

const fetchLocationDetails = async ({ lat, lng }) => {
  try {
    const locationDetails = await getLocationDetails({ lat, lng });
    return locationDetails;
  } catch (error) {
    console.error(error);
    return null;
  }
};

function AppGoogleMap({ width = "100%", height = 500, setLocationData }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Store key in .env
  });

  const [userLocation, setUserLocation] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [mapCenter, setMapCenter] = useState(defaultLocation); 
  const [polylinePath, setPolylinePath] = useState([]);

  const handleMapClick = async (event) => {
    if (!event.latLng) return;

    const newLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };

    setUserLocation(newLocation);

    // Fetch location details asynchronously
    const locationDetails = await fetchLocationDetails(newLocation);
    const distance = calculateDistance(defaultLocation, newLocation);

    setLocationData({
      positionInfo: {
        defaultLocation,
        userLocation: newLocation,
        distance,
        unit: "Km",
      },
      locationDetails,
    });

    // Update the polyline path
    setPolylinePath([defaultLocation, newLocation]);
  };

  useEffect(() => {
    if (!userLocation) setPolylinePath([]); // Clear polyline if no user location
  }, [userLocation]);

  if (loadError) return <p>Error loading maps</p>;
  if (!isLoaded) return <p>Loading Maps...</p>;

  return (
    <MapWrapper width={width} height={height}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={mapCenter}
        onClick={handleMapClick}
      >
        {/* Default Pin (Fixed) */}
        <Marker position={defaultLocation} label="A" />

        {/* User-selected Pin (Changes on Click) */}
        {userLocation && <Marker position={userLocation} label="B" />}

        {/* Draw connection line between A and B */}
        {polylinePath.length === 2 &&  (
          <Polyline
            path={polylinePath}
            options={{
              strokeColor: "#FF0000", // Red line
              strokeOpacity: 1,
              strokeWeight: 2,
            }}
          />
        )}
      </GoogleMap>
    </MapWrapper>
  );
}

export default AppGoogleMap;
