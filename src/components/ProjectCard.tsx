export default function ProjectCard({ project }: any) {
  return (
    <div className="h-full w-auto aspect-[3/4] bg-white snap-center shrink-0">
      <img
        className="projectimg h-full object-cover grayscale"
        src={project.image}
        draggable="false"
      ></img>
      {/* <div className="flex flex-col h-1/2 p-4 justify-between">
        <div>
          <div className="w-full justify-between flex flex-row mb-2">
            <p className="font-bold">{project.name}</p>
            <a href={project.link} target="_blank">
              click
            </a>
          </div>
          <p>{project.about}</p>
        </div>
        <div className="flex flex-wrap gap-1 text-xs bottom-0">
          {project.skills.map((skill) => (
            <div className="bg-black bg-opacity-15 rounded-full px-2 text-white">
              {skill}
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
