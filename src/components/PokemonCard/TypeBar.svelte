<script lang="ts">
	import { Pokemon } from '../../classes/Pokemon';

	export let pokemon : Pokemon = Pokemon.defaultInstance();

	async function fetchType(url : string) {
		const res = await fetch(url);
		return await res.json();
	}
</script>

<!--PLACE HEADER VALUES FIRST (WEAKNESS, RESISTANCE, POWER)-->
{#each pokemon.types as type}
	{#await fetchType(type.url) then t}
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