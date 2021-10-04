<script>
	import { page } from '$app/stores';
	import { Pokemon } from '../../classes/Pokemon';
	const id = parseInt($page.params.id);
</script>

<style lang='scss'>
	.circle {
			border-radius: 100px;
	}
</style>

<div class='grid-cols-1 py-4'>
	{#await Pokemon.instance(id)}
		<svg class='animate-spin h-5 w-5' viewBox='0 0 24 24'></svg>
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

<div class='flex py-4 my-8 justify-center gap-8'>
	<a href='{id - 1}' class='flex-1 border-2 border-solid text-center bg-gray-200 py-2 px-4 rounded-md'>Previous</a>
	<a href='{id + 1}' class='flex-1 border-2 border-solid text-center bg-gray-200 py-2 px-4 rounded-md'>Next</a>
</div>