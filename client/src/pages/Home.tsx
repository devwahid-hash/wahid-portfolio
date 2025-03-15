import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="bg-[#0A192F] min-h-screen">
      <NavBar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
