import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Pokemon = () => {

    const [currentPokemon, setCurrentPokemon] = useState([]);
    const location = useLocation();
    
    useEffect(() => {

        const fetchPokemonInfo = async () => {
            const result = await axios("https://pokeapi.co/api/v2" + location.pathname);
            setCurrentPokemon(result.data);
            console.log(result.data);
        };

        fetchPokemonInfo();

    },[location.pathname]);


    return(
        
        <div className="pokedexLayout">

<img className="artwork" alt="" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" />
                    <img className="front" alt="" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" />
                    <img className="back" alt="" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png" />

        </div>

    );


}

export default Pokemon;