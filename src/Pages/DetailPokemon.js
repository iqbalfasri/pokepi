import React, { useEffect, useState } from "react";
import { fetchData } from "../lib";

function DetailPokemon(props) {
  const [detailPokemon, setDetailPokemon] = useState(null);

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
      console.log(pokemon);
    }

    getDetailPokemon();
  }, []);

  return (
    <div>
      <h1>Detail Pokemon</h1>
    </div>
  );
}

export default DetailPokemon;
