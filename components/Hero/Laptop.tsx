'use client';
import portrait from "../my portfolio photo.jpeg";
import Image from 'next/image';

import { motion, type MotionValue } from 'framer-motion';

type LaptopProps = {
  rotateX: MotionValue<number>;
  scale: MotionValue<number>;
  screenScale: MotionValue<number>;
  contentOpacity: MotionValue<number>;
  contentY: MotionValue<number>;
};

export default function Laptop({ rotateX, scale, screenScale, contentOpacity, contentY }: LaptopProps) {
  return (
    <motion.div
      style={{ scale, transformPerspective: 1400 }}
      className="relative mt-28 h-[min(64vw,34rem)] w-full max-w-5xl [transform-style:preserve-3d]"
    >
      <motion.div
        style={{ rotateX, scale: screenScale, transformOrigin: 'bottom center' }}
        className="absolute inset-x-[3%] bottom-[16%] z-20 h-[79%] overflow-hidden rounded-[1.1rem] border border-white/35 bg-[#111] p-[clamp(0.4rem,1vw,0.75rem)] shadow-[0_24px_80px_rgba(0,0,0,0.8)] [transform-style:preserve-3d]"
      >
        <div className="relative h-full overflow-hidden rounded-[0.65rem] border border-white/10 bg-[#050505] p-[clamp(0.85rem,2vw,1.65rem)]">
          <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:3rem_3rem]" />
          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-center justify-between text-[8px] uppercase tracking-[0.25em] text-white/45 sm:text-[9px]">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                <span>Available for projects</span>
              </div>
              <span>NS &mdash; Portfolio</span>
            </div>
            <motion.div
              style={{ opacity: contentOpacity, y: contentY }}
              className="grid items-center gap-4 sm:grid-cols-[auto_1fr] sm:gap-6 md:gap-8"
            >
              <div className="group relative aspect-[3/4] w-[10.5rem] sm:w-[13rem] md:w-[14.5rem] lg:w-[16rem] shrink-0 overflow-hidden rounded-xl border border-white/20 bg-gradient-to-b from-white/10 to-white/5 p-1 shadow-[0_16px_36px_rgba(0,0,0,0.65)] ring-1 ring-white/10">
                <div className="relative h-full w-full overflow-hidden rounded-[0.6rem]">
                  <Image
                    src={portrait}
                    alt="Portrait of Nandini Srivastava"
                    fill
                    sizes="(max-width: 640px) 45vw, 260px"
                    priority
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                </div>
              </div>
              <div className="min-w-0 max-w-xl">
                <p className="mb-2 text-[9px] uppercase tracking-[0.24em] text-white/50 sm:text-[10px] md:text-xs">
                  Hello, I&apos;m Nandini
                </p>
                <h2 className="text-[clamp(1.35rem,3.4vw,2.75rem)] font-black uppercase leading-[0.9] tracking-[-0.05em] text-white">
                  Building digital worlds with intent.
                </h2>
                <p className="mt-3 max-w-md text-[11px] leading-relaxed text-white/60 sm:text-xs md:text-sm">
                  Full-stack developer and visual thinker crafting expressive, dependable experiences for the web.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <div className="absolute inset-x-0 bottom-[7%] z-10 h-[17%] rounded-[0.8rem] border border-white/30 bg-gradient-to-br from-[#373737] via-[#121212] to-[#050505] shadow-[0_28px_55px_rgba(0,0,0,0.8)] [transform:perspective(800px)_rotateX(68deg)] [transform-origin:top]">
        <div className="absolute inset-x-[16%] top-[24%] h-[44%] rounded-full border border-white/10 bg-black/70 shadow-[inset_0_0_30px_rgba(255,255,255,0.08)]" />
        <div className="absolute bottom-[-0.35rem] left-1/2 h-2 w-1/3 -translate-x-1/2 rounded-full bg-white/20 blur-[1px]" />
      </div>
    </motion.div>
  );
}