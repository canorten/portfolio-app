import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Blog from "@/components/sections/Blog";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 pb-20">
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
      <Blog />
    </div>
  );
}
