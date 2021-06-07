import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import './App.css';

 export default function App() {
 const [pokemonArray, setPokemons] = useState({ results: [] });
 
 
 useEffect( () => {
 const fetchPokemonList = async () => {
 const result = await axios('https://pokeapi.co/api/v2/pokemon?limit=25');
 setPokemons(result.data);
 };
 
 fetchPokemonList();
  
 }, []);
 
 
 return (
<Router>
<Route path="/" exact component={ () => ( 



<div className="pokedexLayout">
<ul>
 {  pokemonArray.results.map(item => ( <li key={item.name}>  <Link to={"/pokemon/" + item.name}>{item.name.toUpperCase()}</Link>              </li> ))   }
 </ul>

 <img className="artwork" alt="" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" />
 <img className="front" alt="" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" />
 <img className="back" alt="" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png" />
 
</div>




 ) } />

<Route path ="/pokemon" component ={ () => ( 



<div className="pokedexLayout">
<ul>
 {  pokemonArray.results.map(item => ( <li key={item.name}>  <Link to={"/pokemon/" + item.name}>{item.name.toUpperCase()}</Link>              </li> ))   }
 </ul>

 <img className="artwork" alt="" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" />
 <img className="front" alt="" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" />
 <img className="back" alt="" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png" />
 
</div>




 ) } /> 




</Router>
);
   
 }
 
 
 



