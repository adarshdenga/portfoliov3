import { motion } from "framer-motion";
import TextSwitcher from "./TextSwitcher";

export default function () {
  return (
    <div className="container flex flex-col text-7xl font-bold font-dmsans bg-black py-8 pt-52">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
      >
        I'm Adarsh,
      </motion.div>
      <motion.div
        className="flex flex-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.25 }}
      >
        and I am a&nbsp; <TextSwitcher />
      </motion.div>
    </div>
  );
}
