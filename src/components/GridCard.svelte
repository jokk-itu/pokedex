<script lang='ts'>
	export let id : string;
	export let image : string;
	export let name : string;

	const classes = 'flex flex-col items-center bg-gray-200 rounded-2xl shadow-lg p-12 m-4 text-center';
</script>

<a class={classes}  href='/pokemon/{id}' id='{id}'>
	<p class='text-xl'>{id}</p>
	<img class='h-40 w-40' alt='{name} image' src='{image}'/>
	<p class='text-2xl break-words uppercase'>{name}</p>
</a>