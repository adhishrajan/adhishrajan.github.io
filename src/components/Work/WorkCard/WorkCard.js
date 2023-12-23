import React from "react";
import { WorkList } from "../../../data/WorkData";
import {
  Card,
  Card2,
  CardLeft,
  CardRight,
  TechCardContainer,
  CardContainer,
  TechCard,
  BtnGroup,
} from "./WorkCardElements";
import ScrollAnimation from "react-animate-on-scroll";
function WorkCard() {
  return (
    <>
    <CardContainer>
      {WorkList.map((list, index) => (
        <ScrollAnimation animateIn="fadeInLeft" key={index}>
          <Card2>
              <img src={list.img} alt={list.name} />
              <h4>{list.title}</h4>
              <p>{list.description}</p>
          </Card2>
        </ScrollAnimation>
      ))}
    </CardContainer>
    </>
  );
}

export default WorkCard;
