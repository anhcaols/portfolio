"use client";

import { Link as LinkS } from "react-scroll";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import Typewriter from "typewriter-effect";
import { Button } from "@/components/ui/button/button";
import styles from "@/layouts/MainLayout/Header/styles.module.scss";

export default function Intro() {
  return (
    <div id="home" className="container px-4 pt-32 lg:pt-40">
      <div className="grid grid-cols-2 gap-16 lg:grid-cols-12">
        <div className="col-span-6 lg:col-span-8">
          <p className="text-gray">WELCOME TO MY WORLD</p>
          <div className="my-4">
            <h2 className="text-4xl !font-800 md:text-7xl">
              Hi, I&apos;m <span className="text-primary">AnhLs</span>
            </h2>
            <Typewriter
              options={{
                strings: ["a Professional Coder.", "a Web Developer."],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 100,
                cursorClassName: "text-primary font-700 text-4xl lg:text-5xl ",
                wrapperClassName: "text-2xl font-700 md:text-5xl",
                cursor: "_"
              }}
            />
            <p className="mt-4 w-full text-gray lg:w-[86%]">
              I&apos;m a web developer with nearly 3 years of experience. I&apos;m passionate about coding and the
              endless exploration it offers. I&apos;m always driven to innovate and find the best solutions for my
              software.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-12 gap-4 lg:mt-16">
            <div className="col-span-12 lg:col-span-6">
              <p className="mb-3 text-gray">FIND WITH ME</p>
              <div className="flex justify-between gap-2 sm:justify-start">
                <LinkS to="contact" spy smooth offset={-80} duration={500}>
                  <Button>
                    Contact me
                    <MoveRight className="ml-2 inline-block" size={16} strokeWidth={2} />
                  </Button>
                </LinkS>
                <a href="https://www.linkedin.com/in/anhcaols10/" target="_blank">
                  <Button variant="icon">
                    <Image width={28} height={28} src="/assets/images/linkedin-alt.svg" alt="linkedin" />
                  </Button>
                </a>
                <a href="https://facebook.com/anhcaolsdev/" target="_blank">
                  <Button variant="icon">
                    <Image width={24} height={24} src="/assets/images/facebook.svg" alt="facebook" />
                  </Button>
                </a>
                <a href="https://twitter.com/anhcaols/" target="_blank">
                  <Button variant="icon">
                    <Image width={30} height={30} src="/assets/images/twitter.svg" alt="twitter" />
                  </Button>
                </a>
                <a href="https://github.com/anhcaols/" target="_blank">
                  <Button variant="icon">
                    <Image width={24} height={24} src="/assets/images/github.svg" alt="github" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <p className="mb-3 text-gray">MY CORE</p>
              <div className="-ml-2 flex gap-2">
                <Button variant="icon">
                  <Image width={32} height={32} src="/assets/images/react.svg" alt="react" />
                </Button>
                <Button variant="icon">
                  <Image width={32} height={32} src="/assets/images/node-js.svg" alt="nodejs" />
                </Button>
                <Button variant="icon">
                  <Image width={32} height={32} src="/assets/images/javascript.svg" alt="javascript" />
                </Button>
                <Button variant="icon">
                  <Image width={32} height={32} src="/assets/images/typescript.svg" alt="typescript" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-4">
          <img className="h-full w-auto object-cover lg:h-[420px]" src="/assets/images/logo.jpg" alt="logo" />
        </div>
      </div>
    </div>
  );
}
