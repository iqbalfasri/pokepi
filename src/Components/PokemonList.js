import React from "react";

function PokemonList({ pokemons }) {
  return (
    <div className="container">
      <ul>
        {pokemons.map(pokemon => (
          <li>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;
