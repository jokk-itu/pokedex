<script lang='ts'>
	import { pokemon } from '../stores/PokeStore';

	let search : string;
	let filtered;

	$: {
		if(search) {
			filtered = $pokemon.filter(p => p.name.includes(search));
		}
		else {
			filtered = [... $pokemon];
		}
	}
</script>

<h1 class='text-4xl text-center my-8 uppercase'>PokeDex</h1>

<input bind:value={ search } class='w-full rounded-md text-lg p-4 border-2 border-gray-200' placeholder='Search for pokemon' type='text' name='filter' id='filter' />

<div class='py-4 grid gap-4 md:grid-cols-2 grid-cols-1'>
{#each filtered as {id, name, image}}
	<a class='flex flex-col items-center bg-gray-200 rounded-2xl shadow-lg p-12 m-4 text-center'  href='/pokemon/{id}' id='{id}'>
		<p class='text-xl'>{id}</p>
		<img class='h-40 w-40' alt='{name} image' src='{image}'/>
		<p class='text-2xl break-words uppercase'>{name}</p>
	</a>
{/each}
</div>