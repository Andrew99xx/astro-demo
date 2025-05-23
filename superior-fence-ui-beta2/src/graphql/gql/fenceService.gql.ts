import gql from "graphql-tag";

//fence service sidebar

export const FenceServicesSidebarQuery = gql`
  query fence_services_sidebar {
    allFenceServices(first: 100) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;

export const FenceServicesQuery = gql`
  query fence_service_details($id: String!) {
    allFenceServices(where: { name: $id }) {
      edges {
        node {
          title
          template {
            templateName
          }
          slug
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
          fenceServicesCommercial {
            commercialFenceEstimatesLeftDescription
            commercialFenceEstimatesLeftHeading
            commercialFenceEstimatesRightButtonText
            commercialFenceEstimatesRightDescription
            commercialFenceEstimatesRightHeading
            commercialServicesGalleryButtonText
            commercialServicesGalleryDescription
            commercialServicesGalleryHeading
            commercialServicesGalleryImages {
              edges {
                node {
                  altText
                  mediaItemUrl
                }
              }
            }
            whyChooseCopy
            whyChooseHeading
            whyChooseSuperiorFenceListing {
              whyChooseSuperiorFenceListingDescription
              whyChooseSuperiorFenceListingTitle
            }
          }
          content
          fenceServicesMetalFabrication {
            metalHeading
            metalDescription
            metalFabricationGalleryButtonText
            metalFabricationGalleryDescription
            metalFabricationGalleryHeading
            metalFabricationGalleryImages {
              edges {
                node {
                  altText
                  mediaItemUrl
                }
              }
            }
            ourProcessButtonText
            ourProcessHeading
            ourProcessListing {
              ourProcessListingHeading
              ourProcessListingDescription
              ourProcessListingIcon {
                node {
                  mediaItemUrl
                }
              }
            }
            powderCoatingDescription
            powderCoatingHeading
            whyChooseUsBlockButtonText
            whyChooseUsBlockDescription
            whyChooseUsBlockHeading
            whyChooseUsHeading
            whyChooseUsListing {
              whyChooseUsListingDescription
              whyChooseUsListingTitle
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
    allFenceInstallationVideo(first: 100) {
      edges {
        node {
          title
          slug
          content
          fenceVideoTutorialPagePurpose {
            fenceVideoTutorialVideoLink
            videoThumbImage {
              node {
                altText
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  }
`;
