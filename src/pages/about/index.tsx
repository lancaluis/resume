import {
  Typescript,
  Gatsby,
  Jest,
  Storybook,
  ReactLogo,
  Html5,
  Figma,
  Css3,
  Javascript,
  Git,
  Amazonaws,
  Github,
} from "@styled-icons/simple-icons/";

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

const SKILLS = [
  {
    icon: <Html5 />,
    label: "HTML",
    color: "",
  },
  {
    icon: <Css3 />,
    label: "CSS",
    color: "",
  },
  {
    icon: <Javascript />,
    label: "JavaScript",
    color: "",
  },
  {
    icon: <ReactLogo />,
    label: "React.Js",
    color: "",
  },
  {
    icon: <Typescript />,
    label: "TypeScript",
    color: "",
  },
  {
    icon: <Gatsby />,
    label: "Gatsby.Js",
    color: "",
  },
  {
    icon: <Jest />,
    label: "Jest",
    color: "",
  },
  {
    icon: <Storybook />,
    label: "Storybook",
    color: "",
  },
  {
    icon: <Git />,
    label: "Git",
    color: "",
  },
  {
    icon: <Github />,
    label: "Github",
    color: "",
  },
  {
    icon: <Amazonaws />,
    label: "AWS",
    color: "",
  },
  {
    icon: <Figma />,
    label: "Figma",
    color: "",
  },
];

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
        {SKILLS.map(({ icon, color, label }, key) => (
          <Skill key={key} color={color} label={label} icon={icon}></Skill>
        ))}
      </Skills>
    </Wrapper>
  );
};

export default About;
