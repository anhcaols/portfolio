"use client";

import { InView } from "react-intersection-observer";
import Image from "next/image";
import { SendHorizonal } from "lucide-react";
import { Button } from "@/components/ui/button/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const contacts = [
  {
    id: "1",
    title: "Phone",
    content: "+84 395562788",
    icon: "/assets/images/google-voice.svg"
  },
  {
    id: "2",
    title: "Email",
    content: "caotheanhls2001@gmail.com",
    path: "mailto: caotheanhls2001@gmail.com",
    icon: "/assets/images/gmail.svg"
  },
  {
    id: "3",
    title: "Linkedin",
    content: "Anh Cao",
    path: "https://www.linkedin.com/in/anhcaols10/",
    icon: "/assets/images/linkedin-alt.svg"
  },
  {
    id: "4",
    title: "Facebook",
    content: "Cao Thế Anh",
    path: "https://facebook.com/anhcaolsdev/",
    icon: "/assets/images/facebook.svg"
  }
];

export default function Contact() {
  return (
    <div id="contact" className="container px-4 pt-10">
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-12">
        <InView triggerOnce delay={400}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`${inView ? "animate__animated animate__fadeInLeft" : "invisible"} col-span-6 lg:col-span-5`}
            >
              <h3 className="text-2xl font-600">CONTACT ME</h3>
              <p className="pb-[30px] pt-2 text-gray">Tell me quickly about your connection</p>
              <div className="flex flex-col gap-2">
                {contacts.map((item) => {
                  return (
                    <Card key={item.id} className="cursor-pointer !p-3">
                      <a href={item?.path}>
                        <div className="flex gap-2 ">
                          <Image width={28} height={28} src={item.icon} alt="gmail" />
                          {item.title}:
                          <p className="inline-block border-b border-solid border-primary">{item.content}</p>
                        </div>
                      </a>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}
        </InView>
        <InView triggerOnce delay={400}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`${inView ? "animate__animated animate__fadeInRight" : "invisible"} col-span-6 lg:col-span-7`}
            >
              <div className="cursor-pointer border border-solid border-accent bg-card p-5 transition-all duration-300 ease-in-out hover:border-primary hover:shadow-custom">
                <div className="flex flex-col gap-4">
                  <Input placeholder="Full name" />
                  <Input placeholder="Email address" type="email" />
                  <Input placeholder="Phone number" type="number" />
                  <Textarea placeholder="Enter your message" />
                  <Button className="cursor-no-drop">
                    <SendHorizonal className="mr-2 inline-block" size={20} strokeWidth={2} />
                    Send message
                  </Button>
                </div>
              </div>
            </div>
          )}
        </InView>
      </div>
    </div>
  );
}
