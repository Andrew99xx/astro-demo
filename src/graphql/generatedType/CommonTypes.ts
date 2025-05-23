import type { ICommonHeaderBanner } from "./FenceTypeResponseTypes";
import type { ISeoTypes } from "./ResponseType";
// import type { AllTestimonials } from "./ResponseType";

export interface IAboutUsPagePurpose {
  aboutUsIntroButtonText: string | null;
  aboutUsIntroContent: string | null;
  aboutUsIntroImages: {
    edges: {
      node: {
        altText: string | null;
        mediaItemUrl: string | null;
      };
    }[];
  } | null;
  faqsButtonText: string | null;
  faqsHeading: string | null;
  faqsImage: {
    node: {
      altText: string | null;
      mediaItemUrl: string | null;
    };
  } | null;
  faqsListing:
    | {
        question: string | null;
        answer: string | null;
      }[]
    | null;
  fenceNewsHeading: string | null;
  fenceNewsSubHeading: string | null;
  missionDescription: string | null;
  missionHeading: string | null;
  ownASuperiorFenceButtonText: string | null;
  ownASuperiorFenceDescription: string | null;
  ownASuperiorFenceHeading: string | null;
  testimonialsButtonText: string | null;
  testimonialsHeading: string | null;
  valuesDescription: string | null;
  valuesHeading: string | null;
  whyChooseSuperiorButtonText: string | null;
  whyChooseSuperiorDescription: string | null;
  whyChooseSuperiorHeading: string | null;
  whyChooseSuperiorSubHeading: string | null;
  workForSuperiorFenceButtonText: string | null;
  workForSuperiorFenceDescription: string | null;
  workForSuperiorFenceHeading: string | null;
  workForSuperiorFenceSubHeading: string | null;
  aboutUsHeadingMapImage: {
    node: {
      altText: string;
      mediaItemUrl: string;
    };
  };
}

export type AboutAllTestimonials = {
  edges: {
    node: {
      title: string;
      content: string;
      testimonialsSettings: {
        ratings: string;
        testimonialsHighlightText: string;
        testimonialsLocation: string;
      };
    };
  }[];
};

export interface IAboutUsQueryResult {
  pages: {
    edges: {
      node: {
        commonHeaderBanner: ICommonHeaderBanner;
        aboutUsPagePurpose: IAboutUsPagePurpose;
        seo: ISeoTypes;
      };
    }[];
  };
  allTestimonials: AboutAllTestimonials;
  posts: IAboutUsPosts;
}

export type IAboutUsPosts = {
  edges: {
    node: {
      title: string;
      slug: string;
      featuredImage: {
        node: {
          altText: string;
          mediaItemUrl: string;
        };
      };
      date: string;
      excerpt: string;
      content: string;
    };
  }[];
};
