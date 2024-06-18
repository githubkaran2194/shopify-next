'use client'

import { useEffect, useState } from "react";
import Main from "@/components/Main";
import PopupStarting from "@/components/PopupStarting";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && <Main />}

      <PopupStarting />
      <h1>{isClient ? "This is never prerendered" : "Prerendered"}</h1>
    </>
  );
}
