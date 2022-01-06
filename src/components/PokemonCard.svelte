<script lang='ts'>
	import { Pokemon } from '../classes/Pokemon';
	import Title from './PokemonCard/Title.svelte';
	import Frame from './PokemonCard/Frame.svelte';

	export let pokemon : Pokemon = new Pokemon(1, 'bulbasaur');

	let background = 'bg-' + pokemon.types[0].name;

	let style = '';

	if(pokemon.types.length > 1)
	{
		style = 'background: linear-gradient(110deg, var(--'+pokemon.types[0].name+') 30%, var(--'+pokemon.types[1].name+') 70%)';
	}
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

<div class='rounded-2xl border-8 border-yellow-300 {background} pokemoncard' style={style}>
	<hr class='py-5'>
	<div class='flex justify-content-end'>
		<Title pokemon={pokemon}/>
	</div>
	<div class='flex justify-center'>
		<Frame pokemon={pokemon}/>
	</div>
</div>