<script lang="ts">
	import { Pokemon } from '../../classes/Pokemon';

	export let pokemon : Pokemon = Pokemon.defaultInstance();

	async function fetchAbility(url : string)
	{
		const res = await fetch(url);
		return await res.json();
	}
</script>

{#each pokemon.abilities as ability}
	<p>{ability.name}</p>
	{#await fetchAbility(ability.url) then a}
		<p>{a.effect_entries.find(e => e.language.name === 'en').short_effect}</p>
	{:catch e}
		<p>Error fetching description</p>
	{/await}
{/each}