import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./FuzzyOverlay.css";
import { ChevronDown } from "lucide-react";
const FuzzyOverlayHome = () => {
  return (
    // NOTE: An overflow of hidden will be required on a wrapping
    // element to see expected results
    <div className="relative overflow-hidden">
      <ExampleContent />
      <FuzzyOverlay />
    </div>
  );
};
const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "loop",
      }}
      style={{
        backgroundImage: `url(https://www.hover.dev/black-noise.png)`,
      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
    />
  );
};
const rotatingWords = ["work", "right", "fast", "advance"];
const ExampleContent = () => {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => (prevWord + 1) % rotatingWords.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);
  const handleScrollDown = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      const navbarHeight = 64; // Adjust this value if you change the navbar height
      const sectionTop = nextSection.offsetTop - navbarHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative grid h-screen place-content-center space-y-6 bg-neutral-950 p-8">
      <h1 className="text-center text-6xl font-black font-sans text-white">
        Gustavo Rodriguez
      </h1>
      <h2 className="w-full text-center font-sans text-3xl text-gray-600 mb-8">
        Software Engineer
      </h2>{" "}
      <div className="flex items-center justify-center self-baseline bg-transparent px-1">
        <p className="w-fit flex flex-row justify-center items-center font-sans text-3xl text-white mb-8">
          Make it&nbsp;
        </p>

        <AnimatePresence>
          <motion.span
            key={currentWord}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="rounded border-white border-spacing-4 bg-transparent"
          >
            <p className="w-full flex flex-row items-center justify-center text-center text-5xl capitalize px-2 py-3 rounded border-black bg-white text-black mb-8 rotating-text-container font-sans">
              {rotatingWords[currentWord]}{" "}
            </p>
          </motion.span>
        </AnimatePresence>
      </div>{" "}
      <div className="w-full flex flex-row justify-center items-center bottom-10 cursor-pointer">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 cursor-pointer"
          onClick={handleScrollDown}
        >
          <ChevronDown
            size={32}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default FuzzyOverlayHome;
