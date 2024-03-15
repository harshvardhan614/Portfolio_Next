"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

const ItemLayout = ({ children, className }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={clsx(
        "custom-bg p-4 sm:p-6 rounded-xl flex items-center justify-center space-y-4",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default ItemLayout;