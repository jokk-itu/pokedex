<script context='module'>
	import { pokemon } from '../PokemonCard.svelte';

	/*export async function preload() {
		const url = 'https://pokeapi.co/api/v2/pokemon-species/' + pokemon.id;
		const res = await fetch(url);
		const data = await res.json();
		const evolveChain = data.evolves_from_species;
		const name = evolveChain === null ? null : evolveChain.name;
		return { name };
	}*/
</script>

<script lang='ts'>
	import { Pokemon } from '../../classes/Pokemon';

	export let pokemon: Pokemon = Pokemon.defaultInstance();
	export let name;
</script>


{#if name === null}
	<p>Basic</p>
{:else}
	<p>{name}</p>
	<img src={pokemon.image} alt='evolve_chain'>
{/if}