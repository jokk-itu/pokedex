<script>
	import { page } from '$app/stores';
	import { Pokemon } from '../../classes/Pokemon';
	import PokemonCard from '../../components/PokemonCard.svelte';
	const id = parseInt($page.params.id);
</script>

<style lang='scss'>
	.circle {
			border-radius: 100px;
	}
</style>

<div class='grid-cols-1 py-4'>
	{#await Pokemon.instance(id) }
		<svg class='animate-spin h-5 w-5' viewBox='0 0 24 24'></svg>
	{:then pokemon}
		<PokemonCard pokemon={pokemon} />
	{:catch error}
		<p>Error occurred</p>
	{/await}
</div>

<div class='flex py-4 my-8 justify-center gap-8'>
	<a href='{id - 1}' class='flex-1 border-2 border-solid text-center bg-gray-200 py-2 px-4 rounded-md'>Previous</a>
	<a href='{id + 1}' class='flex-1 border-2 border-solid text-center bg-gray-200 py-2 px-4 rounded-md'>Next</a>
</div>