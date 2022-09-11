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
      className={`w-screen h-screen flex flex-col items-center justify-center py-20 pattern-bg ${bgClass}`}
    >
      {children}
    </motion.main>
  );
};

export default Layout;
