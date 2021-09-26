import { useState, useEffect } from "react";
import axios from "axios";

const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
const headers = {
  "Cache-Control": "no-cache",
};

const ClientSide = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get(url, { headers });
      //console.log(response);

      const promises = response.data.results.map((result) => {
        return axios.get(result.url);
      });

      const responses = await Promise.all(promises);
      console.log(responses);

      const pokeData = responses.map((r) => {
        return {
          name: r.data.name,
          imgUrl: r.data.sprites.front_default,
        };
      });

      //console.log(pokeData);
      setPokemon(pokeData);
    };

    fetchPokemon();
  }, []);
  return (
    <div>
      {pokemon.map((poke) => (
        <div key={poke.name}>
          <img src={poke.imgUrl} alt='' />
          <p>{poke.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ClientSide;
