"use client";

import { InView } from "react-intersection-observer";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { skills } from "@/lib/data";

export default function About() {
  return (
    <div id="about" className="container px-4 pt-10">
      <h3 className="mb-6 text-2xl font-600">ABOUT ME</h3>
      <InView triggerOnce delay={400}>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={`${inView ? "animate__animated animate__fadeInLeft" : "invisible"} 
            cursor-pointer border border-solid border-accent bg-card p-5 transition-all duration-300 ease-in-out hover:border-primary hover:shadow-custom`}
          >
            <h3 className="mb-4 text-xl font-600">As a Front-end Developer</h3>
            <p className="text-gray">
              Ever since I was in college, I have been passionate about programming and have always been fascinated by
              the ability to create beautiful and useful websites. I love learning the latest technologies and applying
              them to my projects.
            </p>
            <p className="my-4 text-gray">
              I&apos;m dynamic, creative and highly responsible person. I am always eager to learn and always ready to
              take on new challenges. I believe that I would be a valuable asset to your company.
            </p>
          </div>
        )}
      </InView>
      <InView triggerOnce delay={400}>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={`${inView ? "animate__animated animate__fadeInRight" : "invisible"}
              mt-4 cursor-pointer border border-solid border-accent bg-card p-5 transition-all duration-300 ease-in-out hover:border-primary hover:shadow-custom`}
          >
            <h3 className="mb-4 text-xl font-600">Hobbies and interests</h3>
            <p className="text-gray">
              In my free time, I enjoy participating in sports activities such as playing football and going to the gym
              to stay fit and healthy. When I have time to spare, I like to play games with friends or go camping to
              relax and enjoy nature. Sometimes, I also like to spend time by myself to read books, listen to music or
              reflect on life.
            </p>
          </div>
        )}
      </InView>
      <div>
        <h3 className="my-6 text-xl font-600">My Skills</h3>
        <InView triggerOnce delay={400}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`${inView ? "animate__animated animate__fadeInUp" : "invisible"}
              flex flex-wrap justify-center gap-4`}
            >
              {skills.map((item) => (
                <Card className="cursor-default !p-3" key={item.id}>
                  <div className="flex gap-2">
                    {item.icon && <Image height={24} width={24} src={item.icon} alt="skills" />}
                    <p>{item.name}</p>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </InView>
      </div>
    </div>
  );
}