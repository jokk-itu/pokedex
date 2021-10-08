<script lang='ts'>
	import GenerationFilter from '../components/GenerationFilter.svelte';
	import GridCard from '../components/GridCard.svelte';
	import { pokemon } from '../stores/PokeStore';
	import { Pokemon } from '../classes/Pokemon';
	import PokeText from '../components/PokeText.svelte';
	import TypeFilter from '../components/TypeFilter.svelte';

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

<div class='gap-4 grid my-14 lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
	<GenerationFilter text='1.gen' limit={151} offset={0}/>
	<GenerationFilter text='2.gen' limit={99} offset={151}/>
	<GenerationFilter text='3.gen' limit={135} offset={251}/>
	<GenerationFilter text='4.gen' limit={106} offset={386}/>
</div>

<hr>

<div class='gap-4 grid my-14 lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
	<TypeFilter classes='bg-normal' text='normal' typeId={1}/>
	<TypeFilter classes='bg-fighting' text='fighting' typeId={2}/>
	<TypeFilter classes='bg-flying' text='flying' typeId={3}/>
	<TypeFilter classes='bg-poison' text='poison' typeId={4}/>
	<TypeFilter classes='bg-ground' text='ground' typeId={5}/>
	<TypeFilter classes='bg-rock' text='rock' typeId={6}/>
	<TypeFilter classes='bg-bug' text='bug' typeId={7}/>
	<TypeFilter classes='bg-ghost' text='ghost' typeId={8}/>
	<TypeFilter classes='bg-steel' text='steel' typeId={9}/>
	<TypeFilter classes='bg-fire' text='fire' typeId={10}/>
	<TypeFilter classes='bg-water' text='water' typeId={11}/>
	<TypeFilter classes='bg-grass' text='grass' typeId={12}/>
	<TypeFilter classes='bg-electric' text='electric' typeId={13}/>
	<TypeFilter classes='bg-psychic' text='psychic' typeId={14}/>
	<TypeFilter classes='bg-ice' text='ice' typeId={15}/>
	<TypeFilter classes='bg-dragon' text='dragon' typeId={16}/>
	<TypeFilter classes='bg-dark' text='dark' typeId={17}/>
	<TypeFilter classes='bg-fairy' text='fairy' typeId={18}/>
</div>

<hr>

<div class='py-4 grid gap-4 md:grid-cols-2 grid-cols-1'>
	{#each filtered as {id, name, image}}
		<GridCard id={id} name={name} image={image}/>
	{/each}
</div>