import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Home = () => {
  const handleScrollDown = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      const navbarHeight = 64; // Adjust this value if you change the navbar height
      const sectionTop = nextSection.offsetTop - navbarHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="home" className="min-h-screen flex flex-col justify-center items-center relative pt-16">
      <Parallax translateY={[-20, 20]}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-4">Gustavo Rodriguez</h1>
          <h2 className="text-3xl text-gray-600 mb-8">Software Developer</h2>
          <a
            href="/resume.pdf"
            download
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Download Resume
          </a>
        </motion.div>
      </Parallax>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 cursor-pointer"
        onClick={handleScrollDown}
      >
        <ChevronDown size={32} className="text-gray-400 hover:text-gray-600 transition-colors duration-300" />
      </motion.div>
    </div>
  );
};

export default Home;