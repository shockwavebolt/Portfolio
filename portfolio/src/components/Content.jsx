import About from "./About";
import Bars from "./Bars";
import Contact from "./Contact";
import Nav from "./Nav";
import Projects from "./Projects";

function Content() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-4 md:gap-6 lg:grid-cols-6 lg:gap-16 ">
      <Nav />

      <Bars />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Content;
