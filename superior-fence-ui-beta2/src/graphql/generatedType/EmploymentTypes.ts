import type { ICommonHeaderBanner } from "./FenceTypeResponseTypes";
import type { IPostEdge, ISeoTypes } from "./ResponseType";

export interface IEmploymentQuery {
  page: {
    commonHeaderBanner: ICommonHeaderBanner;
    content: string;
    seo: ISeoTypes;
  };
  posts: {
    edges: {
      node: {
        title: string;
        slug: string;
        id: string;
        excerpt: string;
        content: string;
        date: string;
        featuredImage?: {
          node: {
            altText: string;
            mediaItemUrl: string;
          };
        };
        author: {
          node: {
            firstName: string;
            lastName: string;
            nicename: string;
          };
        };
      };
    }[];
  };
}

export interface ILocationBasedEmployment {
  pages: {
    edges: {
      node: {
        title: string;
        content: string;
        commonHeaderBanner: ICommonHeaderBanner;
        seo: ISeoTypes;
      };
    }[];
  };

  posts: {
    edges: {
      node: {
        title: string;
        content: string;
        excerpt: string;
        date: string;
        author: {
          node: {
            firstName: string;
            lastName: string;
            nickname: string;
          };
        };
        categories: {
          edges: {
            node: {
              name: string;
              slug: string;
            };
          }[];
        };
        featuredImage: {
          node: {
            altText: string;
            mediaItemUrl: string;
          };
        };
      };
    }[];
  };
}
