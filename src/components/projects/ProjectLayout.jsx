import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);
const ProjectLayout = ({ name, description, image, link }) => {
  return (
    <ProjectLink
      variants={item}
      href={link}
      target={"_blank"}
      className=" p-5 rounded-2xl sm:w-[320px] w-full sm:min-h-[550px] text-sm md:text-base flex flex-col items-center justify-between relative  overflow-hidden custom-bg"
    >
      <div className="w-full sm:h-[200px] h-[180px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
            
        <h2 className="text-white font-bold text-[24px] my-4">{name}</h2>
        <p className="text-foreground  text-[14px] text-justify">{description}</p>
      

      <button className="w-full mt-5 py-4 rounded-md shadow-lg bg-background hover:bg-custom-bg hover:text-ascent border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize" >
        Click on Card!
      </button>
      
    </ProjectLink>
  );
};

export default ProjectLayout;
