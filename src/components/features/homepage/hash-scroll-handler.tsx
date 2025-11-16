"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToHash = () => {
      if (pathname === "/" && window.location.hash) {
        const hash = window.location.hash.substring(1); // Remove "#"
        const element = document.getElementById(hash);

        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    // On initial load
    setTimeout(scrollToHash, 100);

    // On hash change while staying on the home page
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [pathname]);

  return null;
}
