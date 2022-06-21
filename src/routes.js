import Login from "./Login.svelte";
import Register from "./Register.svelte";
import Confirmation from "./Confirmation.svelte";
import ForgotPasswordStep1 from "./ForgotPasswordStep1.svelte";
import ForgotPasswordStep2 from "./ForgotPasswordStep2.svelte";

export const routes = {
  "/login": Login,
  "/register": Register,
  "/confirmation": Confirmation,
  "/forgot-1": ForgotPasswordStep1,
  "/forgot-2": ForgotPasswordStep2,
};
