  import { gql } from "@apollo/client";

  export const HERO_SECTION_QUERY = gql`
    query HeroSectionQuery {
      heroSectionCollection(limit: 1) {
        items {
          title
          subtitle
          bgImage {
            url
          }
          cta
          ctaUrl
          cta2
          cta2Url
        }
      }
    }
  `;
