import React from "react";

function PokemonList({ pokemons, disableLink }) {
  return (
    <div className="container">
      <div className="row">
        {pokemons.map((pokemon, index) => {
          return (
            <div key={index} className="col-md-3">
              <a className="pokemon-card" href={`/detail/${pokemon.id}`}>
                <div className="pokemon-card__image-wrapper">
                  <img alt={pokemon.name} src={pokemon.image} />
                </div>
                <div className="pokemon-card__name">
                  <h3>{pokemon.name}</h3>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PokemonList;
