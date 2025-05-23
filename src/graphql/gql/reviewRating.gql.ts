import gql from "graphql-tag";

export const IReviewRatingsQuery = gql`
  query fence_company_reviews_location($id: String) {
    pages(where: { name: $id }) {
      edges {
        node {
          fenceCompanyReviewsPagePurpose {
            certificateButtonText
            certificateRating
            certificateText
            headerBannerDescription
            headerBannerHeading
            headerBannerImage {
              node {
                altText
                mediaItemUrl
              }
            }
            reviewScript
            whatCustomersAreSayingText
            whyChooseSuperiorFenceHeading
            youtubeVideoLink
          }
          seo {
            canonical
            metaDesc
            metaKeywords
            opengraphDescription
            metaRobotsNofollow
            metaRobotsNoindex
            title
            schema {
              articleType
              pageType
              raw
            }
            twitterDescription
            twitterTitle
            twitterImage {
              altText
              mediaItemUrl
            }
            focuskw
            opengraphTitle
            opengraphType
            opengraphUrl
            opengraphSiteName
          }
        }
      }
    }
    allTestimonials(first: 20, where: { status: PUBLISH }) {
      edges {
        node {
          title
          content
          testimonialsSettings {
            ratings
            testimonialsHighlightText
            testimonialsLocation
          }
        }
      }
    }
  }
`;

export const IRatingReviewsBaseQuery = gql`
  query ratings_and_review {
    pageBy(pageId: 3354) {
      fenceCompanyReviewsPagePurpose {
        certificateButtonText
        certificateRating
        certificateText
        headerBannerDescription
        headerBannerHeading
        headerBannerImage {
          node {
            altText
            mediaItemUrl
          }
        }
        reviewScript
        whatCustomersAreSayingText
        whyChooseSuperiorFenceHeading
        youtubeVideoLink
      }
      seo {
        canonical
        metaDesc
        metaKeywords
        opengraphDescription
        metaRobotsNofollow
        metaRobotsNoindex
        title
        schema {
          articleType
          pageType
          raw
        }
        twitterDescription
        twitterTitle
        twitterImage {
          altText
          mediaItemUrl
        }
        focuskw
        opengraphTitle
        opengraphType
        opengraphUrl
        opengraphSiteName
      }
    }
    allTestimonials(first: 20, where: { status: PUBLISH }) {
      edges {
        node {
          title
          content
          testimonialsSettings {
            ratings
            testimonialsHighlightText
            testimonialsLocation
          }
        }
      }
    }
  }
`;
