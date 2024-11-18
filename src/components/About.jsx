import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Divider } from "antd";
export const About = () => {
  return (
    <div className="bg-transparent py-4">
      <TextParallaxContent
        imgUrl="https://res.cloudinary.com/dpdzkhh07/image/upload/v1731707237/admin_dashboard_devitrak.jpg"
        subheading="Commitment to Excellence"
        heading="Devitrak Admin Dashboard"
        bg={"bg-red-600"}
      >
        <ExampleContent
          heading="Devitrak is a feature-rich, responsive, and modern admin panel
          designed to provide seamless management of various functionalities
          with a focus on efficiency, scalability, and user-friendliness. The
          application leverages a comprehensive tech stack to ensure high
          performance and secure operations.
"
          subheading={
            <>
              {" "}
              <li>
                <span className="inline-flex items-center space-x-2">
                  <img
                    src="https://img.icons8.com/color/48/react-native.png"
                    alt="React Icon"
                    className="h-6 w-6"
                  />
                  <span>
                    Frontend: React (via Vite), React Router, Ant Design,
                    Material UI, CSS, HTML.
                  </span>
                </span>
              </li>
              <li>
                <span className="inline-flex items-center space-x-2">
                  <img
                    src="https://img.icons8.com/color/48/nodejs.png"
                    alt="Node.js Icon"
                    className="h-6 w-6"
                  />
                  <span>Backend: Node.js, Express.js, AWS Lambda.</span>
                </span>
              </li>
              <li>
                <span className="inline-flex items-center space-x-2">
                  <img
                    src="https://img.icons8.com/color/48/mongodb.png"
                    alt="MongoDB Icon"
                    className="h-6 w-6"
                  />
                  <span>Databases: MongoDB (NoSQL), PlanetScale (SQL).</span>
                </span>
              </li>
              <li>
                <span className="inline-flex items-center space-x-2">
                  <img
                    src="https://www.droidcon.com/wp-content/uploads/2023/02/1_3C2hKy-PI9M8pth4VEWwbQ-1024x576.webp"
                    alt="JWT Icon"
                    className="h-6 w-6"
                  />
                  <span>Authentication: JWT, Azure MSAL.</span>
                </span>
              </li>
              <li>
                <span className="inline-flex items-center space-x-2">
                  <img
                    src="https://img.icons8.com/fluency/48/stripe.png"
                    alt="Stripe Icon"
                    className="h-6 w-6"
                  />
                  <span>
                    Payments: Stripe (Stripe.js, React Stripe.js, Stripe
                    Connect.js).
                  </span>
                </span>
              </li>
              <li>
                <span className="inline-flex items-center space-x-2">
                  <img
                    src="https://img.icons8.com/color/48/redux.png"
                    alt="Redux Icon"
                    className="h-6 w-6"
                  />
                  <span>State Management: Redux Toolkit, React Query.</span>
                </span>
              </li>
              <li>
                <span className="inline-flex items-center space-x-2">
                  <img
                    src="https://fluttercore.com/wp-content/uploads/2020/03/flutter_echarts.png"
                    alt="Charts Icon"
                    className="h-6 w-6"
                  />
                  <span>Visualization: ECharts, Recharts.</span>
                </span>
              </li>
              <li>
                <span className="inline-flex items-center space-x-2">
                  <img
                    src="https://img.icons8.com/color/48/npm.png"
                    alt="Libraries Icon"
                    className="h-6 w-6"
                  />
                  <span>
                    Libraries: Axios, bcryptjs, jwt-decode, lodash, React Phone
                    Number Input, and more.
                  </span>
                </span>
              </li>
            </>
          }
          url="https://admin.devitrak.net/"
          details="/details"
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://res.cloudinary.com/dpdzkhh07/image/upload/v1731709614/Screenshot_2024-11-15_172610_ykb0dr.jpg"
        subheading="Quality, modern, and user-friendly"
        heading={`Yenny on Trend
          fashion and lifestyle platform`}
        bg={"bg-blue-600"}
      >
        <ExampleContent
          heading="Yenny on Trend is a modern, high-performance e-commerce platform designed to deliver a seamless shopping experience. Built with scalability and efficiency in mind, the app combines robust backend functionality with an intuitive and visually appealing user interface to cater to both shoppers and administrators."
          subheading={
            <>
              {" "}
              <li>
                <span className="inline-flex items-center space-x-2">
                  <img
                    src="https://img.icons8.com/color/48/react-native.png"
                    alt="React Icon"
                    className="h-6 w-6"
                  />
                  <span>
                    Frontend: React (via Vite), React Router, Ant Design,
                    Material UI, CSS, HTML.
                  </span>
                </span>
              </li>
              <li>
                <span className="inline-flex items-center space-x-2">
                  <img
                    src="https://img.icons8.com/color/48/nodejs.png"
                    alt="Node.js Icon"
                    className="h-6 w-6"
                  />
                  <span>Backend: Node.js, AWS Lambda.</span>
                </span>
              </li>
              <li>
                <span className="inline-flex items-center space-x-2">
                  <img
                    src="https://img.icons8.com/color/48/firebase.png"
                    alt="Firebase Icon"
                    className="h-6 w-6"
                  />
                  <span>Databases: Firebase.</span>
                </span>
              </li>
              <li>
                <span className="inline-flex items-center space-x-2">
                  <img
                    src="https://img.icons8.com/fluency/48/stripe.png"
                    alt="Stripe Icon"
                    className="h-6 w-6"
                  />
                  <span>
                    Payments: Stripe (Stripe.js, React Stripe.js, Stripe
                    Connect.js).
                  </span>
                </span>
              </li>
              <li>
                <span className="inline-flex items-center space-x-2">
                  <img
                    src="https://img.icons8.com/color/48/redux.png"
                    alt="Redux Icon"
                    className="h-6 w-6"
                  />
                  <span>State Management: Redux Toolkit, React Query.</span>
                </span>
              </li>
              <li>
                <span className="inline-flex items-center space-x-2">
                  <img
                    src="https://assets.browserlondon.com/wp-content/uploads/2019/03/pwa-banner.png"
                    alt="PWA Icon"
                    className="h-6 w-6"
                  />
                  <span>PWA: Progressive Web Application.</span>
                </span>
              </li>
              <li>
                <span className="inline-flex items-center space-x-2">
                  <img
                    src="https://jazzteam.org/wp-content/uploads/2023/01/Lodash_logo-860x452.jpg"
                    alt="Axios Icon"
                    className="h-6 w-6"
                  />
                  <span>Libraries: Axios, lodash.</span>
                </span>
              </li>
            </>
          }
          url="https://yennyontrend.com"
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://res.cloudinary.com/dpdzkhh07/image/upload/v1731710488/Screenshot_2024-11-15_174057_ep1vvp.jpg"
        subheading="Modern"
        heading="GARS Solutions"
        bg={"bg-green-600"}
      >
        <ExampleContent
          heading="GARS Solutions is a modern, feature-rich web application designed to streamline scheduling, appointment management, and payments. Built using a scalable and efficient tech stack, it offers a seamless user experience tailored for businesses and individuals who need to manage schedules, client interactions, and transactions efficiently."
          url="https://garssolutions.netlify.app/"
          subheading={
            <>
              <li>
                <span className="inline-flex items-center space-x-2">
                  <img
                    src="https://img.icons8.com/color/48/react-native.png"
                    alt="React Icon"
                    className="h-6 w-6"
                  />
                  <span>
                    Frontend: React (via Vite), React Router, Ant Design,
                    Material UI.
                  </span>
                </span>
              </li>
              <li>
                <span className="inline-flex items-center space-x-2">
                  <img
                    src="https://img.icons8.com/color/48/nodejs.png"
                    alt="Node.js Icon"
                    className="h-6 w-6"
                  />
                  <span>Backend: Node.js, AWS Lambda.</span>
                </span>
              </li>
              <li>
                <span className="inline-flex items-center space-x-2">
                  <img
                    src="https://img.icons8.com/color/48/database.png"
                    alt="Database Icon"
                    className="h-6 w-6"
                  />
                  <span>Database and Authentication: Supabase.</span>
                </span>
              </li>
              <li>
                <span className="inline-flex items-center space-x-2">
                  <img
                    src="https://img.icons8.com/fluency/48/stripe.png"
                    alt="Stripe Icon"
                    className="h-6 w-6"
                  />
                  <span>
                    Payments: Stripe (Stripe.js, React Stripe.js, Stripe
                    Connect.js).
                  </span>
                </span>
              </li>
              <li>
                <span className="inline-flex items-center space-x-2">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/6490d447aaf1c8276eee9f2f/2af05125-1560-48a7-9d7c-83f32acbfa39/Screenshot+2023-08-09+at+11.58.31+AM.png"
                    alt="Calendar Icon"
                    className="h-6 w-6"
                  />
                  <span>Scheduling: React Big Calendar, React DatePicker.</span>
                </span>
              </li>
            </>
          }
        />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children, bg }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className={`relative h-[125vh] rounded-xl`}>
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p
        style={{
          color: "white",
          textShadow: "0px 0px 10px #000",
          backgroundClip: "text",
          textWrap: "balance",
        }}
        className="text-center text-4xl font-bold md:text-7xl"
      >
        {heading}
      </p>
    </motion.div>
  );
};

