<script>
import {form, button} from "./style.js"
import {setStyle} from "./Themes.js"
	const movies = [
		            {
              name: "Avengers",
              available: 3,
              quantity: 0,
            },
            {
              name: "Terminator",
              available: 5,
              quantity: 0,
            },
	]
</script>
{#each movies as movie}
<form class="{form}" on:mouseenter={()=>setStyle(movie.name)}>
	<h3>{movie.name}</h3>
	<button class="{button} "type="button" on:click={() => movie.quantity-=1} disabled={movie.quantity<=0}>-</button>
	{movie.quantity}
	<button class="{button}" type="button" on:click={() => movie.quantity +=1} disabled={movie.quantity==movie.available}>+</button>
</form>
{/each}
