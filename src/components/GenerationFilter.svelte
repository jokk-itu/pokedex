<script lang='ts'>
	import { fetchPokemon } from '../stores/PokeStore';

	const internal_classes = 'mx-6 rounded-2xl py-1 px-2 bg-green-200 flex flex-col items-center text-center';
	export let text : string;
	export let limit : number;
	export let offset : number;

	async function clickFetch(limit : number, offset : number) : Promise<void> {
		await fetchPokemon(limit, offset);
	}
</script>

<button on:click={async () => await clickFetch(limit, offset)} class={internal_classes}>{text}</button>