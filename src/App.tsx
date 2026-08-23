import About from "./components/About";
import Competitions from "./components/Competitions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Honors from "./components/Honors";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <Projects />
        <Competitions />
        <Honors />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
