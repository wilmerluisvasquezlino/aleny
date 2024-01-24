<script lang="ts">
  export let text = ""
  export let size: number;
  console.log(size)
</script>
{#if size === 1}
  <h1 class="" style:font-size="2em">{text}</h1>
{:else if size === 2}
  <h2 class="pt-2" style:font-size="1.5em">{text}</h2>
{:else if size === 3}
  <h3 class="pt-2" style:font-size="1.17em">{text}</h3>
{:else if size === 4}
  <h4 class="pt-2" style:font-size="1em">{text}</h4>
{:else if size === 5}
  <h5 class="pt-2" style:font-size="0.83em">{text}</h5>
{:else if size === 6}
  <h6 class="pt-2" style:font-size="0.67rem">{text}</h6>
{/if}
<style>
  h1,h2,h3,h4,h5,h6{
    @apply font-black text-[#1f2328] dark:text-[hsl(213,13%,86%)];
    text-wrap: balance;
  }
</style>