<script lang="ts">
	import { page } from "$app/stores";
	import { categoriasStites } from "$lib/datos";
  import CardLink from "../../components/Cards/CardLink.svelte";
	import Images from "./Images.svelte";
  import  type { CardTarget } from "$lib/interface";

  let sites: CardTarget[] = [];
  let recents: CardTarget[] = [];

  fetch('/api/getLinksWebs?idLink=').then((data)=>data.json()).then((webLinks)=>{
    sites = webLinks;
    let db = 'rec'
    if (localStorage.getItem(db)) {
      recents = JSON.parse(localStorage.getItem(db));
    }else{
      localStorage.setItem(db,JSON.stringify(sites.slice(0,8)))
    }
  })
</script>
<div class="page">
  <div class="flex flex-col">
    <h2 class="self-center text-lg pt-8 pb-4">All Of The <b>Free</b> And <b>Pro</b> Icons Available</h2>
    <h2 class="self-center text-4xl"><b>All 6000+ Awesome Icons</b></h2>
    <h2 class="self-center text-lg pt-3"><b>Dowload</b> in your favorite format</h2>
    <div class="flex self-center gap-5 pt-5 pb-14">
      {#each recents as {title,icon_url}}
        <div class="group grid place-items-center w-14 h-14 p-2 cursor-pointer relative rounded-2xl bg-white bg-opacity-20">
          <img src={icon_url} alt="" class="h-10 object-contain">
          <h3 class="absolute hidden group-hover:block text-sm top-16 left-2/4 translate-x-[-50%]">{@html title.replaceAll(' ','&nbsp;')}</h3>
        </div>
      {/each}
    </div>
    <form class="self-center flex shadow-primary rounded-2xl">
      <div class="flex items-center gap-3 relative pr-3 pl-4 bg-appdark bg-opacity-50 rounded-l-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#cccccc" fill-rule="evenodd" d="M12 2.75A2.25 2.25 0 0 0 9.75 5v.26c.557-.01 1.168-.01 1.84-.01h.821c.67 0 1.282 0 1.84.01V5A2.25 2.25 0 0 0 12 2.75m3.75 2.578V5a3.75 3.75 0 1 0-7.5 0v.328c-.143.012-.28.026-.414.043c-1.01.125-1.842.387-2.55.974c-.707.587-1.118 1.357-1.427 2.327c-.3.94-.526 2.147-.81 3.666l-.021.11c-.402 2.143-.718 3.832-.777 5.163c-.06 1.365.144 2.495.914 3.422c.77.928 1.843 1.336 3.195 1.529c1.32.188 3.037.188 5.218.188h.845c2.18 0 3.898 0 5.217-.188c1.352-.193 2.426-.601 3.196-1.529c.77-.927.972-2.057.913-3.422c-.058-1.331-.375-3.02-.777-5.163l-.02-.11c-.285-1.519-.512-2.727-.81-3.666c-.31-.97-.72-1.74-1.428-2.327c-.707-.587-1.54-.85-2.55-.974a11.23 11.23 0 0 0-.414-.043M8.02 6.86c-.855.105-1.372.304-1.776.64c-.403.334-.694.805-.956 1.627c-.267.84-.478 1.958-.774 3.537c-.416 2.217-.711 3.8-.764 5.013c-.052 1.19.14 1.88.569 2.399c.43.517 1.073.832 2.253 1c1.2.172 2.812.174 5.068.174h.72c2.257 0 3.867-.002 5.068-.173c1.18-.169 1.823-.484 2.253-1.001c.43-.518.621-1.208.57-2.4c-.054-1.211-.349-2.795-.765-5.012c-.296-1.58-.506-2.696-.774-3.537c-.262-.822-.552-1.293-.956-1.628c-.404-.335-.92-.534-1.776-.64c-.876-.108-2.013-.109-3.62-.109h-.72c-1.607 0-2.744.001-3.62.11" clip-rule="evenodd"/></svg>
        <p>All</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#cccccc" fill-rule="evenodd" d="M4.43 8.512a.75.75 0 0 1 1.058-.081L12 14.012l6.512-5.581a.75.75 0 0 1 .976 1.138l-7 6a.75.75 0 0 1-.976 0l-7-6a.75.75 0 0 1-.081-1.057" clip-rule="evenodd"/></svg>
        <div class="categorys absolute top-14 left-0 bg-black">
          <div class="cat">
            {#each new Array(10) as _}
            <div class="px-4">Microsoft&nbsp;System</div>
          {/each}
          </div>
        </div>
      </div>
      <div class="flex items-center gap-3 bg-white dark:bg-appdark dark:bg-opacity-90 pl-4 pr-2 py-2 rounded-r-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#cccccc" fill-rule="evenodd" d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5M1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5c0 2.56-.939 4.902-2.491 6.698l3.271 3.272a.75.75 0 1 1-1.06 1.06l-3.272-3.271A10.21 10.21 0 0 1 11.5 21.75c-5.66 0-10.25-4.59-10.25-10.25" clip-rule="evenodd"/></svg>
        <input type="text" placeholder="Search Web Sites" class="w-80">
        <button class="bg-gray-800 p-2 rounded-xl relative">
          <div class="text-white bg-red-500 absolute px-2 rounded-full text-sm top-[-7px] right-[-7px]">3</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#cccccc" fill-rule="evenodd" d="M6.5 1.75a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M3.25 6.5a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0m14.25 6.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5m-3.25 4.75a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0m-1.5-11a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0m4.75-3.25a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5m-11 9.5a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M3.25 17.5a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0" clip-rule="evenodd"/></svg>
        </button>
      </div>
    </form>

  </div>
  <!-- <Images/> -->
  <!-- Categorias -->
  <!-- <div class="">
    <div class="flex overflow-x-scroll scrollbar-none gap-1">
      {#each categoriasStites as _}
        <a href="/?category={_}" class:category-activo={$page.url.searchParams.get('category') == _} class="flex flex-shrink-0 items-center py-1 gap-1 px-2 rounded-xl">
          {_}
        </a>
      {/each}
    </div>
  </div> -->
  <!-- content -->
  <section class="px-3 pt-2">
    <div class="flex items-center gap-3 overflow-x-scroll scrollbar-none justify-center pt-5">
      <!-- Card -->
      <div class="flex items-center bg-appdark rounded-full p-1 pr-5 gap-3">
        <div class="p-2 rounded-full bg-black bg-opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path class="fill-white" fill-rule="evenodd" d="M7.307 1.25c-.801 0-1.35 0-1.84.133a3.75 3.75 0 0 0-2.36 1.936c-.227.452-.334.991-.491 1.777l-.62 3.098a3.79 3.79 0 0 0 .754 3.117v2.745c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.748.748 1.697 1.08 2.87 1.238c1.139.153 2.595.153 4.432.153h1.113c1.838 0 3.294 0 4.433-.153c1.172-.158 2.121-.49 2.87-1.238c.748-.749 1.08-1.698 1.238-2.87c.153-1.14.153-2.595.153-4.433v-2.744a3.79 3.79 0 0 0 .753-3.118l-.62-3.098c-.156-.786-.264-1.325-.49-1.777a3.75 3.75 0 0 0-2.361-1.936c-.489-.133-1.038-.133-1.84-.133zm10.961 11.5a3.8 3.8 0 0 0 1.482-.298V14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008c-.423.423-1.003.677-2.01.812a15.6 15.6 0 0 1-1.538.114v-2.756c0-.44 0-.82-.028-1.13c-.03-.33-.096-.656-.274-.963a2.25 2.25 0 0 0-.823-.824c-.307-.177-.633-.243-.963-.273c-.31-.028-.69-.028-1.13-.028h-.065c-.44 0-.819 0-1.13.028c-.33.03-.655.096-.962.273a2.25 2.25 0 0 0-.824.824c-.177.307-.243.633-.273.962c-.028.312-.028.691-.028 1.13v2.757a15.6 15.6 0 0 1-1.54-.114c-1.005-.135-1.585-.389-2.008-.812c-.424-.423-.677-1.003-.812-2.009c-.139-1.027-.14-2.382-.14-4.289v-1.548a3.807 3.807 0 0 0 4.588-1.306A3.908 3.908 0 0 0 12 12.75a3.908 3.908 0 0 0 3.162-1.604a3.807 3.807 0 0 0 3.106 1.604m-8.018 8.498c.388.002.804.002 1.25.002h1c.446 0 .861 0 1.25-.002V18.5c0-.481-.001-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.274c-.041-.024-.123-.058-.348-.079A12.831 12.831 0 0 0 12 16.75c-.481 0-.792 0-1.027.022c-.226.02-.307.055-.348.079a.75.75 0 0 0-.275.274c-.023.04-.058.123-.078.348c-.021.235-.022.546-.022 1.027zM8.67 2.75H7.418c-.954 0-1.285.007-1.553.08a2.25 2.25 0 0 0-1.416 1.161c-.125.249-.196.571-.383 1.507l-.598 2.99a2.31 2.31 0 1 0 4.562.683l.069-.686l.004-.042zm.921 5.875l.588-5.875h3.642l.584 5.842a2.417 2.417 0 1 1-4.814.033m8.544-5.795c-.268-.073-.599-.08-1.553-.08h-1.254l.643 6.42a2.309 2.309 0 1 0 4.561-.682l-.597-2.99c-.188-.936-.259-1.258-.383-1.507a2.25 2.25 0 0 0-1.417-1.161" clip-rule="evenodd"/></svg>
        </div>
        <p class="text-white">UI Tools</p>
      </div>
     
      <div class="flex items-center bg-lime-200 dark:bg-appdark rounded-full p-1 pr-4 gap-3">
        <div class="p-2 rounded-full bg-black bg-opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path class="fill-black dark:fill-white" fill-rule="evenodd" d="M7.307 1.25c-.801 0-1.35 0-1.84.133a3.75 3.75 0 0 0-2.36 1.936c-.227.452-.334.991-.491 1.777l-.62 3.098a3.79 3.79 0 0 0 .754 3.117v2.745c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.748.748 1.697 1.08 2.87 1.238c1.139.153 2.595.153 4.432.153h1.113c1.838 0 3.294 0 4.433-.153c1.172-.158 2.121-.49 2.87-1.238c.748-.749 1.08-1.698 1.238-2.87c.153-1.14.153-2.595.153-4.433v-2.744a3.79 3.79 0 0 0 .753-3.118l-.62-3.098c-.156-.786-.264-1.325-.49-1.777a3.75 3.75 0 0 0-2.361-1.936c-.489-.133-1.038-.133-1.84-.133zm10.961 11.5a3.8 3.8 0 0 0 1.482-.298V14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008c-.423.423-1.003.677-2.01.812a15.6 15.6 0 0 1-1.538.114v-2.756c0-.44 0-.82-.028-1.13c-.03-.33-.096-.656-.274-.963a2.25 2.25 0 0 0-.823-.824c-.307-.177-.633-.243-.963-.273c-.31-.028-.69-.028-1.13-.028h-.065c-.44 0-.819 0-1.13.028c-.33.03-.655.096-.962.273a2.25 2.25 0 0 0-.824.824c-.177.307-.243.633-.273.962c-.028.312-.028.691-.028 1.13v2.757a15.6 15.6 0 0 1-1.54-.114c-1.005-.135-1.585-.389-2.008-.812c-.424-.423-.677-1.003-.812-2.009c-.139-1.027-.14-2.382-.14-4.289v-1.548a3.807 3.807 0 0 0 4.588-1.306A3.908 3.908 0 0 0 12 12.75a3.908 3.908 0 0 0 3.162-1.604a3.807 3.807 0 0 0 3.106 1.604m-8.018 8.498c.388.002.804.002 1.25.002h1c.446 0 .861 0 1.25-.002V18.5c0-.481-.001-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.274c-.041-.024-.123-.058-.348-.079A12.831 12.831 0 0 0 12 16.75c-.481 0-.792 0-1.027.022c-.226.02-.307.055-.348.079a.75.75 0 0 0-.275.274c-.023.04-.058.123-.078.348c-.021.235-.022.546-.022 1.027zM8.67 2.75H7.418c-.954 0-1.285.007-1.553.08a2.25 2.25 0 0 0-1.416 1.161c-.125.249-.196.571-.383 1.507l-.598 2.99a2.31 2.31 0 1 0 4.562.683l.069-.686l.004-.042zm.921 5.875l.588-5.875h3.642l.584 5.842a2.417 2.417 0 1 1-4.814.033m8.544-5.795c-.268-.073-.599-.08-1.553-.08h-1.254l.643 6.42a2.309 2.309 0 1 0 4.561-.682l-.597-2.99c-.188-.936-.259-1.258-.383-1.507a2.25 2.25 0 0 0-1.417-1.161" clip-rule="evenodd"/></svg>
        </div>
        <p>Productividad</p>
      </div>
      
    </div>
  </section>
  <section class="flex flex-col p-4 gap-4 pt-8">
    <div class="flex items-center justify-between">
      <h2 class="font-bold text-lg">Mas populares</h2>
      <div class="flex items-center hover:underline cursor-pointer gap-2">
        Ver mas
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path class="fill-black dark:fill-white" fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd"/></svg>
      </div>
    </div>
    <div class="cards grid gap-4">
      {#each sites as _}
        <CardLink props={_}/>
      {:else}
        <div class="flex justify-between">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#0284c7" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/><path fill="#0284c7" d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>
        </div>
      {/each}
    </div>
  </section>
</div>
<style>
  .page{
    background-image: url(/image/back.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    
  }
  .categorys{
    max-height: 100px;
    padding: 6px;
    border-radius: 10px;
  }
  .cat{
    overflow-y: scroll;
    max-height: 88px;
  }
  .cat::-webkit-scrollbar {
    width: 6px;     /* Tamaño del scroll en vertical */
    height: 8px;    /* Tamaño del scroll en horizontal */
  }
  .cat::-webkit-scrollbar-thumb {
    background: var(--bg-scrollbar-thumb);
    border-radius: 4px;
  }
  .cat::-webkit-scrollbar-thumb:hover {
    background: var(--bg-scrollbar-thumb_hover);
  }
  /* .category-activo{
    position: relative;
    color: blue;
    font-weight: bold;
  }
  .category-activo::before{
    content: " ";
    height: 4px;
    width: 50%;
    position: absolute;
    background-color: blue;
    left: 25%;
    border-radius: 10px;
    bottom: 0;
  } */
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
  @media (min-width:1201px){
    .cards{
      @apply grid-cols-4;
    }
  }

</style>