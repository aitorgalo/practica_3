import { BrowserRouter as Router, Route } from "react-router-dom";
import Pokemon from "./Pokemon";
import PokemonList from "./PokemonList";
import "./App.css";

export default function App() {
  return (

    <Router>
      <Route path="/" exact>
        <PokemonList />
      </Route>
      <Route path="/pokemon/:pokemonName">
        <Pokemon />
        <PokemonList />
      </Route>

    </Router>
  );
}
