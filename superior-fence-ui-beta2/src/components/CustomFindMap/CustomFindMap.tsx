import React, { useCallback, useEffect, useState } from "react";
import CustomMapSec from "../MapSec/MapSec";
import L, { type LatLngLiteral } from "leaflet";
import axios from "axios";
import type { IChooseServiceAreas } from "../../graphql/generatedType/ResponseType";
import usePostalCode from "../../hooks/usePostalCode";
import { Skeleton } from "../ui/skeleton";
import useProximitySearch from "../../hooks/useProximityLocation";

const CustomFindMap = ({
  serviceData,
}: {
  serviceData: IChooseServiceAreas;
}) => {
  const {
    coordinates,
    loading,
    error,
    getLocationAndPostalCode,
    postalCode,
    retryFetch,
  } = usePostalCode();



  console.log(postalCode,coordinates,"postalCode")


  useEffect(() => {
    getLocationAndPostalCode();
  }, []);


  return (
    <div>
      {!loading ? (
        <CustomMapSec
          // locationLat={33.46328381468795}
          // locationLong={-86.88915252685548}
          postalCode={postalCode}
          locationLat={coordinates.lat}
          locationLong={coordinates.lng}
          mapData={serviceData}
     
        />
      ) : (
        <div className=" relative">
          <h3 className=" absolute left-1/2 -translate-x-1/2 top-1/2  -translate-y-1/2 z-10">
            Map is Loading....
          </h3>
          <Skeleton className="w-full h-[600px] rounded-none" />
        </div>
      )}
    </div>
  );
};

export default CustomFindMap;
