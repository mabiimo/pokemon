import React, { useContext } from "react";
import { CollectionContext } from "../Helper/CollectionContext";
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
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

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="min-h-screen bg-[#262626] ">
      <NavigationBar />
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-4 text-white items-center justify-start flex ">Owned Pokemon</h1>
        <button onClick={handleGoBack} className="cursor-pointer px-5 py-3 hover:bg-blue-gray-100 rounded-lg bg-white bg-opacity-20 text-white">
          Back
        </button>
        <ul>
          {collection.map((pokemon, key) => (
            <div key={key} className="border rounded-xl p-5 mt-5">
              <div className="flex justify-between px-10 items-center">
                <div>
                  <li key={pokemon.name} className="text-white font-bold">
                    {capitalizeFirstLetter(pokemon.name)}
                  </li>
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
                <div>
                  <Link to={`/pokeDetail/${pokemon.name}`} className="p-3">
                    <button type="button" className=" p-5 rounded-xl bg-white bg-opacity-20 hover:bg-blue-gray-500">
                      <RiInformationFill color="white" size={20} />
                    </button>
                  </Link>
                  <button type="button" className=" p-5 rounded-xl bg-white bg-opacity-20 hover:bg-blue-gray-500" onClick={() => handleRemoveFromCollection(pokemon)}>
                    <TiDeleteOutline color="white" size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </ul>
        <Footer />
      </div>
    </div>
  );
}
