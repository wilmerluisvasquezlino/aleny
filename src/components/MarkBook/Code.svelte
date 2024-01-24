<script lang="ts">
  export let fileName: string | null = null;
  export let text: string = "";
</script>
<div class="rounded-2xl pb-3" data-token="editor.background">
  <div class="head flex items-center py-2">
    <div class="flex gap-2 px-4">
      <div class="w-3 h-3 border-2 border-[#FF5F57] rounded-3xl"></div>
      <div class="w-3 h-3 border-2 border-[#FEBC2E] rounded-3xl"></div>
      <div class="w-3 h-3 border-2 border-[#28C840] rounded-3xl"></div>
    </div>
    <div class="flex items-center gap-2 bg-[#3E404A] pl-3 pr-4 py-1 rounded-lg">
      <img class="w-4" src="https://cdn.svgporn.com/logos/react.svg" alt="">
      <p class="text-sm text-white">{fileName}</p>
    </div>
  </div>
  <div class="flex">
    <div class="linenumber flex flex-col items-end">
      {#each text.split("\n") as _,lineNumbers}
        <div class="text-sm pl-3 pr-4 font-mono text-white text-opacity-50">{lineNumbers+1}</div>
      {/each}
    </div>
    <code class="text-sm text-white">{@html text.replaceAll("\n","<br/>")}</code>
  </div>
</div>
<style>

</style>