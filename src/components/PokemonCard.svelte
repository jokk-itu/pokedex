<script lang='ts'>
	import { Pokemon } from '../classes/Pokemon';
	export let pokemon : Pokemon;

	let type = pokemon.types.pop();
	let hp = pokemon.stats.find(stat => stat.name === 'hp');
</script>

<div class='grid-cols-1 rounded-2xl border-8 border-yellow-300 {type}'>
	<hr class='py-5'>
	<div class='flex-1'>
		<p class='uppercase'>{pokemon.name}</p>
		<p class=''>HP {hp.stat}</p>
		<img class='w-8 h-8' src={'/resources/types/' + type.name + '_icon.png'} alt='type'>
	</div>
	<div class='flex'>
		<img src='' alt=''>
		<!--IMAGE WITH BASE OR PREVIOUS EVOLUTION IN LEFT TOP CORNER-->
	</div>
	<div class='flex'>
		<!--BASE XP-->
		<!--HEIGHT-->
		<!--WEIGHT-->
	</div>
	<div class='flex'>
		<!--ABILITY NAME-->
		<!--ABILITY DESCRIPTION-->
	</div>
	<hr class='py-5'>
	<div class='flex'>
		<!--MOVE TYPE ICON-->
		<!--MOVE NAME-->
		<!--MOVE DESCRIPTION-->
		<!--MOVE POWER-->
	</div>
	<div class='flex'>
		<!--WEAKNESS TYPE ICON-->
		<!--RESISTANCE TYPE ICON-->
		<!--POWER TYPE ICON-->
	</div>
</div>