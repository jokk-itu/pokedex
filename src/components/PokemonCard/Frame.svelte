<script lang="ts">
	import { Pokemon } from '../../classes/Pokemon';

	export let pokemon : Pokemon = Pokemon.defaultInstance();
</script>

<img src={pokemon.image} alt={pokemon.name}>