import React, { Fragment, useEffect, useState } from "react";
import { fetchData } from "../lib";

import LoadingModal from "../Components/LoadingModal";
import PokemonList from "../Components/PokemonList";

function DetailPokemon(props) {
  const [detailPokemon, setDetailPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDetailPokemon() {
      const id_pokemon = props.match.params.id;

      const query = `query {
        pokemon(id: "${id_pokemon}") {
          name
          image
          fleeRate
          maxCP
          maxHP
          weaknesses

          height {
            minimum
            maximum
          }

          weight {
            minimum
            maximum
          }

          evolutions {
            id
            name
            image
          }
        }
      }`;

      const { pokemon } = await fetchData(query);
      setDetailPokemon(pokemon);
      setLoading(false);
    }

    getDetailPokemon();
  }, [loading]);

  if (loading) {
    return <LoadingModal />;
  }

  console.log(detailPokemon);

  return (
    <Fragment>
      <div className="container">
        <div className="pokemon-detail__wrapper">
          <div className="row">
            <div className="col-md-6 d-flex flex-column align-items-center">
              <img alt={detailPokemon.name} src={detailPokemon.image} />
              <div className="pokemon-detail__name">
                <h1>{detailPokemon.name}</h1>
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-md-6">
                  <div className="pokemon-detail__info">
                    <h3>Height</h3>
                    <p>Minimum : {detailPokemon.height.minimum}</p>
                    <p>Maximum : {detailPokemon.height.maximum}</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="pokemon-detail__info">
                    <h3>Weight</h3>
                    <p>Minimum : {detailPokemon.weight.minimum}</p>
                    <p>Maximum : {detailPokemon.weight.maximum}</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="pokemon-detail__info">
                    <h3>FleeRate</h3>
                    <p>{detailPokemon.fleeRate}</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="pokemon-detail__info">
                    <h3>MaxCP</h3>
                    <p>{detailPokemon.maxCP}</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="pokemon-detail__info">
                    <h3>MaxHP</h3>
                    <p>{detailPokemon.maxHP}</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="pokemon-detail__info">
                    <h3>Weakness</h3>
                    <div className="d-flex flex-row">
                      {detailPokemon.weaknesses.map((weakness, index) => (
                        <p key={index}>{(index ? ", " : "") + weakness}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="pokemon-detail__wrapper">
          <h1>Evolutions</h1>
          <div className="pokemon-detail__wrapper-evolutions">
            {detailPokemon.evolutions !== null ? (
              <PokemonList
                disableLink={true}
                pokemons={detailPokemon.evolutions}
              />
            ) : (
              <p>{"Evolutions not found."}</p>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default DetailPokemon;
