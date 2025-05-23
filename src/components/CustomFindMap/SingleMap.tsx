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
import type {
  activeMapType,
  ICustomMapItemProps,
  ICustomSingleMapItemProps,
  ISingleMapProps,
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
import MapPopUpComponent from "../MapSec/MapPopUpComponent";

const SingleMap = ({
  locationLat,
  locationLong,
  mapAreaAddress,
  mapAreaEmail,
  mapAreaHeading,
  mapAreaImage,
  mapAreaPhone,
  isFullScreen,
  handleClickMap,
  active,
  noPopUp,
}: ICustomSingleMapItemProps) => {
  const customIcon = new L.Icon({
    iconUrl: assets.location_marker,
    iconSize: [40, 68],
  });

  const MapFlyTo = ({ coordinates }: { coordinates: L.LatLngExpression }) => {
    const map = useMap();

    useEffect(() => {
      if (map) {
        const targetCoordinates = coordinates;
        map.flyTo(targetCoordinates, 12);

        map.eachLayer((layer: any) => {
          if (
            layer._latlng?.lat == locationLat &&
            layer._latlng?.lng == locationLong
          ) {
            layer.openPopup([locationLat, locationLong]);
          }

          // if (layer instanceof L.Marker && selectedCoordinates) {
          //   layer.openPopup(selectedCoordinates);
          // }
        });
      }
    }, [map, coordinates]);

    return (
      <Marker
        position={{
          lat: locationLat,
          lng: locationLong,
        }}
        icon={customIcon}
      >
        {!noPopUp && (
          <Popup
            minWidth={360}
            closeButton={false}
            closeOnEscapeKey={false}
            closeOnClick={false}
            keepInView
            position={coordinates}
          >
            <MapPopUpComponent
              mapBlockAddress={mapAreaAddress}
              mapBlockEmail={mapAreaEmail}
              mapBlockHeading={mapAreaHeading}
              mapBlockImage={mapAreaImage}
              mapBlockPhone={mapAreaPhone}
            />
          </Popup>
        )}
      </Marker>
    );
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
        <LayerGroup>
          <div className="absolute left-[10px] top-[10px] inline-flex  items-center z-[1000] bg-white border border-solid border-[#ccc]">
            <Button
              variant="default"
              className={` w-[100px] !mr-2 rounded-none ${
                active === "streetView" ? "!bg-primary !text-white" : "!bg-white !text-black"
              }`}
              onClick={() => handleClickMap("streetView")}
            >
              Satellite
            </Button>
            <Button
              className={`w-[100px] rounded-none ${
                active === "mapView" ? "!bg-primary !text-white" : "!bg-white !text-black"
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
            attribution='&copy; <a href="https://carto.com/">CARTO</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
        ) : (
          <TileLayer
            key="stretview"
            attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
        )}

        <MapFlyTo coordinates={[locationLat, locationLong]} />
      </MapContainer>
    </div>
  );
};

const CustomSingleMapSec = ({
  locationLat,
  locationLong,
  mapAreaAddress,
  mapAreaEmail,
  mapAreaHeading,
  mapAreaImage,
  mapAreaPhone,
  noPopUp,
}: ISingleMapProps) => {
  const [active, setActive] = useState<activeMapType>("mapView");
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  const handleClickMap = (view: activeMapType) => {
    setActive(view);
  };

  return (
    <div className=" relative">
      <SingleMap
        locationLat={locationLat}
        locationLong={locationLong}
        active={active}
        handleClickMap={handleClickMap}
        isFullScreen={isFullScreen}
        mapAreaAddress={mapAreaAddress}
        mapAreaEmail={mapAreaEmail}
        mapAreaHeading={mapAreaHeading}
        mapAreaImage={mapAreaImage}
        mapAreaPhone={mapAreaPhone}
        noPopUp={noPopUp}
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
            ></div>
            <SingleMap
              locationLat={locationLat}
              locationLong={locationLong}
              active={active}
              handleClickMap={handleClickMap}
              isFullScreen={isFullScreen}
              mapAreaAddress={mapAreaAddress}
              mapAreaEmail={mapAreaEmail}
              mapAreaHeading={mapAreaHeading}
              mapAreaImage={mapAreaImage}
              mapAreaPhone={mapAreaPhone}
              noPopUp={noPopUp}
            />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default React.memo(CustomSingleMapSec);
