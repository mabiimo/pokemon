import React, { useEffect, useState } from "react";
import axios from "axios";

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
  const [data, setData] = useState(null);

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

  return (
    <div className="bg-white p-4 shadow-md ">
      {data && (
        <div>
          <h2 className="text-xl font-bold mb-2">{data.name}</h2>
          <img src={data.sprites.front_default} alt={data.name} className="w-full mb-2" />
          <p> Weight : {data.weight}</p>
          <p>
            Types:{" "}
            {data.types.map((type, index) => (
              <span key={index}>{type.type.name} </span>
            ))}
          </p>
          <p> Height : {data.height}</p>
          <ul>
            {data.abilities.map((ability, index) => (
              <li key={index} className="mb-1">
                <p>Ability: {ability.ability.name}</p>
              </li>
            ))}
          </ul>
          <ul>
            {data.stats.map((base, index) => (
              <li key={index} className="mb-1">
                <p>Stats: {base.stat.name}</p>
                <p>Stats: {base.base_stat}</p>
              </li>
            ))}
          </ul>
          <ul>
            {data.moves.map((moves, index) => (
              <li key={index} className="mb-1">
                <p>Moves: {moves.move.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
