"use client";
import { motion } from "framer-motion";
import { NotebookText} from "lucide-react";
import Link from "next/link";

const NavLink = motion(Link);
const ResumeBtn = () => {
  return (
    <NavLink
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      href={"/Harshvardhan_Resume.pdf"}
      target={"_blank"}
      className="text-foreground  rounded-full flex items-center justify-center
        custom-bg fixed bottom-4 left-2.5 xs:left-4 w-fit self-start z-50
        "
      aria-label={"Resume"}
      name={"Resume"}
      prefetch={false}
    >
      <span className="relative w-10 h-10 xs:w-14 xs:h-14 p-2.5 xs:p-4 hover:text-accent">
        <NotebookText className="w-full h-auto" strokeWidth={1.5} />

        <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

        <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
          My Resume
        </span>
      </span>
      <span className="sr-only">Go to Resume Page</span>
    </NavLink>
  );
};

export default ResumeBtn;