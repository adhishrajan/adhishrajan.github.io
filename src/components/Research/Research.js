import React from "react";
import ResearchCard from "./ResearchCard/ResearchCard";
import { ContactWrapper } from "../Contact/ContactElements";
function Research() {
  return (
    <ContactWrapper id="research">
      <div className="ResearchWrapper" id="research">
        <div className="Container">
          <div className="SectionTitle">Research</div>
          <ResearchCard />
        </div>
      </div>
    </ContactWrapper>
  );
}

export default Research;
