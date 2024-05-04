"use client";

import "swiper/css";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import { useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button/button";
import { projects } from "@/lib/data";

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
      <InView triggerOnce delay={400}>
        {({ inView, ref }) => (
          <div ref={ref} className={`${inView ? "animate__animated animate__fadeInUp" : "invisible"}`}>
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
                      <Card
                        className="flex min-h-[270px] cursor-pointer flex-col justify-between hover:shadow-custom"
                        key={project.id}
                      >
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
                              <div className="flex items-center gap-2">
                                <Image width={20} height={20} src={tech.icon} alt="tech" />
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
        )}
      </InView>
    </div>
  );
}
