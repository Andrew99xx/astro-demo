import { useState } from "react";
import type { ServiceAreaEdge } from "../graphql/generatedType/ResponseType";

// Type for franchise location
// interface FranchiseLocation {
//   name: string;
//   latitude: number;
//   longitude: number;
// }

// Type for the return value of the hook
interface UseProximitySearchResult {
  findNearestLocations: (zipCode: string) => Promise<void>;
  nearestLocations: FranchiseLocationWithDistance[];
  loading: boolean;
  error: string | null;
}

// Extending FranchiseLocation with distance property
export interface FranchiseLocationWithDistance extends ServiceAreaEdge {
  distance: number;
}

// Haversine formula to calculate the distance between two coordinates
const haversineDistance = (coords1: [number, number], coords2: [number, number]): number => {
  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;
  const R = 6371; // Earth's radius in kilometers

  const [lat1, lon1] = coords1;
  const [lat2, lon2] = coords2;

  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in kilometers
};

const useProximitySearch = (franchiseLocations: ServiceAreaEdge[]): UseProximitySearchResult => {
    
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [nearestLocations, setNearestLocations] = useState<FranchiseLocationWithDistance[]>([]);

  const API_KEY = import.meta.env.PUBLIC_GOOGLE_API_KEY;
  if (!API_KEY) {
    throw new Error("API key is not defined in the environment variables.");
  }

  const findNearestLocations = async (zipCode: string): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      // Fetch latitude/longitude for the input zip code
      const geocodeResponse = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=${API_KEY}`
      );

      if (!geocodeResponse.ok) {
        throw new Error("Failed to fetch geocoding data.");
      }

      const geocodeData = await geocodeResponse.json();

      if (geocodeData.results.length === 0) {
        throw new Error("Invalid zip code.");
      }

      console.log(geocodeData,"geocodeData")

      const { lat, lng } = geocodeData.results[0].geometry.location;
      const userCoords: [number, number] = [lat, lng];

      const distances = franchiseLocations.map((location) => {
        const distance = haversineDistance(userCoords, [
          location.node.serviceAreaPurpose.locationLat,
          location.node.serviceAreaPurpose.locationLong,
        ]);
        return { ...location, distance };
      });


 
      // Sort by distance and select the top 5 locations
      const sortedLocations = distances
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 5);

     

      setNearestLocations(sortedLocations);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

 

  return { findNearestLocations, nearestLocations, loading, error };
};

export default useProximitySearch;

// Usage Example in a React component:
//
// import useProximitySearch from './useProximitySearch';
//
// const franchiseLocations = [
//   { name: 'Location A', latitude: 34.0522, longitude: -118.2437 },
//   { name: 'Location B', latitude: 40.7128, longitude: -74.006 },
//   // ...more locations
// ];
//
// const Component: React.FC = () => {
//   const { findNearestLocations, nearestLocations, loading, error } = useProximitySearch(franchiseLocations);
//
//   const handleSearch = () => {
//     findNearestLocations('90210');
//   };
//
//   return (
//     <div>
//       <button onClick={handleSearch}>Find Nearest Locations</button>
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}
//       {nearestLocations.map((location) => (
//         <p key={location.name}>
//           {location.name}: {location.distance.toFixed(2)} km away
//         </p>
//       ))}
//     </div>
//   );
// };
