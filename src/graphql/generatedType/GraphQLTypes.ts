// export type Scalars = {
//   ID: { input: string; output: string };
//   String: { input: string; output: string };
//   Boolean: { input: boolean; output: boolean };
//   Int: { input: number; output: number };
//   Float: { input: number; output: number };
// };

// export type HomepageQueryData = {
//   __typename?: "HomepageQueryData";
//   page: {
//     __typename?: "Page";
//     homePagePurposeNew: {
//       __typename?: "HomePagePurposeNew";
//       headerBannerImage: {
//         __typename?: "HeaderBannerImage";
//         node: {
//           __typename?: "MediaItem";
//           altText: Scalars["String"]["output"];
//           mediaItemUrl: Scalars["String"]["output"];
//         };
//       };
//       fenceInstallationHeading: Scalars["String"]["output"];
//       fenceTypesHeading: Scalars["String"]["output"];
//       financeYourProjectButtonLink: Scalars["String"]["output"];
//       financeYourProjectButtonText: Scalars["String"]["output"];
//       financeYourProjectDescription: Scalars["String"]["output"];
//       financeYourProjectHeading: Scalars["String"]["output"];
//       monthsFinanced: Scalars["String"]["output"];
//       ownASuperiorFenceButtonLink: Scalars["String"]["output"];
//       ownASuperiorFenceButtonTitle: Scalars["String"]["output"];
//       ownASuperiorFenceDescription: Scalars["String"]["output"];
//       ownASuperiorFenceHeading: Scalars["String"]["output"];
//       superiorFenceCompanyDescription: Scalars["String"]["output"];
//       superiorFenceCompanyHeading: Scalars["String"]["output"];
//       testimonialsButtonText: Scalars["String"]["output"];
//       testimonialsHeading: Scalars["String"]["output"];
//       whyChooseSuperiorFenceDescription: Scalars["String"]["output"];
//       whyChooseSuperiorFenceHeading: Scalars["String"]["output"];
//       bottomBlocks: {
//         __typename?: "BottomBlock";
//         title: Scalars["String"]["output"];
//         link: {
//           __typename?: "Link";
//           edges: Array<{
//             __typename?: "LinkEdge";
//             node: {
//               __typename?: "Node";
//               link: Scalars["String"]["output"];
//             };
//           }>;
//         };
//       }[];
//       interestRate: Scalars["String"]["output"];
//       sliderContentListing: {
//         __typename?: "SliderContentListing";
//         getAQuoteLink: Scalars["String"]["output"];
//         getAQuoteText: Scalars["String"]["output"];
//         sliderContentDescription: Scalars["String"]["output"];
//         sliderContentHeading: Scalars["String"]["output"];
//         sliderContentRatings: Scalars["String"]["output"];
//       }[];
//       superiorFenceCompanyImage: {
//         __typename?: "MediaItem";
//         node: {
//           __typename?: "MediaItem";
//           altText: Scalars["String"]["output"];
//           mediaItemUrl: Scalars["String"]["output"];
//         };
//       };
//       testimonialsButtonLink: {
//         __typename?: "Link";
//         edges: Array<{
//           __typename?: "LinkEdge";
//           node: {
//             __typename?: "Node";
//             link: Scalars["String"]["output"];
//           };
//         }>;
//       };
//       fenceInstallationVideoListing: {
//         __typename?: "FenceInstallationVideo";
//         fenceInstallationTitle: Scalars["String"]["output"];
//         fenceInstallationYoutubeVideoLink: Scalars["String"]["output"];
//       }[];
//       listingOfReasons: {
//         __typename?: "ListingOfReason";
//         buttonLink: Scalars["String"]["output"];
//         description: Scalars["String"]["output"];
//         title: Scalars["String"]["output"];
//       }[];
//       mapIcon: {
//         __typename?: "MediaItem";
//         node: {
//           __typename?: "MediaItem";
//           altText: Scalars["String"]["output"];
//           mediaItemUrl: Scalars["String"]["output"];
//         };
//       };
//       mapLink: {
//         __typename?: "Link";
//         edges: Array<{
//           __typename?: "LinkEdge";
//           node: {
//             __typename?: "Node";
//             link: Scalars["String"]["output"];
//           };
//         }>;
//       };
//     };
//   };
// };

// export type AllTestimonialsQueryData = {
//   __typename?: "AllTestimonialsQueryData";
//   allTestimonials: {
//     __typename?: "AllTestimonials";
//     edges: Array<{
//       __typename?: "TestimonialEdge";
//       node: {
//         __typename?: "Testimonial";
//         title: Scalars["String"]["output"];
//         testimonialsSettings: {
//           __typename?: "TestimonialsSettings";
//           ratings: Scalars["String"]["output"];
//           testimonialsHighlightText: Scalars["String"]["output"];
//         };
//         content: Scalars["String"]["output"];
//       };
//     }>;
//   };
// };

// export type AllFenceTypesQueryData = {
//   __typename?: "AllFenceTypesQueryData";
//   allFenceTypes: {
//     __typename?: "AllFenceTypes";
//     edges: Array<{
//       __typename?: "FenceTypeEdge";
//       node: {
//         __typename?: "FenceType";
//         title: Scalars["String"]["output"];
//         featuredImage: {
//           __typename?: "FeaturedImage";
//           node: {
//             __typename?: "MediaItem";
//             altText: Scalars["String"]["output"];
//             mediaItemUrl: Scalars["String"]["output"];
//           };
//         };
//       };
//     }>;
//   };
// };
