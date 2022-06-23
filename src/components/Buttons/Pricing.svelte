<script>
  import Spinner from "../../Spinner.svelte";
  export let handler;
  export let label;
  export let isLoading;
</script>
{#if !isLoading}
<a
  on:click|preventDefault="{handler}"
  class="cursor-pointer w-full block text-base font-semibold text-indigo-600 bg-transparent border border-indigo-600 rounded-md text-center p-4 hover:text-white hover:bg-indigo-600 hover:border-primary transition"
>
  {label}
</a>
{:else} 
<a
    class="cursor-not-allowed w-full block text-base font-semibold text-white bg-indigo-600 border border-indigo-600 rounded-md text-center p-4 hover:text-white hover:bg-indigo-600 hover:border-primary transition"
    >
    {label}
    <Spinner />
</a>
{/if}
