import { motion } from "framer-motion";
import { Code, Database, FigmaIcon, PenTool, Server } from "lucide-react";

const skills = {
  "Front-end": [
    "JavaScript",
    "TypeScript",
    "Vite.js",
    "React.js",
    "Material UI",
    "Ant Design",
    "React Bootstrap",
    "Tailwind CSS",
    "SCSS",
    "Tan Stack",
    "React Hook Form",
    "Redux/Toolkit",
    "HTML5",
    "CSS3",
    "Axios",
    "Responsive Design",
  ],
  "Back-end": [
    "Node.js",
    "Express.js",
    "Mongoose",
    "JSON Web Token",
    "BCrypt",
    "RESTful APIs",
    "Axios",
  ],
  Database: ["NoSQL (MongoDB)", "SQL (PlanetScale)", "PostgreSQL (Supabase)"],
  Utility: ["Git", "GitHub", "NPM", "Stripe", "AWS Web Services"],
  "Design Tools": ["Browser Developer Tools", "VS Code", "Figma"],
};

const icons = {
  "Front-end": <Code />,
  "Back-end": <Server />,
  Database: <Database />,
  Utility: <PenTool />,
  "Design Tools": <FigmaIcon />,
};

const SkillShowcase = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
      {Object.keys(skills).map((category) => (
        <motion.div
          key={category}
          className="sm:w-full md:w-full lg:w-auto bg-transparent p-6 rounded-lg shadow-lg flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: .95 }}
        >
          <div className="font-[Bebas Neue] text-gray-900 mb-4 text-3xl">{icons[category]}</div>
          <ul className="ont-[Bebas Neue] text-black text-sm list-disc list-inside">
            {skills[category].map((skill) => (
              <motion.li
                key={skill}
                className="mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillShowcase;
