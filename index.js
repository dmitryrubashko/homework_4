// task_1
const baseURL = 'https://pokeapi.co/api/v2/pokemon/?limit=1200';
const getPokemonsNames = async () => {
    const responce = await fetch(baseURL);
    const result = await responce.json();
    console.log(result.results.map(pokemon => pokemon.name))
}

getPokemonsNames();

// task_2
let pokemonURL = 'https://pokeapi.co/api/v2/pokemon/';
const getPokemonFullInfo = async (pokemonName) => {
    pokemonURL += pokemonName

try {
    const responce = await fetch(pokemonURL);
    const result = await responce.json();
    console.log(result)
} catch {
    console.log (`Pokemon "${pokemonName}" not found!`)
}

}

getPokemonFullInfo('pikachu'); // getPokemonFullInfo('Dima') // previous code will give an error: Pokemon "Dima" not found!

// task_3

const pokeapiURL = 'https://pokeapi.co/api/v2/pokemon/';

const pokemon_1 = fetch(`${pokeapiURL}1`).then(pokemon => pokemon.json());
const pokemon_2 = fetch(`${pokeapiURL}2`).then(pokemon => pokemon.json());
const pokemon_3 = fetch(`${pokeapiURL}3`).then(pokemon => pokemon.json());
const pokemon_4 = fetch(`${pokeapiURL}4`).then(pokemon => pokemon.json());
const pokemon_5 = fetch(`${pokeapiURL}5`).then(pokemon => pokemon.json());

const getFullInfoArray = async () => {
    try {
        const responses = await Promise.all([pokemon_1, pokemon_2, pokemon_3, pokemon_4, pokemon_5]);
        console.log(responses)
    } catch (error) {
        console.log ('Error', error)
    } finally {
        console.log (`This message means that you definitely added method "finally()" to your code! But not only that.`)
    }
}

getFullInfoArray()