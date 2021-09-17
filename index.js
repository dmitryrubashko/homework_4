// task_1
const baseURL = 'https://pokeapi.co/api/v2/pokemon/?limit=5';
const getPokemonsNames = async () => {
    const responce = await fetch(baseURL);
    const result = await responce.json();
    console.log(result.results.map(pokemon => pokemon.name));
}

getPokemonsNames();

// task_2
let pokemonURL = 'https://pokeapi.co/api/v2/pokemon/';
const getPokemonFullInfo = async (pokemonName) => {
    pokemonURL += pokemonName;

try {
    const responce = await fetch(pokemonURL);
    const result = await responce.json();
    console.log(result);   
} catch {
    console.log (`Pokemon "${pokemonName}" not found!`)
}
}
getPokemonFullInfo('pikachu'); // getPokemonFullInfo('Dima');

// task_3

const pokeapiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=5';
