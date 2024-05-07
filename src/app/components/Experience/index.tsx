"use client";

import { InView } from "react-intersection-observer";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Card } from "@/components/ui/card";
import { useWindowSize } from "@/lib/hooks/useWindowSize";
import { experience } from "@/lib/data";

export default function Experience() {
  const { width } = useWindowSize();
  const isTablet = width < 1170;

  return (
    <div id="experience" className="container px-4 pt-10">
      <h3 className="mb-8 text-2xl font-600">WORK EXPERIENCE</h3>
      <InView triggerOnce delay={400}>
        {({ inView, ref }) => (
          <div ref={ref} className={`${inView ? "animate__animated animate__fadeInUp" : "invisible"}`}>
            <VerticalTimeline>
              {experience.map((item) => {
                const Icon = item.icon;
                return (
                  <VerticalTimelineElement
                    key={item.id}
                    visible
                    className="cursor-default"
                    contentStyle={{ backgroundColor: "var(--card)", padding: 0 }}
                    contentArrowStyle={{ borderRight: "7px solid  var(--card)" }}
                    date={item.time}
                    iconStyle={{ background: "var(--primary)", color: "var(--white)" }}
                    icon={<Icon />}
                    dateClassName="!text-light"
                  >
                    <Card className="">
                      <h3 className="text-xl font-600">{item.title}</h3>
                      {isTablet && <p className="!font-600 text-gray">{item.time}</p>}
                      <p className="text-gray">{item.description}</p>
                    </Card>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        )}
      </InView>
    </div>
  );
}
