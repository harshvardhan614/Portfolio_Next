"use client"

import React from 'react'
import { VerticalTimeline , VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import {experiences }from "@/app/data"
import Image from 'next/image';


const ExperinceCard = ({experience}) => (
  <VerticalTimelineElement
   className='cursor-pointer'
   visible={true}
   contentStyle={{background: '#1B1B1B30' ,  color:'#fff', border:"1px solid ##FEFE5B30", backdropFilter: 'blur(5px)'}}
   contentArrowStyle={{ borderRight : '7px solid #232631'}}
   date={experience.date}
   iconStyle={{ background : experience.iconBg}}
   icon={
    <div className='flex justify-center items-center w-full h-full'>
      <div className="w-[50%] h-[50%] relative">
      <Image
        src={experience.icon}
        alt={experience.company_name}
        fill={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
      />
      </div>
    </div>
  }
  >
    <div>
      <h3 className="text-secondary font-bold text-[24px]">
        {experience.title}
        </h3>      
        <p className="text-[#fefe5b] font-semibold text-[16px]">{experience.company_name}</p> 
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point , index) => (
        <li 
        key={`experience-point-${index }`}
        className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
         {point}
        </li>
      ))}
    </ul>
    
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline >
          {experiences.map((experience, index) => (
            <ExperinceCard key={`experience-${index}`} experience={experience} />
          )   )}
        </VerticalTimeline>
      </div>

    </>
  )
}

export default Experience;