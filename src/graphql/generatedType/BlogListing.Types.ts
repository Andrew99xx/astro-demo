import type { ISeoTypes } from "./ResponseType";

export interface IBlogListing {
  posts: {
    edges: {
      node: IBlogPost;
    }[];
  };
  seo: ISeoTypes;
}

export interface IBlogPost {
  title: string;
  slug: string;
  featuredImage?: {
    node: {
      altText?: string;
      mediaItemUrl: string;
    };
  };
  categories?: {
    edges: {
      node: {
        name: string;
        slug: string;
      };
    }[];
  };
  tags?: {
    nodes: {
      name: string;
    }[];
  };

  author?: {
    node: {
      firstName: string;
      lastName: string;
    };
  };
  date: string; // Date string in ISO format
  content: string;
  excerpt: string;
}


export interface IFenceNewsLocationQueryData {
  posts: {
    edges: {
      node: {
        title: string;
        slug: string;
        author: {
          node: {
            firstName: string;
            lastName: string;
            username: string;
          };
        };
        date: string;
        categories: {
          edges: {
            node: {
              name: string;
              slug: string;
            };
          }[];
        };
        content: string;
        excerpt: string;
      };
    }[];
  };
  page: {
    title: string;
    seo: ISeoTypes;
  };
}
