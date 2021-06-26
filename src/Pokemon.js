import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PokemonList from "./PokemonList";

const Pokemon = () => {
  // Default values for index
  const [currentPokemon, setCurrentPokemon] = useState({
    artwork:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    front:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
    name: "",
    description: "Escoge el Pokémon a analizar en el menú de abajo.",
  });

  // Current Location
  const location = useLocation();

  // Change Location = Change Pokemon
  useEffect(() => {
    // Get Pokemon Selected Info Function
    const fetchPokemonInfo = async () => {
      // Get Pokemon
      if (location.pathname !== "/")
        // Información extraída de https://gomakethings.com/waiting-for-multiple-all-api-responses-to-complete-with-the-vanilla-js-promise.all-method/
        await Promise.all([
          fetch("https://pokeapi.co/api/v2" + location.pathname),
          fetch(
            "https://pokeapi.co/api/v2" +
              location.pathname.replace("/pokemon/", "/pokemon-species/")
          ),
        ])
          .then(function (responses) {
            // Get a JSON object from each of the responses
            return Promise.all(
              responses.map(function (response) {
                return response.json();
              })
            );
          })
          .then(function (data) {
            // Set Pokemon
            setCurrentPokemon({
              artwork: data[0].sprites.other.dream_world.front_default,
              front: data[0].sprites.front_default,
              back: data[0].sprites.back_default,
              name: data[0].name,
              description: data[1].flavor_text_entries.filter(
                (entry) => entry.language.name === "es"
              )[0].flavor_text,
            });
          })
          .catch(function (error) {
            // if there's an error, log it
            console.log(error);
          });
    };

    // Get Selected Pokemon
    fetchPokemonInfo();
  }, [location.pathname]);

  // Return Images
  return (
    <div className="pokedexLayout">
      <div className="pokemonName">{currentPokemon.name.toUpperCase()}</div>
      <div className="pokemonDescription">{currentPokemon.description}</div>
      <img className="artwork" alt="" src={currentPokemon.artwork} />
      <img className="front" alt="" src={currentPokemon.front} />
      <img className="back" alt="" src={currentPokemon.back} />
      <PokemonList />
    </div>
  );
};

export default Pokemon;
