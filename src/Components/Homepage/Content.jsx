import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CollectionContext } from "../../Helper/CollectionContext";
import Swal from "sweetalert2";
import { BsPlusCircleFill } from "react-icons/bs";
import { RiInformationFill } from "react-icons/ri";

export default function Content() {
  const [pokemonList, setPokemonList] = useState([10]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((response) => {
        setPokemonList(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-white items-center justify-start flex ">Pokemon List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemonList.map((pokemon, index) => (
          <Card key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

function Card({ pokemon }) {
  const { addToCollection } = useContext(CollectionContext);
  const [data, setData] = useState(null);

  const handleAddToCollection = () => {
    addToCollection(data);
    Swal.fire({ title: "Good job!", text: "Anda berhasil Menyimpan Pokemon kesukaan Anda", timer: 2000, icon: "success" });
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    axios
      .get(pokemon.url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pokemon.url]);

  if (!data) {
    return (
      <div className="flex flex-wrap justify-end gap-5 mt-5">
        <div className="flex items-center justify-center">
          <div className=" w-36 h-3 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
          <div className=" w-50 h-50 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
        </div>
      </div>
    );
  }

  let backgroundColor = "";
  if (data.types.length > 0) {
    const type = data.types[0].type.name;
    if (type === "grass") {
      backgroundColor = "linear-gradient(to top, rgba(	38, 38, 38, 1), rgba(174, 221, 55), rgba(158, 205, 137))";
    } else if (type === "fire") {
      backgroundColor = "linear-gradient(to top,rgba(38, 38, 38, 1), rgba(214, 17, 1), rgba(253, 146, 4))";
    } else if (type === "water") {
      backgroundColor = "linear-gradient(to top,rgba(38, 38, 38, 1), rgba(0, 145, 254), rgba(3, 204, 250))";
    } else if (type === "bug") {
      backgroundColor = "linear-gradient(to top,rgba(38, 38, 38, 1), rgba(59, 153, 80), rgba(117, 202, 136))";
    } else if (type === "normal") {
      backgroundColor = "linear-gradient(to top,rgba(38, 38, 38, 1), rgba(202, 152, 167), rgba(214, 176, 187))";
    } else if (type === "ground") {
      backgroundColor = "linear-gradient(to top,rgba(38, 38, 38, 1), rgba(169, 112, 44), rgba(208, 147, 74))";
    } else if (type === "poison") {
      backgroundColor = "linear-gradient(to top,rgba(38, 38, 38, 1), rgba(155, 105, 217), rgba(178, 140, 226))";
    } else if (type === "electric") {
      backgroundColor = "linear-gradient(to top,rgba(38, 38, 38, 1), rgba(251, 251, 114), rgba(252, 252, 147))";
    } else if (type === "fairy") {
      backgroundColor = "linear-gradient(to top,rgba(38, 38, 38, 1), rgba(234, 19, 105), rgba(240, 72, 139))";
    } else if (type === "fighting") {
      backgroundColor = "linear-gradient(to top,rgba(38, 38, 38, 1), rgba(234, 100, 62), rgba(239, 136, 107))";
    } else if (type === "psychic") {
      backgroundColor = "linear-gradient(to top,rgba(38, 38, 38, 1), rgba(248, 28, 145), rgba(250, 80, 170))";
    } else if (type === "dark") {
      backgroundColor = "linear-gradient(to top,rgba(38, 38, 38, 1), rgba(90, 89, 121), rgba(123, 122, 157))";
    } else if (type === "dragon") {
      backgroundColor = "linear-gradient(to top,rgba(38, 38, 38, 1), rgba(98, 201, 219), rgba(134, 213, 227))";
    } else if (type === "flying") {
      backgroundColor = "linear-gradient(to top,rgba(38, 38, 38, 1), rgba(147, 178, 199), rgba(172, 196, 212))";
    } else if (type === "ghost") {
      backgroundColor = "linear-gradient(to top,rgba(38, 38, 38, 1), rgba(144, 103, 144), rgba(171, 137, 171))";
    } else if (type === "ice") {
      backgroundColor = "linear-gradient(to top,rgba(38, 38, 38, 1), rgba(216, 240, 250), rgba(225, 243, 251))";
    } else if (type === "rock") {
      backgroundColor = "linear-gradient(to top,rgba(38, 38, 38, 1), rgba(139, 62, 33), rgba(202, 90, 48))";
    } else if (type === "steel") {
      backgroundColor = "linear-gradient(to top,rgba(38, 38, 38, 1), rgba(66, 189, 148), rgba(158, 221, 200))";
    } else {
      backgroundColor = "rgba(249, 249, 249, 0.8)";
    }
  }

  return (
    <div className="mb-5">
      <div style={{ backgroundColor: `rgba(0, 0, 0, 0.2)`, backgroundImage: backgroundColor }} className="container items-center justify-center px-10 py-7 rounded-xl text-center relative">
        <img src={data.sprites.front_default} alt={data.name} className="w-full" />
        <div className="flex items-center justify-between">
          <div className="text-left">
            <h2 className=" font-bold text-gray-200 text-xl">{capitalizeFirstLetter(data.name)}</h2>
            <h2 className="text-[13px] font-light text-gray-200">Weight : {data.weight}</h2>
          </div>
          <div className="flex gap-2">
            <Link to={`/pokeDetail/${data.name}`}>
              <button className="p-[1px] bg-white bg-opacity-20 rounded-lg">
                <button type="button" className="p-3 hover:bg-blue-gray-100 rounded-lg">
                  <RiInformationFill size={25} color="#f9f9f9" />
                </button>
              </button>
            </Link>

            <button onClick={handleAddToCollection} type="button" className="p-[1px] bg-white bg-opacity-20 rounded-lg">
              <button type="button" className="p-3 hover:bg-blue-gray-100 rounded-lg">
                <BsPlusCircleFill size={25} color="#f9f9f9" />
              </button>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
