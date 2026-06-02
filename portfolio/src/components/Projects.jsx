import { useState, useEffect, useRef } from "react";
import Project from "./Project";

const projectsData = [
  {
    title: "G-BLISS/E-COMMERCE(2025)",
    description:
      "Lorem ipsum dolor sit amet consectetur. Fermentum sapien tortor in accumsan malesuada nunc mauris suspendisse. Morbi cras elit proin id turpis lectus erat lacus mauris.",
    stack: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    title: "TRACKER-M8/ PRODUCTIVITY TOOL(2025)",
    description:
      "Lorem ipsum dolor sit amet consectetur. Fermentum sapien tortor in accumsan malesuada nunc mauris suspendisse. Morbi cras elit proin id turpis lectus erat lacus mauris.",
    stack: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    title: "TYPEMATCH/DESIGN TOOL(2026)",
    description:
      "Lorem ipsum dolor sit amet consectetur. Fermentum sapien tortor in accumsan malesuada nunc mauris suspendisse. Morbi cras elit proin id turpis lectus erat lacus mauris.",
    stack: "Lorem ipsum dolor sit amet consectetur.",
  },
];

function Projects() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const itemRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const trigger = window.innerHeight * 0.6;
      let newActive = -1;

      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        if (el.getBoundingClientRect().top < trigger) {
          newActive = i;
        }
      });

      setActiveIndex(newActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="projects"
      className="my-24 md:col-start-2 lg:col-start-3 md:col-span-3 lg:col-span-4 grid grid-cols-subgrid gap-y-16"
    >
      {projectsData.map((project, i) => (
        <Project
          key={project.title}
          ref={(el) => {
            itemRefs.current[i] = el;
          }}
          {...project}
          open={activeIndex === i}
        />
      ))}
    </div>
  );
}

export default Projects;
