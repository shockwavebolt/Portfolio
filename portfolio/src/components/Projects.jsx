import Project from "./Project";
import gBlissPreview from "../media/gb.webm";
import M8Preview from "../media/M8.webm";
import TMPreview from "../media/TM.webm";

const projectsData = [
  {
    id: 1,
    title: "G-BLISS/E-COMMERCE(2025)",
    description:
      "A cannabis e-commerce experience with a minimal, modern design — built end-to-end with React and Supabase, from product discovery through checkout.",
    stack: "Figma, React,TailwindCSS, Supabase.",
    previewVideo: gBlissPreview,
    link: "https://shockwavebolt.github.io/G-Bliss/",
  },
  {
    id: 2,
    title: "TRACKER-M8/PRODUCTIVITY TOOL(2025)",
    description:
      "A project tracker built for your solo productive work — tracking progress and elapsed time across two themes, Mentos and Midnight.",
    stack: "Figma, React, TailwindCSS.",
    previewVideo: M8Preview,
    link: "https://shockwavebolt.github.io/M8-Project-Tracker/",
  },
  {
    id: 3,
    title: "TYPEMATCH/DESIGN TOOL(2026)",
    description:
      "A typography tool powered by the Google Fonts API — compare and pair font families side by side to find the right match for your next project.",
    stack: "Figma, HTML/CSS, TailwindCSS, JavaScript, Google Fonts API.",
    previewVideo: TMPreview,
    link: "https://shockwavebolt.github.io/TypeMatch/",
  },
];

function Projects() {
  return (
    <div
      id="projects"
      className="mb-24 grid grid-cols-subgrid gap-y-16 md:col-span-3 md:col-start-2 md:gap-x-6 lg:col-span-4 lg:col-start-3 lg:gap-x-16"
    >
      {projectsData.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  );
}

export default Projects;
