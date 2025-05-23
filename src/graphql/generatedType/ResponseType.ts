import type { commonMapInterfaceImageType } from "../../interfaces/map.interface";

// start Testimonial types

// export type TestimonialNode = {
//   title: string;
//   testimonialsSettings: {
//     ratings?: number | string;
//     testimonialsHighlightText?: string;
//     testimonialsLocation?: string;
//   };
//   slug?: string;
//   content: string;
// };

export interface Testimonial {
  title: string;
  content: string;
  testimonialsSettings: {
    ratings: number;
    testimonialsHighlightText: string;
    testimonialsLocation: string;
  };
}

// export type AllTestimonials = {
//   edges: {
//     node: TestimonialNode;
//   }[];
// };

export interface TestimonialsEdge {
  edges: {
    node: Testimonial;
  }[];
}
// end Testimonial types

export type FenceTypeNode = {
  // title: string;
  // featuredImage: {
  //   node: {
  //     altText: string;
  //     mediaItemUrl: string;
  //   };
  // };

  name: string;
  slug: string;
  fenceTypesCategoryPurpose: {
    fenceTypesThumbnail: {
      node: {
        altText: string;
        mediaItemUrl: string;
      };
    };
    fenceTypesDisplayName: string;
  };
};

export type AllFenceTypes = {
  edges: {
    node: FenceTypeNode;
  }[];
};

export interface IfenceInstallationVideoListing {
  fenceInstallationTitle: string;
  fenceInstallationYoutubeVideoLink: string;
}

export interface IPrepareForYourFenceListing {
  prepareForYourFenceListingTitle: string;
  prepareForYourFenceYoutubeVideoLink: string;
}

export type AllFenceInstallationVideo = {
  edges: {
    node: FenceInstallationVideoNode;
  }[];
};

export type FenceInstallationVideoNode = {
  title: string;
  fenceVideoTutorialPagePurpose: {
    fenceVideoTutorialVideoLink: string;
    videoThumbImage: {
      node: {
        altText: string;
        mediaItemUrl: string;
      };
    };
  };
};

export interface PageResponse {
  homePagePurposeNew: HomePagePurposeNew;
  seo: ISeoTypes;
}

export interface ISeoTypes {
  canonical: string;
  metaDesc: string;
  metaKeywords: string;
  opengraphDescription: string;
  metaRobotsNofollow: string;
  metaRobotsNoindex: string;
  title: string;
  schema: {
    articleType: string;
    pageType: string;
    raw: string;
  };
  twitterDescription: string;
  twitterTitle: string;
  twitterImage: {
    altText: string;
    mediaItemUrl: string;
  };
  focuskw: string;
  opengraphTitle: string;
  opengraphType: string;
  opengraphUrl: string;
  opengraphSiteName: string;
}
export interface HomePagePurposeNew {
  headerBannerImage: {
    node: {
      altText: string;
      mediaItemUrl: string;
    };
  };

  fenceInstallationHeading: string;
  fenceTypesHeading: string;
  financeYourProjectButtonLink: string;
  financeYourProjectButtonText: string;
  financeYourProjectDescription: string;
  financeYourProjectHeading: string;
  monthsFinanced: number;
  ownASuperiorFenceButtonLink: string;
  ownASuperiorFenceButtonTitle: string;
  ownASuperiorFenceDescription: string;
  ownASuperiorFenceHeading: string;
  superiorFenceCompanyDescription: string;
  superiorFenceCompanyHeading: string;
  testimonialsButtonText: string;
  testimonialsHeading: string;
  whyChooseSuperiorFenceDescription: string;
  whyChooseSuperiorFenceHeading: string;

