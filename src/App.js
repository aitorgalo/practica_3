import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, useLocation } from "react-router-dom";
import axios from 'axios';
import './App.css';

 export default function App() {
 const [data, setData] = useState({ results: [] });
 
 
 useEffect( () => {
 const fetchData = async () => {
 const result = await axios('https://pokeapi.co/api/v2/pokemon?limit=25');
 setData(result.data);
 };
 
 fetchData();
 
 }, []);
 
 
 return (
<Router>


<Route path="/" exact component={ () => ( 

<>

<div className="pokedex_layout">

<ul>
 {  data.results.map(item => ( <li key={item.name}>  <Link to={"/pokemons/" + item.name}>{item.name}</Link>              </li> ))   }
 </ul>

</div>

</>

 ) } />

<Route path ="/pokemons" component ={Pokemons} />

</Router>
);
   
 }
 
 function Pokemons()
{
return (  <div>
<h1>Pokemons</h1>
<ul>
<li key={123}>
<Link to
="/pokemons/guitar"
>Guitar</Link
> </li
>
<li key={345}>
<Link to="/pokemons/violin">Violin</Link> </li></ul>

<Route path="/pokemons/:pokemonName" component={Pokemon} /> </div>  );

}

const Pokemon = ({match}) => <div> This is a nice {match.params.pokemonName} </div>;