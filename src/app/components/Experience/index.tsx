"use client";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { BriefcaseBusiness, GraduationCapIcon } from "lucide-react";
import "react-vertical-timeline-component/style.min.css";
import { Card } from "@/components/ui/card";
import { useWindowSize } from "@/lib/hooks/useWindowSize";

const experience = [
  {
    id: "1",
    title: "Front-end Developer NorthStudio",
    description:
      "I worked as a front-end developer for 1 year and 6 months. While working here, I have trained myself to discover new knowledge. From there, it helped me improve my skills in software development.",
    time: "2022 - present",
    icon: <BriefcaseBusiness />
  },
  {
    id: "2",
    title: "University of Transport and Communications",
    description:
      "The 4-year information technology program at the school equipped me with the knowledge and skills necessary to become a software developer.",
    time: "2019 - 2023",
    icon: <GraduationCapIcon />
  }
];

export default function Experience() {
  const { width } = useWindowSize();
  const isTablet = width < 1170;

  return (
    <div id="projects" className="container px-4 pt-10">
      <h3 className="mb-8 text-2xl font-600">WORK EXPERIENCE</h3>
      <VerticalTimeline>
        {experience.map((item) => (
          <VerticalTimelineElement
            key={item.id}
            visible
            className=""
            contentStyle={{ backgroundColor: "var(--card)", padding: 0 }}
            contentArrowStyle={{ borderRight: "7px solid  var(--card)" }}
            date={item.time}
            iconStyle={{ background: "var(--primary)", color: "var(--white)" }}
            icon={item.icon}
            dateClassName="!text-light"
          >
            <Card className="">
              <h3 className="text-xl font-600">{item.title}</h3>
              {isTablet && <p className="!font-600 text-gray">{item.time}</p>}
              <p className="text-gray">{item.description}</p>
            </Card>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
