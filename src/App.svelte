<script>
  import {Router} from "svelte-router-spa"
  import { routes } from "./routes.js"
  import './lib/Tailwind.css'
  import Notifications from 'svelte-notifications';
  import { store } from './auth.js'
  import { Modals, closeModal, openModal } from 'svelte-modals'
  import PricingTable from "./components/Modals/PricingTable.svelte"
  import { action } from "./store.js"

  const resetAction = () => $action = null

  function handleClick(action) {
    if (action === "UPGRADE") {
      openModal(PricingTable, { title: 'Alert', message: 'This is an alert' })
      resetAction()
    }
  }

  $: handleClick($action) 

</script>

<Modals>
<div
      slot="backdrop"
      class="backdrop"
      on:click={closeModal}
      />
</Modals>

<Notifications>
<main>
  <Router {routes} />
</main>
</Notifications>


<style>
  .backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.50)
  }
</style>
