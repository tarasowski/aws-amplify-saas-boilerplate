
<script>
  export let label
  export let isLoading
  export let handler
  import Spinner from "./Spinner.svelte"
  import { ArrowRightIcon } from "@rgossiaux/svelte-heroicons/outline";
</script>
<button
         on:click|preventDefault={handler}
         disabled={isLoading}
         type="submit"
         class="inline-flex gap-2 justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
         >
         <span>
           {label}
         </span>
  {#if isLoading}
  <span>
    <Spinner />
  </span>
  {:else}
  <span>
  <ArrowRightIcon width={16} height={16} class="mt-[0.1rem]" />
  </span>
  {/if}
</button>
