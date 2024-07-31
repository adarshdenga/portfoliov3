import Skills from "./Skills";
import Intro from "./Intro";
import EduAndExp from "./EduAndExp";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-black text-white items-center">
      <Intro />
      <Skills />
      <EduAndExp />
    </div>
  );
}
