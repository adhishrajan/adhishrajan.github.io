import React from "react";
import { ResearchList } from "../../../data/ResearchData";
import {
  Card,
  Card2,
  CardLeft,
  CardRight,
  TechCardContainer,
  CardContainer,
  TechCard,
  BtnGroup,
} from "./ResearchCardElements";
import ScrollAnimation from "react-animate-on-scroll";
function ResearchCard() {
  return (
    <>
      {ResearchList.map((list, index) => (
        <ScrollAnimation animateIn="fadeInLeft" key={index}>
          <Card>
            <CardLeft>
              <img src={list.img} alt={list.name} />
            </CardLeft>
            <CardRight>
              <h4>{list.title}</h4>
              <p>{list.description}</p>

              <BtnGroup>
                {list.links.length > 0 && (
                  <a
                    className="btn SecondaryBtn btn-shadow"
                    href={list.links}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    More
                  </a>
                )}
              </BtnGroup>
            </CardRight>
          </Card>
        </ScrollAnimation>
      ))}
    </>
  );
}

export default ResearchCard;
