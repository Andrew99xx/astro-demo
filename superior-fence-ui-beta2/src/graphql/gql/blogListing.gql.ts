import gql from "graphql-tag";

export const IBlogListingQuery = gql`
  query blog_listing {
    posts {
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
          categories {
            edges {
              node {
                name
                slug
              }
            }
          }
          tags {
            nodes {
              name
            }
          }
          author {
            node {
              firstName
              lastName
            }
          }
          date
          content
          excerpt
        }
      }
    }
  }
`;

export const INewsFenceQuery = gql`
  query fence_news_location($id: ID!) {
    posts(
      where: {
        status: PUBLISH
        taxQuery: {
          relation: OR
          taxArray: [
            {
              taxonomy: CATEGORY
              terms: [
                "fence-types"
                "fence-installation"
                "polk-county"
                "fence-video-tutorials"
              ]
              field: SLUG
            }
          ]
        }
      }
      first: 10
    ) {
      edges {
        node {
          title
          slug
          author {
            node {
              firstName
              lastName
              username
            }
          }
          date
          categories(first: 1000) {
            edges {
              node {
                name
                slug
              }
            }
          }
          content
          excerpt
        }
      }
    }
    page(id: $id, idType: URI) {
      title
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
