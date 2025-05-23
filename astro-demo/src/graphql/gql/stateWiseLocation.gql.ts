import gql from "graphql-tag";

export const StateWiseLocationQuery = gql`
  query all_location {
    allLocation(first: 5000, where: { status: PUBLISH }) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;
