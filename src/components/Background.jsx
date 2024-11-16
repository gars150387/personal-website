import { Timeline } from "antd";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const companies = [
  {
    children: "Google",
  },
  {
    children: "Microsoft",
  },
  {
    children: "Amazon",
  },
];

const Background = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={ref} className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto">
        {/* {companies.map((company, index) => ( */}
          <Timeline
            mode="alternate"
            items={companies}
            // progress={scrollYProgress}
            // index={index}
          />
        {/* ))} */}
      </div>
    </div>
  );
};

export default Background;
// function TimelineItem({ company, progress, index }) {
//   const y = useTransform(progress, [0, 1], [50, -50]);

//   const x = useTransform(progress, [0, 1], [0, index % 2 === 0 ? 100 : -100]);

//   return (
//     <motion.div
//       className={`flex items-center mb-16 ${
//         index % 2 === 0 ? "justify-start" : "justify-end"
//       }`}
//       style={{ y, x }}
//     >
//       <motion.div
//         className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md"
//         initial={{ opacity: 0, scale: 0.8 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h3 className="text-2xl font-bold mb-2">{company.name}</h3>
//         <p className="text-gray-400 mb-2">{company.period}</p>
//       </motion.div>
//     </motion.div>
//   );
// }
