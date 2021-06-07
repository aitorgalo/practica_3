import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';

 export default function App() {
 const [data, setData] = useState({ results: [] });
 
 useEffect( () => {
 const fetchData = async () => {
 const result = await axios('https://pokeapi.co/api/v2/pokemon?limit=151');
 setData(result.data);
 };
 
 fetchData();
 
 }, []);
 
 
 return (
 <ul>
 {  data.results.map(item => ( <li key={item.name}> <a href={item.url}>{item.name}</a> </li> ))   }
 </ul>
 );
 
 
 
 }