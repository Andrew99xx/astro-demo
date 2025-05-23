import React, { useCallback, useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
  useMapEvent,
  LayersControl,
  ZoomControl,
  LayerGroup,
  Tooltip,
} from "react-leaflet";
import L, { type LatLngExpression, type LatLngLiteral } from "leaflet";
import "leaflet/dist/leaflet.css";
import type { IMapAllLocationResponse } from "../../graphql/generatedType/AllMapLocationsTypes";
import usePostalCode from "../../hooks/usePostalCode";
import assets from "../../json/assets";
import { Skeleton } from "../ui/skeleton";
import ComboBoxForGlobalMap from "../ComboboxDemo/ComboBoxForGlobalMap";

const CustomLocationButton = ({
  allLocations,
  useFlyCoordinatesCallback,
}: // clickedCoordinates,
{
  allLocations: IMapAllLocationResponse;
  useFlyCoordinatesCallback: (data: L.LatLngExpression) => void;
  // clickedCoordinates: LatLngLiteral;
}) => {
  const [active, setActive] = useState<number | null>(null);

  const handleActive = (currentValue: number) => {
    setActive(active !== currentValue && currentValue);
  };

  // || clickedCoordinates !== null &&
  //           (clickedCoordinates.lat ===
  //             location?.node?.locationPurpose?.locationLat &&
  //             clickedCoordinates.lng ===
  //               location?.node?.locationPurpose?.locationLong)

  return (
    <ul>
      {allLocations?.locationState?.edges?.map((location, index) => (
        <li
          key={location?.node?.name}
          className={` p-[10px] border-b-[2px] border-primary cursor-pointer ${
            index === active ? "bg-[rgba(0,0,0,.1)]" : "transparent"
          }`}
          onClick={() => {
            useFlyCoordinatesCallback({
              lat: location?.node?.locationPurpose?.locationLat,
              lng: location?.node?.locationPurpose?.locationLong,
            });
            handleActive(index);
          }}
        >
          <h3 className=" text-base text-primary mb-[1em] font-robotomedium uppercase">
            {location?.node?.name}
          </h3>
          <p className="text-[14px] font-robotoregular">
            {location?.node?.locationPurpose?.mapBlockAddress}
          </p>
          <p className="text-[14px] font-robotoregular">
            Phone: {location?.node?.locationPurpose?.mapBlockPhone}
          </p>
        </li>
      ))}
    </ul>
  );
};

const customIcon = new L.Icon({
  iconUrl: assets.location_marker,
  iconSize: [23, 36],
});

const customIcon2 = new L.Icon({
  iconUrl: assets.placeholder,
  iconSize: [32, 32],
});

