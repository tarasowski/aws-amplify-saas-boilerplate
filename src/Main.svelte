<script>
  import { store } from "./auth.js";
  function logout() {
    $store = null;
  }
</script>
<main>
  <h2>
    You are logged in <button type="button" on:click="{logout}">Log Out</button>
  </h2>
  <pre>
    {JSON.stringify($store, null, 2)}
  </pre>
</main>
