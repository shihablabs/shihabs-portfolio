import { Contact } from "@/components/features/contact/contact";
import { Experience } from "@/components/features/homepage/experience";
import { HashScrollHandler } from "@/components/features/homepage/hash-scroll-handler";
import { Hero } from "@/components/features/homepage/hero";
import { Skills } from "@/components/features/homepage/skills";
import { Testimonials } from "@/components/features/homepage/testimonials";
import { Projects } from "@/components/features/projects/projects";
import { siteConfig } from "@/data/site-data";
import Script from "next/script";

export default function HomePage() {
  return (
    <div className="flex-1">
      {/* FAQ JSON-LD to boost SEO for common queries */}
      <Script
        id="ld-faq"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What technologies does ShihabLabs specialize in?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "ShihabLabs specializes in React, Next.js, TypeScript, Tailwind CSS, and the MERN stack. The focus is on building fast, accessible, and SEO-friendly web apps with clean code and strong UI/UX.",
              },
            },
            {
              "@type": "Question",
              name: "Does ShihabLabs build production-grade Next.js apps?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Projects are built with modern Next.js patterns, image optimization, edge-friendly APIs, incremental static regeneration when needed, and robust component architectures.",
              },
            },
            {
              "@type": "Question",
              name: "How can I contact ShihabLabs for a project?",
              acceptedAnswer: {
                "@type": "Answer",
                text: `Click the Hire Me buttons or reach out via WhatsApp at ${siteConfig.links.twitter.replace(
                  "https://twitter.com/",
                  "@"
                )} and LinkedIn. You can also use the contact section on the homepage.`,
              },
            },
          ],
        })}
      </Script>
      <HashScrollHandler />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
    </div>
  );
}
