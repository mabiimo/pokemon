import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CollectionContext } from "../../Helper/CollectionContext";

export default function Content({ type }) {
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
      <h1 className="text-2xl font-bold mb-4">Pokemon List Muhammad Aryo Bimo</h1>
      <div className="grid grid-cols-4 gap-4">
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
  };

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
    return <p>Loading...</p>;
  }

  let backgroundColor;
  if (data.types.length > 0) {
    const type = data.types[0].type.name;
    if (type === "grass") {
      backgroundColor = "#27cb4f";
    } else if (type === "water") {
      backgroundColor = "#86a8fc";
    } else if (type === "fire") {
      backgroundColor = "#fd4c5a";
    } else if (type === "bug") {
      backgroundColor = "#3b9950";
    } else if (type === "normal") {
      backgroundColor = "#ca98a7";
    } else if (type === "ground") {
      backgroundColor = "#a9702c";
    } else if (type === "poison") {
      backgroundColor = "#9b69d9";
    } else if (type === "electric") {
      backgroundColor = "#fbfb72 ";
    } else if (type === "fairy") {
      backgroundColor = "#ea1369 ";
    } else if (type === "fighting") {
      backgroundColor = "#ea643e ";
    } else if (type === "psychic") {
      backgroundColor = "#f81c91 ";
    } else if (type === "dark") {
      backgroundColor = "#5a5979 ";
    } else if (type === "dragon") {
      backgroundColor = "#62c9db ";
    } else if (type === "flying") {
      backgroundColor = "#93b2c7 ";
    } else if (type === "ghost") {
      backgroundColor = "#906790 ";
    } else if (type === "ice") {
      backgroundColor = "#d8f0fa ";
    } else if (type === "rock") {
      backgroundColor = "#8b3e21";
    } else if (type === "steel") {
      backgroundColor = "#42bd94";
    } else {
      backgroundColor = "#f9f9f9";
    }
  }

  return (
    <div style={{ backgroundColor }} className="container items-center justify-center p-10 rounded-xl text-center">
      <h2 className="text-xl font-bold mb-2">{data.name}</h2>
      <img src={data.sprites.front_default} alt={data.name} className="w-full mb-2" />
      <p>Weight: {data.weight}</p>
      <Link to={`/pokeDetail/${data.name}`} className="p-3">
        <button type="button" className="mt-5 p-5 rounded-xl bg-white hover:bg-blue-gray-500">
          View Detail
        </button>
      </Link>
      <button onClick={() => handleAddToCollection()} type="button" className="mt-5 p-5 rounded-xl bg-white hover:bg-blue-gray-500">
        Tambah Koleksi
      </button>
    </div>
  );
}
