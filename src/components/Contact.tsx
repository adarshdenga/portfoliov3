import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Resume from "../assets/Resume.pdf";

export default function Contact() {
  return (
    <div className="flex flex-col w-full h-screen bg-black text-warmGray-500 items-center justify-center">
      <motion.div
        className="container flex flex-col text-5xl font-bold font-dmsans bg-black py-8 pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Link
          to={"https://www.linkedin.com/in/adarsh-denga/"}
          target="_blank"
          className="group/lilink hover:pl-24 hover:text-white transition-all duration-500"
        >
          LinkedIn &nbsp;{" "}
          <span className="opacity-0 text-warmGray-500 group-hover/lilink:opacity-100 group-hover/lilink:text-white group-hover/lilink:pl-4 duration-700 transition-all">
            ↗
          </span>
        </Link>
        <Link
          to={"https://github.com/adarshdenga"}
          target="_blank"
          className="group/ghlink hover:pl-24 hover:text-white transition-all duration-500"
        >
          Github &nbsp;{" "}
          <span className="opacity-0 text-warmGray-500 group-hover/ghlink:opacity-100 group-hover/ghlink:text-white group-hover/ghlink:pl-4 duration-700 transition-all">
            ↗
          </span>
        </Link>
        <Link
          to={Resume}
          target="_blank"
          className="group/cvlink hover:pl-24 hover:text-white transition-all duration-500"
        >
          Résumé &nbsp;{" "}
          <span className="opacity-0 text-warmGray-500 group-hover/cvlink:opacity-100 group-hover/cvlink:text-white group-hover/cvlink:pl-4 duration-700 transition-all">
            ↗
          </span>
        </Link>
        <Link
          to="mailto:adarshdenga@gmail.com"
          target="_blank"
          className="group/emlink hover:pl-24 hover:text-white transition-all duration-500"
        >
          Email &nbsp;{" "}
          <span className="opacity-0 text-warmGray-500 group-hover/emlink:opacity-100 group-hover/emlink:text-white group-hover/emlink:pl-4 duration-700 transition-all">
            ↗
          </span>
        </Link>
        <div className="group/nulink hover:pl-24 hover:text-white transition-all duration-500">
          Phone &nbsp;{" "}
          <span className="opacity-0 text-warmGray-500 group-hover/nulink:opacity-100 group-hover/nulink:text-white group-hover/nulink:pl-4 duration-700 transition-all">
            +31 645297034
          </span>
        </div>
      </motion.div>
    </div>
  );
}
