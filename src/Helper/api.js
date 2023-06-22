import axios from "axios";

export const PokeAPI = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=50");
  return response.data.results;
};