const AllLocationFindMap = ({
  allLocations,
}: {
  allLocations: IMapAllLocationResponse;
}) => {
  const [flyCoordinates, setFlyCoordinates] = useState<LatLngLiteral | null>(
    null
  );

  const [clickedCoordinates, setClickedCoordinates] =
    useState<LatLngLiteral | null>(null);

  const useFlyCoordinatesCallback = useCallback((data: LatLngLiteral) => {
    setFlyCoordinates(data);
  }, []);

  const {
    coordinates,
    loading,
    error,
    getLocationAndPostalCode,
    postalCode,
    retryFetch,
  } = usePostalCode();

  useEffect(() => {
    getLocationAndPostalCode();
  }, []);

  // const MapClickLogger = () => {
  //   useMapEvents({
  //     click: (event) => {
  //       const { lat, lng } = event.latlng;
  //       console.log("Clicked coordinates:", { lat, lng });
  //     },
  //   });
  //   return null;
  // };

  console.log(coordinates, allLocations, "coordinates");

  const MapFlyTo = ({ coordinates }: { coordinates: LatLngExpression }) => {
    const map = useMap();

    useEffect(() => {
      if (map) {
        // const targetCoordinates = coordinates || flyCoordinates;
        if (coordinates) {
          map.flyTo(coordinates, 6);
        }
        if (flyCoordinates) {
          map.flyTo(flyCoordinates, 6);
          map.eachLayer((layer: any) => {
            if (
              layer._latlng?.lat === flyCoordinates?.lat &&
              layer._latlng?.lng === flyCoordinates?.lng
            ) {
              layer.openPopup(flyCoordinates);
            }
          });
        }
      }
    }, [map]);

    return allLocations?.locationState?.edges?.map((marker, index) => (
      <Marker
        position={{
          lat: marker.node?.locationPurpose?.locationLat,
          lng: marker.node?.locationPurpose?.locationLong,
        }}
        icon={customIcon}
        key={index + 1}
        // eventHandlers={{
        //   click: (event: any) => {
        //     const { lat, lng } = event.latlng;
        //     setClickedCoordinates({ lat, lng });
        //   },
        // }}
      >
        <Tooltip>{marker.node?.locationPurpose?.mapBlockAddress}</Tooltip>
        <Popup minWidth={280} keepInView position={coordinates}>
          <div className=" custom_popup">
            <a
              href="/"
              className=" inline-flex justify-center items-center w-[80px] h-[19px] mb-[10px]"
            >
              <img
                src={assets?.logo}
                alt="logo"
                className=" size-full object-contain"
              />
            </a>
            <h4 className=" text-sm font-montserratsemibold text-primary mb-[10px]">
              {" "}
              {marker.node?.locationPurpose?.mapBlockAddress}
            </h4>
            <p className=" text-sm font-montserratregular text-black !m-0 !mb-[10px]">
              {" "}
              Email: {marker.node?.locationPurpose?.mapBlockEmail}
            </p>
            <p className=" text-sm font-montserratregular text-black !m-0 !mb-[10px]">
              {" "}
              Phone: {marker.node?.locationPurpose?.mapBlockPhone}
            </p>
            <div className="text-center">
              <a
                href="/#"
                className="!text-primary text-sm !font-montserratsemibold !uppercase hover:!text-[#252525]"
              >
                Learn More {">"}
              </a>
            </div>
          </div>
        </Popup>
      </Marker>
    ));
  };

  return (
    <div>
      <div className="container">
        <div className=" text-center py-[50px]">
          <h3 className=" font-semibold mb-5">Search city By ZIP code...</h3>
          <ComboBoxForGlobalMap
            onSelectValue={useFlyCoordinatesCallback}
            postalCode={postalCode}
            list={allLocations}
            btnClassName=" global_search_btn"
            popoverClassName="global_search_popover"
          />
        </div>
      </div>
      <div className=" h-[680px]">
        {!loading ? (
          <div className=" border-[10px] border-primary flex flex-wrap h-full">
            <div className="h-full w-[250px] overflow-y-auto">
              <CustomLocationButton
                allLocations={allLocations}
                useFlyCoordinatesCallback={useFlyCoordinatesCallback}
                // clickedCoordinates={clickedCoordinates}
              />
            </div>

            <div className=" w-[calc(100%-250px)] h-full">
              <MapContainer
                // center={[33.46328381468795, -86.88915252685548]}
                center={[coordinates.lat, coordinates.lng]}
                zoom={6}
                scrollWheelZoom={false}
                style={{
                  height: "100%",
                  width: "100%",
                }}
                zoomControl={false}
                className=" relative"
              >
                <ZoomControl position="topright" />
                <Marker
                  position={[coordinates?.lat, coordinates?.lng]}
                  icon={customIcon2}
                />
                <TileLayer
                  key="mapView"
                  attribution='&copy; <a href="https://carto.com/">CARTO</a> contributors'
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                {/* <MapClickLogger/> */}
                <MapFlyTo
                  // coordinates={[33.46328381468795, -86.88915252685548]}
                  coordinates={[coordinates.lat, coordinates.lng]}
                />
              </MapContainer>
            </div>
          </div>
        ) : (
          <div className=" relative">
            <h3 className=" absolute left-1/2 -translate-x-1/2 top-1/2  -translate-y-1/2 z-10">
              Map is Loading....
            </h3>
            <Skeleton className="w-full h-[600px] rounded-none" />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllLocationFindMap;
