import type { ICommonHeaderBanner } from "./FenceTypeResponseTypes";

export interface IRequestAnEstimateQueryResponse {
  page: {
    commonHeaderBanner: ICommonHeaderBanner;
  };
  themeSettings: {
    themeOption: {
      financingOptionsHeading: string;
      financingOptionsListing: {
        financingOptionsListingTitle: string;
      }[];
      whatToExpectHeading: string;
      whatToExpectListing: {
        whatToExpectListingTitle: string;
      }[];
    };
  };
  allTestimonials: {
    edges: {
      node: {
        title: string;
        slug: string;
        content: string;
        testimonialsSettings: {
          testimonialsLocation: string;
          testimonialsHighlightText: string;
          ratings: number;
        };
      };
    }[];
  };
}
