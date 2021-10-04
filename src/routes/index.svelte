<script lang='ts'>
	import { pokemon, fetchPokemon } from '../stores/PokeStore';

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
	async function clickFetch(limit : number, offset : number) : Promise<void> {
		console.log('loaded');
		await fetchPokemon(limit, offset);
	}
</script>

<h1 class='text-4xl text-center my-8 uppercase'>PokeDex</h1>

<input bind:value={ search } class='w-full rounded-md text-lg p-4 border-2 border-gray-200' placeholder='Search for pokemon' type='text' name='filter' id='filter' />

<div class='grid my-14 lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
	<button id='firstGen' on:click={async () => await clickFetch(151, 0)} class='mx-6 rounded-2xl py-1 px-2 bg-green-200 flex flex-col items-center text-center'>1. gen</button>
	<!-- 152 - 251 -->
	<button id='secondGen' on:click={async () => await clickFetch(99, 151)} class='mx-6 rounded-2xl py-1 px-2 bg-green-200 flex flex-col items-center text-center'>2. gen</button>
	<!-- 252 - 386 -->
	<button id='thirdGen' on:click={async () => await clickFetch(133, 251)} class='mx-6 rounded-2xl py-1 px-2 bg-green-200 flex flex-col items-center text-center'>3. gen</button>
	<!-- 387 - 493 -->
	<button id='fourthGen' on:click={async () => await clickFetch(106, 386)} class='mx-6 rounded-2xl py-1 px-2 bg-green-200 flex flex-col items-center text-center'>4. gen</button>
</div>

<div class='py-4 grid gap-4 md:grid-cols-2 grid-cols-1'>
{#each filtered as {id, name, image}}
	<a class='flex flex-col items-center bg-gray-200 rounded-2xl shadow-lg p-12 m-4 text-center'  href='/pokemon/{id}' id='{id}'>
		<p class='text-xl'>{id}</p>
		<img class='h-40 w-40' alt='{name} image' src='{image}'/>
		<p class='text-2xl break-words uppercase'>{name}</p>
	</a>
{/each}
</div>