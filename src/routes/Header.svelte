<script>
	import InputSearch from "../components/Inputs/InputSearch.svelte";
	import SetTheme from "../components/SetTheme.svelte";


</script>
<header class="flex items-center p-5 gap-5">
  <div class="flex items-center gap-3">
    <div class="">
      <img src="/favicon.svg" alt="" class="w-8">
    </div>
    <h2 class="text-2xl font-bold">Aleny</h2>
  </div>
  <InputSearch/>
  <button class="flex px-3 pr-5 py-2 text-white bg-blue-600 rounded-full gap-2 items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#ffffff" d="M19.739 4.261a6.867 6.867 0 0 0-9.711 0l-.72.721a.75.75 0 0 0 1.06 1.06l.72-.72a5.367 5.367 0 1 1 7.59 7.59l-.72.72a.75.75 0 0 0 1.06 1.06l.72-.72a6.867 6.867 0 0 0 0-9.71M6.043 9.307a.75.75 0 0 1 0 1.06l-.721.722a5.367 5.367 0 1 0 7.59 7.59l.72-.722a.75.75 0 0 1 1.06 1.06l-.72.722a6.867 6.867 0 0 1-9.71-9.711l.72-.72a.75.75 0 0 1 1.06 0"/><path fill="#ffffff" d="M14.693 9.307a.75.75 0 0 1 0 1.06l-4.325 4.326a.75.75 0 1 1-1.06-1.06l4.324-4.326a.75.75 0 0 1 1.06 0"/></svg>
    Crear
  </button>
  <SetTheme/>
 
  <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://mighty.tools/mockmind-api/content/human/5.jpg" alt="Bordered avatar">
</header>
<style>
  
</style>