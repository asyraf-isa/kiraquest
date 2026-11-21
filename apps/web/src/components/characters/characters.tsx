"use client";

import { motion } from "framer-motion";

interface CharacterProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  bubbleText?: string;
  bubblePosition?: "top" | "right" | "left";
}

/**
 * Sang Kancil "Celik" - AI Tutor Companion
 * Intelligent, friendly Malaysian deer robot character with smart glasses, lightbulb antenna, and blackboard pointer.
 */
export function CelikMascot({
  size = "md",
  className = "",
  bubbleText,
  bubblePosition = "top",
}: CharacterProps) {
  const sizeMap = {
    sm: "w-20 h-20",
    md: "w-28 h-28 sm:w-32 sm:h-32",
    lg: "w-36 h-36 sm:w-44 sm:h-44",
  };

  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      {/* Speech Bubble */}
      {bubbleText && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 350, damping: 22 }}
          className={`relative z-10 mb-2 max-w-[240px] rounded-2xl border-2 border-indigo-200 bg-white px-3.5 py-2 shadow-md text-xs font-bold text-slate-800 text-center leading-snug`}
        >
          {bubbleText}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 size-3 rotate-45 border-b-2 border-r-2 border-indigo-200 bg-white" />
        </motion.div>
      )}

      {/* Animated Sang Kancil Celik SVG */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className={`relative ${sizeMap[size]}`}
      >
        <svg
          viewBox="0 0 200 200"
          className="size-full drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Antenna with Pulsing Glow Bulb */}
          <line x1="100" y1="46" x2="100" y2="22" stroke="#4f46e5" strokeWidth="6" strokeLinecap="round" />
          <motion.circle
            cx="100"
            cy="18"
            r="16"
            fill="#fef08a"
            opacity="0.6"
            animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          />
          <circle cx="100" cy="18" r="11" fill="#fbbf24" stroke="#f59e0b" strokeWidth="3" />

          {/* Antlers / Cute Kancil Ears */}
          <path d="M52 46 C36 18 20 32 44 68 Z" fill="#6366f1" stroke="#4338ca" strokeWidth="4" />
          <path d="M148 46 C164 18 180 32 156 68 Z" fill="#6366f1" stroke="#4338ca" strokeWidth="4" />
          <path d="M49 48 C41 30 31 40 43 62 Z" fill="#c7d2fe" />
          <path d="M151 48 C159 30 169 40 157 62 Z" fill="#c7d2fe" />

          {/* Main Friendly Head */}
          <rect x="42" y="46" width="116" height="106" rx="40" fill="#ffffff" stroke="#4338ca" strokeWidth="5" />

          {/* Screen Visor */}
          <rect x="54" y="60" width="92" height="66" rx="24" fill="#0f172a" />

          {/* Smart Glasses Frame */}
          <rect x="58" y="66" width="38" height="30" rx="10" stroke="#38bdf8" strokeWidth="4" fill="#1e293b" />
          <rect x="104" y="66" width="38" height="30" rx="10" stroke="#38bdf8" strokeWidth="4" fill="#1e293b" />
          <line x1="96" y1="80" x2="104" y2="80" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />

          {/* Sparkly Eyes */}
          <circle cx="77" cy="81" r="7" fill="#38bdf8" />
          <circle cx="80" cy="78" r="2.5" fill="#ffffff" />
          <circle cx="123" cy="81" r="7" fill="#38bdf8" />
          <circle cx="126" cy="78" r="2.5" fill="#ffffff" />

          {/* Cheerful Robot Smile */}
          <path d="M85 106 Q100 118 115 106" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" fill="none" />

          {/* Rosy Cheeks */}
          <ellipse cx="66" cy="102" rx="6" ry="3.5" fill="#f43f5e" opacity="0.6" />
          <ellipse cx="134" cy="102" rx="6" ry="3.5" fill="#f43f5e" opacity="0.6" />

          {/* Small Body & Tie */}
          <path d="M72 152 L64 186 C64 192 72 196 82 196 L118 196 C128 196 136 192 136 186 L128 152 Z" fill="#4f46e5" />
          <polygon points="100,154 94,178 100,188 106,178" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" />

          {/* Wave Arm */}
          <motion.path
            d="M136 162 C155 152 170 140 174 125"
            stroke="#4338ca"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            animate={{ rotate: [0, 8, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    </div>
  );
}

/**
 * Student Character "Adam" - 11 Year Old Schoolboy
 * Energetic, holding a big pencil, celebrating a solved math problem.
 */
export function AdamKid({
  size = "md",
  className = "",
  bubbleText,
}: CharacterProps) {
  const sizeMap = {
    sm: "w-20 h-24",
    md: "w-28 h-32 sm:w-32 sm:h-36",
    lg: "w-36 h-44 sm:w-44 sm:h-52",
  };

  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      {bubbleText && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 mb-2 max-w-[220px] rounded-2xl border-2 border-amber-200 bg-amber-50 px-3 py-1.5 shadow-sm text-xs font-bold text-amber-950 text-center leading-snug"
        >
          {bubbleText}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 size-3 rotate-45 border-b-2 border-r-2 border-amber-200 bg-amber-50" />
        </motion.div>
      )}

      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
        className={`relative ${sizeMap[size]}`}
      >
        <svg
          viewBox="0 0 160 180"
          className="size-full drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hair */}
          <path d="M52 48 C48 24 74 16 92 16 C114 16 128 28 126 52 C116 38 102 36 90 38 C76 40 64 42 52 48 Z" fill="#1e293b" />
          <path d="M50 46 C44 56 46 72 48 76 C52 74 54 68 56 62 Z" fill="#1e293b" />

          {/* Head */}
          <circle cx="88" cy="58" r="36" fill="#fcd34d" stroke="#f59e0b" strokeWidth="3" />

          {/* Ears */}
          <circle cx="53" cy="62" r="7" fill="#fcd34d" stroke="#f59e0b" strokeWidth="2" />
          <circle cx="123" cy="62" r="7" fill="#fcd34d" stroke="#f59e0b" strokeWidth="2" />

          {/* Happy Eyes (Arc: ^ ^) */}
          <path d="M72 58 Q80 48 88 58" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M96 58 Q104 48 112 58" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" fill="none" />

          {/* Big Cheerful Grin */}
          <path d="M76 68 Q92 84 108 68" stroke="#1e293b" strokeWidth="3.5" fill="#f43f5e" strokeLinecap="round" />
          <path d="M82 70 Q92 74 102 70" fill="#ffffff" />

          {/* Rosy Cheeks */}
          <circle cx="68" cy="66" r="5" fill="#f43f5e" opacity="0.4" />
          <circle cx="116" cy="66" r="5" fill="#f43f5e" opacity="0.4" />

          {/* School Uniform Shirt (White + Navy Collar) */}
          <path d="M58 94 L50 148 C50 156 64 160 88 160 C112 160 126 156 126 148 L118 94 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="3" />
          <polygon points="88,94 80,118 88,142 96,118" fill="#1e3a8a" />
          <circle cx="88" cy="116" r="2" fill="#ffffff" />
          <circle cx="88" cy="130" r="2" fill="#ffffff" />

          {/* School Badge on Chest */}
          <rect x="64" y="108" width="10" height="12" rx="2" fill="#2563eb" />

          {/* Arm holding a giant Yellow Pencil */}
          <path d="M120 102 L142 80 C146 76 152 82 148 86 L128 118" stroke="#fcd34d" strokeWidth="7" strokeLinecap="round" />
          <g transform="translate(126, 42) rotate(32)">
            <rect x="0" y="0" width="12" height="42" rx="2" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
            <polygon points="0,42 6,54 12,42" fill="#fef3c7" />
            <polygon points="4,48 6,54 8,48" fill="#1e293b" />
            <rect x="0" y="0" width="12" height="8" fill="#f43f5e" />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}

/**
 * Student Character "Aina" - 12 Year Old Schoolgirl
 * Neat tudung school uniform, holding a notebook with high marks.
 */
export function AinaKid({
  size = "md",
  className = "",
  bubbleText,
}: CharacterProps) {
  const sizeMap = {
    sm: "w-20 h-24",
    md: "w-28 h-32 sm:w-32 sm:h-36",
    lg: "w-36 h-44 sm:w-44 sm:h-52",
  };

  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      {bubbleText && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 mb-2 max-w-[220px] rounded-2xl border-2 border-emerald-200 bg-emerald-50 px-3 py-1.5 shadow-sm text-xs font-bold text-emerald-950 text-center leading-snug"
        >
          {bubbleText}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 size-3 rotate-45 border-b-2 border-r-2 border-emerald-200 bg-emerald-50" />
        </motion.div>
      )}

      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3.1, ease: "easeInOut", delay: 0.3 }}
        className={`relative ${sizeMap[size]}`}
      >
        <svg
          viewBox="0 0 160 180"
          className="size-full drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Tudung (Clean crisp white school veil) */}
          <path
            d="M80 18 C52 18 42 42 42 78 C42 120 54 156 80 156 C106 156 118 120 118 78 C118 42 108 18 80 18 Z"
            fill="#ffffff"
            stroke="#cbd5e1"
            strokeWidth="3.5"
          />

          {/* Face Oval inside Tudung */}
          <ellipse cx="80" cy="72" rx="26" ry="28" fill="#fcd34d" />

          {/* Big Bright Eyes */}
          <circle cx="70" cy="68" r="5" fill="#1e293b" />
          <circle cx="72" cy="66" r="1.8" fill="#ffffff" />
          <circle cx="90" cy="68" r="5" fill="#1e293b" />
          <circle cx="92" cy="66" r="1.8" fill="#ffffff" />

          {/* Sweet Smile */}
          <path d="M72 82 Q80 90 88 82" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" fill="none" />

          {/* Rosy Cheeks */}
          <ellipse cx="64" cy="78" rx="4" ry="2.5" fill="#f43f5e" opacity="0.4" />
          <ellipse cx="96" cy="78" rx="4" ry="2.5" fill="#f43f5e" opacity="0.4" />

          {/* School Uniform Baju Kurung (Turquoise / Teal) */}
          <path d="M52 132 L46 176 L114 176 L108 132 Z" fill="#0284c7" />

          {/* Arm holding a Math Notebook */}
          <path d="M52 132 L68 148 C72 152 80 148 80 142 L72 126" stroke="#fcd34d" strokeWidth="6" strokeLinecap="round" />
          <g transform="translate(68, 120)">
            <rect x="0" y="0" width="28" height="34" rx="4" fill="#f8fafc" stroke="#334155" strokeWidth="2" />
            <rect x="4" y="6" width="20" height="3" fill="#38bdf8" />
            <text x="6" y="22" fontSize="12" fontWeight="bold" fill="#10b981">
              A+
            </text>
            <polygon points="18,16 22,24 28,12" stroke="#10b981" strokeWidth="2" fill="none" />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
