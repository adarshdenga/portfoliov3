import { Link } from "react-router-dom";

export default function EduAndExp() {
  return (
    <div className="w-full h-screen pt-24 bg-white">
      <div className="flex flex-col w-full h-full bg-black justify-center items-center rounded-t-3xl">
        <div className="container min-h-max flex flex-col py-40 justify-center">
          <div className="text-4xl text-warmGray-500 font-dmsans mb-3 pb-3 border-b-2 border-warmGray-500">
            Experience
          </div>
          <div className="flex flex-col w-full text-3xl font-dmsans justify-between">
            <div className="flex flex-row justify-between">
              <Link
                to={"https://wappler.io/"}
                target="_blank"
                className="contact-link"
              >
                Wappler &nbsp; <span className="contact-link-icon">↗</span>
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

        <div className="container h-1/2 flex flex-col pb-40 justify-center">
          <div className="text-4xl text-warmGray-500 font-dmsans mb-3 pb-3 border-b-2 border-warmGray-500">
            Education
          </div>
          <div className="flex flex-col w-full text-3xl font-dmsans gap-8">
            <div className="flex flex-row justify-between">
              <Link
                to={"https://www.tudelft.nl/"}
                target="_blank"
                className="contact-link"
              >
                Delft University of Technology &nbsp;{" "}
                <span className="contact-link-icon">↗</span>
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
                className="contact-link"
              >
                University of Twente &nbsp;{" "}
                <span className="contact-link-icon">↗</span>
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
