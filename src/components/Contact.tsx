import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
          className="contact-link py-4"
        >
          LinkedIn &nbsp; <span className="contact-link-icon">↗</span>
        </Link>
        <Link
          to={"https://github.com/adarshdenga"}
          target="_blank"
          className="contact-link py-4"
        >
          Github &nbsp; <span className="contact-link-icon">↗</span>
        </Link>
        <Link to={""} target="_blank" className="contact-link py-4">
          Résumé &nbsp; <span className="contact-link-icon">↗</span>
        </Link>
        <Link to={""} target="_blank" className="contact-link py-4">
          Email &nbsp; <span className="contact-link-icon">↗</span>
        </Link>
        <div className="contact-link py-4">
          Phone &nbsp; <span className="contact-link-icon">+31 645297034</span>
        </div>
      </motion.div>
    </div>
  );
}
