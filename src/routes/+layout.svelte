<script>
  import "../app.css";
  import {setUserTheme} from "$lib/tailwindTheme";
  import { nameApp } from "$lib/infoCompany";
	import { onMount } from "svelte";
	import SetTheme from "../components/SetTheme.svelte";
	import InputSearch from "../components/Inputs/InputSearch.svelte";
	import Header from "./Header.svelte";
  onMount(()=>{
    setUserTheme()
    document.title = nameApp
  });
</script>
<div class="flex flex-col items-center">
  <div class="app w-full">
    <Header/>
    <slot />
  </div>
</div>
<style>
  .app{
    max-width: 1200px;
  }
</style>