import type { ISeoTypes } from "./ResponseType";

export interface IContactUsPage {
  pages: {
    edges: {
      node: {
        contactUsPagePurpose: {
          addressLat: string | null; // Assuming latitude is a string; use `number` if applicable
          addressLong: string | null; // Assuming longitude is a string; use `number` if applicable
          contactUsDescription: string | null;
          contactUsHeading: string | null;
          mapAreaAddress: string | null;
          mapAreaEmail: string | null;
          mapAreaHeading: string | null;
          mapAreaImage: {
            node: {
              altText: string | null;
              mediaItemUrl: string | null;
            } | null;
          } | null;
          mapAreaPhoneNumber: string | null;
          supportServiceHeading: string | null;
          supportServiceImage: {
            node: {
              altText: string | null;
              mediaItemUrl: string | null;
            } | null;
          } | null;
        };
        seo: ISeoTypes;
      };
    }[];
  };
}
