import React, { useEffect, useState } from "react";

import PokemonList from "../Components/PokemonList";
import { fetchData } from "../lib";

function Home() {
  const fetchTimes = 1;
  const [pokemons, setPokemons] = useState([]);
  const [pagination, setPagination] = useState(8);

  useEffect(() => {
    async function getPokemons() {
      // grapql query
      const query = `query {
        pokemons(first: ${fetchTimes * pagination}) {
          id,
          image,
          name
        }
      }`;
      const { pokemons } = await fetchData(query);

      setPokemons(pokemons);
    }

    getPokemons();
  }, [pagination]);

  /**
   * Simple pagination, trigger with button
   */
  const handlePaginate = () => {
    setPagination(pagination + 8);
  };

  return (
    <div>
      <h1 className="main-title">Pokepi Pokémon</h1>
      <PokemonList pokemons={pokemons} />
      <button className="load-more" onClick={() => handlePaginate()}>
        More
      </button>
    </div>
  );
}

export default Home;
