import React, { useEffect, useState } from "react";

import PokemonList from "../Components/PokemonList";
import { fetchData } from "../lib";

function Home() {
  const INITIAL_LIMIT = 20;
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(INITIAL_LIMIT);
  const [offset, setOffet] = useState(0);
  const [fetchTimes, setFetchTimes] = useState(1);
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
  }, [pokemons]);

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
      <button onClick={() => handlePaginate()}>More</button>
    </div>
  );
}

export default Home;
