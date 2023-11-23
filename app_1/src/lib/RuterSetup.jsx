"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RuterSetup(props) {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return <div>{props.children}</div>;
}
