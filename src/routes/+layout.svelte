<script>
  import "../app.css";
  import {setUserTheme} from "$lib/tailwindTheme";
	import { onMount } from "svelte";
  onMount(()=>{
    setUserTheme()
  })
</script>

<slot />