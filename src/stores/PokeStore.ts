import { writable } from 'svelte/store';
import { Pokemon } from '../classes/Pokemon';

export const pokemon = writable([]);

export async function fetchPokemon(limit : number, offset : number) : Promise<void> {
	const url = 'https://pokeapi.co/api/v2/pokemon?limit=' + limit + '&offset=' + offset;
	const res = await fetch(url);
	const data = await res.json();
	const results = data.results.map((pokemon, index) =>
		new Pokemon(offset + index + 1, pokemon.name)
	);
	pokemon.set(results);
}