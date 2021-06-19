import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


const PokemonList = () => {

    const [pokemonArray, setPokemons] = useState({ results: [] });
    useEffect(() => {
        const fetchPokemonList = async () => {
            const result = await axios('https://pokeapi.co/api/v2/pokemon?limit=151');
            setPokemons(result.data);
        };

        fetchPokemonList();

    }, []);

    return (

        <ul>
            {pokemonArray.results.map(item => (<li key={item.name}>  <NavLink activeStyle={{ backgroundColor: 'green' }} to={"/pokemon/" + item.name}>{item.name.toUpperCase()}</NavLink>              </li>))}
        </ul>

    );

}

export default PokemonList;