import type {
  IChooseServiceAreas,
  ServiceAreaEdge,
} from "../graphql/generatedType/ResponseType";
import L, { type LatLngLiteral } from "leaflet";
import type { FranchiseLocationWithDistance } from "../hooks/useProximityLocation";

export type activeMapType = "mapView" | "streetView";

export interface MapSecProps {
  locationLat: number;
  locationLong: number;
  mapData: IChooseServiceAreas;
  postalCode?: string;
}

export interface ICustomMapItemProps extends MapSecProps {
  isFullScreen: boolean;
  active: activeMapType;
  handleClick1?: () => void;
  handleOpen?: () => void;
  handleClickMap: (t: activeMapType) => void;
  flyCoordinates: LatLngLiteral;
}

export interface commonMapInterfaceImageType {
  node: {
    altText: string;
    mediaItemUrl: string;
  };
}

export interface ISingleMapProps {
  locationLat: number;
  locationLong: number;
  mapAreaAddress?: string;
  mapAreaEmail?: string;
  mapAreaHeading?: string;
  mapAreaImage?:commonMapInterfaceImageType
  mapAreaPhone?: string;
  noPopUp?:boolean
}

export interface ICustomSingleMapItemProps extends ISingleMapProps {
  isFullScreen: boolean;
  active: activeMapType;
  handleClick1?: () => void;
  handleOpen?: () => void;
  handleClickMap: (t: activeMapType) => void;
}
