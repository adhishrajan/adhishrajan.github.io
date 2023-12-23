import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import { ContactWrapper } from "../Contact/ContactElements";
function Projects() {
  return (
    <ContactWrapper id="projects">
      <div className="ProjectWrapper" id="projects">
        <div className="Container">
          <div className="SectionTitle">Projects</div>
          <ProjectCard />
        </div>
      </div>
    </ContactWrapper>
  );
}

export default Projects;
