import gql from "graphql-tag";

export const IVideoDetailsQuery = gql`
  query fence_video_details($id: String) {
    allFenceInstallationVideo(where: { name: $id }) {
      edges {
        node {
          title
          content
          fenceVideoTutorialPagePurpose {
            fenceVideoTutorialVideoLink
            videoThumbImage {
              node {
                altText
                mediaItemUrl
              }
            }
            postedBy
          }
          date
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
