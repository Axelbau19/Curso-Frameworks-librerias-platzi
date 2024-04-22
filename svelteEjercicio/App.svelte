<script>
	import Form  from'./Form.svelte';
	import {title} from "./style.js"
</script>

<main>
<h2 class="{title}">
	Peliculas
</h2>
<Form></Form>
</main>
<style>
:global(body){
	--bg: #ffe9c5;
	--color: #e54b00;
	--color2: #512513;
	background: var(--bg);
	color: val(--color);
}
</style>