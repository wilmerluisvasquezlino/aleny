<script lang="ts">
  import { enhance } from '$app/forms';
	import { setDarkTheme, setLightTheme, setSystemTheme } from '$lib/tailwindTheme';
  let load: boolean = true;
  
  export let form;
  $:{
    if (form) {
      load=true
    }
  };
</script>

<div class="flex min-h-screen flex-col justify-center overflow-hidden bg-white dark:bg-blue-950 py-6 sm:py-12">
  <button on:click={()=>{setLightTheme()}}>lig</button>
<button on:click={()=>{setDarkTheme()}}>dark</button>
<button on:click={()=>{setSystemTheme()}}>system</button>
  <div class=" inset-0 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
  <div class=" bg-white bg-opacity-10  px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
    <div class="mx-auto max-w-md">
      <form method="post" use:enhance>
        <input type="text" placeholder="Icon" name="icon">
        <input type="text" placeholder="Title" name="name">
        <input type="text" placeholder="Link" name="link">
        <select name="category" id="">
          <option value="Productividad">Productividad</option>
          <option value="Arte y Diseño">Arte y Diseño</option>
        </select>
        <button on:click={()=>{load=false}}>{load?'send':'enviando...'}</button>
      </form>
    </div>
  </div>
</div>
<style>
  input{
    outline-color: rgb(140, 0, 255);
    border-radius: 0;
    padding: 10px 20px;
  }
</style>
