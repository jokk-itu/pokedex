<script lang="ts">
	import { Pokemon } from '../../classes/Pokemon';

	export let pokemon : Pokemon = Pokemon.defaultInstance();

	let moves = pokemon.moves.slice(Math.floor(Math.random() * (pokemon.moves.length - 2)), 2);

	async function fetchMove(url : string) {
		const res = await fetch(url);
		return await res.json();
	}
</script>

{#each moves as move}
	{#await fetchMove(move.url) then m}
		<img src='/resources/types/{m.type.name}_icon.png' alt={m.name}>
		<p>{m.name}</p>
		<p>{m.effect_entries.find(m1 => m1.language.name === 'en').short_effect}</p>
		<p>{m.power}</p>
	{:catch e}
		<p>Error while fetching move</p>
	{/await}
{/each}