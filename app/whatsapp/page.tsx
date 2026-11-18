"use client";

import { useEffect } from "react";
import { whatsappNumber, whatsappText } from "@/lib/data";

export default function WhatsAppRedirect() {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

  useEffect(() => {
    window.location.replace(url);
  }, [url]);

  return (
    <p style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <a href={url} target="_blank" rel="noopener">
        فتح واتساب…
      </a>
    </p>
  );
}
