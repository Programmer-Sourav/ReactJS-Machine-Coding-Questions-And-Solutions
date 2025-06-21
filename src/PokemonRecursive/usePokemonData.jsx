import { useEffect, useState, useRef } from 'react';

const usePokemonData = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const cache = useRef({});

  // Recursive function to fetch paginated Pokémon list
  const fetchAllPokemon = async (url = 'https://pokeapi.co/api/v2/pokemon/', accumulated = []) => {
    const res = await fetch(url);
    const data = await res.json();
    const combined = [...accumulated, ...data.results];
    if (data.next) {
      return fetchAllPokemon(data.next, combined);
    }
    return combined;
  };

  useEffect(() => {
    (async () => {
      try {
        const allPokemon = await fetchAllPokemon();
        setPokemonList(allPokemon);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch Pokémon list');
        setLoading(false);
      }
    })();
  }, []);

  const handleSelect = async (name) => {
    if (!name) return;

    const pokemon = pokemonList.find(p => p.name === name);
    if (cache.current[name]) {
      setSelectedPokemon(cache.current[name]);
      return;
    }

    try {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      cache.current[name] = data;
      setSelectedPokemon(data);
    } catch (err) {
      setError('Failed to fetch Pokémon details');
    }
  };

  return { pokemonList, loading, error, selectedPokemon, handleSelect };
};

export default usePokemonData;
