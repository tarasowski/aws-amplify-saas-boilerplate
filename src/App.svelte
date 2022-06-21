<script>
  import Router, { link } from "svelte-spa-router"
  import { routes } from "./routes.js"
  import './lib/Tailwind.css'
   import Notifications from 'svelte-notifications';
  import { store } from './auth.js'
</script>


<Notifications>
<main>
  <Router {routes} />
</main>
</Notifications>
