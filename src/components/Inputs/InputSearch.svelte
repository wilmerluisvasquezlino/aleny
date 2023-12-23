<script lang="ts">
  function blend(valueSearch:string, ...searchesFound:string[]): string[][] {
    valueSearch = valueSearch.trim();

    searchesFound = searchesFound.filter((text):boolean => {
      let f = new RegExp(`^${valueSearch}`,"i")
      return f.test(text)
    })

    const collection: string[][] = searchesFound.map((text: string): string[] =>{
      return [
        text.slice(0,valueSearch.length).replaceAll(" ","&nbsp;"),
        text.slice(valueSearch.length).replaceAll(" ","&nbsp;"),
        text
      ]
    })
    return collection
  }

  let theValueIsGreaterThanZero: boolean = false;
  let inputSearch: HTMLInputElement;
  let activeInputSearch: boolean = false;
  let tabs: string[][] = [];
  async function onKeyup(eventKeyup: KeyboardEvent) {
    const target = eventKeyup.target as HTMLInputElement;
    theValueIsGreaterThanZero = target.value.length! > 0;
    let data = ['niño','Fluer','lino','figma','Clean Code | Github',"Fitues",'IDE','icons']
    tabs = blend(target.value, ...data);
    if (tabs.length==0) {
      activeInputSearch=false;
    }
  }
  function deleteValueInput(): void {
    inputSearch.value = "";
    theValueIsGreaterThanZero = false;
  }
  function activeInputSearchOnFocus() {
    activeInputSearch = true;
  }
  function desactiveInputSearchOnBlur() {
    activeInputSearch = true;
    setTimeout(() => {
      activeInputSearch = false;
    }, 300);
  }
  function setValueInputSearch(value: string): void {
    inputSearch.value = value;   
  }
</script>

<div class="flex-grow relative">
  <form class="flex bg-black bg-opacity-5  dark:bg-white dark:bg-opacity-10 rounded-xl px-2 gap-3">
    <div class="py-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path class="fill-gray-600 dark:fill-gray-400" fill-rule="evenodd" d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5M1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5c0 2.56-.939 4.902-2.491 6.698l3.271 3.272a.75.75 0 1 1-1.06 1.06l-3.272-3.271A10.21 10.21 0 0 1 11.5 21.75c-5.66 0-10.25-4.59-10.25-10.25" clip-rule="evenodd"/></svg>
    </div>

    <input
      type="text"
      placeholder="Search..."
      on:keyup={onKeyup}
      on:focus={activeInputSearchOnFocus}
      on:blur={desactiveInputSearchOnBlur}
      bind:this={inputSearch}
      class="text-sm placeholder:text-gray-400 dark:placeholder:text-gray-400 flex-grow"
    />
    <button
      class="btn-delete self-center p-2 hover:bg-slate-200 rounded-full"
      style:display={theValueIsGreaterThanZero ? "block" : "none"}
      on:click={deleteValueInput}
    >
      <svg width="10" height="10" viewBox="0 0 6 6">
        <path class="stroke-gray-600 dark:stroke-gray-400 stroke-1" d="M 0 0 L 6 6 M 6 0 L 0 6"/>
      </svg>
    </button>
  </form>
  <!-- results -->
  <div
    class="results flex flex-col bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 backdrop-blur-3xl"
    style:display={activeInputSearch ? "flex" : "none"}
  >
    {#each tabs as tab}
      <button
        class="item flex"
        data-value={tab[1]}
        on:click={()=>setValueInputSearch(tab[2])}
      >
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path class="fill-gray-600 dark:fill-gray-400" fill-rule="evenodd" d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5M1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5c0 2.56-.939 4.902-2.491 6.698l3.271 3.272a.75.75 0 1 1-1.06 1.06l-3.272-3.271A10.21 10.21 0 0 1 11.5 21.75c-5.66 0-10.25-4.59-10.25-10.25" clip-rule="evenodd"/></svg>
        </div>
        <b class="text-gray-900 dark:text-white pl-2">{@html tab[0]}</b>
        <span class="text-gray-800 dark:text-white">{@html tab[1]}</span>
      </button>
      
    {/each}
  </div>
</div>

<style>


  /* ----------------------- @ ----------------------- */
  .results {
    position: absolute;
    left: 0;
    right: 0;
    box-shadow: 0 0 10px rgba(14, 29, 78, 0.199);
    border: 1px solid var(--bg-line);
    border-radius: 10px;
    z-index: 99;
    padding: 2px;
    max-height: 400px;
    overflow-y: scroll;
  }
  .results > .item {
    padding: 8px;
    border-radius: 10px;
    cursor: pointer;
  }
  .results > .item:hover {
    background-color: var(--bg-line);
  }
  .results > .item > :is(b, span) {
    font-size: 13px;
  }
</style>
