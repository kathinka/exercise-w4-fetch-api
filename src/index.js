// To continue on with the pokemon theme, we've found a
// pokemon API for you to practice on --> https://pokeapi.co/.
// If you go to this page --> https://pokeapi.co/api/v2/,
// you can see all of the endpoints available.
// We will start with the endpoint named pokemon.

// The goal is to change the content of our mystery table in
// HTML to contain info about one specific pokemon. To get you
// started, we've created some variables for you to use later on:

const image = document.getElementById("image");
const pokeName = document.getElementById("name");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const baseHappy = document.getElementById("baseHappy");
const apiUrl = 'https://pokeapi.co/api/v2'
const limit = '?limit=50'
const pokeid = '35/'
const pokemon = '/pokemon/'
const pokemonSpecies = '/pokemon-species/'

const fetchPokemons = () => {
	fetch(apiUrl + pokemon + limit)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.json();
		})
		.then(data => {
			data.results.forEach((results) => {
				console.log(results.name)
			})
		})
		.catch(error => {
			console.error('Error:', error.message);
		});
};

fetchPokemons();

const fetchClefairyData = () => {
	fetch(apiUrl + pokemon + pokeid)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.json();
		})
		.then((clefairy) => {
			image.src = clefairy.sprites.front_default
			pokeName.innerHTML = `${clefairy.name}`
			weight.innerHTML = `${clefairy.weight}`
			height.innerHTML = `${clefairy.height}`
			const typesNames = clefairy.types.map((type) => type.type.name)
			console.log(typesNames)
			types.innerHTML = `${typesNames}`
		})
		.catch(error => {
			console.error('Error:', error.message);
		});
};
fetchClefairyData()

const fetchPokemonSpecies = () => {
	fetch(apiUrl + pokemonSpecies + pokeid)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.json();
		})
		.then(data => {
			baseHappy.innerHTML = `${data.base_happiness}`
		})
		.catch(error => {
			console.error('Error:', error.message);
		});
};
fetchPokemonSpecies();