  interestRate: string;
  sliderContentListing: {
    getAQuoteLink: string;
    getAQuoteText: string;
    sliderContentDescription: string;
    sliderContentHeading: string;
    sliderContentRatings: number;
  }[];
  superiorFenceCompanyImage: {
    node: {
      altText: string;
      mediaItemUrl: string;
    };
  };
  testimonialsButtonLink: {
    edges: {
      node: {
        link: string;
      };
    }[];
  };
  fenceInstallationVideoListing: IfenceInstallationVideoListing[];
  listingOfReasons: {
    buttonLink: string;
    description: string;
    title: string;
  }[];
  mapIcon: {
    node: {
      altText: string;
      mediaItemUrl: string;
    };
  };
  mapLink: {
    edges: {
      node: {
        link: string;
      };
    };
  };
  financeYourProjectCalculateHeading: string;
  chooseTestimonials: TestimonialsEdge;
}

export interface HomepageQueryData {
  page: PageResponse;
  allTestimonials: TestimonialsEdge;

  allFenceTypesCategory: AllFenceTypes;
  allFenceInstallationVideo: AllFenceInstallationVideo;
}

// end home page query
export interface CommonSettingsQueryData {
  themeSettings: {
    themeOption: {
      awards: {
        edges: {
          node: {
            altText: string;
            mediaItemUrl: string;
          };
        }[];
      };
      footerBottomText: string;
      headerLogo: {
        node: {
          altText: string;
          mediaItemUrl: string;
        };
      };
      socialMediaListing: Array<{
        fieldGroupName: string;
        socialMediaLink: string;
        socialMediaName: string;
      }>;
      topContactUsLink: {
        edges: {
          node: {
            link: string;
          };
        };
      };
      footerLogo: {
        node: {
          altText: string;
          mediaItemUrl: string;
        };
      };
      footerMenuOne:{
        footerMenuOneLink:string;
        footerMenuOneName:string;
      }[];
      footerMenuTwo:{
        footerMenuTwoLink:string;
        footerMenuTwoName:string;
      }[];
    };
  };
}

// Birmingham location Response

export interface IPostEdge {
  edges: {
    node: {
      title: string;
      content: string;
      excerpt: string;
      featuredImage?: {
        node: {
          altText?: string;
          mediaItemUrl: string;
          author?: {
            node: {
              firstName: string;
              lastName: string;
              nicename: string;
            };
          };
          date: string;
        };
      };
      slug: string;
    };
  }[];
}

export interface ServiceAreaPurpose {
  mapAreaAddress: string;
  mapAreaEmail: string;
  mapAreaHeading: string;
  mapAreaPhone: string;
  locationLat: number;
  locationLong: number;
}

export interface FeaturedImageNode {
  altText: string;
  mediaItemUrl: string;
}

export interface FeaturedImage {
  node: FeaturedImageNode;
}

export interface ServiceAreaNode {
  title: string;
  serviceAreaPurpose: ServiceAreaPurpose;
  featuredImage: FeaturedImage;
  slug: string;
}

export interface ServiceAreaEdge {
  node: ServiceAreaNode;
}

export interface IChooseServiceAreas {
  edges: ServiceAreaEdge[];
}

export interface IShowInnerCardProps {
  headerBottomBlockOneDescription: string;
  headerBottomBlockOneHeading: string;
  headerBottomBlockThreeDescription: string;
  headerBottomBlockThreeHeading: string;
  headerBottomBlockTwoHeading: string;
  headerBottomBlockTwoDescription: string;
  headerBottomBlockOneLink?: string;
  headerBottomBlockTwoLink?: string;
  headerBottomBlockThreeLink?: string;
}

