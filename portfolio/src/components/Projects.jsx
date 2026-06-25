import Project from "./Project";
import gBlissPreview from "../previews/gb.webm";
import M8Preview from "../previews/M8.webm";
import TMPreview from "../previews/TM.webm";

const projectsData = [
  {
    title: "G-BLISS/E-COMMERCE(2025)",
    description:
      "Lorem ipsum dolor sit amet consectetur. Fermentum sapien tortor in accumsan malesuada nunc mauris suspendisse. Morbi cras elit proin id turpis lectus erat lacus mauris.",
    stack: "Lorem ipsum dolor sit amet consectetur.",
    previewVideo: gBlissPreview,
    link: "https://shockwavebolt.github.io/G-Bliss/",
  },
  {
    title: "TRACKER-M8/ PRODUCTIVITY TOOL(2025)",
    description:
      "Lorem ipsum dolor sit amet consectetur. Fermentum sapien tortor in accumsan malesuada nunc mauris suspendisse. Morbi cras elit proin id turpis lectus erat lacus mauris.",
    stack: "Lorem ipsum dolor sit amet consectetur.",
    previewVideo: M8Preview,
    link: "https://shockwavebolt.github.io/M8-Project-Tracker/",
  },
  {
    title: "TYPEMATCH/DESIGN TOOL(2026)",
    description:
      "Lorem ipsum dolor sit amet consectetur. Fermentum sapien tortor in accumsan malesuada nunc mauris suspendisse. Morbi cras elit proin id turpis lectus erat lacus mauris.",
    stack: "Lorem ipsum dolor sit amet consectetur.",
    previewVideo: TMPreview,
    link: "https://shockwavebolt.github.io/TypeMatch/",
  },
];

function Projects() {
  return (
    <div
      id="projects"
      className="my-24 md:col-start-2 lg:col-start-3 md:col-span-3 lg:col-span-4 grid grid-cols-subgrid gap-y-16"
    >
      {projectsData.map((project) => (
        <Project key={project.title} {...project} />
      ))}
    </div>
  );
}

export default Projects;
