import React from "react";

import { Link } from "react-router-dom";

function PokemonList({ pokemons }) {
  return (
    <div className="container">
      <ul>
        {pokemons.map(pokemon => (
          <li>
            <Link to="/detail-pokemon">{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;
