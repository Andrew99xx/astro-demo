import gql from "graphql-tag";

export const MapAllLocation = gql`
  query map_all_location {
    locationState(first: 2000) {
      edges {
        node {
          name
          slug
          locationPurpose {
            mapBlockAddress
            mapBlockEmail
            mapBlockPhone
            locationLat
            locationLong
          }
          parent {
            node {
              name
              slug
            }
          }
        }
      }
    }
  }
`;
