<script lang='ts'>
	import Nav from '../components/Nav.svelte';
</script>

<Nav/>
<div class='p-8 max-w-6xl mx-auto'>
	<slot></slot>
</div>

<style>
	@font-face {
			font-family: pokemon;
			src: url("/PokemonHollow.ttf");
  }
  @font-face {
      font-family: pokemon;
      src: url("/PokemonSolid.ttf");
			font-weight: bold;
  }
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>