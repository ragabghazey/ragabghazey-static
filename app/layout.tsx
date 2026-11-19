import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ragabghazey.com"),
  title: {
    default: "رجب غازي | مطور منصات SaaS وأنظمة أعمال وأتمتة",
    template: "%s | رجب غازي",
  },
  description:
    "رجب غازي — مطور Django و Web Scraping والأتمتة. منصات وأنظمة بيانات تشتغل في الإنتاج: منصة بيع متعددة التجار، تطبيق على App Store، وقواعد بيانات بمئات الآلاف من الأصناف.",
  icons: {
    icon: [
      { url: "/images/favicon.ico", sizes: "any" },
      { url: "/images/favicon.png", type: "image/png" },
    ],
    apple: "/images/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "رجب غازي",
    locale: "ar_EG",
    url: "https://ragabghazey.com/",
    images: [
      {
        url: "https://ragabghazey.com/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://ragabghazey.com/images/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/icons.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/cv.css" />
        <link rel="stylesheet" href="/css/page-base.css" />
        <link rel="stylesheet" href="/css/case-tallabak.css" />
        <link rel="stylesheet" href="/css/privacy.css" />
        <link rel="stylesheet" href="/css/404.css" />
      </head>
      <body>
        {children}
        <script src="/js/translations.js"></script>
        <script src="/js/main.js"></script>
      </body>
    </html>
  );
}
