'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Laptop from './Laptop';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const laptopRotateX = useTransform(scrollYProgress, [0, 0.5], [60, 0]);
  const laptopScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.4, 0.6], [50, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-black text-white">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
        <motion.div style={{ opacity: headingOpacity }} className="absolute top-16 z-10 text-center">
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">Nandini Srivastava</h1>
          <p className="mt-2 text-gray-400">Scroll to open studio</p>
        </motion.div>
        <Laptop
          rotateX={laptopRotateX}
          scale={laptopScale}
          contentOpacity={contentOpacity}
          contentY={contentY}
        />
      </div>
    </section>
  );
}