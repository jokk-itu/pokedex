<script lang='ts'>
	export let text : string;
</script>

<style>
    .title {
        font-family: pokemon, serif;
        font-weight: bold;
    }
</style>

<h1 class='w-full title text-yellow-400 lg:text-8xl text-5xl text-center my-8'>
{#each text as t, i}
	<span class={(i & 1) === 0 ? 'uppercase' : 'lowercase'}>{t}</span>
{/each}
</h1>