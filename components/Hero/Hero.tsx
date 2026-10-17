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

  const laptopRotateX = useTransform(scrollYProgress, [0, 0.52], [68, 0]);
  const laptopScale = useTransform(scrollYProgress, [0, 0.55], [0.82, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.66], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.3, 0.66], [36, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 1]);
  const headingX = useTransform(scrollYProgress, [0, 0.6], [0, 150]);
  const headingY = useTransform(scrollYProgress, [0, 0.6], [0, -32]);
  const headingScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.55]);
  const screenScale = useTransform(scrollYProgress, [0, 0.6], [0.96, 1]);

  return (
    <section id="home" ref={containerRef} className="hero-grid relative h-[300vh] bg-transparent text-white">
      <div className="relative z-10 sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-5">
        <motion.div
          style={{ opacity: headingOpacity, x: headingX, y: headingY, scale: headingScale }}
          className="absolute top-14 left-1/2 z-30 w-[min(90vw,72rem)] -translate-x-1/2 px-2"
        >
          <div className="mb-5 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-white/45">
            <span>Scroll to unfold</span>
          </div>
          <h1 className="max-w-5xl text-[clamp(3.8rem,12vw,10.5rem)] font-black uppercase leading-[0.78] tracking-[-0.07em]">
            Nandini
            <br />
            Srivastava
          </h1>
        </motion.div>
        <Laptop
          rotateX={laptopRotateX}
          scale={laptopScale}
          screenScale={screenScale}
          contentOpacity={contentOpacity}
          contentY={contentY}
        />
      </div>
    </section>
  );
}