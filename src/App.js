import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, NavLink, useParams } from "react-router-dom";
import axios from 'axios';
import './App.css';

export default function App() {
    const [pokemonArray, setPokemons] = useState({ results: [] });
    const [currentPokemon, setCurrentPokemon] = useState({ results:[]});
   // const { pokemonName } = useParams();

    useEffect(() => {
        const fetchPokemonList = async () => {
            const result = await axios('https://pokeapi.co/api/v2/pokemon?limit=25');
            setPokemons(result.data);
        };

        fetchPokemonList();

    }, []);

    return (
        <Router>
      
            <Route path="/" exact component={() => (
                <div className="pokedexLayout">
                    <ul>
                        {pokemonArray.results.map(item => (<li key={item.name}>  <NavLink to={"/pokemon/" + item.name}>{item.name.toUpperCase()}</NavLink>              </li>))}
                    </ul>

                    <img className="artwork" alt="" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" />
                    <img className="front" alt="" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" />
                    <img className="back" alt="" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png" />

                </div>

            )} />

            <Route path="/pokemon/:pokemonName" component={() => (

                <div className="pokedexLayout">
                    <ul>
                        {pokemonArray.results.map(item => (<li key={item.name}>  <NavLink activeStyle={{ backgroundColor: 'green' }} to={"/pokemon/" + item.name}>{item.name.toUpperCase()}</NavLink>              </li>))}
                    </ul>

                    <img className="artwork" alt="" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" />
                    <img className="front" alt="" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" />
                    <img className="back" alt="" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png" />

                </div>

            )} />

        </Router>
    );

}
