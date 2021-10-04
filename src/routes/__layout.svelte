<script lang='ts'>
	import Nav from '../components/Nav.svelte';
</script>

<Nav/>
<div class='p-8 max-w-6xl mx-auto'>
	<slot></slot>
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>