export interface ILocationState {
  edges: {
    node: {
      locationPurpose: {
        aboutSuperiorFenceDescription: string;
        aboutSuperiorFenceHeading: string;
        aboutSuperiorFenceImage?: {
          node: {
            altText?: string;
            mediaItemUrl: string;
          };
        };
        caLicenseNo: string;
        chooseTestimonials: TestimonialsEdge;
        ctHicNo: string;
        headerBottomBlockOneDescription: string;
        headerBottomBlockOneHeading: string;
        headerBottomBlockThreeDescription: string;
        headerBottomBlockThreeHeading: string;
        headerBottomBlockTwoDescription: string;
        headerBottomBlockTwoHeading: string;
        locationBannerSliderListing: {
          locationBannerSliderDescription: string;
          locationBannerSliderHeading: string;
          locationBannerSliderRatings: number;
        }[];
        locationLat: number;
        locationLong: number;
        mapBlockAddress: string;
        mapBlockEmail: string;
        mapBlockHeading: string;
        mapBlockImage?: commonMapInterfaceImageType;
        prepareForYourFenceHeading: string;
        prepareForYourFenceListing: {
          prepareForYourFenceListingTitle: string;
          prepareForYourFenceYoutubeVideoLink: string;
          prepareForYourFenceListingTitleImage: {
            node: {
              altText: string;
              mediaItemUrl: string;
            };
          };
        }[];
        recentPostsHeading: string;
        recentPostsTag: string;
        selectYourNewFenceHeading: string;
        whyChooseUsCertificateHeading: string;
        whyChooseUsCertificateRating: string;
        whyChooseUsHeading: string;
        whyChooseUsShortDescription: string;
        mapBlockPhone: string;
        locationBannerImage: {
          node: {
            altText: string;
            mediaItemUrl: string;
          };
        };
        whySuperiorFenceDescription?: string;
        whySuperiorFenceHeading?: string;
        whySuperiorFenceListing?: {
          whySuperiorFenceListingDescription?: string;
          whySuperiorFenceListingTitle?: string;
          learnMoreButtonTag?: string;
        }[];
      };
      location: IChooseServiceAreas;
      name: string;
      slug: string;
      seo: ISeoTypes;
    };
  }[];
}
export interface ILocationThemeSettings {
  themeOption: {
    financeYourProjectButtonText?: string;
    financeYourProjectDescription?: string;
    financeYourProjectHeading?: string;
    financeYourProjectInterestRate?: string;
    financeYourProjectMonthsFinanced?: string;
    financingOptionsHeading: string;
    financingOptionsListing: {
      financingOptionsListingTitle: string;
    }[];
    getAFenceQuoteDescription?: string;
    getAFenceQuoteHeading?: string;
    whatToExpectHeading?: string;
    whatToExpectListing?: {
      whatToExpectListingTitle: string;
    }[];
    whySuperiorFenceDescription?: string;
    whySuperiorFenceHeading?: string;
    whySuperiorFenceListing?: {
      whySuperiorFenceListingDescription?: string;
      whySuperiorFenceListingTitle?: string;
    }[];
  };
}

export interface IServiceLocationResponse {
  locationState: ILocationState;
  allFenceTypesCategory: AllFenceTypes;
  themeSettings: ILocationThemeSettings;
  posts: IPostEdge;
}

export interface IBlogDetailsResponse {
  post: {
    title: string;
    featuredImage?: {
      node: {
        altText?: string;
        mediaItemUrl: string;
      };
    };
    content: string;
    date: string;
    tags: {
      nodes: {
        name: string;
      }[];
    };
    categories: {
      nodes: {
        name: string;
        slug: string;
      }[];
    };
    author: {
      node: {
        firstName: string;
        lastName: string;
      };
    };
    previousPostId?: string | null;
    nextPostId?: string | null;
    seo: ISeoTypes;
  };
  themeSettings: {
    themeOption: {
      blogGetAFenceQuote: string;
      blogGetAFenceQuoteHeading: string;
      blogPageMapLat: string;
      blogPageMapLong: string;
    };
  };
}
// ************************************************

// newlocation types

