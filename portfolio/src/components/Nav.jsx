import { useEffect, useState } from "react";

function Nav() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const sections = ["about", "projects", "contact"];
    const trigger = window.innerHeight * 0.5;

    const handleScroll = () => {
      if (window.scrollY < 50) {
        setActive(null);
        return;
      }
      let current = null;
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < trigger) current = id;
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navClass = (id) =>
    `cursor-pointer hover:text-accent transition-colors ${
      active === null ? "" : active === id ? "text-accent" : "text-inactive"
    }`;

  return (
    <div className="bg-primary font-ibm fixed inset-x-0 bottom-0 z-50 col-start-1 flex flex-row items-center justify-center gap-8 py-4 text-[14px] md:sticky md:inset-auto md:top-8 md:flex-col md:items-start md:justify-start md:gap-4 md:self-start md:bg-transparent md:pt-8 md:pb-0 md:text-[16px] lg:text-[20px]">
      <nav
        className={navClass("about")}
        onClick={() => scrollToSection("about")}
      >
        ABOUT
      </nav>
      <nav
        className={navClass("projects")}
        onClick={() => scrollToSection("projects")}
      >
        PROJECTS
      </nav>
      <nav
        className={navClass("contact")}
        onClick={() => scrollToSection("contact")}
      >
        CONTACT
      </nav>
    </div>
  );
}

export default Nav;
