import type { ISeoTypes } from "./ResponseType";

// Interface for Media Items
interface MediaItem {
  altText: string;
  mediaItemUrl: string;
}

// Interface for Common Header Banner Listing
interface CommonHeaderBannerListing {
  listName: string;
}

// Interface for Common Header Banner
interface CommonHeaderBanner {
  commonHeaderBannerBackground?: {
    node: MediaItem;
  };
  commonHeaderBannerDescription?: string;
  commonHeaderBannerListing?: CommonHeaderBannerListing[];
  commonHeaderBannerListingTitle?: string;
  commonHeaderBannerTitle?: string;
  commonHeaderBannerVideo?: {
    node: {
      mediaItemUrl: string;
    };
  };
}

// Interface for FAQ Item
interface FAQItem {
  question: string;
  answer: string;
}

// Interface for FAQs Page Purpose
interface FAQsPagePurpose {
  faqsListing: FAQItem[];
}

// Interface for Post Author
interface PostAuthor {
  firstName: string;
  lastName: string;
  nicename: string;
}

// Interface for Post Featured Image
interface PostFeaturedImage {
  node: MediaItem;
}

// Interface for Post Node
interface PostNode {
  title: string;
  slug: string;
  id: string;
  excerpt: string;
  content: string;
  date: string;
  featuredImage?: PostFeaturedImage;
  author?: {
    node: PostAuthor;
  };
}

// Interface for Post Edge
interface PostEdge {
  node: PostNode;
}

// Interface for Posts
interface Posts {
  edges: PostEdge[];
}

// Root Interface for the Query Response
export interface IFAQQueryResponse {
  page: {
    commonHeaderBanner: CommonHeaderBanner;
    faqsPagePurpose: FAQsPagePurpose;
    seo: ISeoTypes;
  };
  posts: Posts;
}
