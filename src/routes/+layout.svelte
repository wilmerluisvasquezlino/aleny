<script>
  import "../app.css";
  import {setUserTheme} from "$lib/tailwindTheme";
  import { nameApp } from "$lib/infoCompany";
	import { onMount } from "svelte";
	
  onMount(()=>{
    setUserTheme()
    document.title = nameApp;
  });
  
</script>
<slot />
<style>
  
</style>