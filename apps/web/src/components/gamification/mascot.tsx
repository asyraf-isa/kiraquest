"use client";

import { motion } from "framer-motion";
import { Sparkles, Lightbulb, Check, Heart } from "lucide-react";

type MascotMood = "idle" | "thinking" | "teaching" | "celebrating" | "hinting";

interface MascotProps {
  mood?: MascotMood;
  size?: "sm" | "md" | "lg";
  message?: string;
  className?: string;
}

export function MascotCelik({
  mood = "idle",
  size = "md",
  message,
  className = "",
}: MascotProps) {
  const sizeMap = {
    sm: "w-20 h-20",
    md: "w-28 h-28 sm:w-32 sm:h-32",
    lg: "w-36 h-36 sm:w-44 sm:h-44",
  };

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Speech Bubble (if message provided) */}
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative mb-3 max-w-xs rounded-2xl border-2 border-primary/20 bg-card p-3 shadow-md text-xs sm:text-sm font-semibold text-foreground text-center"
        >
          {message}
          {/* Bubble Tail */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 size-3.5 rotate-45 border-b-2 border-r-2 border-primary/20 bg-card" />
        </motion.div>
      )}

      {/* Mascot Animated Body */}
      <motion.div
        animate={
          mood === "celebrating"
            ? { y: [0, -14, 0, -10, 0], rotate: [0, -4, 4, -2, 0] }
            : mood === "thinking"
            ? { rotate: [-2, 2, -2], y: [0, -3, 0] }
            : { y: [0, -6, 0] }
        }
        transition={{
          repeat: Infinity,
          duration: mood === "celebrating" ? 1.2 : 2.8,
          ease: "easeInOut",
        }}
        className={`relative ${sizeMap[size]}`}
      >
        {/* Glow Behind Mascot */}
        <div className="absolute inset-2 -z-10 rounded-full bg-primary/25 blur-xl animate-pulse" />

        {/* Mascot SVG Character: "Celik" the AI Kancil Robot */}
        <svg
          viewBox="0 0 200 200"
          className="size-full drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Antenna / Lightbulb */}
          <line x1="100" y1="45" x2="100" y2="25" stroke="#4f46e5" strokeWidth="6" strokeLinecap="round" />
          <circle cx="100" cy="20" r="12" fill="#fbbf24" stroke="#f59e0b" strokeWidth="3" />
          <motion.circle
            cx="100"
            cy="20"
            r="16"
            fill="#fef08a"
            opacity="0.4"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />

          {/* Ears (Cute deer / robot ears) */}
          <path d="M55 45 C40 20 25 35 45 70 Z" fill="#6366f1" stroke="#4338ca" strokeWidth="4" />
          <path d="M145 45 C160 20 175 35 155 70 Z" fill="#6366f1" stroke="#4338ca" strokeWidth="4" />
          <path d="M52 48 C44 32 35 42 46 64 Z" fill="#a5b4fc" />
          <path d="M148 48 C156 32 165 42 154 64 Z" fill="#a5b4fc" />

          {/* Main Head (Friendly rounded square / helmet) */}
          <rect x="40" y="45" width="120" height="110" rx="42" fill="#ffffff" stroke="#4338ca" strokeWidth="6" />

          {/* Face Visor / Screen */}
          <rect x="52" y="60" width="96" height="70" rx="28" fill="#1e1b4b" />

          {/* Eyes (Animated based on mood) */}
          {mood === "celebrating" ? (
            // Joyful Happy Arcs: ^ ^
            <>
              <path d="M68 95 Q80 80 92 95" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" fill="none" />
              <path d="M108 95 Q120 80 132 95" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" fill="none" />
            </>
          ) : mood === "thinking" ? (
            // Thinking Looking-Up Eyes
            <>
              <circle cx="80" cy="88" r="9" fill="#38bdf8" />
              <circle cx="82" cy="85" r="4" fill="#ffffff" />
              <circle cx="120" cy="88" r="9" fill="#38bdf8" />
              <circle cx="122" cy="85" r="4" fill="#ffffff" />
            </>
          ) : (
            // Friendly Round Expressive Eyes
            <>
              <circle cx="80" cy="95" r="9" fill="#38bdf8" />
              <circle cx="83" cy="92" r="3.5" fill="#ffffff" />
              <circle cx="120" cy="95" r="9" fill="#38bdf8" />
              <circle cx="123" cy="92" r="3.5" fill="#ffffff" />
            </>
          )}

          {/* Cheeks (Blushing) */}
          <circle cx="64" cy="110" r="6" fill="#f472b6" opacity="0.6" />
          <circle cx="136" cy="110" r="6" fill="#f472b6" opacity="0.6" />

          {/* Smile Mouth */}
          <path d="M92 112 Q100 120 108 112" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" fill="none" />

          {/* Small Body & Scarf */}
          <path d="M75 152 C75 145 125 145 125 152 L135 185 C135 192 65 192 65 185 Z" fill="#6366f1" stroke="#4338ca" strokeWidth="5" />
          {/* Yellow Math Hero Scarf / Ribbon */}
          <rect x="70" y="148" width="60" height="12" rx="6" fill="#f59e0b" />
          <polygon points="100,160 90,185 110,185" fill="#d97706" />

          {/* Sparkle Badges when celebrating */}
          {mood === "celebrating" && (
            <>
              <circle cx="35" cy="40" r="5" fill="#fbbf24" />
              <circle cx="165" cy="40" r="5" fill="#fbbf24" />
            </>
          )}
        </svg>

        {/* Floating Icons for Mood */}
        {mood === "thinking" && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, y: [-4, 4, -4] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute -top-3 -right-2 flex size-7 items-center justify-center rounded-full bg-amber-400 text-amber-950 font-black shadow-md border-2 border-white text-xs"
          >
            ?
          </motion.div>
        )}

        {mood === "celebrating" && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.25, 1], rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="absolute -top-4 -right-3 flex size-8 items-center justify-center rounded-full bg-amber-400 text-amber-950 shadow-md border-2 border-white text-sm"
          >
            ⭐
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
