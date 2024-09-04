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
import csharp from "../assets/icons/csharp.png";

export default function Skills() {
  const skills = [
    { name: "Java", source: java },
    { name: "Python", source: python },
    { name: "C#", source: csharp },
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
  const textmover1 = useRef(null);
  const textmover2 = useRef(null);
  const { scrollYProgress } = useScroll({
    // container: container,
    // offset: ["start end", "end end"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      textmover1.current.setAttribute("startOffset", -60 + e * 60 + "%");
      textmover2.current.setAttribute("startOffset", -e * 80 + "%");
    });
  });

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
  ></motion.div>;

  return (
    <div className="w-full h-screen bg-black ">
      <motion.div
        className="flex-grow w-full h-full py-20 bg-white rounded-t-3xl"
        ref={container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
      >
        <div className="static">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-600 170 1200 200"
            width="100%"
            height="100%"
            className="absolute"
          >
            <motion.path
              id="curve1"
              d="M -600 60 C 0 -180 0 300 600 60"
              fill="none"
            />
            <g fill="black">
              <text>
                <textPath
                  ref={textmover1}
                  href="#curve1"
                  className="text-lg font-rubik"
                  startOffset={"-60%"}
                >
                  HTML ⁕ CSS ⁕ JAVASCRIPT ⁕ TYPESCRIPT ⁕ REACT ⁕ SVELTE ⁕ PYTHON
                  ⁕ JAVA ⁕ C# ⁕ PYTORCH ⁕ LLMS ⁕ PROMPTING ⁕ HASKELL ⁕ NUMPY ⁕
                  PANDAS ⁕ MATPLOTLIB ⁕ SQL ⁕ GITHUB ⁕ AGILE ⁕ SCRUM ⁕ DATA ⁕
                  QUERIES ⁕ LINUX ⁕ WINDOWS
                </textPath>
              </text>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-900 -250 1200 200"
            width="100%"
            height="100%"
            className="absolute"
          >
            <motion.path
              id="curve2"
              d="M -1042 -233 C -524 -171 -735 171 -296 223 C 142 173 -16 -102 366 -205"
              fill="none"
            />
            <g fill="black">
              <text>
                <textPath
                  ref={textmover2}
                  href="#curve2"
                  className="text-lg font-rubik"
                  startOffset={"0%"}
                >
                  HTML ⁕ CSS ⁕ JAVASCRIPT ⁕ TYPESCRIPT ⁕ REACT ⁕ SVELTE ⁕ PYTHON
                  ⁕ JAVA ⁕ C# ⁕ PYTORCH ⁕ LLMS ⁕ PROMPTING ⁕ HASKELL ⁕ NUMPY ⁕
                  PANDAS ⁕ MATPLOTLIB ⁕ SQL ⁕ GITHUB ⁕ AGILE ⁕ SCRUM ⁕ DATA ⁕
                  QUERIES ⁕ LINUX ⁕ WINDOWS
                </textPath>
              </text>
            </g>
          </svg>
        </div>

        <div className="flex flex-col w-full h-full justify-end items-center pb-48">
          <p className="text-black font-dmsans text-2xl font-bold">My Tools</p>
          <div className="flex flex-wrap pt-8 w-1/2 justify-center gap-2">
            {skills.map((skill) => (
              <div
                className="flex flex-row justify-center items-center gap-2 p-4 bg-black rounded-full font-dmsans text-lg"
                key={skill.name}
              >
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
