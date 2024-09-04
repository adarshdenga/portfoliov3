import { Link } from "react-router-dom";

export default function EduAndExp() {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-col w-full h-full py-40 gap-40 justify-between bg-black items-center rounded-t-3xl">
        <div className="container flex flex-col justify-center">
          <div className="text-4xl text-warmGray-500 font-dmsans mb-3 pb-3 border-b-2 border-warmGray-500">
            Experience
          </div>
          <div className="flex flex-col w-full text-3xl font-dmsans justify-between">
            <div className="flex flex-row justify-between">
              <Link
                to={"https://wappler.io/"}
                target="_blank"
                className="group/walink hover:pl-24 hover:text-white transition-all duration-500"
              >
                Wappler &nbsp;{" "}
                <span className="opacity-0 text-warmGray-500 group-hover/walink:opacity-100 group-hover/walink:text-white group-hover/walink:pl-4 duration-700 transition-all">
                  ↗
                </span>
              </Link>
              <div className="flex flex-col items-end">
                <span>Full Stack Developer Internship</span>
                <span className="text-lg text-warmGray-500 italic">
                  Nov. 2020 - Feb. 2021 (3 months)
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container flex flex-col justify-center">
          <div className="text-4xl text-warmGray-500 font-dmsans mb-3 pb-3 border-b-2 border-warmGray-500">
            Education
          </div>
          <div className="flex flex-col w-full text-3xl font-dmsans gap-8">
            <div className="flex flex-row justify-between">
              <Link
                to={"https://www.tudelft.nl/"}
                target="_blank"
                className="group/tulink hover:pl-24 hover:text-white transition-all duration-500"
              >
                Delft University of Technology &nbsp;{" "}
                <span className="opacity-0 text-warmGray-500 group-hover/tulink:opacity-100 group-hover/tulink:text-white group-hover/tulink:pl-4 duration-700 transition-all">
                  ↗
                </span>
              </Link>
              <div className="flex flex-col items-end">
                <span>MSc. Computer Science</span>
                <span className="text-lg text-warmGray-500 italic">
                  Sept. 2021 - Jan. 2025
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <Link
                to={"https://www.utwente.nl/"}
                target="_blank"
                className="group/utlink hover:pl-24 hover:text-white transition-all duration-500"
              >
                University of Twente &nbsp;{" "}
                <span className="opacity-0 text-warmGray-500 group-hover/utlink:opacity-100 group-hover/utlink:text-white group-hover/utlink:pl-4 duration-700 transition-all">
                  ↗
                </span>
              </Link>
              <div className="flex flex-col items-end">
                <span>BSc. Computer Science</span>
                <span className="text-lg text-warmGray-500 italic">
                  Sept. 2018 - Jul. 2021
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
