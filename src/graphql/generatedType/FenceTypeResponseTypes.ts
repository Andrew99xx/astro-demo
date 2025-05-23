import type { ISeoTypes } from "./ResponseType";

export interface ICommonHeaderBanner {
  commonHeaderBannerBackground: {
    node: {
      altText: string;
      mediaItemUrl: string;
    };
  };
  commonHeaderBannerDescription: string;
  commonHeaderBannerListing: Array<{
    listName: string;
  }>;
  commonHeaderBannerListingTitle: string;
  commonHeaderBannerTitle: string;
  commonHeaderBannerVideo?: {
    node: {
      altText: string;
      mediaItemUrl: string;
    };
  };
}

export interface IFenceInnerBannerType {
  commonHeaderBanner: ICommonHeaderBanner;
  content: string;
  seo: ISeoTypes;
}

export interface IAllFenceTypes {
  edges: Array<{
    node: {
      name: string;
      fenceTypesCategoryPurpose: {
        fenceTypesThumbnail: {
          node: {
            altText: string;
            mediaItemUrl: string;
            slug: string;
          };
        };
        fenceTypesListing: string;
      };
      slug: string;
    };
  }>;
}

export interface IFenceTypesQuery {
  page: IFenceInnerBannerType;
  allFenceTypesCategory: IAllFenceTypes;
}

export interface FenceCategoryDetails {
  allFenceTypesCategory: {
    edges: {
      node: {
        fenceTypesCategoryPurpose: {
          chooseFromFenceInstallationVideo: {
            edges: {
              node: {
                title: string; // Title of the fence installation video
                slug: string; // Slug of the video
                fenceVideoTutorialPagePurpose: {
                  fenceVideoTutorialVideoLink: string; // Video link for the tutorial
                  videoThumbImage: {
                    node: {
                      altText: string;
                      mediaItemUrl: string;
                    };
                  };
                };
                date: string; // Date of the video
                excerpt: string; // Content of the video
              };
            }[];
          };
          fenceEstimateBlockShortDescription: string; // Short description for the estimate block
          fenceEstimateBlockTitle: string; // Title for the estimate block
          fenceEstimateDescription: string; // Description for the estimate
          fenceEstimateHeading: string; // Heading for the estimate
          fenceNewsHeading: string; // Heading for the news
          chooseFromFenceNews: {
            edges: {
              node: {
                title: string; // Title of the news post
                slug: string; // Slug of the news post
                date: string; // Date of the news post
                excerpt: string; // Excerpt of the news post
                featuredImage: {
                  node: {
                    altText: string; // Alt text for the featured image
                    mediaItemUrl: string; // URL of the featured image
                  };
                };
              };
            }[];
          };
          fenceNewsSubHeading: string; // Subheading for the news
          fenceTypesGallery: {
            edges: {
              node: {
                altText: string; // Alt text for the gallery image
                mediaItemUrl: string; // URL for the gallery image
              };
            }[];
          };
          fenceTypesIcon: {
            node: {
              altText: string; // Alt text for the fence type icon
              mediaItemUrl: string; // URL for the fence type icon
            };
          };
          fenceTypesListing: string; // Listing of fence types
          fenceTypesThumbnail: {
            node: {
              altText: string; // Alt text for the thumbnail
              mediaItemUrl: string; // URL of the thumbnail
            };
          };
          fenceTypesWarrantyPdfLink: {
            node: {
              mediaItemUrl: string; // URL for the warranty PDF
            };
          };
          fenceTypesWarrantyPdfName: string; // Name of the warranty PDF
          fenceTypesWarrantyRightSideDescription: string; // Warranty description on the right side
          fenceTypesWarrantyRightSideHeading: string; // Warranty heading on the right side
          fenceVideoHeading: string; // Heading for the video section
          fenceVideoSubHeading: string; // Subheading for the video section
          longDescription: string; // Long description for the fence type
          noaDescription: string; // Description for the NOA
          noaDescriptionYoutubeLink: string; // YouTube link for NOA description
          noaHeading: string; // Heading for NOA
          noaIcon: {
            node: {
              altText: string; // Alt text for NOA icon
              mediaItemUrl: string; // URL for NOA icon
            };
          };
          popularFenceStylesHeading: string; // Heading for popular fence styles
          popularFenceStylesImages: {
            edges: {
              node: {
                altText: string; // Alt text for the style image
                mediaItemUrl: string; // URL for the style image
              };
            }[];
          };
          fetchTypeAdditionalContentList: {
            fetchTypeAdditionalContentListIcon: {
              node: {
                altText: string;
                mediaItemUrl: string;
              };
            };
            fetchTypeAdditionalContentListDescription: string;
          }[];
          fenceTypesWarrantyDescription: string;
          fenceTypesPageHeading: string;
          fenceTypesPageHeadingDescription: string;
          superiorFenceInnovationsText: string;
          fenceNewsChooseCategory: {
            edges: {
              node: {
                name: string;
                slug: string;
                uri: string;
              };
            }[];
          };
        };
        commonHeaderBanner: ICommonHeaderBanner;
        name: string;
        seo: ISeoTypes;
      };
    }[];
  };
  // posts: {
  //   edges: {
  //     node: {
  //       title: string;
  //       slug: string;
  //       featuredImage: { node: { altText: string; mediaItemUrl: string } };
  //       excerpt: string;
  //       author: {
  //         node: { firstName: string; lastName: string; username: string };
  //       };
  //       date: string;
  //     };
  //   }[];
  // };
}

export interface ICategoryType {
  posts: {
    edges: {
      node: IPostType;
    }[];
  };
}

export interface IPostType {
  title: string;
  slug: string;
  featuredImage?: {
    node: {
      altText?: string;
      mediaItemUrl: string;
    };
  };
  excerpt: string;
  author: {
    node: {
      firstName?: string;
      lastName?: string;
      username: string;
    };
  };
  date: string;
}

export interface IFenceTypesSidebar {
  allFenceTypesCategory: {
    edges: {
      node: {
        name: string; // Name of the fence type category
        fenceTypes: {
          edges: {
            node: {
              title: string; // Title of the fence type
              slug: string; // Slug of the fence type
            };
          }[];
        };
        slug: string; // Slug of the fence type category
      };
    }[];
  };
}
