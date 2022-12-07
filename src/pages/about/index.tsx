import { useEffect } from "react";

import {
  Wrapper,
  BolderText,
  Subtitle,
  Description,
  Skills,
  SectionTitle,
} from "./styles";

import Skill from "../../components/SkillCard";
import Button from "../../components/Button";

import SKILLS from "../../utils/skills";
import { initGA, trackingPageGA } from "../../utils/reactGA";

const About = () => {
  useEffect(() => {
    initGA();
    trackingPageGA("/about");
  }, []);

  return (
    <Wrapper>
      <Description>
        <BolderText>Hey!</BolderText>
        <Subtitle>
         My name is Luís. I'm a Digital Nomad who works as Front-end Developer since 2018, my current focus 
         is to create interactive and responsive layouts from scratch, delivering user friendly interfaces thinking 
         about E-accessibility and SEO. I also design layouts for web and mobile apps, landing pages or just simple
         websites, always using concepts of UX Design, although we create software for humans, right?
        </Subtitle>
        <Button />
      </Description>

      <SectionTitle>Technologies and tools I have been used</SectionTitle>
      <Skills>
        {SKILLS.map(({ icon, color, label }) => (
          <Skill key={label} color={color} label={label} icon={icon}></Skill>
        ))}
      </Skills>
    </Wrapper>
  );
};

export default About;
