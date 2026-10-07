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
      style={{ scale, transformPerspective: 1400 }}
      className="relative mt-28 h-[min(64vw,34rem)] w-full max-w-5xl [transform-style:preserve-3d]"
    >
      <motion.div
        style={{ rotateX, transformOrigin: 'bottom center' }}
        className="absolute inset-x-[3%] bottom-[18%] z-20 h-[74%] overflow-hidden rounded-[1.1rem] border border-white/35 bg-[#111] p-[clamp(0.4rem,1vw,0.75rem)] shadow-[0_24px_80px_rgba(0,0,0,0.8)] [transform-style:preserve-3d]"
      >
        <div className="relative h-full overflow-hidden rounded-[0.65rem] border border-white/10 bg-[#050505] p-[clamp(1rem,3vw,3rem)]">
          <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:3rem_3rem]" />
          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-center justify-between text-[8px] uppercase tracking-[0.3em] text-white/45 sm:text-[10px]">
              <span>NS / Digital maker</span>
              <span>01 — 04</span>
            </div>
            <motion.div style={{ opacity: contentOpacity, y: contentY }} className="grid items-end gap-5 sm:grid-cols-[minmax(8rem,0.65fr)_1fr] sm:gap-8">
              <div className="relative aspect-[0.82] w-full max-w-[11rem] overflow-hidden rounded-sm border border-white/20 bg-[radial-gradient(circle_at_50%_25%,#d9d9d9_0_8%,#8d8d8d_9%_13%,transparent_14%),linear-gradient(145deg,#303030,#0e0e0e_60%)] shadow-[0_12px_30px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-x-[22%] bottom-0 h-[62%] rounded-t-[48%] bg-gradient-to-b from-[#b6b6b6] via-[#555] to-[#151515] opacity-80" />
                <div className="absolute bottom-[9%] left-[16%] text-[8px] uppercase tracking-[0.2em] text-white/60">portrait / NS</div>
              </div>
              <div className="max-w-xl">
                <p className="mb-3 text-[9px] uppercase tracking-[0.26em] text-white/45">Hello, I&apos;m Nandini</p>
                <h2 className="text-[clamp(1.7rem,5vw,4.8rem)] font-black uppercase leading-[0.82] tracking-[-0.06em] text-white">Building digital worlds with intent.</h2>
                <p className="mt-5 max-w-md text-xs leading-relaxed text-white/55 sm:text-sm">Full-stack developer and visual thinker crafting expressive, dependable experiences for the web.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <div className="absolute inset-x-0 bottom-[7%] z-10 h-[22%] rounded-[0.8rem] border border-white/30 bg-gradient-to-br from-[#373737] via-[#121212] to-[#050505] shadow-[0_28px_55px_rgba(0,0,0,0.8)] [transform:perspective(800px)_rotateX(68deg)] [transform-origin:top]">
        <div className="absolute inset-x-[16%] top-[24%] h-[44%] rounded-full border border-white/10 bg-black/70 shadow-[inset_0_0_30px_rgba(255,255,255,0.08)]" />
        <div className="absolute bottom-[-0.35rem] left-1/2 h-2 w-1/3 -translate-x-1/2 rounded-full bg-white/20 blur-[1px]" />
      </div>
    </motion.div>
  );
}