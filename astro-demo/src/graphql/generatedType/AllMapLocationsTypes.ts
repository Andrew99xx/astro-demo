export interface IMapAllLocationResponse {
  locationState: {
    edges: LocationEdge[];
  };
}

export interface LocationEdge {
  node: {
    name: string;
    slug: string;
    locationPurpose: {
      mapBlockAddress: string;
      mapBlockEmail: string;
      mapBlockPhone: string;
      locationLat: number;
      locationLong: number;
    };
    parent?: {
      node: {
        name: string;
        slug: string;
      };
    };
  };
}
