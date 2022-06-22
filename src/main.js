import App from "./App.svelte";
import { Amplify, Auth } from "aws-amplify";
import aws_exports from "./aws-exports";
import "@aws-amplify/pubsub";

Amplify.configure(aws_exports);
Auth.configure(aws_exports);
//Amplify.Logger.LOG_LEVEL = "DEBUG";

const app = new App({
  target: document.body,
});

export default app;
