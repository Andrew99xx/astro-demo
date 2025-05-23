import gql from "graphql-tag";

export const FenceTypesQuery = gql`
  query fence_types {
    page(id: "2783", idType: DATABASE_ID) {
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
      content
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
    allFenceTypesCategory(first: 1000) {
      edges {
        node {
          name
          fenceTypesCategoryPurpose {
            fenceTypesThumbnail {
              node {
                altText
                mediaItemUrl
                slug
              }
            }
            fenceTypesListing
          }
          slug
        }
      }
    }
  }
`;

export const FenceTypeCategoryDetailsQuery = gql`
  query fence_category_details($id: [String]) {
    allFenceTypesCategory(where: { slug: $id }) {
      edges {
        node {
          fenceTypesCategoryPurpose {
            chooseFromFenceInstallationVideo {
              edges {
                node {
                  ... on FenceInstallationVideo {
                    title
                    slug
                    fenceVideoTutorialPagePurpose {
                      fenceVideoTutorialVideoLink
                      videoThumbImage {
                        node {
                          altText
                          mediaItemUrl
                        }
                      }
                    }
                    date
                    excerpt
                  }
                }
              }
            }
            fenceEstimateBlockShortDescription
            fenceEstimateBlockTitle
            fenceEstimateDescription
            fenceEstimateHeading
            fenceNewsHeading
            chooseFromFenceNews {
              edges {
                node {
                  ... on Post {
                    title
                    slug
                    date
                    excerpt
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
            fenceNewsSubHeading
            fenceTypesGallery {
              edges {
                node {
                  altText
                  mediaItemUrl
                }
              }
            }
            fenceTypesIcon {
              node {
                altText
                mediaItemUrl
              }
            }
            fenceTypesListing
            fenceTypesThumbnail {
              node {
                altText
                mediaItemUrl
              }
            }
            fenceTypesWarrantyPdfLink {
              node {
                mediaItemUrl
              }
            }
            fenceTypesWarrantyPdfName
            fenceTypesWarrantyRightSideDescription
            fenceTypesWarrantyRightSideHeading
            fenceVideoHeading
            fenceVideoSubHeading
            longDescription
            noaDescription
            noaDescriptionYoutubeLink
            noaHeading
            noaIcon {
              node {
                altText
                mediaItemUrl
              }
            }
            popularFenceStylesHeading
            popularFenceStylesImages {
              edges {
                node {
                  altText
                  mediaItemUrl
                }
              }
            }
            fetchTypeAdditionalContentList {
              fetchTypeAdditionalContentListIcon {
                node {
                  altText
                  mediaItemUrl
                }
              }
              fetchTypeAdditionalContentListDescription
            }
            fenceTypesWarrantyDescription
            fenceTypesPageHeading
            fenceTypesPageHeadingDescription
            superiorFenceInnovationsText
            fenceNewsChooseCategory {
              edges {
                node {
                  name
                  slug
                  uri
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
          name
          seo {
            canonical
            metaDesc
            metaKeywords
            opengraphDescription
            metaRobotsNofollow
            metaRobotsNoindex
            title
            schema {
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
  }
`;
export const CategoryPost = gql`
  query GetCategoryPost($categorySlug: [String]) {
    posts(
      where: {
        taxQuery: {
          taxArray: { taxonomy: CATEGORY, terms: $categorySlug, field: SLUG }
          relation: AND
        }
        status: PUBLISH
      }
      first: 3
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
          excerpt
          author {
            node {
              firstName
              lastName
              username
            }
          }
          date
        }
      }
    }
  }
`;
