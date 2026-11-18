"use client";

import { useEffect } from "react";

export default function WorkIndex() {
  useEffect(() => {
    window.location.replace("/#portfolio");
  }, []);

  return (
    <p style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <a href="/#portfolio">الانتقال إلى الأعمال…</a>
    </p>
  );
}
