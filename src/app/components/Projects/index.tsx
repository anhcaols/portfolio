"use client";

import "swiper/css";
import { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: "1",
    name: "Book Movie Tickets",
    description: "Develop an interface so customers can book movie tickets quickly and easily",
    sourceCode: "https://github.com/anhcaols/book-movie-tickets",
    domain: "",
    technology: [
      {
        id: "1",
        name: "Next.js",
        icon: "/assets/images/nextjs.svg"
      },
      {
        id: "2",
        name: "Redux",
        icon: "/assets/images/redux.svg"
      },
      {
        id: "3",
        name: "MUI",
        icon: "/assets/images/material-ui.svg"
      },
      {
        id: "4",
        name: "Tailwind",
        icon: "/assets/images/tailwind-css.svg"
      }
    ]
  },
  {
    id: "2",
    name: "Book Movie Tickets API",
    description: "Build API services to serve the movie ticket booking application development process",
    sourceCode: "https://github.com/anhcaols/book-movie-tickets-API",
    domain: "",
    technology: [
      {
        id: "1",
        name: "Node.js",
        icon: "/assets/images/node-js.svg"
      },
      {
        id: "2",
        name: "Express",
        icon: "/assets/images/express.svg"
      },
      {
        id: "3",
        name: "MySQL",
        icon: "/assets/images/mysql.svg"
      },
      {
        id: "4",
        name: "Sequelize",
        icon: "/assets/images/sequelize.svg"
      }
    ]
  },
  {
    id: "3",
    name: "Portfolio",
    description: "The website provides personal information to help people conveniently exchange information with me",
    sourceCode: "https://github.com/anhcaols/portfolio",
    domain: "",
    technology: [
      {
        id: "1",
        name: "Next.js",
        icon: "/assets/images/nextjs.svg"
      },
      {
        id: "2",
        name: "Redux",
        icon: "/assets/images/redux.svg"
      },
      {
        id: "3",
        name: "Tailwind",
        icon: "/assets/images/tailwind-css.svg"
      },
      {
        id: "4",
        name: "Shadcn",
        icon: "/assets/images/shadcn.svg"
      }
    ]
  },
  {
    id: "4",
    name: "Next Auth",
    description: "Quick login using oauth and base auth",
    sourceCode: "https://github.com/anhcaols/next-auth",
    domain: "",
    technology: [
      {
        id: "1",
        name: "Next.js",
        icon: "/assets/images/nextjs.svg"
      },
      {
        id: "2",
        name: "Redux",
        icon: "/assets/images/redux.svg"
      },
      {
        id: "3",
        name: "Tailwind",
        icon: "/assets/images/tailwind-css.svg"
      },
      {
        id: "4",
        name: "Shadcn",
        icon: "/assets/images/tailwind-css.svg"
      },
      {
        id: "5",
        name: "MongoDB",
        description: "",
        icon: "/assets/images/mongodb.svg"
      }
    ]
  },
  {
    id: "5",
    name: "Shop Car",
    description: "The website with basic pure code to display a car store",
    sourceCode: "https://github.com/anhcaols/shop-car",
    domain: "https://anhcaols.github.io/shop-car/",
    technology: [
      {
        id: "1",
        name: "HTML",
        description: "",
        icon: "/assets/images/html5.svg"
      },
      {
        id: "2",
        name: "CSS",
        description: "",
        icon: "/assets/images/css-3.svg"
      },
      {
        id: "3",
        name: "Javascript",
        description: "",
        icon: "/assets/images/javascript.svg"
      }
    ]
  }
];

export default function Projects() {
  const sliderRef = useRef<any>(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div id="projects" className="container px-4 pt-10">
      <h3 className="mb-6 text-2xl font-600">MY PROJECTS</h3>
      <Swiper
        className="w-full"
        spaceBetween={16}
        ref={sliderRef}
        breakpoints={{
          640: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 2
          },
          1240: {
            slidesPerView: 3
          }
        }}
      >
        <div>
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <a href={project.sourceCode} target="_blank">
                <Card className="flex min-h-[270px] cursor-pointer flex-col justify-between" key={project.id}>
                  <div>
                    <h3 className="text-xl font-600">{project.name}</h3>
                    <p className="three-line-text mt-4 text-gray">{project.description}</p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.technology.map((tech) => (
                      <div
                        key={tech.id}
                        className="border border-solid border-transparent bg-dark/80 px-2 py-1 transition-all duration-300 ease-in-out hover:border-accent"
                      >
                        <div className="flex items-center gap-1">
                          <img className="h-5 w-5" src={tech.icon} alt="tech" />
                          {tech.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </a>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div className="mt-6 flex justify-center gap-2">
        <Button onClick={handlePrev} className="h-10 w-10" variant="outline">
          <ChevronLeft size={24} strokeWidth={2} />
        </Button>
        <Button onClick={handleNext} className="h-10 w-10" variant="outline">
          <ChevronRight size={24} strokeWidth={2} />
        </Button>
      </div>
    </div>
  );
}
