"use client";

import { useEffect } from "react";

export default function ContactRedirect() {
  useEffect(() => {
    window.location.replace("/#contact");
  }, []);

  return (
    <p style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <a href="/#contact">الانتقال إلى التواصل…</a>
    </p>
  );
}
