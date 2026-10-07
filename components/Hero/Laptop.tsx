'use client';

import { motion, type MotionValue } from 'framer-motion';

type LaptopProps = {
  rotateX: MotionValue<number>;
  scale: MotionValue<number>;
  contentOpacity: MotionValue<number>;
  contentY: MotionValue<number>;
};

export default function Laptop({ rotateX, scale, contentOpacity, contentY }: LaptopProps) {
  return (
    <motion.div
      style={{ rotateX, scale, transformPerspective: 1000 }}
      className="relative flex h-[50vh] w-[90%] max-w-4xl flex-col items-center justify-center overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 p-4 shadow-2xl"
    >
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="z-20 flex flex-col items-center gap-8 text-center md:flex-row md:text-left"
      >
        <div className="flex h-32 w-32 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-800 text-sm text-neutral-400 md:h-48 md:w-48">
          NS
        </div>
        <div>
          <h2 className="text-2xl font-semibold md:text-4xl">Full Stack Developer</h2>
          <p className="mt-2 max-w-md text-gray-400">
            Crafting immersive digital experiences with clean code and high-end aesthetics.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}