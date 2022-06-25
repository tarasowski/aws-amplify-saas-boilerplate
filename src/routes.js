import Login from "./views/auth/Login.svelte";
import Register from "./views/auth/Register.svelte";
import Confirmation from "./views/auth/Confirmation.svelte";
import ForgotPasswordStep1 from "./views/auth/ForgotPasswordStep1.svelte";
import ForgotPasswordStep2 from "./views/auth/ForgotPasswordStep2.svelte";
import Dashboard from "./views/dashboard/Dashboard.svelte";
import Settings from "./views/settings/Settings.svelte";
import Header from "./components/Layout/Header.svelte";
import { user } from "./store.js";
import { callAPI } from "./graphql"
import { getSettings } from "./graphql/queries.js"

export const userIsAdmin = (x) => {
  try {
    const keys = Object.entries(localStorage).flat();
    const userAttributes = keys.find((y) => y.includes("UserAttributes"));
    const parsed = JSON.parse(userAttributes);
    const username = parsed.Username;
    const email = parsed.UserAttributes.find((y) => y.Name === "email");
    const emailValue = email.Value;
    user.set({ email: emailValue, organizationId: username });
    callAPI(getSettings, {organizationId: username}).then(x => x.data.getSettings)
                                                    .then(u => user.set(u))
    return username !== undefined;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const routes = [
  { name: "/", component: Login },
  { name: "login", component: Login },
  { name: "register", component: Register },
  { name: "confirmation", component: Confirmation },
  { name: "forgot-1", component: ForgotPasswordStep1 },
  { name: "forgot-2", component: ForgotPasswordStep2 },
  {
    name: "dashboard",
    component: Dashboard,
    layout: Header,
    onlyIf: { guard: userIsAdmin, redirect: "/login" },
  },
  {
    name: "settings",
    component: Settings,
    layout: Header,
    onlyIf: { guard: userIsAdmin, redirect: "/login" },
  },
];
