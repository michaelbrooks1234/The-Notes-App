<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<p>{bruh}</p>
	</div>
</div>
<script lang="ts">
    import { onMount } from "svelte";

	let bruh:string = '';
	async function getBruh() {
		const responseData = await fetch('http://localhost:3000/');	
		const response = (await responseData.json()).data;
		bruh = response;	
		return;
	}
	onMount(getBruh);
</script>