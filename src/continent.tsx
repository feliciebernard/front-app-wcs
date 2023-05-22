import React from "react";
import { GET_CONTINENT } from "./graphql/queries";
import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";

export type ContinentProps = {
  name: string;
  code: string;
  countries: {
    name: string;
    code: string;
    emoji: string;
  };
};

function Continent(): JSX.Element {
  const { continentCode } = useParams();
  const { loading, data } = useQuery<{
    continent: ContinentProps[];
  }>(GET_CONTINENT, {
    variables: {
      getContinentCode: continentCode,
    },
  });

  return (
    <section>
      <h1>Parcourir les pays du continent {continentCode} </h1>
      {loading === true && "Chargement..."}
      {data?.continent?.map((continent) => {
        return (
          <Link to={`/country/${continent.countries.code}`}>
            <p>{continent.countries.emoji}</p>
            <p>{continent.countries.name}</p>
          </Link>
        );
      })}
    </section>
  );
}

export default Continent;
