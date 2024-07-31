import { useState, useRef } from "react";
import { motion } from "framer-motion";

import network from "../assets/projectimages/network.png";
import tsp from "../assets/projectimages/tsp.png";
import cias from "../assets/projectimages/cias.png";
import vret from "../assets/projectimages/vret.png";
import aapfl from "../assets/projectimages/aapfl.png";
import cube from "../assets/projectimages/cube.png";
import website from "../assets/projectimages/website.png";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      name: "EVCP",
      skills: ["Python", "RL", "AI"],
      image: network,
      link: "https://github.com/adarshdenga/Electric-Vehicle-Charging-Planning",
      about:
        "An actor-critic based Reinforcement Learning model to simualte optimal EV charging within a DC grid.",
    },
    {
      name: "Circles in a Square",
      skills: ["Python", "Evolutionary Algorithms", "AI", "Optimisation"],
      image: cias,
      link: "https://github.com/adarshdenga/Circles-In-A-Square",
      about:
        "An evolutionary algorithms based approach to the famous problem of packing circles into a square.",
    },
    {
      name: "Travelling Salesperson",
      skills: ["Python", "Evolutionary Algorithms", "AI", "Optimisation"],
      image: tsp,
      link: "https://github.com/adarshdenga/Traveling-Salesperson-Problem",
      about:
        "An evolutionary algorithms based approach to the famous Travelling Salesperson Problem.",
    },
    {
      name: "Sociable",
      skills: ["Unity", "C#", "Python", "VR", "Serious Games"],
      image: vret,
      link: "https://github.com/adarshdenga/Sociable-VR",
      about:
        "A  VR Exposure Therapy game for the purpose of combating social anxiety and its symptoms.",
    },
    {
      name: "AAPFL",
      skills: ["Java", "Haskell", "Compiler Construction"],
      image: aapfl,
      link: "https://github.com/adarshdenga/AAPFL",
      about:
        "A new programming language that is a syntactic mix of JavaScript and Python, with a compiler that produces Sprockell instructions.",
    },
    {
      name: "Cube Area",
      skills: ["Python", "Mathematics", "Convex Hull", "Roation Matrices"],
      image: cube,
      link: "https://github.com/adarshdenga/cube-area-projection",
      about:
        "A fun math project which investigates area of a cube when projected on a 2D surface.",
    },
    {
      name: "This Website!",
      skills: ["React", "Node", "TypeScript", "HTML", "CSS", "Tailwind"],
      image: website,
      link: "https://github.com/adarshdenga/addie-portfolio",
      about:
        "A true passion project which put me through my web development paces!",
    },
  ];
  const track = document.getElementById("track")!;

  const trackref = useRef(null);

  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [lastPercentage, setLastPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);

  function handleOnMouseDown(e: MouseEvent) {
    setMouseDownAt(e.clientX);
  }

  function handleOnMouseMove(e: MouseEvent) {
    if (mouseDownAt == 0) return;

    let dx = mouseDownAt - e.clientX;
    let maxDX = window.innerWidth / 2;

    let maxtrackmove =
      (-(track.clientWidth - window.innerWidth) / track.clientWidth) * 100;

    let percentage = (dx / maxDX) * -100;
    let nextPercentageUnconstrained = lastPercentage + percentage;
    let nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      maxtrackmove
    );

    setPercentage(nextPercentage);

    track.animate(
      {
        transform: `translateX(${nextPercentage}%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    for (const img of track.getElementsByClassName("projectimg")) {
      img.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }
  }

  function handleOnMouseUp() {
    setMouseDownAt(0);
    setLastPercentage(percentage);
  }

  window.onmousedown = (e) => {
    handleOnMouseDown(e);
  };

  window.onmousemove = (e) => {
    handleOnMouseMove(e);
  };

  window.onmouseup = () => {
    handleOnMouseUp();
  };

  return (
    <div className="flex flex-row w-screen h-screen bg-black items-center snap-x snap-proximity">
      <motion.div
        className="flex flex-nowrap h-2/3 gap-8 select-none px-8"
        ref={trackref}
        draggable="false"
        id="track"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {projects.map((project) => (
          <div className="projectcard h-full w-auto aspect-[3/4] bg-white snap-center shrink-0">
            <img
              className="projectimg object-cover object-right h-full"
              src={project.image}
              draggable="false"
            ></img>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