export interface INewServiceLocationTypes {
  locationStates: INewLocationStateTypes;
  allFenceTypesCategory: INewAllFenceTypesCategory;
  posts: INewPostTypes;
}
export interface INewLocationStateTypes {
  name: string;
  newLocationPurpose: {
    exploreFranchiseDescription: string;
    exploreFranchiseHeading: string;
    fenceFinancingDescription: string;
    fenceFinancingHeading: string;
    fenceQuoteDescription: string;
    fenceQuoteHeading: string;
    getYourNewFenceHeading: string;
    getYourNewFenceImages: {
      edges: {
        node: {
          altText: string;
          mediaItemUrl: string;
        };
      }[];
    };
    getYourNewFenceListing: {
      [x: string]: any;
      getYourNewFenceListDescription: string;
      getYourNewFenceListHeading: string;
      getYourNewFenceSublist: {
        getYourNewFenceSublistHeading: string;
      }[];
    };
    headerBottomBlockOneDescription: string;
    headerBottomBlockOneHeading: string;
    headerBottomBlockThreeDescription: string;
    headerBottomBlockThreeHeading: string;
    headerBottomBlockTwoDescription: string;
    headerBottomBlockTwoHeading: string;
    howToChooseSectionHeading: string;
    howToChooseSectionVideoLink: string;
    howToChooseSectionVideoThumbnail: {
      node: {
        altText: string;
        mediaItemUrl: string;
      };
    };
    locationBannerBackgroundImage: {
      node: {
        altText: string;
        mediaItemUrl: string;
      };
    };
    locationBannerDescription: string;
    locationBannerHeading: string;
    mapBelowDescription: string;
    reviewsCount: number;
    reviewsStarCount: number;
    whyChooseSectionDescription: string;
    whyChooseSectionHeading: string;
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
        };
      }[];
    };
    mapBlockPhone: string;
    mapBlockHeading: string;
    mapBlockEmail: string;
    mapBlockAddress: string;
    locationLong: number;
    locationLat: number;
    ctHicNo: string;
    caLicenseNo: string;
    mapBlockImage: {
      node: {
        altText: string;
        mediaItemUrl: string;
      };
    };
  };
  seo: ISeoTypes;
  slug: string;
}
export interface INewAllFenceTypesCategory {
  edges: {
    node: {
      name: string;
      slug: string;
      description: string;
      fenceTypesCategoryPurpose: {
        fenceTypesDisplayName: string;
        fenceTypesThumbnail: {
          node: {
            altText: string;
            mediaItemUrl: string;
          };
        };
        fenceTypesIcon: {
          node: {
            altText: string;
            mediaItemUrl: string;
          };
        };
      };
    };
  }[];
}
export interface INewPostTypes {
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
}
// ***************************************************


// v3 service location types (Final)
export interface IV3ServiceLocationTypes {
  locationStates: IV3NewLocationStateTypes;
  allFenceTypesCategory: IV3NewAllFenceTypesCategory;
  posts: IV3NewPostTypes;
}

export interface IV3NewLocationStateTypes{
  newLocationPurpose: {
    caLicenseNo: string;
    certifiedReviews: {
      node: {
        altText: string;
        mediaItemUrl: string;
      };
    }[];
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
    } | null;
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
    } ;
    chooseTestimonials: IV3TestimonialTypes;
    fenceQuoteHeading:string;
    fenceQuoteDescription:string;
  };
  seo: ISeoTypes;
  slug: string;
};
export interface IV3NewAllFenceTypesCategory{
  edges: {
    node: {
      name: string;
      slug: string;
      description: string | null;
      fenceTypesCategoryPurpose: {
        fenceTypesThumbnail: {
          node: {
            altText: string | null;
            mediaItemUrl: string | null;
          };
        } | null;
        fenceTypesDisplayName: string;
        fenceTypesIcon: {
          node: {
            altText: string | null;
            mediaItemUrl: string | null;
          };
        } | null;
      };
    };
  }[];
};
export interface IV3NewPostTypes {
  edges: {
    node: {
      title: string;
      content: string;
      excerpt: string;
      featuredImage: {
        node: {
          altText: string | null;
          mediaItemUrl: string | null;
          author: {
            node: {
              firstName: string;
              lastName: string;
              nicename: string;
            };
          };
          date: string;
        };
      } | null;
      slug: string;
    };
  }[];
};

export interface IV3TestimonialTypes {
  edges: {
    node: {
      title: string;
      content: string;
      slug: string;
      testimonialsSettings: {
        ratings: number;
        testimonialsHighlightText: string;
        testimonialsLocation: string;
      };
      featuredImage: {
        node: {
          altText: string | null;
          mediaItemUrl: string | null;
        };
      } | null;
    };
  }[];
};