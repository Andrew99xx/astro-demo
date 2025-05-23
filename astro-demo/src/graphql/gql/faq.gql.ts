import gql from "graphql-tag";

export const faqQuery = gql`
  query faq {
    page(id: "3283", idType: DATABASE_ID) {
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
      faqsPagePurpose {
        faqsListing {
          question
          answer
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
    posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
      edges {
        node {
          title
          slug
          id
          excerpt
          content
          date
          featuredImage {
            node {
              altText
              mediaItemUrl
            }
          }
          author {
            node {
              firstName
              lastName
              nicename
            }
          }
        }
      }
    }
  }
`;
