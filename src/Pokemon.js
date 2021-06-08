import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Pokemon = () => {

    const [currentPokemon, setCurrentPokemon] = useState({
        artwork: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
        front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png"
    });
    const location = useLocation();

    useEffect(() => {

        const fetchPokemonInfo = async () => {
            const result = await axios("https://pokeapi.co/api/v2" + location.pathname);

            setCurrentPokemon({
                artwork: result.data.sprites.other.dream_world.front_default,
                front: result.data.sprites.front_default,
                back: result.data.sprites.back_default

            });
        };

        fetchPokemonInfo();

    }, [location.pathname]);

    return (
        <div className="pokedexLayout">
            <img className="artwork" alt="" src={currentPokemon.artwork} />
            <img className="front" alt="" src={currentPokemon.front} />
            <img className="back" alt="" src={currentPokemon.back} />
        </div>
    );

}

export default Pokemon;