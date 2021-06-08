import { BrowserRouter as Router, Route } from "react-router-dom";
import Pokemon from "./Pokemon";

import "./App.css";

export default function App() {
  return (

    <Router>
      <Route path="/" exact>
        <Pokemon />
      </Route>
      <Route path="/pokemon/:pokemonName">
        <Pokemon />
      </Route>
    </Router>
  );
}
