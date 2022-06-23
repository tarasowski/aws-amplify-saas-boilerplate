<script>
  import {Router} from "svelte-router-spa"
  import { routes } from "./routes.js"
  import './lib/Tailwind.css'
  import Notifications from 'svelte-notifications';
  import { store } from './auth.js'
  import { showUpgradeModal } from "./store.js"
  import { Settings } from "./models/index.js"
	import Pricing from "./components/Modals/Pricing.svelte"


</script>


{#if $showUpgradeModal}
<Pricing />
{/if}

<Notifications>
<main>
  <Router {routes} />
</main>
</Notifications>


