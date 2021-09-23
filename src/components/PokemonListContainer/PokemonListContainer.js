import React, { useEffect, useState } from "react";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import "./PokemonListContainer.css";

export const PokemonListContainer = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextURL, setNextURL] = useState("");

  useEffect(() => {
    getPokemons("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  console.log(pokemons);

  const getPokemons = async (url) => {
    const pokemonArr = [];
    const resp = await fetch(url);
    const { results, next } = await resp.json();
    for (let pokemon of results) {
      const resp = await fetch(pokemon.url);
      const data = await resp.json();
      pokemonArr.push(data);
    }
    setPokemons(prevState => [...prevState, ...pokemonArr]);
    setNextURL(next);
  };

  const cargarMasPokemons = () => {
    getPokemons(nextURL);
  }

  return (
    <div>
      <ul className="pokemon-list">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            types={pokemon.types}
          />
        ))}
      </ul>

      <button className="btn btn-success mt-3 mb-3" onClick={cargarMasPokemons}>Ver mas...</button>
    </div>
  );
};
