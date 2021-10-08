import { writable } from 'svelte/store';
import { Pokemon } from '../classes/Pokemon';

export const pokemon = writable([]);

export async function fetchPokemon(limit : number, offset : number) : Promise<void> {
	const url = 'https://pokeapi.co/api/v2/pokemon?limit=' + limit + '&offset=' + offset;
	const res = await fetch(url);
	const data = await res.json();
	const results = data.results.map((pokemon, index) => {
		return new Pokemon(offset + index + 1, pokemon.name);
	});
	pokemon.set(results);
}

export async function fetchPokemonByType(typeId : number) : Promise<void> {
	const url = 'https://pokeapi.co/api/v2/type' + typeId;
	const res = await fetch(url);
	const data = await res.json();
	const regex = 'https://pokeapi.co/api/v2/pokemon/(?<Id>[0-9]+)/';
	const results = data.pokemon.map(pokemon => {
		const match = pokemon.url.match(regex);
		const id = match.groups.Id;
		return new Pokemon(id ,pokemon.name);
	});
	pokemon.set(results);
}