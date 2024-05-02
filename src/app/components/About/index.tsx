import { Card } from "@/components/ui/card";

export default function About() {
  const skills = [
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
      name: "Tailwind",
      description: "",
      icon: "/assets/images/tailwind-css.svg"
    },
    {
      id: "4",
      name: "Bootstrap",
      description: "",
      icon: "/assets/images/bootstrap.svg"
    },
    {
      id: "5",
      name: "Javascript",
      description: "",
      icon: "/assets/images/javascript.svg"
    },
    {
      id: "6",
      name: "Typescript",
      description: "",
      icon: "/assets/images/typescript.svg"
    },
    {
      id: "7",
      name: "React",
      description: "",
      icon: "/assets/images/react.svg"
    },
    {
      id: "8",
      name: "Next.js",
      description: "",
      icon: "/assets/images/nextjs.svg"
    },
    {
      id: "9",
      name: "Redux",
      description: "",
      icon: "/assets/images/redux.svg"
    },
    {
      id: "10",
      name: "Antd",
      description: "",
      icon: "/assets/images/ant-design.svg"
    },
    {
      id: "11",
      name: "MUI",
      description: "",
      icon: "/assets/images/material-ui.svg"
    },
    {
      id: "12",
      name: "Node.js",
      description: "",
      icon: "/assets/images/node-js.svg"
    },
    {
      id: "13",
      name: "Express",
      description: "",
      icon: "/assets/images/express.svg"
    },
    {
      id: "14",
      name: "MongoDB",
      description: "",
      icon: "/assets/images/mongodb.svg"
    },
    {
      id: "15",
      name: "MySQL",
      description: "",
      icon: "/assets/images/mysql.svg"
    },
    {
      id: "16",
      name: "Git",
      description: "",
      icon: "/assets/images/git.svg"
    },
    {
      id: "17",
      name: "Figma",
      description: "",
      icon: "/assets/images/figma.svg"
    }
  ];
  return (
    <div id="about" className="container px-4 pt-10">
      <h3 className="mb-6 text-2xl font-600">ABOUT ME</h3>
      <div className="cursor-pointer border border-solid border-accent bg-hover p-5 transition-all duration-300 ease-in-out hover:border-primary hover:shadow-custom">
        <h3 className="mb-4 text-xl font-600">As a Front-end Developer</h3>
        <p className="text-gray">
          Ever since I was in college, I have been passionate about programming and have always been fascinated by the
          ability to create beautiful and useful websites. I love learning the latest technologies and applying them to
          my projects.
        </p>
        <p className="my-4 text-gray">
          I&apos;m dynamic, creative and highly responsible person. I am always eager to learn and always ready to take
          on new challenges. I believe that I would be a valuable asset to your company.
        </p>
      </div>
      <div className="mt-4 cursor-pointer border border-solid border-accent bg-hover p-5 transition-all duration-300 ease-in-out hover:border-primary hover:shadow-custom">
        <h3 className="mb-4 text-xl font-600">Hobbies and interests</h3>
        <p className="text-gray">
          In my free time, I enjoy participating in sports activities such as playing football and going to the gym to
          stay fit and healthy. When I have time to spare, I like to play games with friends or go camping to relax and
          enjoy nature. Sometimes, I also like to spend time by myself to read books, listen to music or reflect on
          life.
        </p>
      </div>
      <div>
        <h3 className="my-6 text-xl font-600">My Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((item) => (
            <Card className="cursor-default !p-3" key={item.id}>
              <div className="flex gap-2">
                {item.icon && <img className="h-6 w-6" src={item.icon} alt="skills" />}
                <p>{item.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}