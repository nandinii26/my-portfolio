'use client'

import Navbar from '@/components/Navbar'
import { motion, type Variants } from "framer-motion";
import Footer from "@/components/footer";

const pageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};


const About = () => {
  return (
        <>
        <motion.div initial="hidden" animate="visible" variants={pageVariants}>
        <motion.div variants={itemVariants}>
          <Navbar />
        </motion.div>
      <motion.div className="flex flex-col flex-1 items-center justify-center bg-gradient-to-r from-purple-800 to-black h-full">
              <motion.main
                className="flex w-full max-w-3xl flex-col items-center justify-between gap-5 px-16 py-32 dark:bg-black sm:items-start"
                variants={pageVariants}
              >
       
        <motion.p className="mt-5 text-center text-2xl text-slate-300 sm:text-left" variants={itemVariants}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut ducimus est nulla molestiae ratione
              error dolorem eius illum. Praesentium consequatur aspernatur repellendus eligendi ut expedita excepturi
              accusamus minima itaque architecto!
            </motion.p>
              </motion.main>
              <Footer />
            </motion.div>
      </motion.div>
      
    </>
  )
}

export default About
