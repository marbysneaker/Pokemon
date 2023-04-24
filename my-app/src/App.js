

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        setPokemonList(response.data.results);
        console.log(response.data)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

 
  return (
    <div className="App">
      <h1>Pokémon List</h1>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <>
            <li key={index}>{pokemon.name}</li>
          <img  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1 }.png`}/>
          </>
          
        ))}
      </ul>
    </div>
  );
}

export default App;