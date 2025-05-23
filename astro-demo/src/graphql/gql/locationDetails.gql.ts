import gql from "graphql-tag";

export const LocationDetailsAboutUsQuery = gql`
  query about_us_location($id: String) {
    pages(where: { name: $id }) {
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
    allTestimonials(first: 13) {
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
    posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
      edges {
        node {
          title
          slug
          excerpt
          content
          featuredImage {
            node {
              altText
              mediaItemUrl
              author {
                node {
                  firstName
                  lastName
                  nicename
                }
              }
              date
            }
          }
        }
      }
    }
  }
`;
