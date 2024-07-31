import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.div
      className="fixed flex flex-row w-full h-24 justify-center items-center font-dmsans text-white mix-blend-difference py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
    >
      <div className="container flex flex-row justify-between">
        <div className="font-black text-2xl">Adarsh Denga</div>
        <div className="flex flex-row font-bold text-lg gap-6">
          <Link to={"/"}>About</Link>
          <Link to={"/projects"}>Projects</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
      </div>
    </motion.div>
  );
}
