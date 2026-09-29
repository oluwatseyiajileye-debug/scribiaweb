"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import { scenes } from "./scenes";
import { SceneArt } from "./SceneArt";
import { Embers } from "./Embers";
import { GrainOverlay } from "./GrainOverlay";

export function RedNightChapterOne() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      scenes.length - 1,
      Math.max(0, Math.floor(latest * scenes.length))
    );
    setActive((prev) => (prev === index ? prev : index));
  });

  const drift = useTransform(scrollYProgress, [0, 1], [0, -160]);

  return (
    <div ref={containerRef} className="relative bg-[#050307] text-[#f4ece6]">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <motion.div style={{ y: drift }} className="absolute inset-0 scale-110">
          <AnimatePresence>
            <SceneArt key={scenes[active].art} id={scenes[active].art} />
          </AnimatePresence>
        </motion.div>
        <Embers />
        <div
          className="absolute inset-0"
          style={{ boxShadow: "inset 0 0 16vw 4vw rgba(0,0,0,0.92)" }}
        />
        <GrainOverlay />
      </div>

      <div className="relative z-10">
        {scenes.map((scene, index) => (
          <SceneSection key={scene.id} index={index} />
        ))}
      </div>
    </div>
  );
}

function SceneSection({ index }: { index: number }) {
  const scene = scenes[index];

  if (scene.variant === "title") {
    return (
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.4em] text-[#e2664a]"
        >
          {scene.kicker}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4 }}
          className="font-display text-6xl font-semibold tracking-tight text-[#f4ece6] sm:text-8xl"
          style={{ textShadow: "0 0 60px rgba(200,30,20,0.45)" }}
        >
          {scene.title}
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-6 font-display text-lg italic text-[#cbb0a8]"
        >
          {scene.meta}
        </motion.span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ opacity: { duration: 1, delay: 1.4 }, y: { duration: 1.8, repeat: Infinity, delay: 1.4 } }}
          className="absolute bottom-10 flex flex-col items-center gap-2 text-[#cbb0a8]"
        >
          <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll to begin</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </section>
    );
  }

  if (scene.variant === "end") {
    return (
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9 }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.4em] text-[#e2664a]"
        >
          {scene.kicker}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="max-w-2xl font-display text-3xl font-medium leading-snug text-[#f4ece6] sm:text-4xl"
        >
          {scene.title}
        </motion.h2>
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-5 font-display text-base italic text-[#cbb0a8]"
        >
          {scene.meta}
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <Link
            href="/portfolio"
            className="rounded-full border border-[#e2664a]/50 bg-[#e2664a]/10 px-6 py-2.5 text-sm font-medium text-[#f4ece6] transition-colors hover:bg-[#e2664a]/20"
          >
            Back to SCRIBIA
          </Link>
          {scene.credit ? (
            <span className="text-[0.7rem] uppercase tracking-[0.25em] text-[#8a7772]">
              {scene.credit}
            </span>
          ) : null}
        </motion.div>
      </section>
    );
  }

  return (
    <section className="flex min-h-screen items-center px-6 py-24 sm:px-12">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-5">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-xs font-semibold uppercase tracking-[0.4em] text-[#e2664a]"
        >
          {scene.kicker}
        </motion.span>
        {scene.paragraphs?.map((paragraph, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.08 * i }}
            className="font-display text-xl leading-relaxed text-[#f4ece6] sm:text-2xl"
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
