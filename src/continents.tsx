import React from "react";
import { GET_CONTINENTS } from "./graphql/queries";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

export type ContinentProps = {
  name: string;
  code: string;
};

function Continents(): JSX.Element {
  const { loading, data } = useQuery<{ continents: ContinentProps[] }>(
    GET_CONTINENTS
  );

  return (
    <section>
      <h1>Parcourir les continents</h1>
      {loading === true && "Chargement..."}
      {data?.continents.map((continent) => {
        return (
          <Link to={`/continent/${continent.code}`}>
            <p>{continent.name}</p>
          </Link>
        );
      })}
    </section>
  );
}

export default Continents;
