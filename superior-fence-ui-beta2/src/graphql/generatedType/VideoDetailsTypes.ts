import type { ISeoTypes } from "./ResponseType";

export interface IFenceVideoDetailsResponse {
  allFenceInstallationVideo: {
    edges: {
      node: {
        title: string;
        content: string;
        fenceVideoTutorialPagePurpose: {
          fenceVideoTutorialVideoLink: string;
          videoThumbImage: {
            node: {
              altText: string;
              mediaItemUrl: string;
            };
          };
          postedBy: string;
        };
        date: string;
        seo: ISeoTypes;
      };
    }[];
  };
}
