import { useState, useEffect } from "react";
import axios from "axios";

const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
const headers = {
  "Cache-Control": "no-cache",
};

const StaticSide = (props) => {

  return (
    <div>
      {props.pokemon.map((poke) => (
        <div key={poke.name}>
          <img src={poke.imgUrl} alt='' />
          <p>{poke.name}</p>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await axios.get(url, { headers });
  //console.log(response);

  const promises = response.data.results.map((result) => {
    return axios.get(result.url);
  });

  const responses = await Promise.all(promises);
  //console.log(responses);

  const pokeData = responses.map((r) => {
    return {
      name: r.data.name,
      imgUrl: r.data.sprites.front_default,
    };
  });

  return {
    props: {
      pokemon: pokeData,
    },
  };
};

export default StaticSide;
