'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function GlassBackground() {
  const { scrollYProgress } = useScroll();

  // Shards 1-3: Active in upper page (Hero & Unfolding)
  const y1 = useTransform(scrollYProgress, [0, 1], ['0vh', '-130vh']);
  const r1 = useTransform(scrollYProgress, [0, 1], [19, 45]);

  const y2 = useTransform(scrollYProgress, [0, 1], ['4vh', '-150vh']);
  const r2 = useTransform(scrollYProgress, [0, 1], [-24, -6]);

  const y3 = useTransform(scrollYProgress, [0, 1], ['0vh', '-170vh']);
  const r3 = useTransform(scrollYProgress, [0, 1], [-14, 12]);

  // Shards 4-5: Active in mid page (Intro & Projects section)
  const y4 = useTransform(scrollYProgress, [0, 1], ['115vh', '-85vh']);
  const r4 = useTransform(scrollYProgress, [0, 1], [12, -20]);

  const y5 = useTransform(scrollYProgress, [0, 1], ['160vh', '-70vh']);
  const r5 = useTransform(scrollYProgress, [0, 1], [-18, 15]);

  // Shards 6-8: Active in lower page (Projects, About & Contact section)
  const y6 = useTransform(scrollYProgress, [0, 1], ['225vh', '-45vh']);
  const r6 = useTransform(scrollYProgress, [0, 1], [8, 30]);

  const y7 = useTransform(scrollYProgress, [0, 1], ['290vh', '-15vh']);
  const r7 = useTransform(scrollYProgress, [0, 1], [-12, 16]);

  const y8 = useTransform(scrollYProgress, [0, 1], ['340vh', '10vh']);
  const r8 = useTransform(scrollYProgress, [0, 1], [15, -8]);

  const y9 = useTransform(scrollYProgress, [0, 1], ['290vh', '50vh']);
  const r9 = useTransform(scrollYProgress, [0, 1], [15, -8]);

   const y10 = useTransform(scrollYProgress, [0, 1], ['400vh', '50vh']);
  const r10 = useTransform(scrollYProgress, [0, 1], [15, -8]);


  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="hero-glow pointer-events-none absolute inset-0 opacity-50" />

      {/* Shard 1 (Top Right - Hero Start) */}
      <motion.div
        style={{ y: y1, rotate: r1 }}
        className="hero-glass absolute right-[8%] top-[8%] h-[38vh] w-[20vw] min-w-[180px] max-w-[340px]"
      />

      {/* Shard 2 (Top Left - Hero Start) */}
      <motion.div
        style={{ y: y2, rotate: r2 }}
        className="hero-glass absolute left-[6%] top-[16%] h-[46vh] w-[15vw] min-w-[150px] max-w-[260px] opacity-65"
      />

      {/* Shard 3 (Upper Center Static Glass) */}
      <motion.div
        style={{ y: y3, rotate: r3 }}
        className="hero-static-glass absolute left-[22%] top-[10%] h-[24vh] w-[34vw] min-w-[240px] max-w-[480px]"
      />

      {/* Shard 4 (Mid Right - Entering around Intro / Projects) */}
      <motion.div
        style={{ y: y4, rotate: r4 }}
        className="hero-glass absolute right-[5%] top-[10%] h-[42vh] w-[22vw] min-w-[200px] max-w-[360px]"
      />

      {/* Shard 5 (Mid Left - Projects Section) */}
      <motion.div
        style={{ y: y5, rotate: r5 }}
        className="hero-static-glass absolute left-[7%] top-[10%] h-[38vh] w-[25vw] min-w-[210px] max-w-[390px]"
      />

      {/* Shard 6 (Lower Right - Projects & About) */}
      <motion.div
        style={{ y: y6, rotate: r6 }}
        className="hero-glass absolute right-[10%] top-[10%] h-[34vh] w-[28vw] min-w-[220px] max-w-[420px] opacity-55"
      />

      {/* Shard 7 (Bottom Left - About & Contact) */}
      <motion.div
        style={{ y: y7, rotate: r7 }}
        className="hero-glass absolute left-[6%] top-[10%] h-[44vh] w-[18vw] min-w-[180px] max-w-[300px]"
      />

      {/* Shard 8 (Bottom Right - Contact & End of Page) */}
      <motion.div
        style={{ y: y8, rotate: r8 }}
        className="hero-static-glass absolute right-[7%] top-[10%] h-[32vh] w-[30vw] min-w-[220px] max-w-[440px]"
      />

      {/* Shard 9 (Bottom Center - End of Page) */}
      <motion.div
        style={{ y: y9, rotate: r9 }}
        className="hero-static-glass absolute left-[50%] top-[10%] h-[32vh] w-[30vw] min-w-[220px] max-w-[440px]"
      />
        <motion.div
        style={{ y: y10, rotate: r10 }}
        className="hero-static-glass absolute left-[10%] top-[5%] h-[32vh] w-[30vw] min-w-[220px] max-w-[440px]"
      />
    </div>
  );
}
