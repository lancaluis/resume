import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"

import { Star } from "@styled-icons/material"

import TimelineEvent from "../../components/Timeline"

const EVENTS = [
  {
    title: "Front-end Developer",
    company: "Hi Platform",
    date: "2019 - present",
    description: "Description",
    type: "work",
  },
  {
    title: "Mobile Developer",
    company: "Viceri",
    date: "2018 - 2019",
    description: "Description",
    type: "work",
  },
  {
    title: "Front-end Developer",
    company: "Viceri",
    date: "2018",
    description: "Description",
    type: "work",
  },
  {
    title: "Oracle Developer",
    company: "Taker IT",
    date: "2018",
    description: "Intern working with Oracle ERP. I can't stand Java...",
    type: "work",
  },
  {
    title: "IT Support Technician",
    company: "Centro Paula Souza",
    date: "2017",
    description: "My first job was fixing computers. Let me format your PC!",
    type: "work",
  },
]

const Timeline = () => {
  return (
    <VerticalTimeline>
      {EVENTS.map(({ title, company, date, description, type }, key) => (
        <TimelineEvent
          key={key}
          title={title}
          company={company}
          date={date}
          description={description}
          type={type}
        />
      ))}
      <VerticalTimelineElement
        iconStyle={{ background: "#7b78ff", color: "#ffffff" }}
        icon={<Star />}
      />
    </VerticalTimeline>
  )
}

export default Timeline
