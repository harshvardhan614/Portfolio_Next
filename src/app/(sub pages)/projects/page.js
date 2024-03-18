import Image from "next/image";
import bg from "../../../../public/background/laptop.jpg";
import ProjectList from "@/components/projects";
import { projects } from "../../data";
import dynamic from "next/dynamic";
import ComputersCanvas from "@/components/canvas/Computers";

export const metadata = {
  title: "Projects",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />

      <div className='xl:flex-1 w-full h-[400px] cursor-pointer py-10 z-10'>
      <ComputersCanvas />
    </div>

      

      <div className="flex flex-col items-center justify-center space-y-4 w-full sm:w-3/4 my-10">
      <h1 className="text-accent font-semibold text-center text-4xl  capitalize ">
        My Projects
      </h1>
      <p className="text-center font-light text-sm xs:text-base">
        Have a project in mind or just want to say hello? I am always excited to
        hear about new opportunities and collaborations. Let's create something
        amazing together!
      </p>
      </div>      

      <ProjectList projects={projects} />
     
    </>
  );
}
