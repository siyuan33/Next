"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";

export default function Layout({ children }) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <Link href="/dashboard/about">About</Link>
        <br />
        <Link href="/dashboard/settings">Settings</Link>
      </div>
      <h1>Layout {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {children}
    </>
  );
}
