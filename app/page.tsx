import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import TechStack from "@/components/TechStack";
import WhyMe from "@/components/WhyMe";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: {
    absolute: "رجب غازي | مطور منصات SaaS وأنظمة أعمال وأتمتة",
  },
  description:
    "رجب غازي — مطور Django و Web Scraping والأتمتة. منصات وأنظمة بيانات تشتغل في الإنتاج: منصة بيع متعددة التجار، تطبيق على App Store، وقواعد بيانات بمئات الآلاف من الأصناف.",
  alternates: {
    canonical: "https://ragabghazey.com/",
  },
  openGraph: {
    type: "website",
    url: "https://ragabghazey.com/",
    title: "رجب غازي | مطور منصات SaaS وأنظمة أعمال وأتمتة",
    description:
      "منصات وأنظمة بيانات تشتغل في الإنتاج: منصة بيع متعددة التجار، تطبيق منشور على App Store، وقواعد بيانات توصل لـ150 ألف صنف.",
    images: [
      {
        url: "https://ragabghazey.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "رجب غازي - مطور ويب",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://ragabghazey.com/#person",
      name: "رجب غازي",
      alternateName: "Ragab Ghazey",
      url: "https://ragabghazey.com/",
      image: "https://ragabghazey.com/images/profile-560.webp",
      email: "contact@ragabghazey.com",
      jobTitle: "مطور منصات وأنظمة أعمال",
      description: "مطور يبني منصات SaaS وأنظمة أعمال وحلول أتمتة واستخراج بيانات.",
      knowsLanguage: ["ar", "en"],
      knowsAbout: ["Django", "Python", "SaaS", "Web Scraping", "Automation", "PostgreSQL", "REST APIs", "Docker"],
      alumniOf: { "@type": "CollegeOrUniversity", name: "جامعة الأزهر" },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://ragabghazey.com/#service",
      name: "رجب غازي — تطوير منصات وأنظمة أعمال",
      url: "https://ragabghazey.com/",
      founder: { "@id": "https://ragabghazey.com/#person" },
      areaServed: [
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "Country", name: "Egypt" },
        { "@type": "Country", name: "United Arab Emirates" },
      ],
      availableLanguage: ["ar", "en"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "الخدمات",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "منصات SaaS مخصصة" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "أتمتة العمليات" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "استخراج ومعالجة البيانات" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "أنظمة التجارة الإلكترونية" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "تكامل الأنظمة وواجهات البرمجة" } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://ragabghazey.com/#website",
      url: "https://ragabghazey.com/",
      name: "رجب غازي",
      inLanguage: "ar",
      publisher: { "@id": "https://ragabghazey.com/#person" },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <link rel="stylesheet" href="/css/style.css" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <TechStack />
      <WhyMe />
      <Process />
      <Faq />
      <Contact />
      <Footer />
      <WhatsAppFloat />
      <script src="/js/translations.js"></script>
      <script src="/js/main.js"></script>
    </>
  );
}
