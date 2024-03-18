import Image from "next/image";
import bg from "../../../../public/background/office.jpg";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";
// import CubeCanvas from "@/components/canvas/Cube";
const CubeCanvas = dynamic(() => import("@/components/canvas/Cube"), {
  ssr: false,
});

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-40"
      />
       
      <CubeCanvas/>        

      <div className="relative w-full flex flex-col items-center justify-center">        
          <h1 className="font-bold  text-4xl xs:text-5xl sm:text-6xl  lg:text-7xl text-accent">
            Harshvardhan
          </h1>
          <p className="font-light text-foreground text-lg text-center">
            Bridging the gap between code and design 
          </p>        
      </div>

      <AboutDetails />
    </>
  );
}