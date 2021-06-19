import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const PokemonList = () => {
  const [pokemonArray, setPokemons] = useState({ results: [] });
  useEffect(() => {
    const fetchPokemonList = async () => {
      await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then((response) => response.json())
        .then((json) => setPokemons(json));
    };
    fetchPokemonList();
  }, []);

  return (
    <ul>
      {pokemonArray.results.map((item) => (
        <li key={item.name}>
          {" "}
          <NavLink
            activeStyle={{ backgroundColor: "green" }}
            to={"/pokemon/" + item.name}
          >
            {item.name.toUpperCase()}
          </NavLink>{" "}
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;
