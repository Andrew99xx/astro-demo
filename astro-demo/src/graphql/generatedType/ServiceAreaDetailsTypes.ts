import type { ISeoTypes, TestimonialsEdge } from "./ResponseType";

export interface IServiceAreaDetailsQueryResult {
  [x: string]: any;
  allLocation: {
    edges: {
      node: {
        serviceAreaPurpose: {
          aboutFenceCompanyDescription: string;
          aboutFenceCompanyHeading: string;
          certificateHeading: string;
          certificateRating: string;
          fenceInstallationResourcesList: {
            fenceInstallationResourcesListLink: string;
            fenceInstallationResourcesListTitle: string;
          }[];
          financingAvailableText: string;
          getYourNewFenceHeading: string;
          getYourNewFenceListing: {
            getYourNewFenceListingDescription: string;
            getYourNewFenceListingName: string;
          }[];
          headerBannerDescription: string;
          headerBannerImage: {
            node: {
              altText: string;
              mediaItemUrl: string;
            };
          };
          headerBannerSubHeading: string;
          headerBannerTitle: string;
          howToChooseText: string;
          howToChooseVideo: {
            node: {
              mediaItemUrl: string;
            };
          };
          howToChooseVideoLink: string;
          infoBlocks: {
            infoBlocksDescription: string;
            infoBlocksHeading: string;
          }[];
          locationLat: number;
          locationLong: number;
          mapAreaAddress: string;
          mapAreaEmail: string;
          mapAreaHeading: string;
          mapAreaImage: {
            node: {
              altText: string;
              mediaItemUrl: string;
            };
          };
          mapAreaPhone: string;
          moreThanYouExpectList: {
            moreThanYouExpectDescription: string;
            moreThanYouExpectListHeading: string;
          }[];
          opportunityNearMeDescription: string;
          opportunityNearMeHeading: string;
          rightBlockHeading: string;
          chooseTestimonials: TestimonialsEdge;
        };
        seo: ISeoTypes;
      };
    }[];
  };
  // allTestimonials: {
  //   edges: {
  //     node: {
  //       title: string;
  //       content: string;
  //       testimonialsSettings: {
  //         ratings: number;
  //         testimonialsHighlightText: string;
  //         testimonialsLocation: string;
  //       };
  //     };
  //   }[];
  // };
  // allTestimonials: TestimonialsEdge;
  posts: {
    edges: {
      node: {
        title: string;
        slug: string;
        featuredImage: {
          node: {
            altText: string;
            mediaItemUrl: string;
          };
        };
        content: string;
        excerpt: string;
        author: {
          node: {
            firstName: string;
            lastName: string;
            nicename: string;
          };
        };
        date: string;
      };
    }[];
  };
  themeSettings: {
    themeOption: {
      getAFenceQuoteHeading: string;
      getAFenceQuoteDescription: string;
      financingOptionsHeading: string;
      financingOptionsListing: {
        financingOptionsListingTitle: string;
      }[];
      whatToExpectHeading: string;
      whatToExpectListing: {
        whatToExpectListingTitle: string;
      }[];
    };
  };
}

// **************************

export interface IServiceCityPageTypes{
    location: {
      title: string;
      slug: string;
      newLocationPurpose: {
        caLicenseNo: string;
        certifiedReviewsNumber: number;
        certifiedReviewsRating: number;
        ctHicNo: string;
        exploreFranchiseDescription: string;
        exploreFranchiseHeading: string;
        fenceCatalogueDescription: string;
        fenceCatalogueHeading: string;
        fenceInstallationResourcesHeading: string;
        fenceInstallationResourcesListing: {
          fenceInstallationResourcesListNmae: string;
        }[];
        fenceResourcesHeading: string;
        fenceResourcesListing: {
          fenceResourcesListHeading: string;
          fenceResourcesListImage: {
            node: {
              altText: string;
              mediaItemUrl: string;
            };
          };
        }[];
        getYourNewFenceHeading: string;
        getYourNewFenceListing: {
          getYourNewFenceListDescription: string;
          getYourNewFenceListHeading: string;
          getYourNewFenceSublist: {
            getYourNewFenceSublistHeading: string;
          }[];
        }[];
        highestRatedHeading: string;
        locationBannerBackgroundImage: {
          node: {
            altText: string;
            mediaItemUrl: string;
          };
        };
        locationBannerDescription: string;
        locationBannerHeading: string;
        locationLat: number;
        locationLong: number;
        mapBelowDescription: string;
        mapBlockAddress: string;
        mapBlockEmail: string;
        mapBlockHeading: string;
        mapBlockImage: {
          node: {
            altText: string;
            mediaItemUrl: string;
          };
        };
        mapBlockPhone: string;
        reviewsCount: number;
        reviewsStarCount: number;
        totalYearExperienceList: {
          totalYearExperienceListCount: number;
          totalYearExperienceListDescription: string;
          totalYearExperienceListHeading: string;
        }[];
        totalYearExperienceNumber: number;
        viewOurPropertyDescription: string;
        viewOurPropertyHeading: string;
        viewOurPropertyImage: {
          node: {
            altText: string;
            mediaItemUrl: string;
          };
        };
        chooseTestimonials: {
          edges: {
            node: {
              title: string;
              content: string;
              testimonialsSettings: {
                ratings: number;
                testimonialsHighlightText: string;
                testimonialsLocation: string;
              };
              slug: string;
              featuredImage: {
                node: {
                  altText: string;
                  mediaItemUrl: string;
                };
              };
            };
          }[];
        };
        fenceQuoteHeading: string;
        fenceQuoteDescription: string;
        certifiedReviews: {
          node: {
            altText: string;
            mediaItemUrl:string;
          };
        };
      };
      seo: ISeoTypes;
    };
    allFenceTypesCategory: {
      edges: {
        node: {
          name: string;
          slug: string;
          description: string;
          fenceTypesCategoryPurpose: {
            fenceTypesThumbnail: {
              node: {
                altText: string;
                mediaItemUrl: string;
              };
            };
            fenceTypesDisplayName: string;
            fenceTypesIcon: {
              node: {
                altText: string;
                mediaItemUrl: string;
              };
            };
          };
        };
      }[];
    };
    posts: {
      edges: {
        node: {
          title: string;
          content: string;
          excerpt: string;
          slug: string;
          featuredImage: {
            node: {
              altText: string;
              mediaItemUrl: string;
              author: {
                node: {
                  firstName: string;
                  lastName: string;
                  nicename: string;
                };
              };
              date: string;
            };
          };
        };
      }[];
    };
  }
  

