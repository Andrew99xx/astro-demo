import gql from "graphql-tag";

export const CommonSideBarQuery = gql`
  query fence_types_sidebar {
    allFenceTypesCategory(first: 1000) {
      edges {
        node {
          name
          fenceTypes {
            edges {
              node {
                title
                slug
              }
            }
          }
          slug
        }
      }
    }
  }
`;
