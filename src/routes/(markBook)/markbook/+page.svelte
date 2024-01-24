<script lang="ts">
	import MarkBook from "../../../components/MarkBook/MarkBook.svelte";
	import type { PageData } from "./$types";
  
  export let data: PageData;
</script>
<div class="">
  <MarkBook text={data.markdown}/>
</div>
<style>

</style>