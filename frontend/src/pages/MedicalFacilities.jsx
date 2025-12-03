import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const MedicalFacility = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [facilities, setFacilities] = useState([]);

  // Load Google Maps API
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Add your Google Maps API Key in .env
  });

  // Get user's location on page load
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        
        const { latitude, longitude } = position.coords;
        setCurrentPosition({ lat: latitude, lng: longitude });
        fetchNearbyFacilities(latitude, longitude);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  // Fetch nearby medical facilities using Google Places API
  const fetchNearbyFacilities = async (lat, lng) => {
    try {
      const radius = 5000; // Search radius in meters
      const type = "hospital|clinic|pharmacy";

      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=${type}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
      );
      const data = await response.json();
      setFacilities(data.results || []);
    } catch (error) {
      console.error("Error fetching nearby facilities:", error);
    }
  };

  if (!isLoaded) return <div>Loading map...</div>;
  if (!currentPosition) return <div>Getting your location...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={currentPosition}
      zoom={14}
    >
      {/* Marker for current user */}
      <Marker position={currentPosition} label="You" />

      {/* Markers for nearby medical facilities */}
      {facilities.map((facility) => (
        <Marker
          key={facility.place_id}
          position={{
            lat: facility.geometry.location.lat,
            lng: facility.geometry.location.lng,
          }}
          title={facility.name}
        />
      ))}
    </GoogleMap>
  );
};

export default MedicalFacility;
