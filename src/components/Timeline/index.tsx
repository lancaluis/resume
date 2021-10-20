import "react-vertical-timeline-component/style.min.css"

import { School, Work } from "@styled-icons/material"

import { Title, Info, VerticalTimelineCustomElement } from "./styles"

type TimelineProps = {
  date: string
  title: string
  company: string
  description: string
  type: string
}

const TimelineEvent = ({
  date,
  title,
  company,
  description,
  type,
}: TimelineProps): JSX.Element => {
  return (
    <VerticalTimelineCustomElement
      contentStyle={{ background: "#0e0e0e", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #0e0e0e" }}
      date={date}
      iconStyle={{ background: "#7b78ff", color: "#ffffff" }}
      icon={type === "work" ? <Work /> : <School />}
    >
      <Title>{title}</Title>
      <Info>{company}</Info>
      <p>{description}</p>
    </VerticalTimelineCustomElement>
  )
}

export default TimelineEvent
