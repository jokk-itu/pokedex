<script context="module">
	import '../global.css';
</script>

<script lang='ts'>
	import Nav from '../components/Nav.svelte';
</script>

<Nav/>
<div class='p-8 max-w-6xl mx-auto'>
	<slot></slot>
</div>