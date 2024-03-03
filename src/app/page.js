"use client";

import React from "react";
import { getUser } from "./utils/get-user";
import { Header } from "./components/header";

export default function Home() {
  const { user, isLoading } = getUser();

  // account for screen flicker
  if (isLoading) {
    return null;
  }

  return (
    <>
      <Header user={user} />
      <div>Hello World</div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user && <img src={user.imageUrl} />}
    </>
  );
}
