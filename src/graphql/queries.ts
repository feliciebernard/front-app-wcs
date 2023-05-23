import { gql } from "@apollo/client";

export const GET_CONTINENTS = gql`
  query getContinents {
    continents {
      code
      name
    }
  }
`;

export const GET_CONTINENT = gql`
  query getContinents($getContinentCode: ID!) {
    continent(code: $getContinentCode) {
      name
      code
      countries {
        name
        code
        emoji
      }
    }
  }
`;
