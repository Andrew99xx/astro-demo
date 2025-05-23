import gql from "graphql-tag";

export const HomepageQuery = gql`
  query Homepage {
    page(id: "26", idType: DATABASE_ID) {
      homePagePurposeNew {
        headerBannerImage {
          node {
            altText
            mediaItemUrl
          }
        }
        fenceInstallationHeading
        fenceTypesHeading
        financeYourProjectButtonText
        financeYourProjectDescription
        financeYourProjectHeading
        monthsFinanced
        ownASuperiorFenceButtonTitle
        ownASuperiorFenceDescription
        ownASuperiorFenceHeading
        superiorFenceCompanyDescription
        superiorFenceCompanyHeading
        testimonialsButtonText
        testimonialsHeading
        whyChooseSuperiorFenceDescription
        whyChooseSuperiorFenceHeading

        interestRate
        sliderContentListing {
          getAQuoteText
          sliderContentDescription
          sliderContentHeading
          sliderContentRatings
        }
        superiorFenceCompanyImage {
          node {
            altText
            mediaItemUrl
          }
        }
        listingOfReasons {
          buttonLink
          description
          title
        }
        mapIcon {
          node {
            altText
            mediaItemUrl
          }
        }
        financeYourProjectCalculateHeading
        chooseTestimonials(first: 16) {
          edges {
            node {
              ... on Testimonials {
                title
                content
                testimonialsSettings {
                  ratings
                  testimonialsHighlightText
                }
              }
            }
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
    # allTestimonials {
    #   edges {
    #     node {
    #       title
    #       testimonialsSettings {
    #         ratings
    #         testimonialsHighlightText
    #       }
    #       content
    #     }
    #   }
    # }
    allFenceTypesCategory(first: 100) {
      edges {
        node {
          name
          slug
          fenceTypesCategoryPurpose {
            fenceTypesThumbnail {
              node {
                altText
                mediaItemUrl
              }
            }
            fenceTypesDisplayName
          }
        }
      }
    }
    allFenceInstallationVideo(first: 20, where: { status: PUBLISH }) {
      edges {
        node {
          title
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

export const CommonSettingQuery = gql`
  query CommonSettings {
    themeSettings {
      themeOption {
        awards {
          edges {
            node {
              altText
              mediaItemUrl
            }
          }
        }
        footerBottomText
        headerLogo {
          node {
            altText
            mediaItemUrl
          }
        }
        socialMediaListing {
          fieldGroupName
          socialMediaLink
          socialMediaName
        }
        topContactUsLink {
          edges {
            node {
              link
            }
          }
        }
        footerLogo {
          node {
            altText
            mediaItemUrl
          }
        }
        footerMenuOne {
          footerMenuOneLink
          footerMenuOneName
        }
        footerMenuTwo {
          footerMenuTwoLink
          footerMenuTwoName
        }
      }
    }
  }
`;

// query Homepage {
//   page(id: "26", idType: DATABASE_ID) {
//     homePagePurposeNew {
//       headerBannerImage {
//         node {
//           altText
//           mediaItemUrl
//         }
//       }
//       fenceInstallationHeading
//       fenceTypesHeading
//       financeYourProjectButtonText
//       financeYourProjectDescription
//       financeYourProjectHeading
//       monthsFinanced
//       ownASuperiorFenceButtonTitle
//       ownASuperiorFenceDescription
//       ownASuperiorFenceHeading
//       superiorFenceCompanyDescription
//       superiorFenceCompanyHeading
//       testimonialsButtonText
//       testimonialsHeading
//       whyChooseSuperiorFenceDescription
//       whyChooseSuperiorFenceHeading
//       bottomBlocks {
//         title
//       }
//       interestRate
//       sliderContentListing {
//         getAQuoteText
//         sliderContentDescription
//         sliderContentHeading
//         sliderContentRatings
//       }
//       superiorFenceCompanyImage {
//         node {
//           altText
//           mediaItemUrl
//         }
//       }
//       listingOfReasons {
//         buttonLink
//         description
//         title
//       }
//       mapIcon {
//         node {
//           altText
//           mediaItemUrl
//         }
//       }
//     }
//     seo {
//       canonical
//       metaDesc
//       metaKeywords
//       opengraphDescription
//       metaRobotsNofollow
//       metaRobotsNoindex
//       title
//       schema {
//         articleType
//         pageType
//         raw
//       }
//       twitterDescription
//       twitterTitle
//       twitterImage {
//         altText
//         mediaItemUrl
//       }
//       focuskw
//       opengraphTitle
//       opengraphType
//       opengraphUrl
//       opengraphSiteName
//     }
//     slug
//   }
//   allTestimonials {
//     edges {
//       node {
//         title
//         testimonialsSettings {
//           ratings
//           testimonialsHighlightText
//         }
//         content
//       }
//     }
//   }
//   allFenceTypesCategory(first: 100) {
//     edges {
//       node {
//         name
//         slug
//         fenceTypesCategoryPurpose {
//           fenceTypesThumbnail {
//             node {
//               altText
//               mediaItemUrl
//             }
//           }
//           fenceTypesDisplayName
//         }
//       }
//     }
//   }
//   allFenceInstallationVideo(first: 20, where: {status: PUBLISH}) {
//     edges {
//       node {
//         title
//         fenceVideoTutorialPagePurpose {
//           fenceVideoTutorialVideoLink
//           videoThumbImage {
//             node {
//               altText
//               mediaItemUrl
//             }
//           }
//         }
//       }
//     }
//   }
// }
