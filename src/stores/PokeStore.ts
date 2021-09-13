import { writable } from 'svelte/store';
import { Pokemon } from '../classes/Pokemon';

export const pokemon = writable([]);

async function fetchPokemon() {
	const url = 'https://pokeapi.co/api/v2/pokemon?limit=150';
	const res = await fetch(url);
	const data = await res.json();
	const results = data.results.map((pokemon, index) => {
		return new Pokemon(index + 1,pokemon.name);
	});
	pokemon.set(results);
}
fetchPokemon();