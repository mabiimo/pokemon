import React, { useContext } from "react";
import { CollectionContext } from "../Helper/CollectionContext";
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function OwnedPokemon() {
  const { collection, removeFromCollection } = useContext(CollectionContext);

  const handleRemoveFromCollection = (pokemon) => {
    removeFromCollection(pokemon);
  };

  return (
    <div className="min-h-screen bg-[#262626]  p-10">
      <NavigationBar />
      <h1>Owned Page</h1>
      {/* Display collection data */}
      <ul>
        {collection.map((pokemon, key) => (
          <div key={key}>
            <li key={pokemon.name}>{pokemon.name}</li>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <Link to={`/pokeDetail/${pokemon.name}`} className="p-3">
              <button type="button" className="mt-5 p-5 rounded-xl bg-white hover:bg-blue-gray-500">
                View Detail
              </button>
            </Link>
            <button type="button" className="mt-5 p-5 rounded-xl bg-white hover:bg-blue-gray-500" onClick={() => handleRemoveFromCollection(pokemon)}>
              Remove
            </button>
          </div>
        ))}
      </ul>
      <Footer />
    </div>
  );
}
