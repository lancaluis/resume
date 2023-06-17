import "react-vertical-timeline-component/style.min.css";

import { School, Work } from "@styled-icons/material";

import { Title, Info, VerticalTimelineCustomElement, Description } from "./styles";

type TimelineProps = {
  date: string;
  title: string;
  company: string;
  description: string;
  type: string;
};

const TimelineEvent = ({
  date,
  title,
  company,
  description,
  type,
}: TimelineProps): JSX.Element => {
  return (
    <VerticalTimelineCustomElement
      contentStyle={{ background: "#1d2c28", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #1d2c28" }}
      date={date}
      iconStyle={{
        background: "#182622",
        color: "#ffffff",
        boxShadow: "0 0 0 4px rgba(221, 146, 80, 1)",
      }}
      icon={type === "work" ? <Work /> : <School />}
    >
      <Title>{title}</Title>
      <Info>{company}</Info>
      <Description>{description}</Description>
    </VerticalTimelineCustomElement>
  );
};

export default TimelineEvent;
