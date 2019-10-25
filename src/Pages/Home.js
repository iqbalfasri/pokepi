import React, { useEffect, useState } from "react";

import PokemonList from "../Components/PokemonList";
import LoadingModal from "../Components/LoadingModal";

import { fetchData } from "../lib";

function Home() {
  const fetchTimes = 1;
  const [pokemons, setPokemons] = useState([]);
  const [pagination, setPagination] = useState(8);
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
    }

    getPokemons();
  }, [pagination]);

  /**
   * Simple pagination, trigger with button
   */
  const handlePaginate = () => {
    setPagination(pagination + 8);
    setLoading(true);
  };

  if (loading) {
    return <LoadingModal />;
  }

  return (
    <div>
      <h1 className="main-title">Pokepi Pokémon</h1>
      <PokemonList pokemons={pokemons} />
      <button
        id="load-more"
        className="load-more"
        onClick={() => handlePaginate()}
      >
        More
      </button>
    </div>
  );
}

export default Home;
