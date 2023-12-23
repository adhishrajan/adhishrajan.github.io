import React from "react";
import WorkCard from "./WorkCard/WorkCard";
import { ContactWrapper } from "../Contact/ContactElements";
function Work() {
  return (
    <ContactWrapper id="work">
      <div className="WorkWrapper" id="work">
        <div className="Container">
          <div className="SectionTitle">Work</div>
          <WorkCard />
        </div>
      </div>
    </ContactWrapper>
  );
}

export default Work;
