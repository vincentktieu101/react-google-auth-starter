import { useState } from "react";
import { initGoogleSignIn } from "./init-google-sign-in";

/**
 * getUser returns 3 values
 * undefined to mean that google authentication is still loading
 * null to mean that the user is not logged in
 * object value to show that the user is logged in and to show details about the user
 */
export const getUser = () => {
  const [user, setUser] = useState(undefined);
  const isLoading = user === undefined;
  if (typeof document !== "undefined") {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/platform.js";
    script.onload = () => initGoogleSignIn(setUser);
    document.body.appendChild(script);
  }
  return { user, isLoading };
};
