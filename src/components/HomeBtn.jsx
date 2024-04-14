"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const NavLink = motion(Link);
const HomeBtn = () => {
  return (
    <NavLink
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      href={"/"}
      target={"_self"}
      className="fixed top-4 left-2.5 xs:left-4 w-fit self-start z-50"
      aria-label={"home"}
      name={"home"}
      prefetch={false}
    >
      <h2 className="text-accent font-semibold text-xl md:text-2xl italic">
          Harshvardhan
      </h2>
    </NavLink>
  );
};

export default HomeBtn;