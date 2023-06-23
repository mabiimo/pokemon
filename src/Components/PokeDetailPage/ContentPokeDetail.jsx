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

  return (
    <div>
      <button onClick={handleGoBack} className="cursor-pointer">
        Back
      </button>
      {pokemonData ? (
        <div className="text-white">
          <h1 className="text-2xl font-bold mb-4">Detail Page - {pokemonData.name}</h1>
          <p>Weight: {pokemonData.weight}</p>
          <p> Height : {pokemonData.height}</p>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.sprites.front_default} />
          <p>
            Types:{" "}
            {pokemonData.types.map((type, index) => (
              <span key={index}>{type.type.name} </span>
            ))}
          </p>
          <ul>
            {pokemonData.stats.map((base, index) => (
              <li key={index} className="mb-1">
                <p>Stats: {base.stat.name}</p>
                <p>Stats: {base.base_stat}</p>
              </li>
            ))}
          </ul>
          <ul>
            {pokemonData.moves.map((moves, index) => (
              <li key={index} className="mb-1">
                <p>Moves: {moves.move.name}</p>
              </li>
            ))}
          </ul>
          <ul>
            {pokemonData.abilities.map((ability, index) => (
              <li key={index} className="mb-1">
                <p>Ability: {ability.ability.name}</p>
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
