import axios from "axios";
import type { LatLngLiteral } from "leaflet";
import { useState } from "react";

interface UsePostalCodeResult {
  postalCode: string | null;
  error: string | null;
  loading: boolean;
  retryFetch: () => void;
  getLocationAndPostalCode: () => void;
  coordinates: LatLngLiteral | null;
  fetchPostalCode: (latitude: number, longitude: number) => void;
}

const API_KEY = import.meta.env.PUBLIC_GOOGLE_API_KEY;
if (!API_KEY) {
  throw new Error("api key is not defined in the environment variables.");
}

const usePostalCode = (): UsePostalCodeResult => {
  const [postalCode, setPostalCode] = useState<string | null>(null);
  const [coordinates, setCoordinates] = useState<LatLngLiteral | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPostalCode = async (latitude: number, longitude: number) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`
      );
      const data = await response.json();

      if (data.results.length > 0) {
        const addressComponents = data.results[0].address_components;
        const postalCodeComponent = addressComponents.find((component: any) =>
          component.types.includes("postal_code")
        );
        console.log(addressComponents, "postalCodeComponent");
        setPostalCode(
          postalCodeComponent
            ? postalCodeComponent.long_name
            : "Post code not found"
        );
      } else {
        setPostalCode("Postal code not found");
      }
    } catch (err) {
      setError("Failed to fetch post code");
    } finally {
      setLoading(false);
    }
  };

  // const fetchLocationWithIp = async () => {
  //   try {
  //     const res = await axios.get("https://ipapi.co/json");
  //     if (res?.data?.latitude && res?.data?.longitude) {
  //       setCoordinates({
  //         lat: res.data.latitude,
  //         lng: res.data.longitude,
  //       });
  //       await fetchPostalCode(res.data.latitude, res.data.longitude);
  //     } else {
  //       console.error("Invalid IP location data received.");
  //     }
  //   } catch (err) {
  //     console.error("Error fetching IP-based location:", err);
  //   }
  // };

  async function getLatLngFromIp() {
    const url = `https://www.googleapis.com/geolocation/v1/geolocate?key=${API_KEY}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          considerIp: true,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();

      setCoordinates({
        lat: data.location.lat,
        lng: data.location.lng,
      });
      await fetchPostalCode(data.location.lat, data.location.lng);
    } catch (error) {
      console.error("Failed to fetch location:", error);
    }
  }

  const getLocationAndPostalCode = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setCoordinates({
            lat: latitude,
            lng: longitude,
          });
          await fetchPostalCode(latitude, longitude);
        },

        async () => {
          await getLatLngFromIp();
          setError("Failed to retrieve location");
          setLoading(false);
          console.log("Location access is required to fetch postal code.");
        }
      );
    } else {
      setError("Geolocation not supported");
      setLoading(false);
      console.log("Geolocation is not supported by your browser.");
    }
  };

  const retryFetch = async () => {
    setLoading(true);
    setError(null);
    await getLocationAndPostalCode();
  };

  // useEffect(() => {
  //   getLocationAndPostalCode();
  // }, []);

  return {
    postalCode,
    error,
    loading,
    retryFetch,
    getLocationAndPostalCode,
    coordinates,
    fetchPostalCode,
  };
};

export default usePostalCode;
