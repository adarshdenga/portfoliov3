import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

import java from "../assets/icons/java.png";
import python from "../assets/icons/python.png";
import tensorflow from "../assets/icons/tensorflow.png";
import pytorch from "../assets/icons/pytorch.png";
import react from "../assets/icons/react.png";
import typescript from "../assets/icons/typescript.png";
import javascript from "../assets/icons/javascript.png";
import tailwindcss from "../assets/icons/tailwindcss.png";
import html5 from "../assets/icons/html5.png";
import css3 from "../assets/icons/css3.png";
import git from "../assets/icons/git.png";
import svelte from "../assets/icons/svelte.png";
import linux from "../assets/icons/linux.png";

export default function Skills() {
  const skills = [
    { name: "Java", source: java },
    { name: "Python", source: python },
    { name: "TensorFlow", source: tensorflow },
    { name: "PyTorch", source: pytorch },
    { name: "React", source: react },
    { name: "Svelte", source: svelte },
    { name: "TypeScript", source: typescript },
    { name: "JavaScript", source: javascript },
    { name: "TailwindCSS", source: tailwindcss },
    { name: "HTML5", source: html5 },
    { name: "CSS3", source: css3 },
    { name: "Linux", source: linux },
    { name: "Git", source: git },
  ];

  const container = useRef(null);
  const textmover = useRef(null);
  const { scrollYProgress } = useScroll({
    // container: container,
    // offset: ["start end", "end end"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      textmover.current.setAttribute("startOffset", -60 + e * 60 + "%");
    });
  });

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
  ></motion.div>;

  return (
    <div className="w-full h-screen pt-24 bg-black ">
      <motion.div
        className="w-full h-full py-20 bg-white rounded-t-3xl "
        ref={container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-600 -30 1200 200">
          <motion.path
            id="curve"
            d="M -600 60 C 0 -180 0 300 600 60"
            fill="none"
          />
          <g fill="black">
            <text>
              <textPath
                ref={textmover}
                href="#curve"
                className="text-xs  font-rubik"
                startOffset={"-60%"}
              >
                HTML ⁕ CSS ⁕ JAVASCRIPT ⁕ TYPESCRIPT ⁕ REACT ⁕ SVELTE ⁕ PYTHON ⁕
                JAVA ⁕ C# ⁕ PYTORCH ⁕ LLMS ⁕ PROMPTING ⁕ HASKELL ⁕ NUMPY ⁕
                PANDAS ⁕ MATPLOTLIB ⁕ SQL ⁕ GITHUB ⁕ AGILE ⁕ SCRUM ⁕ DATA ⁕
                QUERIES ⁕ LINUX ⁕ WINDOWS
              </textPath>
            </text>
          </g>
        </svg>

        <div className="flex flex-col w-full justify-center items-center pt-44">
          <p className="text-black font-dmsans text-2xl">
            Here's what I work with most often :)
          </p>
          <div className="flex flex-wrap pt-16 w-1/2 justify-center gap-2">
            {skills.map((skill) => (
              <div className="flex flex-row justify-center gap-2 p-4 bg-black rounded-full font-dmsans text-lg">
                <img src={skill.source} className="h-6 w-6"></img>
                <div>{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
