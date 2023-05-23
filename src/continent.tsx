import React from "react";
import { GET_CONTINENT } from "./graphql/queries";
import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";

interface ContinentProps {
  name: string;
  code: string;
  countries: [{ name: string; code: string; emoji: string }];
}

function Continent(): JSX.Element {
  const { continentCode } = useParams();
  const { loading, data } = useQuery<{
    continent: ContinentProps;
  }>(GET_CONTINENT, {
    variables: {
      getContinentCode: continentCode,
    },
  });

  return (
    <section>
      <h1>Parcourir les pays du continent {data?.continent.name} </h1>
      {loading === true && "Chargement..."}
      {data?.continent.countries.map((country) => {
        return (
          <Link to={`/country/${country.code}`}>
            <p>{country.emoji}</p>
            <p>{country.name}</p>
          </Link>
        );
      })}
    </section>
  );
}

export default Continent;
