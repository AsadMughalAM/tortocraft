import { gql } from "@apollo/client";

export const get_Collections = gql`
  query GetCollections {
    collectionCollection(limit:6) {
      items {
        title
        slug
        description
        bannerImage {
          url
        }
      }
    }
  }
`;
