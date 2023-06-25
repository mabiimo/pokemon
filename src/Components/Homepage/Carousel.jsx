import React, { useEffect, useState, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { CollectionContext } from "../../Helper/CollectionContext";

export default function Carousel() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((response) => {
        setPokemonList(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="items-center justify-center rounded-xl text-center">
        <Slider {...settings} className="overflow-hidden">
          {pokemonList.map((pokemon, index) => (
            <Slide key={index} pokemon={pokemon} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Slide({ pokemon }) {
  const { addToCollection } = useContext(CollectionContext);
  const [data, setData] = useState(null);

  const handleAddToCollection = () => {
    addToCollection(data);
    Swal.fire({ title: "Good job!", text: "Anda berhasil Menyimpan Pokemon kesukaan Anda", timer: 2000, icon: "success" });
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
    return <div>Loading...</div>;
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
    <div style={{ backgroundColor: `rgba(38, 38, 38, 1)`, backgroundImage: backgroundColor }} className="p-20 cursor-pointer ">
      <div className="flex items-center justify-center flex-col">
        <img src={data.sprites.front_default} alt={data.name} className="mx-auto w-36 h-36" />
        <h2 className="text-xl font-bold text-gray-200 mt-4">{capitalizeFirstLetter(data.name)}</h2>
        <div className="flex items-center justify-center mt-4">
          <Link to={`/pokeDetail/${data.name}`} className="mr-2">
            <button className="p-3 hover:bg-blue-gray-100 rounded-lg  bg-white bg-opacity-20 ">Detail Pokemon</button>
          </Link>
          <button onClick={handleAddToCollection} type="button" className="p-3 hover:bg-blue-gray-100 rounded-lg bg-white bg-opacity-20 ">
            Tambahkan Koleksi
          </button>
        </div>
      </div>
    </div>
  );
}
