import gql from "graphql-tag";

export const ICategoryGraphQl = gql`
  query BlogCategory($id: String!, $subId: [String]) {
    posts(first: 200, where: { categoryName: $id, status: PUBLISH }) {
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
          date
          author {
            node {
              firstName
              lastName
              username
            }
          }
          comments {
            edges {
              node {
                isComment
              }
            }
          }
          categories(first: 500) {
            edges {
              node {
                name
                slug
              }
            }
          }
        }
      }
    }
    categories(where: { slug: $subId }) {
      edges {
        node {
          seo {
            canonical
            metaDesc
            metaKeywords
            opengraphDescription
            metaRobotsNofollow
            metaRobotsNoindex
            title
            schema {
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
  }
`;

export const ITagsGraphQl = gql`
  query blog_tags($id: String!, $subId: [string]) {
    posts(first: 10, where: { status: PUBLISH, tag: $id }) {
      edges {
        node {
          title
          slug
          date
          author {
            node {
              firstName
              lastName
              username
            }
          }
          featuredImage {
            node {
              altText
              mediaItemUrl
            }
          }
          comments {
            edges {
              node {
                isComment
              }
            }
          }
          categories(first: 400) {
            edges {
              node {
                name
                slug
              }
            }
          }
        }
      }
    }
    tags(where: { slug: $subId }) {
      edges {
        node {
          seo {
            canonical
            metaDesc
            metaKeywords
            opengraphDescription
            metaRobotsNofollow
            metaRobotsNoindex
            title
            schema {
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
  }
`;
