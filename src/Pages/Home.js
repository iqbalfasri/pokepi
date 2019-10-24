import React, { useEffect, useState } from "react";

import PokemonList from "../Components/PokemonList";

function Home() {
  const INITIAL_OFFSET_LIMIT = 20;
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(INITIAL_OFFSET_LIMIT);
  const [offset, setOffet] = useState(INITIAL_OFFSET_LIMIT);

  useEffect(() => {
    async function getPokemons() {
      try {
        const URL_API = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
        const response = await fetch(URL_API);
        const responseToJson = await response.json();
        const { results } = responseToJson;

        // set state pokemons
        setPokemons(results);
      } catch (error) {
        console.error(error);
      }
    }

    getPokemons();
  }, [pokemons]);

  const handlePaginate = () => {
    alert("Yuhu")
    setLimit(limit + 20);
    setOffet(offset + 20);
  };

  return (
    <div>
      <h1>Pokepi Pokémon</h1>
      <PokemonList pokemons={pokemons} />
      <button onClick={() => handlePaginate()}>More</button>
    </div>
  );
}

export default Home;
