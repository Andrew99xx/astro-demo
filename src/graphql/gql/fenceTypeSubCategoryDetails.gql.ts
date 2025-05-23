import gql from "graphql-tag";

export const FenceSubcategoryDetails = gql`
  query fence_subcategory_details($id: String!) {
    allFenceTypes(where: { name: $id }) {
      edges {
        node {
          title
          fenceTypePostPurpose {
            fenceType
            fenceListingInfo
            fenceListingImages {
              edges {
                node {
                  altText
                  mediaItemUrl
                }
              }
            }
            fenceGalleryListing {
              fenceGalleryHeading
              fenceGalleryImages {
                nodes {
                  altText
                  mediaItemUrl
                }
              }
            }
          }
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
    posts(where: { categoryName: $id }, first: 6) {
      edges {
        node {
          title
          excerpt
          date
          featuredImage {
            node {
              altText
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`;
