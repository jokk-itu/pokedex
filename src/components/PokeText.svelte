<script lang='ts'>
	export let text : string;
</script>

<style>
    .title {
        font-family: pokemon, serif;
        font-weight: bold;
    }
</style>
<h1 class='title text-yellow-400 text-8xl text-center my-8'>
{#each text as t, i}
	<span class={(i & 1) === 0 ? 'uppercase' : 'lowercase'}>{t}</span>
{/each}
</h1>