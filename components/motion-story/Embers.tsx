"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

type Ember = {
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
};

function makeEmbers(count: number): Ember[] {
  return Array.from({ length: count }, (_, i) => {
    const seed = i / count;
    return {
      left: (seed * 97 + i * 13) % 100,
      size: 2 + ((i * 7) % 5),
      duration: 9 + ((i * 11) % 10),
      delay: (i * 1.7) % 8,
      drift: ((i % 2 === 0 ? 1 : -1) * (10 + (i % 6) * 6)),
      opacity: 0.25 + ((i * 3) % 5) / 10,
    };
  });
}

export function Embers() {
  const embers = useMemo(() => makeEmbers(26), []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {embers.map((ember, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-[#ff6a3d]"
          style={{
            left: `${ember.left}%`,
            width: ember.size,
            height: ember.size,
            bottom: "-5%",
            boxShadow: "0 0 6px 1px rgba(255,90,50,0.7)",
          }}
          initial={{ y: 0, x: 0, opacity: 0 }}
          animate={{
            y: ["0%", "-120vh"],
            x: [0, ember.drift],
            opacity: [0, ember.opacity, 0],
          }}
          transition={{
            duration: ember.duration,
            delay: ember.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
