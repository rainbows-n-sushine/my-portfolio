import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa"; // You can install react-icons if not already
import styles from "./Projects.module.css"
import projects from "../../data/projects.json"
import {ProjectCard} from "./ProjectCard.jsx"

export const Projects = () => {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const childWidth = container.firstChild?.offsetWidth || 0;
      container.scrollBy({ left: childWidth, behavior: "smooth" });
    }
  };

  return (
    <section className={styles.container} id="projects">
      <div className={styles.header}>
        <h2 className={styles.title}>Projects</h2>
        <button className={styles.arrowButton} onClick={scrollRight}>
          <FaArrowRight />
        </button>
      </div>
      <div className={styles.projects} ref={scrollRef}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};
