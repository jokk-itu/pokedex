<script lang='ts'>
	import { pokemon } from '../stores/PokeStore';
</script>

<h1 class='text-4xl text-center my-8 uppercase'>PokeDex</h1>

{#each $pokemon as {id, name, image}}
	<a href='/pokemon/${id}'>
		<p>{id}. {name}</p>
		<img alt='{name} image' src=''/>
	</a>
{/each}