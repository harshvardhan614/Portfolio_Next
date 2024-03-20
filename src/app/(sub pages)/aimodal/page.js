import Image from "next/image";
import bg from "../../../../public/background/home.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
       <Image
        src={bg}
        alt="Next.js Portfolio website's page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-40"
      />

      <main className="flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-4 text-accent">
          Currently, AI 3D Modal Chat App Under Development
        </h1>
        <p className="text-lg mb-4">
          I will try my best to complete the Modal ASAP to bring all of you an amazing 3D AI modal experience.
        </p>
        <div className="flex justify-center">
          <Link href="/">
            <button className="w-full mt-5 p-4 rounded-md shadow-lg bg-background hover:bg-custom-bg hover:text-ascent border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize">
              Go Back Home
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
