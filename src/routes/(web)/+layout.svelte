<script>
	import { goto } from "$app/navigation";
	import { supabase } from "$lib/supabase/supabase";
	import Header from "./Header.svelte";

  supabase.auth.onAuthStateChange((event,session) =>{
    // if (!session) {
    //   goto('/login');
    // }
  })
  

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