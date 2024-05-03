import MainLayout from "@/layouts/MainLayout";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import Intro from "@/app/components/Intro";
import About from "@/app/components/About";
import Experience from "@/app/components/Experience";

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-12 lg:gap-24 ">
        <Intro />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </MainLayout>
  );
}
