"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

/** Long enough to read motion clearly (glow, orbit, logo, shimmer, progress). */
const DURATION = 4.8;
const FOOTER_TAGS = ["Robotics", "Prosthetics", "Wearables", "Synthetic Skin", "AI Systems"];

type FlexHumanLoaderProps = {
  onComplete: () => void;
};

export function FlexHumanLoader({ onComplete }: FlexHumanLoaderProps) {
  const reducedMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;

    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      setProgress(Math.min(100, Math.round((elapsed / (DURATION * 1000)) * 100)));
      if (elapsed < DURATION * 1000) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    const t = setTimeout(onComplete, DURATION * 1000);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(t);
    };
  }, [onComplete, reducedMotion]);

  if (reducedMotion) {
    return (
      <motion.div
        className="loader-screen fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white px-6"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.45, delay: 0.5 }}
        onAnimationComplete={onComplete}
      >
        <Image src="/flex-human-logo.png" alt="Flex Human LLC" width={240} height={86} className="logo" priority />
        <p className="mt-4 text-sm font-medium text-[var(--foreground)]">Engineering Human Capability.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="loader-screen fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-white px-6"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 1, 0] }}
      transition={{ duration: DURATION, times: [0, 0.82, 0.9, 1], ease: "easeInOut" }}
    >
      {/* Soft ambient glow */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, rgba(124, 58, 237, 0.04) 45%, transparent 70%)",
        }}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: [0.6, 1.05, 1], opacity: [0, 0.9, 0.7] }}
        transition={{ duration: 2.4, ease: "easeOut" }}
      />

      {/* Orbiting accent dots */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-[42%] h-48 w-48 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        {[0, 120, 240].map((deg) => (
          <motion.span
            key={deg}
            className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[var(--accent)]"
            style={{
              transformOrigin: "50% 96px",
              rotate: `${deg}deg`,
              boxShadow: "0 0 12px rgba(37, 99, 235, 0.5)",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0.6], scale: [0, 1, 0.85] }}
            transition={{ duration: 0.85, delay: 0.35 + deg / 240 }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.15, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/flex-human-logo.png"
            alt="Flex Human LLC"
            width={240}
            height={86}
            className="logo"
            priority
          />
        </motion.div>

        {/* Shimmer line */}
        <motion.div
          className="relative mt-6 h-px w-48 overflow-hidden bg-slate-200 sm:w-56"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.75, delay: 0.95 }}
        >
          <motion.div
            className="absolute inset-y-0 w-20"
            style={{
              background: "linear-gradient(90deg, transparent, #2563eb, #7c3aed, transparent)",
            }}
            initial={{ left: "-25%" }}
            animate={{ left: "125%" }}
            transition={{ duration: 1.85, delay: 1.25, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.p
          className="mt-5 text-center text-xs font-semibold tracking-[0.2em] text-[var(--muted)] sm:text-sm"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1.65 }}
        >
          ENGINEERING HUMAN AUGMENTATION
        </motion.p>

        <motion.p
          className="mt-3 text-center text-sm font-medium tracking-wide text-[#0f172a] sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.65, delay: 2.35 }}
        >
          Engineering{" "}
          <span className="text-gradient-brand font-semibold">Human</span> Capability.
        </motion.p>
      </div>

      {/* Progress + status */}
      <div className="absolute bottom-12 left-1/2 z-10 w-full max-w-sm -translate-x-1/2 px-6 sm:bottom-16">
        <motion.div
          className="loader-progress-track w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          <motion.div
            className="loader-progress-fill"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.2, ease: "linear" }}
          />
        </motion.div>

        <motion.p
          className="mt-2 text-center font-mono text-[0.65rem] tracking-widest text-[var(--muted)] sm:text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          LOADING SYSTEMS... {progress}%
        </motion.p>

        <motion.p
          className="mt-4 hidden text-center text-[0.6rem] tracking-[0.16em] text-slate-400 sm:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.85 }}
        >
          {FOOTER_TAGS.join("  |  ")}
        </motion.p>
      </div>
    </motion.div>
  );
}
