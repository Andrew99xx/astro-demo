import type { ICommonHeaderBanner } from "./FenceTypeResponseTypes";
import type { ISeoTypes, TestimonialsEdge } from "./ResponseType";

export interface IFenceFencingLocation {
  pages: {
    edges: {
      node: {
        title: string;
        commonHeaderBanner: ICommonHeaderBanner;
        fenceFinancingPagePurpose: {
          estimateMonthlyPaymentsDescription: string | null;
          estimateMonthlyPaymentsHeading: string | null;
          exclusivePaymentOptionsButtonText: string | null;
          exclusivePaymentOptionsHeading: string | null;
          exclusivePaymentOptionsListing:
            | {
                exclusivePaymentOptionsListingDescription: string | null;
                exclusivePaymentOptionsListingHeading: string | null;
                exclusivePaymentOptionsListingSubHeading: string | null;
              }[]
            | null;
          exclusivePaymentOptionsSubHeading: string | null;
          faqsListing:
            | {
                question: string;
                answer: string;
              }[]
            | null;
          interestRate: string | null;
          loansProvidedByDescription: string | null;
          loansProvidedByHeading: string | null;
          loansProvidedByLogo: {
            node: {
              altText: string | null;
              mediaItemUrl: string;
            } | null;
          } | null;
          monthsFinanced: string | null;
          chooseTestimonials: TestimonialsEdge;
        } | null;
        seo: ISeoTypes;
      };
    }[];
  };
}
