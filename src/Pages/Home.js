import React, { useEffect, useState } from "react";


function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function getPokemons() {
      try {
        const URL_API = "https://pokeapi.co/api/v2/pokemon/";
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
  }, []);

  console.log(pokemons);

  return (
    <div className="App">
      <h1>Homepage</h1>
    </div>
  );
}

export default Home;
