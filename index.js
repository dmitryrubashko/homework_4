// task_1
const baseURL = 'https://pokeapi.co/api/v2/pokemon/?limit=1200';
const getPokemonsNames = async () => {

    try {
        const responceFromPokeapi = await fetch(baseURL);
        const resultOfRequestPokeapi = await responceFromPokeapi.json();
        console.log(resultOfRequestPokeapi.results.map(pokemon => pokemon.name))
    } catch (error) {
        console.log ('Error', error)
    } finally {
        console.log ('Check console to know if you have problems with response from PokeApi or not')
    }
    
}

getPokemonsNames();

// task_2
let pokemonURL = 'https://pokeapi.co/api/v2/pokemon/';
const getPokemonFullInfo = async (pokemonName) => {
    
    try {
        pokemonURL = pokemonURL+`${pokemonName}`;
        const responceFromPokeapi = await fetch(pokemonURL);
        const resultOfRequestPokeapi = await responceFromPokeapi.json();
        console.log(resultOfRequestPokeapi)
    } catch {
        console.log (`Pokemon "${pokemonName}" not found!`)
    } finally {
        console.log ('Check console to know if you have problems with response from PokeApi or not')
    }

}

getPokemonFullInfo('pikachu'); // getPokemonFullInfo('Dima') // previous code will give an error: Pokemon "Dima" not found!

// task_3

const pokeapiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=99';
const getfullInfoArray = async () => {
    
    try {
        const responceFromPokeapi = await fetch(pokeapiURL);
        const resultOfRequestPokeapi = await responceFromPokeapi.json();
        const urlsArray = resultOfRequestPokeapi.results.map(pokemon => pokemon.url);
        const fullInfoArray = urlsArray.map(url => fetch(url).then(pokemon => pokemon.json()));
        const responses = await Promise.all(fullInfoArray);
        console.log(responses)
    } catch (error) {
        console.log ('Error', error)
    } finally {
        console.log (`This message means that you definitely added method "finally()" to your code! But not only that.`)
    }

}

getfullInfoArray()