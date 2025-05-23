import type { ICommonHeaderBanner } from "./FenceTypeResponseTypes";
import type { ISeoTypes } from "./ResponseType";

export interface ILocationDetailsAboutUs {
  pages: {
    edges: {
      node: {
        commonHeaderBanner: ICommonHeaderBanner;
        aboutUsPagePurpose: {
          [x: string]: any;
          aboutUsIntroButtonText: string;
          aboutUsIntroContent: string;
          aboutUsIntroImages: {
            edges: {
              node: {
                altText: string;
                mediaItemUrl: string;
              };
            }[];
          };
          faqsButtonText: string;
          faqsHeading: string;
          faqsImage: {
            node: {
              altText: string;
              mediaItemUrl: string;
            };
          };
          faqsListing: {
            question: string;
            answer: string;
          }[];
          fenceNewsHeading: string;
          fenceNewsSubHeading: string;
          missionDescription: string;
          missionHeading: string;
          ownASuperiorFenceButtonText: string;
          ownASuperiorFenceDescription: string;
          ownASuperiorFenceHeading: string;
          testimonialsButtonText: string;
          testimonialsHeading: string;
          valuesDescription: string;
          valuesHeading: string;
          whyChooseSuperiorButtonText: string;
          whyChooseSuperiorDescription: string;
          whyChooseSuperiorHeading: string;
          whyChooseSuperiorSubHeading: string;
          workForSuperiorFenceButtonText: string;
          workForSuperiorFenceDescription: string;
          workForSuperiorFenceHeading: string;
          workForSuperiorFenceSubHeading: string;
        };
        seo: ISeoTypes;
      };
    }[];
  };
  allTestimonials: {
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
  posts: {
    edges: {
      node: {
        title: string;
        slug: string;
        excerpt: string;
        content: string;
        featuredImage: {
          node: {
            altText: string;
            mediaItemUrl: string;
            author: {
              node: {
                firstName: string;
                lastName: string;
                nicename: string;
              };
            };
            date: string;
          };
        };
      };
    }[];
  };
}
