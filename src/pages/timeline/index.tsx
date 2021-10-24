import { VerticalTimeline } from "react-vertical-timeline-component";

import TimelineEvent from "../../components/Timeline";

const EVENTS = [
  {
    title: "Front-end Developer",
    company: "Hi Platform",
    date: "Dec 2019 - present",
    description:
      "Ok, being a programmer is not just writing code, we also have to think out of the box to create the best experience for the customers.",
    type: "work",
  },
  {
    title: "Mobile Developer",
    company: "Viceri",
    date: "Jul to Nov 2019",
    description:
      "I really like to work with CSS, but I was thinking. Should I try to create mobile apps? Hmm, react native sounds interesting...",
    type: "work",
  },
  {
    title: "Front-end Developer",
    company: "Viceri",
    date: "Nov 2018 to Jun 2019",
    description:
      "I never forget the day where I met CSS. Thanks world, for share it with me",
    type: "work",
  },
  {
    title: "Oracle Developer",
    company: "Taker IT",
    date: "Apr to Jul 2018",
    description: "Intern working with Oracle ERP. I can't stand Java...",
    type: "work",
  },
  {
    title: "IT Support Technician",
    company: "Centro Paula Souza",
    date: "Feb to Jul 2017",
    description: "My first job was fixing computers. Let me format your PC!",
    type: "work",
  },
];

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
    </VerticalTimeline>
  );
};

export default Timeline;
