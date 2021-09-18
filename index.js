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

const pokeapiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=99';
const getfullInfoArray = async () => {
    const responce = await fetch(pokeapiURL);
    const result = await responce.json();
    const UrlsArray = result.results.map(pokemon => pokemon.url);
    const fullInfoArray = UrlsArray.map(url => fetch(url).then(pokemon => pokemon.json()));
    try {
        const responses = await Promise.all(fullInfoArray);
        console.log(responses)
    } catch (error) {
        console.log ('Error', error)
    } finally {
        console.log (`This message means that you definitely added method "finally()" to your code! But not only that.`)
    }
}

getfullInfoArray()


