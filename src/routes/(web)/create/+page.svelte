<script lang="ts">
	import { categoriasStites } from "$lib/datos";

  let urlImg: string = "";
  let isLarge = false;
  $: isLarge = urlImg.length > 0  ;
  let tags: string[] = ['Framework CSS','Manier'];
  let inputTagValue: string;
  function addTag(e:KeyboardEvent): void {
    if (e.keyCode == 13) {
      tags = [...tags,inputTagValue]
      inputTagValue = ''
    }
  }
</script>
<div class="flex flex-col p-3 gap-3">
  <img src={urlImg} alt="" class:kl={!isLarge} class="w-14 h-14 border-none rounded-lg">
  <input type="text" placeholder="URL Icon" bind:value={urlImg} class="border dark:border-gray-700 px-3 py-1 rounded-xl">
  <div class="flex overflow-hidden bg-black bg-opacity-10 rounded-xl">
    <div class="bg-black bg-opacity-10 py-2 px-3">Title</div>
    <input type="text" class="pl-3" placeholder="write...">
  </div>
  <div class="flex overflow-hidden shadow-2xl rounded-xl">
    <div class="bg-black bg-opacity-10 py-2 px-3">https://</div>
    <input type="text" class="pl-3" placeholder="Domain Web Site">
  </div>
  <input type="text" placeholder="Descripcion" bind:value={urlImg} class="border dark:border-gray-700 px-3 py-1 rounded-xl">
  <div class="flex flex-wrap gap-2">
    {#each tags as tag}
      <div class="bg-sky-200 text-sky-800 px-2 rounded-md">{tag}</div>
    {/each}
    <input class="text-sky-200 px-2 rounded-md" placeholder="#agregar" bind:value={inputTagValue} on:keyup={addTag}>
  </div>
  <div class="">
    <h3 class="font-bold text-lg pb-2">Categorias</h3>
    <div class="flex flex-wrap gap-5 pl-3">
      {#each categoriasStites as _}
        <label class="flex gap-2 items-center cursor-pointer">
          <input type="checkbox" name="" class="peer ">
          <p class="peer-checked:font-bold peer-checked:text-blue-500 dark:peer-checked:text-blue-400">{_}</p>
        </label>
      {/each}
    </div>
  </div>
  <button class="bg-sky-500 text-white py-3 shadow-2xl rounded-xl">Crear</button>
</div>
<style>
  img{
    background-color: rgba(0, 0, 0, 0.089);
    background-position: center;
    background-size: 30px;
    background-repeat: no-repeat;
  }
  .kl{
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMwODkxYjIiIGQ9Ik0xMiAyMmMtNC43MTQgMC03LjA3MSAwLTguNTM2LTEuNDY1QzIgMTkuMDcyIDIgMTYuNzE0IDIgMTJzMC03LjA3MSAxLjQ2NC04LjUzNkM0LjkzIDIgNy4yODYgMiAxMiAyYzQuNzE0IDAgNy4wNzEgMCA4LjUzNSAxLjQ2NEMyMiA0LjkzIDIyIDcuMjg2IDIyIDEyYzAgNC43MTQgMCA3LjA3MS0xLjQ2NSA4LjUzNUMxOS4wNzIgMjIgMTYuNzE0IDIyIDEyIDIyIiBvcGFjaXR5PSIuNSIvPjxwYXRoIGZpbGw9IiMwODkxYjIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDcuMjVhNC43NSA0Ljc1IDAgMSAwIDAgOS41YTQuNzUgNC43NSAwIDAgMCAwLTkuNW0wIDEuNWEzLjI1IDMuMjUgMCAxIDAgMCA2LjVhMy4yNSAzLjI1IDAgMCAwIDAtNi41IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  }
</style>