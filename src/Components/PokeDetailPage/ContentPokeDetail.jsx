import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ContentPokeDetail() {
  const navigate = useNavigate();
  const { pokemonName } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        setPokemonData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pokemonName]);

  const handleGoBack = () => {
    navigate(-1);
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div>
      <button onClick={handleGoBack} className="cursor-pointer bg-white bg-opacity-20 rounded-lg text-white font-bold py-2 px-4 mb-4 hover:bg-blue-gray-100">
        Back
      </button>
      {pokemonData ? (
        <div className="text-white">
          <h1 className="text-2xl font-bold mb-4">Detail Page - {pokemonData.name}</h1>
          <div
            className="flex items-center justify-center
          "
          >
            <div className="justify-center">
              <h1 className="text-2xl font-bold mb-4"> {capitalizeFirstLetter(pokemonData.name)}</h1>

              <img src={pokemonData.sprites.front_default} alt={pokemonData.sprites.front_default} className="mt-4 mb-8 w-[200px] h-[200px]" />
              <p>Weight: {pokemonData.weight}</p>
              <p>Height: {pokemonData.height}</p>
            </div>
          </div>
          <ul>
            {pokemonData.stats.map((base, index) => (
              <li key={index} className="mb-4">
                <p className="text-lg font-semibold">Stats: {base.stat.name}</p>
                <div className="bg-gray-300 h-2 rounded">
                  <div className="bg-blue-500 h-2 rounded" style={{ width: `${base.base_stat}%` }}></div>
                </div>
              </li>
            ))}
          </ul>
          <ul>
            Ability :
            <li className="mb-1">
              {""}
              {pokemonData.abilities.map((ability, index) => (
                <span key={index} className="mr-2 inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1">
                  {ability.ability.name}
                </span>
              ))}
            </li>
          </ul>
          <ul>
            Types :
            <li>
              {" "}
              {pokemonData.types.map((type, index) => (
                <span key={index} className="mr-2 inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1">
                  {type.type.name}
                </span>
              ))}
            </li>
          </ul>
          <ul>
            Moves :
            {pokemonData.moves.map((moves, index) => (
              <li key={index} className="mr-2 inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1">
                <p className=""> {moves.move.name}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

// Types:{" "}
//                 {pokemonData.types.map((type, index) => (
//                   <span key={index} className="mr-2 inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
//                     {type.type.name}
//                   </span>
//                 ))}
