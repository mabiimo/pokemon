import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DetailPagePoke from "./Pages/DetailPagePoke";
import OwnedPokemon from "./Pages/OwnedPokemon";
import { CollectionProvider } from "./Helper/CollectionContext";

export default function App() {
  return (
    <Router>
      <CollectionProvider>
        <Routes>
          <Route index exact path="/" element={<HomePage />} />
          <Route path="/pokeDetail/:pokemonName" element={<DetailPagePoke />} />
          <Route path="/ownedPokemon" element={<OwnedPokemon />} />
        </Routes>
      </CollectionProvider>
    </Router>
  );
}
