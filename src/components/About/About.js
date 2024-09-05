import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle"> About Me </div>{" "}
        <div className="BigCard">
          <Image
            src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello!My name is <strong> Onobun Christian Eromobor </strong>. I am
            passionate about technology and have developed a strong proficiency
            in various programming languages and frameworks.Over the years, I
            have honed my skills in creating and managing complex systems and
            applications, consistently delivering high - quality solutions.{" "}
          </div>{" "}
          <div className="AboutBio tagline2">
            My journey in the tech industry has equipped me with the confidence
            and expertise to tackle challenges using the following technologies:
          </div>{" "}
          <Technologies>
            {" "}
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />{" "}
                <TechName> {stack.name} </TechName>{" "}
              </Tech>
            ))}{" "}
          </Technologies>{" "}
        </div>{" "}
      </div>{" "}
    </ContactWrapper>
  );
}

export default About;
