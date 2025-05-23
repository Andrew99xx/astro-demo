import React, { useCallback, useEffect, useRef, useState } from "react";
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
} from "react-leaflet";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import L, { type LatLngLiteral } from "leaflet";
import "leaflet/dist/leaflet.css";
import assets from "../../json/assets";
import MapPopUpComponent from "./MapPopUpComponent";
import type {
  activeMapType,
  ICustomMapItemProps,
  MapSecProps,
} from "../../interfaces/map.interface";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import type { IChooseServiceAreas } from "../../graphql/generatedType/ResponseType";
import ComboboxDemo from "../ComboboxDemo/ComboboxDemo";

const MapSec = ({
  active,
  handleClickMap,
  isFullScreen,
  mapData,
  locationLat,
  locationLong,
  flyCoordinates,
}: ICustomMapItemProps) => {
  const customIcon = new L.Icon({
    iconUrl: assets.location_marker,
    iconSize: [40, 68],
  });

  const customIcon2 = new L.Icon({
    iconUrl: assets.placeholder,
    iconSize: [32, 32],
  });

  const MapClickLogger = () => {
    useMapEvents({
      click: (event) => {
        const { lat, lng } = event.latlng;
        console.log("Clicked coordinates:", { lat, lng });
      },
    });
    return null;
  };

  const MapFlyTo = ({
    coordinates,
    selectedCoordinates,
  }: {
    coordinates: L.LatLngExpression;
    selectedCoordinates: L.LatLngExpression;
  }) => {
    const map = useMap();

    useEffect(() => {
      if (map) {
        const targetCoordinates = selectedCoordinates || coordinates;
        map.flyTo(targetCoordinates, 12);

        map.eachLayer((layer: any) => {
          if (
            layer._latlng?.lat == flyCoordinates?.lat &&
            layer._latlng?.lng == flyCoordinates?.lng
          ) {
            layer.openPopup(flyCoordinates);
          }

          // if (layer instanceof L.Marker && selectedCoordinates) {
          //   layer.openPopup(selectedCoordinates);
          // }
        });
      }
    }, [map, coordinates, selectedCoordinates]);

    return mapData?.edges?.map((marker, index) => (
      <Marker
        position={{
          lat: marker.node?.serviceAreaPurpose?.locationLat,
          lng: marker.node?.serviceAreaPurpose?.locationLong,
        }}
        icon={customIcon}
        key={index + 1}
      >
        <Popup minWidth={360} keepInView position={coordinates}>
          <MapPopUpComponent
            mapBlockAddress={marker?.node?.serviceAreaPurpose?.mapAreaAddress}
            mapBlockEmail={marker?.node?.serviceAreaPurpose?.mapAreaEmail}
            mapBlockHeading={marker?.node?.serviceAreaPurpose?.mapAreaHeading}
            mapBlockImage={marker?.node?.featuredImage}
            mapBlockPhone={marker?.node?.serviceAreaPurpose?.mapAreaPhone}
          />
        </Popup>
      </Marker>
    ));
  };

  return (
    <div
      className={`relative ${
        isFullScreen ? "h-full" : "h-[765px]"
      } blog_details_map`}
    >
      {/* {!isFullScreen && (
        <div className=" absolute left-0 top-0 size-full z-[999] flex items-center  pointer-events-none">
          <div className="container">
           
          </div>
        </div>
      )} */}

      <MapContainer
        center={[locationLat, locationLong]}
        zoom={12}
        scrollWheelZoom={false}
        style={{
          height: "100%",
          width: "100%",
        }}
        zoomControl={false}
        className=" relative"
      >
        <MapClickLogger />
        {/* <SelectedLocationMapFlyTo selectedCoordinates={flyCoordinates} /> */}
        <LayerGroup>
          <div className="absolute left-[10px] top-[10px] inline-flex  items-center z-[1000] bg-white border border-solid border-[#ccc]">
            <Button
              variant="default"
              className={` w-[100px] !mr-2  ${
                active === "streetView" ? "!bg-primary !text-white" : "!bg-white !text-black"
              }`}
              onClick={() => handleClickMap("streetView")}
            >
              Satellite
            </Button>
            <Button
              className={`w-[100px]  ${
                active === "mapView" ? "!bg-primary !text-white " : "!bg-white !text-black"
              }`}
              onClick={() => handleClickMap("mapView")}
            >
              Map
            </Button>
          </div>
        </LayerGroup>

        <ZoomControl position="bottomright" />
        {active === "mapView" ? (
          <TileLayer
            key="mapView"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        ) : (
          <TileLayer
            key="stretview"
            attribution='&copy; <a href="https://carto.com/">CARTO</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
        )}
        <Marker position={[locationLat, locationLong]} icon={customIcon2} />

        <MapFlyTo
          coordinates={[locationLat, locationLong]}
          selectedCoordinates={flyCoordinates}
        />
      </MapContainer>
    </div>
  );
};

const CustomMapSec = ({
  mapData,
  locationLat,
  locationLong,
  postalCode,
}: MapSecProps) => {
  const [active, setActive] = useState<activeMapType>("mapView");
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [flyCoordinates, setFlyCoordinates] = useState<LatLngLiteral | null>(
    null
  );

  const handleClickMap = (view: activeMapType) => {
    setActive(view);
  };

  const onSelectValueCallback = useCallback((data: LatLngLiteral) => {
    setFlyCoordinates(data);
  }, []);

  return (
    <div className=" relative">
      <div className=" absolute left-[220px] top-[10px] z-[1000]">
        <ComboboxDemo
          onSelectValue={onSelectValueCallback}
          postalCode={postalCode}
          list={mapData}
        />
      </div>
      <MapSec
        locationLat={locationLat}
        locationLong={locationLong}
        mapData={mapData}
        active={active}
        handleClickMap={handleClickMap}
        isFullScreen={isFullScreen}
        flyCoordinates={flyCoordinates}
      />

      <Dialog>
        <DialogTrigger
          className=" absolute right-[10px] top-[10px] z-[999] bg-white w-10 h-10 p-2"
          onClick={() => setIsFullScreen(true)}
        >
          <img
            src={assets?.expand}
            alt="fullScreen_icon"
            width={24}
            height={24}
          />
        </DialogTrigger>
        <DialogContent className=" min-w-full min-h-full !p-0 border-none">
          <DialogPrimitive.Close
            className="absolute right-4 top-4 z-[1100] w-10 h-10 p-2 bg-white transition-opacity hover:opacity-100 "
            onClick={() => setIsFullScreen(false)}
          >
            <img
              src={assets?.expand}
              alt="fullScreen_icon"
              width={24}
              height={24}
            />
          </DialogPrimitive.Close>
          <DialogHeader className=" !block">
            <div
              className={` absolute left-[220px] ${
                isFullScreen ? "top-[16px]" : "top-[10px]"
              }  z-[1000]`}
            >
              <ComboboxDemo
                onSelectValue={onSelectValueCallback}
                postalCode={postalCode}
                list={mapData}
              />
            </div>
            <MapSec
              locationLat={locationLat}
              locationLong={locationLong}
              active={active}
              handleClickMap={handleClickMap}
              isFullScreen={isFullScreen}
              mapData={mapData}
              flyCoordinates={flyCoordinates}
            />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default React.memo(CustomMapSec);
