import React, { useEffect, useState } from "react";

import PokemonList from "../Components/PokemonList";
import { fetchData } from "../lib";

function Home() {
  const INITIAL_LIMIT = 20;
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(INITIAL_LIMIT);
  const [offset, setOffet] = useState(0);

  useEffect(() => {
    async function getPokemons() {
      const initPagination = 8;
      let fetchTimes = 1;

      // grapql query
      const query = `query {
        pokemons(first: ${fetchTimes * initPagination}) {
          id,
          image,
          name
        }
      }`;
      const { pokemons } = await fetchData(query);

      setPokemons(pokemons);
      fetchTimes += 1;
    }

    getPokemons();
  }, [limit, offset]);

  return (
    <div>
      <h1 className="main-title">Pokepi Pokémon</h1>
      <PokemonList pokemons={pokemons} />
      {/* <button onClick={() => handlePaginate()}>More</button> */}
    </div>
  );
}

export default Home;
