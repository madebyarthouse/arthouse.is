import { motion } from "framer-motion";
import type { ReactNode } from "react";

const Layout = ({
  children,
  bgClass,
}: {
  children: ReactNode;
  bgClass: string;
}) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`w-screen h-screen z-10 relative flex flex-col items-center justify-center ${bgClass}`}
    >
      {children}
    </motion.main>
  );
};

export default Layout;
