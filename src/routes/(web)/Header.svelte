<script lang="ts">
	import { get } from "svelte/store";
  import InputSearch from "../../components/Inputs/InputSearch.svelte";
	import SetTheme from "../../components/SetTheme.svelte";
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import Button from "../../components/button/Button.svelte";
  let avatar_url:string | null= ""
  onMount(()=>{
    avatar_url =    localStorage.getItem('avatar_url')
  })

  console.log($page);
</script>
<header class="flex items-center justify-between gap-5 p-4 z-50 bg-applight dark:bg-appdark">
  <!-- left -->
  <div class="">
    <a class="flex items-center gap-3 pl-3" href="/">
      <div class="flex-shrink-0">
        <img src="/image/favicon.svg" alt="" class="w-8">
      </div>
      <h2 class="name-f text-2xl font-bold hidden sm:block">Aleny</h2>
    </a>
  </div>
  <!-- center -->
  <div class="flex gap-5">
    <a href="/" class="pb-2" class:activo={$page.url.pathname == '/'}>Home</a>
    <a href="/test" class="text-gray-300" class:activo={$page.url.pathname == '/n'}>Favoritous</a>
    <a href="/" class="text-gray-300" class:activo={$page.url.pathname == '/a'}>Account</a>
  </div>
  <!-- right -->
  <div class="flex items-center p-2 gap-5">
    <!-- <InputSearch/> -->
 
    
    <SetTheme/>
    <a href="/create" class="px-3 py-2 bg-blue-500 text-xs rounded-lg">
      Create&nbsp;New
    </a>
    <Button>Create New</Button>
    <a href="/logIn">
      <img class="w-10 h-10 p-1 rounded-full " src={avatar_url} alt="Bordered avatar">
    </a>
  </div>
 
  
</header>
<style>
  .name-f{
    font-family: Righteous;
    font-weight: normal;
  }
  a.activo{
    position: relative;
    color: rgb(0, 195, 255);
    font-weight: bold;
  }
  a.activo::before{
    content: " ";
    height: 4px;
    width: 50%;
    position: absolute;
    background-color: rgb(0, 238, 255);
    left: 25%;
    border-radius: 10px;
    bottom: 0;
  }
</style>