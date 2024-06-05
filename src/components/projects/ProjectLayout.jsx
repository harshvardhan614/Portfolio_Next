import { motion } from "framer-motion";
import Link from "next/link";
import { fadeIn } from "../hooks/Utils";
import Image from "next/image";

const ProjectLink = motion(Link);
const ProjectLayout = ({ name, description, image, link,index }) => {
  return (
    <ProjectLink
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      href={link}
      target={"_blank"}
      className=" p-5 rounded-2xl sm:w-[320px] w-full sm:min-h-[550px] text-sm md:text-base flex flex-col items-center justify-between relative  overflow-hidden custom-bg"
    >
      <div className="w-full sm:h-[200px] h-[180px]">
        <div className="w-full h-full object-cover rounded-2xl relative">
          <Image
            src={image}
            alt="project_image"
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
            className="object-cover"
          />
        </div>
      </div>

      <h2 className="text-white font-bold text-[24px] my-4">{name}</h2>
      <p className="text-foreground  text-[14px] text-justify">{description}</p>

      <button className="w-full mt-5 py-4 rounded-md shadow-lg bg-background hover:bg-custom-bg hover:text-ascent border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize">
        Click on Card!
      </button>
    </ProjectLink>
  );
};

export default ProjectLayout;
