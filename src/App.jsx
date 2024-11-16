import { useInView } from "framer-motion";
import { useRef } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";
import { About } from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FuzzyOverlayHome from "./components/FuzzyOverlay";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}
function App() {
  return (
    <ParallaxProvider>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        <main id="main" className="flex-grow">
          <FuzzyOverlayHome />
          <Section>
            <About />
          </Section>
          <Section>
            <Contact />
          </Section>
        </main>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
