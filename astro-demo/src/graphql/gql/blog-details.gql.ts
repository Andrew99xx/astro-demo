import gql from "graphql-tag";

export const BlogDetails = gql`
  query blog_details($id: ID!) {
    post(id: $id, idType: SLUG) {
      title
      featuredImage {
        node {
          altText
          mediaItemUrl
        }
      }
      content
      date
      tags {
        nodes {
          name
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
      author {
        node {
          firstName
          lastName
        }
      }
      previousPostId
      nextPostId
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
    themeSettings {
      themeOption {
        blogGetAFenceQuote
        blogGetAFenceQuoteHeading
        blogPageMapLat
        blogPageMapLong
      }
    }
  }
`;
