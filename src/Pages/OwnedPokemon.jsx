import React, { useContext } from "react";
import { CollectionContext } from "../Helper/CollectionContext";
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import { RiInformationFill } from "react-icons/ri";
import { TiDeleteOutline } from "react-icons/ti";

export default function OwnedPokemon() {
  const navigate = useNavigate();
  const { collection, removeFromCollection } = useContext(CollectionContext);

  const handleRemoveFromCollection = (pokemon) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
    removeFromCollection(pokemon);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-[#262626]  p-10">
      <NavigationBar />
      <h1>Owned Page</h1>
      <button onClick={handleGoBack} className="cursor-pointer">
        Back
      </button>

      <ul>
        {collection.map((pokemon, key) => (
          <div key={key}>
            <li key={pokemon.name}>{pokemon.name}</li>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <Link to={`/pokeDetail/${pokemon.name}`} className="p-3">
              <button type="button" className="mt-5 p-5 rounded-xl bg-white hover:bg-blue-gray-500">
                <RiInformationFill />
              </button>
            </Link>
            <button type="button" className="mt-5 p-5 rounded-xl bg-white hover:bg-blue-gray-500" onClick={() => handleRemoveFromCollection(pokemon)}>
              <TiDeleteOutline />
            </button>
          </div>
        ))}
      </ul>
      <Footer />
    </div>
  );
}
