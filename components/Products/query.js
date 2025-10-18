import { gql } from "@apollo/client";

export const Get_Products=gql`
query Get_Products{
    productCollection(limit:6){
        items{
            title
            description
            slug
            productImage{
                url
            }
        }
    }
}

`