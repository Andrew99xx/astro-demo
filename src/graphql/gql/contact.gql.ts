import gql from "graphql-tag";

export const serviceQuery = gql`
  query contact_us_birmingham($id: String) {
    pages(where: { name: $id }) {
      edges {
        node {
          contactUsPagePurpose {
            addressLat
            addressLong
            contactUsDescription
            contactUsHeading
            mapAreaAddress
            mapAreaEmail
            mapAreaHeading
            mapAreaImage {
              node {
                altText
                mediaItemUrl
              }
            }
            mapAreaPhoneNumber
            supportServiceHeading
            supportServiceImage {
              node {
                altText
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
  }
`;
