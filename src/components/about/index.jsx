import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import Skillicon from "./Skillicon";


const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="font-semibold text-xl md:text-2xl text-left w-full capitalize">
          Crafting Digital Experiences with Code
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base text-justify">
          I&apos;m Harshvardhan Rathore ✨, a Final Year B.Tech student at NIT Surat, passionate about becoming a Full Stack Developer and UX/UI Designer. With over 10 freelance projects, 3 Internships (7+ months) as a Developer, and 3 college startup collaborations, I excel at creating user-friendly interfaces and top-notch web applications from scratch.  <br/>
          As a Tech Stack Master, I am proficient in JavaScript, TypeScript, ReactJS, NextJS, Node.js, SQL (including MongoDB), NoSQL databases, and various UI frameworks like Syncfusion, Material UI, and Tailwind CSS. My expertise lies in responsive design, ensuring optimal performance and exceptional user experience across all devices.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            10+ <sub className="font-semibold text-base">Paid Projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+{" "}
            <sub className="font-semibold text-base">Years of Experience</sub>
          </p>
        </ItemLayout>        

         <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=harshvardhan614&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="504 Error! Reload again."
            loading="lazy"
          />
        </ItemLayout> 

         <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=harshvardhan614&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="504 Error! Reload again."
            loading="lazy"
          />
        </ItemLayout> 

         {/* <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="504 Error! Reload again."
            loading="lazy"
          />
        </ItemLayout>  */}
        
         <ItemLayout className={"col-span-full"}>
          <Skillicon/>
        </ItemLayout> 

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=harshvardhan614&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="504 Error! Reload again."
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/harshvardhan614/Nextjs-contentlayer-blog"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=harshvardhan614&repo=Portfolio_Next&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="504 Error! Reload again."
              loading="lazy"
            />
          </Link>
        </ItemLayout> 
      </div>
    </section>
  );
};

export default AboutDetails;