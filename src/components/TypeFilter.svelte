<script lang='ts'>
	import { fetchPokemonByType } from '../stores/PokeStore';

	const internal_classes = 'mx-6 rounded-2xl py-1 px-2 flex flex-col items-center text-center';

	export let classes : string;
	export let text : string;
	export let typeId : number;
</script>

<button on:click={async () => await fetchPokemonByType(typeId)} class='{internal_classes} {classes}'>{text}</button>