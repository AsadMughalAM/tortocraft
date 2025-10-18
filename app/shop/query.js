import { gql } from "@apollo/client";

export const Get_Collections_With_Products = gql`
query Get_Collections_With_Products {
  collectionCollection(limit: 100) {  # up to 100 collections
    items {
      title
      slug
      description
      bannerImage {
        url
      }
      linkedFrom {
        entryCollection(limit: 10) {   
          items { 
            ... on Product {
              title
              slug
              description
              productImage {
                url
              }
            }
          }
        }
      }
    }
  }
}
`;
