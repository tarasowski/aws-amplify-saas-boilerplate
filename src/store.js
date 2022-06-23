import { writable } from "svelte/store";

export const action = writable(null);

export const showUpgradeModal = writable(false);

export const user = writable({
  email: "",
  sub: "",
  firstName: "",
  lastName: "",
});
