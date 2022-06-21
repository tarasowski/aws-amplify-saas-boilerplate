import { writable } from "svelte/store";
import Auth from "@aws-amplify/auth";

export const forgotPassword = async (username) => Auth.forgotPassword(username);

export const forgotPasswordSubmit = async (form) =>
  Auth.forgotPasswordSubmit(form.email, form.confirmationCode, form.password);

export const registration = async (form) =>
  await Auth.signUp({
    username: form.email,
    password: form.password,
    attributes: {
      ["email"]: form.email,
    },
  });

export const confirmation = async (email, code) =>
  await Auth.confirmSignUp(email, code);

export const login = async (form) =>
  await Auth.signIn(form.email, form.password);

export const store = writable(null);
