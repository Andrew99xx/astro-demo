import gql from "graphql-tag";

export const requestEstimate = gql`
  query request_an_estimate {
    page(id: "3301", idType: DATABASE_ID) {
      commonHeaderBanner {
        commonHeaderBannerBackground {
          node {
            altText
            mediaItemUrl
          }
        }
        commonHeaderBannerDescription
        commonHeaderBannerListing {
          listName
        }
        commonHeaderBannerListingTitle
        commonHeaderBannerTitle
        commonHeaderBannerVideo {
          node {
            mediaItemUrl
          }
        }
      }
    }
    themeSettings {
      themeOption {
        financingOptionsHeading
        financingOptionsListing {
          financingOptionsListingTitle
        }
        whatToExpectHeading
        whatToExpectListing {
          whatToExpectListingTitle
        }
      }
    }
    allTestimonials(first: 20) {
      edges {
        node {
          title
          slug
          content
          testimonialsSettings {
            testimonialsLocation
            testimonialsHighlightText
            ratings
          }
        }
      }
    }
  }
`;
