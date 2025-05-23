import type { ICommonHeaderBanner } from "./FenceTypeResponseTypes";
import type { ISeoTypes } from "./ResponseType";

export interface FenceTypeEdge {
  node: {
    title: string;
    fenceTypePostPurpose: {
      fenceType: "Gallery" | "Listing";
      fenceListingInfo: string | null;
      fenceListingImages: {
        edges: FenceImageEdge[];
      } | null;
      fenceGalleryListing:
        | {
            fenceGalleryHeading: string;
            fenceGalleryImages: {
              nodes: FenceGalleryImage[];
            };
          }[]
        | null;
    };
    commonHeaderBanner: ICommonHeaderBanner;
    seo: ISeoTypes;
  };
}

export interface FenceImageEdge {
  node: {
    altText: string;
    mediaItemUrl: string;
  };
}

export interface FenceGalleryImage {
  altText: string;
  mediaItemUrl: string;
}

export interface PostEdge {
  node: {
    title: string;
    excerpt: string;
    date: string;
    featuredImage: {
      node: {
        altText: string;
        mediaItemUrl: string;
      };
    };
  };
}

export interface ICommonSideBarQueryResponse {
  allFenceTypes: {
    edges: FenceTypeEdge[];
  };
  posts: {
    edges: PostEdge[];
  };
}
