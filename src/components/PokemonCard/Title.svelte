<script lang='ts'>
	import { Pokemon } from '../../classes/Pokemon';

	export let pokemon : Pokemon = new Pokemon(1, 'bulbasaur');

	const hp = pokemon.stats.find(stat => stat.name === 'hp');
</script>

<p class='uppercase'>{pokemon.name}</p>
<p class=''>HP <span class='text-red-600'>{hp.stat}</span></p>
{#each pokemon.types as t}
	<img class='w-8 h-8' src={'/resources/types/' + t.name + '_icon.png'} alt='type'>
{/each}