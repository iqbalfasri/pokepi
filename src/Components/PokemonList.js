import React from "react";

import { Link } from "react-router-dom";

function PokemonList({ pokemons }) {
  return (
    <div className="container">
      <div className="row">
        {pokemons.map((pokemon, index) => {
          return (
            <div key={index} className="col-md-3">
              <Link className="pokemon-card" to={`/detail/${pokemon.id}`}>
                <div className="pokemon-card__image-wrapper">
                  <img alt={pokemon.name} src={pokemon.image} />
                </div>
                <div className="pokemon-card__name">
                  <h3>{pokemon.name}</h3>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PokemonList;
