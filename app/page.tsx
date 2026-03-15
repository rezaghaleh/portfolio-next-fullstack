import { BackgroundEffects } from "@/components/BackgroundEffects";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { QuizSection } from "@/components/sections/QuizSection";
import { Skills } from "@/components/sections/Skills";

export default function HomePage() {
  return (
    <main className="page-shell">
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <QuizSection />
      <Contact />
      <Footer />
      <a href="#top" className="back-to-top" aria-label="Back to top">
        ↑
      </a>
    </main>
  );
}