const SlidingEffect = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -500],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="relative w-full max-w-full h-full overflow-x-hidden">
      <motion.div
        className="absolute whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        <h1 className="my-5 uppercase text-black stroke-2 stroke-[#f4955c]">
          {new Array(60).fill(0).map((_, i) => (
            <span style={{color:`${i % 2===0 ? '#171717' : '#808080'}`}} key={i}>Let's work together!&nbsp;|&nbsp;</span>
          ))}
        </h1>
      </motion.div>
    </div>
  );
};
const ExampleContent = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div
      ref={ref}
      className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12"
    >
      <motion.h2
        style={{
          transform: isInView ? "translateX(0px)" : "translateX(-700px)",
          opacity: isInView ? 1 : 0,
          transition:
            "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s ease-in-out",
        }}
        className="col-span-1 text-3xl font-bold md:col-span-4"
      >
        Additional content explaining the above card here
      </motion.h2>
      <div className="col-span-1 md:col-span-8">
        <h2 className="mb-4 text-xl text-neutral-600 md:text-2xl">
          {props.heading}
        </h2>
        <Divider />
        <ul className="space-y-4 my-4 text-xl text-neutral-700 md:text-2xl">
          {props.subheading}
        </ul>
        <Divider />
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded bg-neutral-900 px-9 py-4 my-3 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit"
        >
          Check it out <FiArrowUpRight className="inline" />
        </a>
        <SlidingEffect />
      </div>
    </div>
  );
};
