import type { ISeoTypes, TestimonialsEdge } from "./ResponseType";

export interface IReviewRatings {
  pages: {
    edges: {
      node: {
        fenceCompanyReviewsPagePurpose: {
          certificateButtonText: string;
          certificateRating: string;
          certificateText: string;
          headerBannerDescription: string;
          headerBannerHeading: string;
          headerBannerImage: {
            node: {
              altText: string;
              mediaItemUrl: string;
            };
          };
          reviewScript: string;
          whatCustomersAreSayingText: string;
          whyChooseSuperiorFenceHeading: string;
          youtubeVideoLink: string;
        };
        seo: ISeoTypes;
      };
    }[];
  };
  // allTestimonials: {
  //   edges: {
  //     node: {
  //       title: string;
  //       content: string;
  //       testimonialsSettings: {
  //         ratings: string;
  //         testimonialsHighlightText: string;
  //         testimonialsLocation: string;
  //       };
  //     };
  //   }[];
  // };
  allTestimonials: TestimonialsEdge;
}

export interface IRatingReviewsBaseResponse {
  pageBy: {
    fenceCompanyReviewsPagePurpose: {
      certificateButtonText: string;
      certificateRating: string;
      certificateText: string;
      headerBannerDescription: string;
      headerBannerHeading: string;
      headerBannerImage: {
        node: {
          altText: string;
          mediaItemUrl: string;
        };
      };
      reviewScript: string;
      whatCustomersAreSayingText: string;
      whyChooseSuperiorFenceHeading: string;
      youtubeVideoLink: string;
    };
    seo: ISeoTypes;
  };
  // allTestimonials: {
  //   edges: {
  //     node: {
  //       title: string;
  //       content: string;
  //       testimonialsSettings: {
  //         ratings: string;
  //         testimonialsHighlightText: string;
  //         testimonialsLocation: string;
  //       };
  //     };
  //   }[];
  // };
  allTestimonials: TestimonialsEdge;
}
