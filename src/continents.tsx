import React from "react";
import { GET_CONTINENTS } from "./graphql/queries";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

interface ContinentsProps {
  name: string;
  code: string;
}

function Continents(): JSX.Element {
  const { loading, data } = useQuery<{ getContinents: ContinentsProps[] }>(
    GET_CONTINENTS
  );

  return (
    <section>
      <h1>Parcourir les continents</h1>
      {loading === true && "Chargement..."}
      {data?.getContinents.map((continent) => {
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
