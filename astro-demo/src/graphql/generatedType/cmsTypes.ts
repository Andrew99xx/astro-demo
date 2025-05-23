import type { ICommonHeaderBanner } from "./FenceTypeResponseTypes";
import type { ISeoTypes } from "./ResponseType";

export interface ICommonPagesQuery {
  page: {
    title: string;
    content: string;
    commonHeaderBanner: ICommonHeaderBanner;
    seo: ISeoTypes;
  };
}

export interface CommonPagesQueryVariables {
  id: string;
}

export interface IWhyUsQuery {
  page: {
    whyUs: {
      whyUsBlocks: {
        whyUsBlocksHeading: string;
        whyUsBlocksDescription: string;
        whyUsBlocksListing: {
          whyUsBlocksListingHeading: string;
          whyUsBlocksListingDescription: string;
          whyUsBlocksListingIcon: {
            node: {
              altText: string;
              mediaItemUrl: string;
            };
          };
        }[];
      }[];
    };
    slug: string;
    commonHeaderBanner: ICommonHeaderBanner;
    seo: ISeoTypes;
  };
  posts: {
    edges: {
      node: {
        featuredImage: {
          node: {
            altText: string;
            mediaItemUrl: string;
          };
        };
        title: string;
        slug: string;
        date: string;
        excerpt: string;
      };
    }[];
  };
}
