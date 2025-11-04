import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import SectionDivider from "./components/SectionDivider";

function App() {
  return (
    <>
      <Navbar />
      <main className="scroll-smooth bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
        <Home />
        <About />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Certifications />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;




