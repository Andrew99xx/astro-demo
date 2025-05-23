import gql from "graphql-tag";

export const IServiceLocationQuery = gql`
  query service_location_page($id: [String]) {
    locationState(where: { name: $id }) {
      edges {
        node {
          locationPurpose {
            aboutSuperiorFenceDescription
            aboutSuperiorFenceHeading
            aboutSuperiorFenceImage {
              node {
                altText
                mediaItemUrl
              }
            }
            caLicenseNo
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
            ctHicNo
            headerBottomBlockOneDescription
            headerBottomBlockOneHeading
            headerBottomBlockThreeDescription
            headerBottomBlockThreeHeading
            headerBottomBlockTwoDescription
            headerBottomBlockTwoHeading
            locationBannerSliderListing {
              locationBannerSliderDescription
              locationBannerSliderHeading
              locationBannerSliderRatings
            }
            locationLat
            locationLong
            mapBlockAddress
            mapBlockEmail
            mapBlockHeading
            mapBlockImage {
              node {
                altText
                mediaItemUrl
              }
            }
            prepareForYourFenceHeading
            prepareForYourFenceListing {
              prepareForYourFenceListingTitle
              prepareForYourFenceYoutubeVideoLink
              prepareForYourFenceListingTitleImage {
                node {
                  altText
                  mediaItemUrl
                }
              }
            }
            recentPostsHeading
            recentPostsTag
            selectYourNewFenceHeading
            whyChooseUsCertificateHeading
            whyChooseUsCertificateRating
            whyChooseUsHeading
            whyChooseUsShortDescription
            mapBlockPhone
            locationBannerImage {
              node {
                altText
                mediaItemUrl
              }
            }
            whySuperiorFenceHeading
            whySuperiorFenceDescription
            whySuperiorFenceListing {
              whySuperiorFenceListingTitle
              whySuperiorFenceListingDescription
              learnMoreButtonTag
            }
          }
          location(first: 100) {
            edges {
              node {
                title
                slug
              }
            }
          }
          name
          slug
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
        }
      }
    }
    themeSettings {
      themeOption {
        financeYourProjectButtonText
        financeYourProjectDescription
        financeYourProjectHeading
        financeYourProjectInterestRate
        financeYourProjectMonthsFinanced
        financingOptionsHeading
        financingOptionsListing {
          financingOptionsListingTitle
        }
        getAFenceQuoteDescription
        getAFenceQuoteHeading
        whatToExpectHeading
        whatToExpectListing {
          whatToExpectListingTitle
        }
        # whySuperiorFenceDescription
        # whySuperiorFenceHeading
        # whySuperiorFenceListing {
        #   whySuperiorFenceListingDescription
        #   whySuperiorFenceListingTitle
        # }
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
          }
        }
      }
    }
  }
`;
// new service location query

export const NewServiceLocationQuery = gql`
  query service_location_page($id: ID!) {
    locationStates(id: $id, idType: SLUG) {
      name

      newLocationPurpose {
        exploreFranchiseDescription

        exploreFranchiseHeading

        fenceFinancingDescription

        fenceFinancingHeading

        fenceQuoteDescription

        fenceQuoteHeading

        getYourNewFenceHeading

        getYourNewFenceImages {
          edges {
            node {
              altText

              mediaItemUrl
            }
          }
        }

        getYourNewFenceListing {
          getYourNewFenceListDescription

          getYourNewFenceListHeading

          getYourNewFenceSublist {
            getYourNewFenceSublistHeading
          }
        }

        headerBottomBlockOneDescription

        headerBottomBlockOneHeading

        headerBottomBlockThreeDescription

        headerBottomBlockThreeHeading

        headerBottomBlockTwoDescription

        headerBottomBlockTwoHeading

        howToChooseSectionHeading

        howToChooseSectionVideoLink

        howToChooseSectionVideoThumbnail {
          node {
            altText

            mediaItemUrl
          }
        }

        locationBannerBackgroundImage {
          node {
            altText

            mediaItemUrl
          }
        }

        locationBannerDescription

        locationBannerHeading

        mapBelowDescription

        reviewsCount

        reviewsStarCount

        whyChooseSectionDescription

        whyChooseSectionHeading

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
              }
            }
          }
        }

        mapBlockPhone

        mapBlockHeading

        mapBlockEmail

        mapBlockAddress

        locationLong

        locationLat

        ctHicNo

        caLicenseNo
        mapBlockImage {
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

// v3 service location query

export const NewServiceLocationQueryV3 = gql`
  query service_location_page($id: ID!) {
    locationStates(id: $id, idType: SLUG) {
      newLocationPurpose {
        caLicenseNo
        certifiedReviews {
          node {
            altText
            mediaItemUrl
          }
        }
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
