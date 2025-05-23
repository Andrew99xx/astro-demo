import gql from "graphql-tag";

export const IServiceAreaDetailsQuery = gql`
  query service_area_details($id: String!) {
    allLocation(where: { name: $id }) {
      edges {
        node {
          serviceAreaPurpose {
            aboutFenceCompanyDescription
            aboutFenceCompanyHeading
            certificateHeading
            certificateRating
            fenceInstallationResourcesList {
              fenceInstallationResourcesListLink
              fenceInstallationResourcesListTitle
            }
            financingAvailableText
            getYourNewFenceHeading
            getYourNewFenceListing {
              getYourNewFenceListingDescription
              getYourNewFenceListingName
            }
            headerBannerDescription
            headerBannerImage {
              node {
                altText
                mediaItemUrl
              }
            }
            headerBannerSubHeading
            headerBannerTitle
            howToChooseText
            howToChooseVideo {
              node {
                mediaItemUrl
              }
            }
            howToChooseVideoLink
            infoBlocks {
              infoBlocksDescription
              infoBlocksHeading
            }
            locationLat
            locationLong
            mapAreaAddress
            mapAreaEmail
            mapAreaHeading
            mapAreaImage {
              node {
                altText
                mediaItemUrl
              }
            }
            mapAreaPhone
            moreThanYouExpectList {
              moreThanYouExpectDescription
              moreThanYouExpectListHeading
            }
            opportunityNearMeDescription
            opportunityNearMeHeading
            rightBlockHeading
            chooseTestimonials(first: 13) {
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
    # allTestimonials(first: 13, where: { status: PUBLISH }) {
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
          content
          excerpt
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
    themeSettings {
      themeOption {
        getAFenceQuoteHeading
        getAFenceQuoteDescription
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
  }
`;

// **********************************

// New service area query

export const serviceCityPageQuery = gql`
  query service_city_pages ($id: ID!) {
    location(id: $id, idType: URI) {
      newLocationPurpose {
        caLicenseNo
        certifiedReviewsNumber
        certifiedReviewsRating
        ctHicNo
        exploreFranchiseDescription
        exploreFranchiseHeading
        fenceCatalogueDescription
        fenceCatalogueHeading
        fenceInstallationResourcesHeading
        fenceInstallationResourcesListing {
          fenceInstallationResourcesListNmae
        }
        fenceResourcesHeading
        fenceResourcesListing {
          fenceResourcesListHeading
          fenceResourcesListImage {
            node {
              altText
              mediaItemUrl
            }
          }
        }
        getYourNewFenceHeading
        getYourNewFenceListing {
          getYourNewFenceListDescription
          getYourNewFenceListHeading
          getYourNewFenceSublist {
            getYourNewFenceSublistHeading
          }
        }
        highestRatedHeading
        locationBannerBackgroundImage {
          node {
            altText
            mediaItemUrl
          }
        }
        locationBannerDescription
        locationBannerHeading
        locationLat
        locationLong
        mapBelowDescription
        mapBlockAddress
        mapBlockEmail
        mapBlockHeading
        mapBlockImage {
          node {
            altText
            mediaItemUrl
          }
        }
        mapBlockPhone
        reviewsCount
        reviewsStarCount
        totalYearExperienceList {
          totalYearExperienceListCount
          totalYearExperienceListDescription
          totalYearExperienceListHeading
        }
        totalYearExperienceNumber
        viewOurPropertyDescription
        viewOurPropertyHeading
        viewOurPropertyImage {
          node {
            altText
            mediaItemUrl
          }
        }
        chooseTestimonials(first: 20) {
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
                slug
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
        fenceQuoteHeading
        fenceQuoteDescription
        certifiedReviews {
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
      slug
      title
    }
    allFenceTypesCategory(first: 50) {
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
            fenceTypesIcon {
              node {
                altText
                mediaItemUrl
              }
            }
          }
          description
        }
      }
    }
    posts(
      first: 21
      where: { status: PUBLISH, orderby: { field: DATE, order: DESC } }
    ) {
      edges {
        node {
          title
          content
          excerpt
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
          slug
        }
      }
    }
  }
`;
