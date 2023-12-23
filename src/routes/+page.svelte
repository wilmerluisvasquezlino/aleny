<script>
	import App from "../components/Cards/App.svelte";
import CardImage from "../components/Cards/CardImage.svelte";


</script>
<div class="">
  <section class="flex flex-col p-4 gap-4">
    <h2 class="font-bold pl-5">Destacado</h2>
    <div class="cards grid gap-4">
      {#each new Array(10) as _}
        <App/>
      {/each}
    </div>
  </section>
</div>
<style>
  @media (min-width:0px) and (max-width:400px){
    .cards{
      @apply grid-cols-1;
    }
  }
  @media (min-width:401px) and (max-width:800px){
    .cards{
      @apply grid-cols-2;
    }
  }
  @media (min-width:801px) and (max-width:1200px){
    .cards{
      @apply grid-cols-3;
    }
  }
  @media (min-width:1201px) and (max-width:1600px){
    .cards{
      @apply grid-cols-4;
    }
  }
  @media (min-width:1601px) and (max-width:2000px){
    .cards{
      @apply grid-cols-5;
    }
  }
  @media (min-width:2001px) and (max-width:2400px){
    .cards{
      @apply grid-cols-6;
    }
  }
  @media (min-width:2401px){
    .cards{
      @apply grid-cols-7;
    }
  }
</style>