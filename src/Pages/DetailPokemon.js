import React, { Fragment, useEffect, useState } from "react";
import { fetchData } from "../lib";

import LoadingModal from "../Components/LoadingModal";

function DetailPokemon(props) {
  const [detailPokemon, setDetailPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDetailPokemon() {
      const id_pokemon = props.match.params.id;

      const query = `query {
        pokemon(id: "${id_pokemon}") {
          name
          image
          fleeRate
          maxCP

          height {
            minimum
            maximum
          }

          weight {
            minimum
            maximum
          }

          evolutions {
            id
            name
            image
          }
        }
      }`;

      const { pokemon } = await fetchData(query);
      setDetailPokemon(pokemon);
      setLoading(false)
    }

    getDetailPokemon();
  });

  if (loading) {
    return <LoadingModal />;
  }

  return (
    <Fragment>
      <div className="container">
        <h1>{detailPokemon.name}</h1>
      </div>
    </Fragment>
  );
}

export default DetailPokemon;
