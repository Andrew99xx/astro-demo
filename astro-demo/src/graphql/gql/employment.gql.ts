import gql from "graphql-tag";

export const employmentQuery = gql`
  query employment {
    page(id: "3295", idType: DATABASE_ID) {
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
      content
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

export const ILocationBasedEmploymentQuery = gql`
  query employment_location($id: String) {
    pages(where: { name: $id }) {
      edges {
        node {
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
            commonHeaderBannerVideo {
              node {
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
    posts(
      where: { status: PUBLISH, orderby: { field: DATE, order: DESC } }
      first: 3
    ) {
      edges {
        node {
          title
          content
          excerpt
          date
          author {
            node {
              firstName
              lastName
              nickname
            }
          }
          categories {
            edges {
              node {
                name
                slug
              }
            }
          }
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
`;
