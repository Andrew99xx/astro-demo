import gql from "graphql-tag";

export const PrivacyPolicyQuery = gql`
  query common_pages($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      title
      content
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
`;

export const WhyUsQuery = gql`
  query why_us {
    page(id: "2742", idType: DATABASE_ID) {
      whyUs {
        whyUsBlocks {
          whyUsBlocksHeading
          whyUsBlocksDescription
          whyUsBlocksListing {
            whyUsBlocksListingHeading
            whyUsBlocksListingDescription
            whyUsBlocksListingIcon {
              node {
                altText
                mediaItemUrl
              }
            }
          }
        }
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
    posts(first: 3) {
      edges {
        node {
          featuredImage {
            node {
              altText
              mediaItemUrl
            }
          }
          title
          slug
          date
          excerpt
        }
      }
    }
  }
`;
