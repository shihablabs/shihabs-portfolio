import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Testimonials } from "@/components/sections/testimonials";

export default function HomePage() {
  return (
    <div className="flex-1">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
    </div>
  );
}
