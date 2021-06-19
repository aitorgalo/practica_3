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
  });

  // Current Location
  const location = useLocation();

  // Change Location = Change Pokemon
  useEffect(() => {
    // Get Pokemon Selected Info Function
    const fetchPokemonInfo = async () => {
      // Get Pokemon
      if (location.pathname !== "/")
        await fetch("https://pokeapi.co/api/v2" + location.pathname)
          .then((response) => response.json())
          .then((json) =>
            // Set Pokemon
            setCurrentPokemon({
              artwork: json.sprites.other.dream_world.front_default,
              front: json.sprites.front_default,
              back: json.sprites.back_default,
              name: json.name,
            })
          )
          .catch((err) => console.log("Error:" + err));
    };

    // Get Pokemon Selected Description Function
    const fetchPokemonDescriptionInfo = async () => {
      // Get Pokemon
      if (location.pathname !== "/")
        await fetch(
          "https://pokeapi.co/api/v2" +
            location.pathname.replace("/pokemon", "/pokemon-species")
        )
          .then((response) => response.json())
          .then((json) =>
            //   setCurrentPokemon( ...currentPokemon)
            //console.log(json)
console.log(json)
       //     setCurrentPokemon(currentPokemon)
          )
          .catch((err) => console.log("Error:" + err));
    };

    // Get Selected Pokemon
    fetchPokemonInfo();
    // Get Selected Pokemon Data
    fetchPokemonDescriptionInfo();
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
