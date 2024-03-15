import {
    Backend_skill,
    Frontend_skill,
    Full_stack,
    Other_skill,
    Tools,
  } from "@/app/data";
  import React from "react";
  import SkillDataProvider from "./sub/SkillDataProvider";

  
  const Skillicon = () => {
    return (
      <section
        id="skills"
        className="flex flex-col items-center justify-center gap-2 h-full relative overflow-hidden"
        style={{ transform: "scale(1)" }}
      > 
        
        <div className="flex flex-row justify-around flex-wrap gap-5 items-center">
          {Frontend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              skill={image.skill_name}            
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap gap-5 items-center">
          {Backend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              skill={image.skill_name} 
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap gap-5 items-center">
          {Full_stack.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              skill={image.skill_name} 
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap gap-5 items-center">
          {Tools.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              skill={image.skill_name} 
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap gap-5 items-center">
          {Other_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              skill={image.skill_name} 
              index={index}
            />
          ))}
        </div>
  
      
      </section>
    );
  };
  
  export default Skillicon;