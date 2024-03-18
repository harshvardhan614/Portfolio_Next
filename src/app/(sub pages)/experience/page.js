import Image from "next/image";
import bg from "../../../../public/background/code.jpeg";
import Experience from "@/components/experience/Experience";

export const metadata = {
  title: "Experience",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-30"
        priority
        sizes="100vw"
      />

      <article className="relative w-full flex flex-col items-center justify-center mt-10 py-8 sm:py-0 space-y-10">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Work Experience
          </h1>
          <p className="text-center font-light text-sm xs:text-base"> 
          I have had the privilege of working on a variety of exciting projects that have honed my skills and enriched my experience in the field. From collaborating with talented teams to leading innovative initiatives, my journey has been filled with opportunities for growth and learning. I am passionate about creating meaningful solutions and delivering high-quality results.
          </p>
        </div>
      </article>
        <Experience/>
    </>
  );
}
