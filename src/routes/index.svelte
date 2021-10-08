<script lang='ts'>
	import GenerationFilter from '../components/GenerationFilter.svelte';
	import GridCard from '../components/GridCard.svelte';
	import { pokemon } from '../stores/PokeStore';
	import { Pokemon } from '../classes/Pokemon';
	import PokeText from '../components/PokeText.svelte';

	let search : string;
	let filtered: Pokemon[];

	$: {
		if(search) {
			filtered = $pokemon.filter(p => p.name.includes(search));
		}
		else {
			filtered = [... $pokemon];
		}
	}
</script>

<PokeText text='pokedex'/>

<input bind:value={ search } class='w-full rounded-md text-lg p-4 border-2 border-gray-200' placeholder='Search for pokemon' type='text' name='filter' id='filter' />

<div class='grid my-14 lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
	<GenerationFilter text='1.gen' limit={151} offset={0}/>
	<GenerationFilter text='2.gen' limit={99} offset={151}/>
	<GenerationFilter text='3.gen' limit={135} offset={251}/>
	<GenerationFilter text='4.gen' limit={106} offset={386}/>
</div>

<div class='py-4 grid gap-4 md:grid-cols-2 grid-cols-1'>
{#each filtered as {id, name, image}}
	<GridCard id={id} name={name} image={image}/>
{/each}
</div>