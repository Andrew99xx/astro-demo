import gql from "graphql-tag";

export const FenceFinancingQuery = gql`
  query fence_fencing_location {
    pages(where: { name: "fence-financing-birmingham" }) {
      edges {
        node {
          title
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
          fenceFinancingPagePurpose {
            estimateMonthlyPaymentsDescription
            estimateMonthlyPaymentsHeading
            exclusivePaymentOptionsButtonText
            exclusivePaymentOptionsHeading
            exclusivePaymentOptionsListing {
              exclusivePaymentOptionsListingDescription
              exclusivePaymentOptionsListingHeading
              exclusivePaymentOptionsListingSubHeading
            }
            exclusivePaymentOptionsSubHeading
            faqsListing {
              question
              answer
            }
            interestRate
            loansProvidedByDescription
            loansProvidedByHeading
            loansProvidedByLogo {
              node {
                altText
                mediaItemUrl
              }
            }
            monthsFinanced
            chooseTestimonials(first: 50) {
              edges {
                node {
                  ... on Testimonials {
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

    # allTestimonials(first: 20, where: { status: PUBLISH }) {
    #   edges {
    #     node {
    #       title
    #       content
    #       testimonialsSettings {
    #         ratings
    #         testimonialsHighlightText
    #         testimonialsLocation
    #       }
    #     }
    #   }
    # }
  }
`;

// query fence_fencing_location {
//   pages(where: {name: "fence-financing-birmingham"}) {
//     edges {
//       node {
//         title
//         commonHeaderBanner {
//           commonHeaderBannerBackground {
//             node {
//               altText
//               mediaItemUrl
//             }
//           }
//           commonHeaderBannerDescription
//           commonHeaderBannerListing {
//             listName
//           }
//           commonHeaderBannerListingTitle
//           commonHeaderBannerTitle
//           commonHeaderBannerVideo {
//             node {
//               mediaItemUrl
//             }
//           }
//         }
//         fenceFinancingPagePurpose {
//           estimateMonthlyPaymentsDescription
//           estimateMonthlyPaymentsHeading
//           exclusivePaymentOptionsButtonText
//           exclusivePaymentOptionsHeading
//           exclusivePaymentOptionsListing {
//             exclusivePaymentOptionsListingDescription
//             exclusivePaymentOptionsListingHeading
//             exclusivePaymentOptionsListingSubHeading
//           }
//           exclusivePaymentOptionsSubHeading
//           faqsListing {
//             question
//             answer
//           }
//           interestRate
//           loansProvidedByDescription
//           loansProvidedByHeading
//           loansProvidedByLogo {
//             node {
//               altText
//               mediaItemUrl
//             }
//           }
//           monthsFinanced
//           chooseTestimonials(first: 50) {
//             edges {
//               node {
//                 ... on Testimonials {
//                   title
//                   content
//                   testimonialsSettings {
//                     ratings
//                     testimonialsHighlightText
//                     testimonialsLocation
//                   }
//                 }
//               }
//             }
//           }
//         }
//         seo {
//           canonical
//           metaDesc
//           metaKeywords
//           opengraphDescription
//           metaRobotsNofollow
//           metaRobotsNoindex
//           title
//           schema {
//             articleType
//             pageType
//             raw
//           }
//           twitterDescription
//           twitterTitle
//           twitterImage {
//             altText
//             mediaItemUrl
//           }
//           focuskw
//           opengraphTitle
//           opengraphType
//           opengraphUrl
//           opengraphSiteName
//         }
//       }
//     }
//   }
// }
