import gql from "graphql-tag";

export const AboutUsQuery = gql`
  query about_us {
    pages(where: { id: 3172 }) {
      edges {
        node {
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
          aboutUsPagePurpose {
            aboutUsIntroButtonText
            aboutUsIntroContent
            aboutUsIntroImages {
              edges {
                node {
                  altText
                  mediaItemUrl
                }
              }
            }
            faqsButtonText
            faqsHeading
            faqsImage {
              node {
                altText
                mediaItemUrl
              }
            }
            faqsListing {
              question
              answer
            }
            fenceNewsHeading
            fenceNewsSubHeading
            missionDescription
            missionHeading
            ownASuperiorFenceButtonText
            ownASuperiorFenceDescription
            ownASuperiorFenceHeading
            testimonialsButtonText
            testimonialsHeading
            valuesDescription
            valuesHeading
            whyChooseSuperiorButtonText
            whyChooseSuperiorDescription
            whyChooseSuperiorHeading
            whyChooseSuperiorSubHeading
            workForSuperiorFenceButtonText
            workForSuperiorFenceDescription
            workForSuperiorFenceHeading
            workForSuperiorFenceSubHeading
            aboutUsHeadingMapImage {
              node {
                altText
                mediaItemUrl
              }
            }
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
    allTestimonials(first: 15, where: { status: PUBLISH }) {
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
    posts(
      first: 3
      where: { orderby: { field: DATE, order: DESC }, status: PUBLISH }
    ) {
      edges {
        node {
          title
          slug
          featuredImage {
            node {
              altText
              mediaItemUrl
            }
          }
          date
          excerpt
          content
        }
      }
    }
  }
`;
