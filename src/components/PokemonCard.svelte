<script lang='ts'>
	import { Pokemon } from '../classes/Pokemon';
	import Title from './PokemonCard/Title.svelte';
	import Frame from './PokemonCard/Frame.svelte';

	export let pokemon : Pokemon = new Pokemon(1, 'bulbasaur');

	let type = pokemon.types[0].name;
</script>

<style lang='scss'>
	.pokemoncard {
		max-width: 400px;
		max-height:800px;
		margin:auto;
	}
	.justify-content.end {
		justify-content: flex-end;
	}
</style>

<div class='rounded-2xl border-8 border-yellow-300 bg-{type} pokemoncard'>
	<hr class='py-5'>
	<div class='flex justify-content-end'>
		<Title pokemon={pokemon}/>
	</div>
	<div class='flex justify-center'>
		<Frame pokemon={pokemon}/>
	</div>
</div>