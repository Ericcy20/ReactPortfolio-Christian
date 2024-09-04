import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import scroll from "../img/scroll.svg";
import Img_1 from "../img/img_1.png";

import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} /> <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1> Hi, I 'm Onobun Christian Eromobor</h1>{" "}
            <h5> Frontend Developer </h5>{" "}
            <p> I design and code beautifully, creating always on the web. </p>{" "}
          </HeroLeft>{" "}
          <HeroRight>
            <Image src={Img_1} alt="man-svgrepo" />
          </HeroRight>{" "}
        </HeroWrapper>{" "}
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down <img src={scroll} alt="scroll-down" />
          </ScrollLink>{" "}
        </ScrollDown>{" "}
      </HeroContainer>{" "}
    </main>
  );
}

export default Hero;
