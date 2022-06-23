<script>
  import {Router} from "svelte-router-spa"
  import { routes } from "./routes.js"
  import './lib/Tailwind.css'
  import Notifications from 'svelte-notifications';
  import { store } from './auth.js'
  import { showUpgradeModal } from "./store.js"
  import { DataStore } from "aws-amplify"
  import { Settings } from "./models/index.js"
	import Pricing from "./components/Modals/Pricing.svelte"

  const handleAdd = async () => {
    try {
      await DataStore.save( 
        new Settings({
          userId: (new Date()).getTime().toString(36),
          stripeCustomerId: "0001",
          stripeSubscriptionId: "0001",
          paymentStatus: "SUCCESS"
        }))

    } catch(e) {
      console.log(e)
    }
  }


  const handleLoad = async () => {
    try {
      const settings = await DataStore.query(Settings)
      console.log(settings)
    } catch(e) {
      console.log(e)
    }
  }

  const handleClear = async () => {
    try {
      await DataStore.clear()
    } catch(e) {
    }
  }

</script>


{#if $showUpgradeModal}
<Pricing />
{/if}

<Notifications>
<button on:click={handleAdd} class="bg-indigo-700 text-white p-4">Add setting</button>
<button on:click={handleLoad} class="bg-indigo-700 text-white p-4">Load setting</button>
<button on:click={handleClear} class="bg-indigo-700 text-white p-4">Clear Store</button>
<main>
  <Router {routes} />
</main>
</Notifications>


