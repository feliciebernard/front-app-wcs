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
  query getContinents($getContinentCode: String!) {
    continent(code: $getContinentCode) {
      name
      countries {
        name
        code
        emoji
      }
    }
  }
`;
