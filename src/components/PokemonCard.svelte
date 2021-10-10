<script lang='ts'>
	import { Pokemon } from '../classes/Pokemon';
	export let pokemon : Pokemon = new Pokemon(1, 'bulbasaur');

	let type = pokemon.types[0];
	let hp = pokemon.stats.find(stat => stat.name === 'hp');
	let moves = pokemon.moves.slice(Math.floor(Math.random() * (pokemon.moves.length - 2)), 2);

	async function fetchPokemonSpecies() : Promise<string> {
		const url = 'https://pokeapi.co/api/v2/pokemon-species/' + pokemon.id;
		const res = await fetch(url);
		const data = await res.json();
		const evolveChain = data.evolves_from_species;
		return evolveChain == null ? null : evolveChain.name;
	}

	async function fetchPokemonAbility(url : string) {
		const res = await fetch(url);
		return await res.json();
	}

	async function fetchPokemonMove(url : string) {
		const res = await fetch(url);
		return await res.json();
	}

	async function fetchPokemonType(url : string) {
		const res = await fetch(url);
		return await res.json();
	}
</script>

<div class='grid-cols-1 rounded-2xl border-8 border-yellow-300 bg-{type}'>
	<hr class='py-5'>
	<div class='flex-1'>
		<p class='uppercase'>{pokemon.name}</p>
		<p class=''>HP <span class='text-red-600'>{hp.stat}</span></p>
		{#each pokemon.types as t}
			<img class='w-8 h-8' src={'/resources/types/' + t.name + '_icon.png'} alt='type'>
		{/each}
	</div>
	<div class='flex'>
		<div class='text-center bg-gray-400'>
			{#await fetchPokemonSpecies() then pokemon_species}
				{#if pokemon_species === null}
					<p>Basic</p>
				{:else}
					<p>{pokemon_species}</p>
					<img src='/resources/pokemon/{pokemon.id-1}.png' alt='evolve_chain'>
				{/if}
			{/await}
		</div>
		<img src={pokemon.image} alt={pokemon.name}>
	</div>
	<div class='flex'>
		<p>{pokemon.xp}</p>
		<p>{pokemon.height}</p>
		<p>{pokemon.weight}</p>
	</div>
	<div class='flex'>
		{#each pokemon.abilities as ability}
			<p>{ability.name}</p>
			{#await fetchPokemonAbility(ability.url) then a}
				<p>{a.effect_entries.find(e => e.language.name === 'en').short_effect}</p>
			{:catch e}
				<p>Error fetching description</p>
			{/await}
		{/each}
	</div>
	<hr class='py-5'>
	<div class='flex'>
		{#each moves as move}
			{#await fetchPokemonMove(move.url) then m}
				<img src='/resources/types/{m.type.name}_icon.png' alt={m.name}>
				<p>{m.name}</p>
				<p>{m.effect_entries.find(m1 => m1.language.name === 'en').short_effect}</p>
				<p>{m.power}</p>
			{:catch e}
				<p>Error while fetching move</p>
			{/await}
		{/each}
	</div>
	<div class='flex'>
		<!--PLACE HEADER VALUES FIRST (WEAKNESS, RESISTANCE, POWER)-->
		{#each pokemon.types as type}
			{#await fetchPokemonType(type.url) then t}
				{#each t.damage_relations.double_damage_from as weakness}
					<img src='/resources/types/{weakness.name}_icon.png' alt='weakness-{weakness.name}'>
				{/each}
				{#each t.damage_relations.no_damage_from as resistance}
					<img src='/resources/types/{resistance.name}_icon.png' alt='weakness-{resistance.name}'>
				{/each}
				{#each t.damage_relations.double_damage_to as power}
					<img src='/resources/types/{power.name}_icon.png' alt='weakness-{power.name}'>
				{/each}
			{:catch e}
				<p>Error while fetching type</p>
			{/await}
		{/each}
	</div>
</div>