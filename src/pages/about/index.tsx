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

const About = () => {
  return (
    <Wrapper>
      <Description>
        <BolderText>Hey!</BolderText>
        <Subtitle>
          I'm Luís. Front-end Developer passionate about UX/UI Design, always
          delivering user friendly interfaces thinking about E-accessibility.
          Since 2019 I have been working from non-conventional locations,
          experiencing different cultures and looking for new life experiences.
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
