import MainLayout from "@/layouts/MainLayout";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import Intro from "@/app/components/Intro";
import About from "@/app/components/About";

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-12 lg:gap-24 ">
        <Intro />
        <About />
        {/*<Skills />*/}
        {/*<Projects />*/}
        <Contact />
      </div>
    </MainLayout>
  );
}
