<script>
	import { page } from '$app/stores';
	import { Pokemon } from '../../classes/Pokemon';
	const id = parseInt($page.params.id);
</script>

<style>
	.circle {
			border-radius: 100px;
	}
</style>

<div class='grid-cols-1 py-4'>
	{#await Pokemon.instance(id)}
	{:then pokemon}
		<div class='my-10 flex flex-col items-center text-center'>
			<img class='rounded-3xl circle bg-gray-200 shadow-2xl h-40 w-40' src='{pokemon.image}'  alt='Image of {pokemon.name}'/>
			<p class='mt-10 text-lg'>{pokemon.id}</p>
			<p class='uppercase mt-5 text-2xl'>{pokemon.name}</p>
		</div>
	{:catch error}
		<p>Error occurred</p>
	{/await}
</div>