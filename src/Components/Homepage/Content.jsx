import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CollectionContext } from "../../Helper/CollectionContext";
import Swal from "sweetalert2";
import { BsPlusCircleFill } from "react-icons/bs";
import { RiInformationFill } from "react-icons/ri";

export default function Content() {
  const [pokemonList, setPokemonList] = useState([]);

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
      <h1 className="text-2xl font-bold mb-4 text-white items-center justify-start flex my-5">Pokemon List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemonList.map((pokemon, index) => (
          <Card key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

function Card({ pokemon }) {
  const [hovered, setHovered] = useState(false);

  const { addToCollection } = useContext(CollectionContext);
  const [data, setData] = useState(null);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

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
      backgroundColor = "linear-gradient(to top, #aedd37, #9ecd89)";
    } else if (type === "fire") {
      backgroundColor = "linear-gradient(to top, #d61101, #fd9204)";
    } else if (type === "water") {
      backgroundColor = "linear-gradient(to top, #0091fe, #03ccfa)";
    } else if (type === "bug") {
      backgroundColor = "linear-gradient(to top, #3b9950, #75ca88)";
    } else if (type === "normal") {
      backgroundColor = "linear-gradient(to top, #ca98a7,#d6b0bb)";
    } else if (type === "ground") {
      backgroundColor = "linear-gradient(to top, #a9702c, #d0934a)";
    } else if (type === "poison") {
      backgroundColor = "linear-gradient(to top, #9b69d9, #b28ce2)";
    } else if (type === "electric") {
      backgroundColor = "linear-gradient(to top, #fbfb72, #fcfc93)";
    } else if (type === "fairy") {
      backgroundColor = "linear-gradient(to top, #ea1369, #f0488b)";
    } else if (type === "fighting") {
      backgroundColor = "linear-gradient(to top, #ea643e, #ef886b)";
    } else if (type === "psychic") {
      backgroundColor = "linear-gradient(to top, #f81c91, #fa50aa)";
    } else if (type === "dark") {
      backgroundColor = "linear-gradient(to top, #5a5979, #7b7a9d)";
    } else if (type === "dragon") {
      backgroundColor = "linear-gradient(to top, #62c9db , #86d5e3)";
    } else if (type === "flying") {
      backgroundColor = "linear-gradient(to top, #93b2c7, #acc4d4)";
    } else if (type === "ghost") {
      backgroundColor = "linear-gradient(to top, #906790, #ab89ab)";
    } else if (type === "ice") {
      backgroundColor = "linear-gradient(to top, #d8f0fa, #e1f3fb)";
    } else if (type === "rock") {
      backgroundColor = "linear-gradient(to top, #8b3e21, #ca5a30)";
    } else if (type === "steel") {
      backgroundColor = "linear-gradient(to top, #42bd94,#9eddc8)";
    } else {
      backgroundColor = "#f9f9f9";
    }
  }
  return (
    <div className="mb-14">
      <div
        style={{ backgroundImage: backgroundColor }}
        className={`container items-center justify-center p-10 rounded-xl text-center relative transition-colors ${hovered ? "hover:bg-blue-gray-100" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <>
          <Link to={`/pokeDetail/${data.name}`} className="absolute left-0 top-0">
            <button type="button" className="p-5 rounded-br-xl rounded-tl-xl hover:bg-blue-gray-100">
              <RiInformationFill size={30} />
            </button>
          </Link>

          <button onClick={handleAddToCollection} type="button" className="absolute right-0 top-0">
            <button type="button" className="p-5 rounded-bl-xl rounded-tr-xl hover:bg-blue-gray-100">
              <BsPlusCircleFill size={27} />
            </button>
          </button>
        </>

        <h2 className="text-xl font-bold ">{capitalizeFirstLetter(data.name)}</h2>
        <img src={data.sprites.front_default} alt={data.name} className="w-full " />
      </div>
    </div>
  );
}
