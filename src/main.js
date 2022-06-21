import App from "./App.svelte";
import Amplify from "@aws-amplify/core";
import Auth from "@aws-amplify/auth";
import aws_exports from "./aws-exports";

Amplify.configure(aws_exports);
Auth.configure(aws_exports);

const app = new App({
  target: document.body,
});

export default app;
