<script lang="ts">
	import Prism from "prismjs";

	export let lang = "bash";
	export let inline = false;

	let slot: string;
	let command = "";
	$: {
		if(slot) {
			// get the actual command name, skip "sudo" or "doas" if present, but dont remove it from the slot
			command = slot.replace(/(^sudo|doas$) /, "");
		}
	}
</script>

<div style={`display: ${inline ? "inline-" : ""}flex; align-items: center; gap: 5px; align-items: center;`}>
	<code class={"language-" + lang} bind:textContent={slot} contenteditable="false">
		<slot />
	</code>
	<a href={"https://command-not-found.com/" + command.split(" ")[0]} target="_blank">
		[CNO]
	</a>
	<a href={"https://explainshell.com/explain?cmd=" + encodeURI(command)} target="_blank">
		[ES]
	</a>
</div>
{#if !inline}
	<!-- <br> -->
{/if}