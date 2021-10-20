<script lang="ts">
	import { Pokemon } from '../../classes/Pokemon';

	export let pokemon : Pokemon = Pokemon.defaultInstance();
</script>

<p>{pokemon.xp}</p>
<p>{pokemon.height}</p>
<p>{pokemon.weight}</p>