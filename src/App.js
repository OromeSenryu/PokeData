import React, { useEffect, useState } from 'react';
import PokeThumbnail from "./Components/PokeThumbnail";

function App() {
  const [allPokemons,setAllPokemons] = useState([]);
  const [loadPoke,setLoadPoke] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');
  const getAllPokemons = async () =>{
    const res = await fetch(loadPoke)
    const data = await res.json()
    setLoadPoke(data.next)
   
    function createPokemonObject(result){
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json();
        setAllPokemons(currentList => [...currentList,data])
      });
    }
    createPokemonObject(data.results)
    await console.log(allPokemons)
  }
  useEffect(()=>{
    getAllPokemons()
  },[])

  return (
    <div className='appContainer'>
      <div className='poke-container'>
        <div className='all-container'>
        {allPokemons.map((pokemon,index)=> 
                 <PokeThumbnail
                  id = {pokemon.id}
                  name = {pokemon.name}
                  image = {pokemon.sprites.other.dream_world.front_default}
                  type = {pokemon.types[0].type.name}
                  key = {index}
                  height = {pokemon.height}
                  weight = {pokemon.weight}
                  healthPoints = {pokemon.stats[0].stat.name}
                  attack = {pokemon.stats[1].stat.name}
                  defense = {pokemon.stats[2].stat.name}
                  specialAttack = {pokemon.stats[3].stat.name}
                  specialDefense = {pokemon.stats[4].stat.name}
                  speed = {pokemon.stats[5].stat.name}
                  hpBase = {pokemon.stats[0].base_stat}
                  attackBase = {pokemon.stats[1].base_stat}
                  defenseBase = {pokemon.stats[2].base_stat}
                  specAtkBase = {pokemon.stats[3].base_stat}
                  specDefBase = {pokemon.stats[4].base_stat}
                  speedBase = {pokemon.stats[5].base_stat}
                  
                 />
            )}
        </div>
        <button className="load-more" onClick={()=>getAllPokemons()}>Load more</button>
      </div>
    </div>
  )
}

export default App;
