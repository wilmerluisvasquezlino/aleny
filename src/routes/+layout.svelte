<script>
  import "../app.css";
  import {setUserTheme} from "$lib/tailwindTheme";
  import { nameApp } from "$lib/infoCompany";
	import { onMount } from "svelte";
	import SetTheme from "../components/SetTheme.svelte";
	import InputSearch from "../components/Inputs/InputSearch.svelte";
  onMount(()=>{
    setUserTheme()
    document.title = nameApp
  });
</script>
<div>
  <header class="flex p-5">
    <InputSearch/>
    <SetTheme/>
    
    <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="" alt="Bordered avatar">

  </header>
  <slot />
</div>
<style>

</style>