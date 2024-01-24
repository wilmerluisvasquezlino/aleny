<script lang="ts">
  export let text = "";
  text = text.replaceAll(/(--[a-z]*)/g,'<span style="color:gray">$1</span>')
</script>
<div class="bg-[#282a36] rounded-2xl px-4 py-3">
  <div class="flex gap-2 items-center font-mono font-bold text-sm">
    <span class="text-[hsl(177,58%,72%)]">user/wilmer/desktop</span>
    <span class="font-normal text-[hsl(220,50%,88%)]">on</span> 
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="#ad97b5" d="M416 160a64 64 0 1 0-96.27 55.24c-2.29 29.08-20.08 37-75 48.42c-17.76 3.68-35.93 7.45-52.71 13.93v-126.2a64 64 0 1 0-64 0v209.22a64 64 0 1 0 64.42.24c2.39-18 16-24.33 65.26-34.52c27.43-5.67 55.78-11.54 79.78-26.95c29-18.58 44.53-46.78 46.36-83.89A64 64 0 0 0 416 160M160 64a32 32 0 1 1-32 32a32 32 0 0 1 32-32m0 384a32 32 0 1 1 32-32a32 32 0 0 1-32 32m192-256a32 32 0 1 1 32-32a32 32 0 0 1-32 32"/></svg>
    <span class="text-[hsl(286,50%,72%)]">master</span>
  </div>
  <div class="flex gap-2 items-center font-mono text-sm">
    <svg xmlns="http://www.w3.org/2000/svg" class="inline" width="14" height="14" viewBox="0 0 24 24"><path fill="#b1bb70" d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10z"/></svg>
    <span class="text-white">{@html text}</span>
  </div>
</div>
<style>

</style>