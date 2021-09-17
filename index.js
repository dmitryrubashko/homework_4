// task_1
const baseURL = 'https://pokeapi.co/api/v2/pokemon';
const getPokemonsNames = async () => {
    const responce = await fetch(baseURL);
    const result = await responce.json();
    console.log(result.results.map(item => item.name));
}

getPokemonsNames()
