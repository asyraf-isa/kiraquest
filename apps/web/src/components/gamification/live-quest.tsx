"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Flame,
  Star,
  Heart,
  Brain,
  Lightbulb,
  Pencil,
  RotateCcw,
  BookOpen,
} from "lucide-react";

import { CelikMascot } from "@/components/characters/characters";
import { Fraction } from "@/components/math/fraction";

export function LiveQuestPlayground() {
  const [hearts, setHearts] = useState(3);
  const [xp, setXp] = useState(380);
  const [streak, setStreak] = useState(5);
  const [solved, setSolved] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hintLevel, setHintLevel] = useState<0 | 1 | 2 | 3>(0);
  const [scratchpadOpen, setScratchpadOpen] = useState(true);

  const options = [
    { id: "A", whole: 1, num: 1, den: 8, label: "1 ⅛", isCorrect: true },
    { id: "B", whole: 1, num: 1, den: 4, label: "1 ¼", isCorrect: false },
    { id: "C", num: 7, den: 8, label: "⅞", isCorrect: false },
    { id: "D", whole: 1, num: 3, den: 8, label: "1 ⅜", isCorrect: false },
  ];

  const handleSelectOption = (opt: typeof options[0]) => {
    if (solved) return;
    setSelectedId(opt.id);

    if (opt.isCorrect) {
      setSolved(true);
      setXp((prev) => prev + 50);
      setStreak((prev) => prev + 1);

      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#4f46e5", "#f59e0b", "#10b981", "#38bdf8"],
      });
    } else {
      if (hearts > 1) {
        setHearts((prev) => prev - 1);
      }
      setHintLevel(1);
    }
  };

  const handleReset = () => {
    setSolved(false);
    setSelectedId(null);
    setHintLevel(0);
    setHearts(3);
  };

  return (
    <div className="w-full max-w-md mx-auto rounded-[32px] border-4 border-slate-200 bg-white p-3.5 sm:p-4 shadow-xl select-none">
      {/* Phone Notch Header */}
      <div className="mx-auto h-3.5 w-24 rounded-full bg-slate-100 mb-3 flex items-center justify-center">
        <div className="size-1.5 rounded-full bg-slate-300" />
      </div>

      {/* Gamified Status Bar */}
      <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-3 mb-3 space-y-2">
        <div className="flex items-center justify-between text-xs font-bold">
          {/* Health Hearts */}
          <div className="flex items-center gap-1">
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                animate={i < hearts ? { scale: [1, 1.15, 1] } : { scale: 0.8, opacity: 0.25 }}
                transition={{ duration: 0.3 }}
              >
                <Heart
                  className={`size-4 ${
                    i < hearts
                      ? "fill-rose-500 text-rose-500"
                      : "fill-none text-slate-300"
                  }`}
                />
              </motion.div>
            ))}
          </div>

          {/* Daily Streak Badge */}
          <div className="flex items-center gap-1 rounded-full bg-amber-100/80 text-amber-900 px-2.5 py-0.5 text-[11px] font-extrabold border border-amber-200">
            <Flame className="size-3.5 text-amber-600 fill-amber-500" />
            <span>{streak} Hari Strik</span>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-1 rounded-full bg-indigo-50 text-indigo-700 px-2.5 py-0.5 text-[11px] font-extrabold border border-indigo-200/60">
            <Star className="size-3.5 fill-amber-400 text-amber-500" />
            <span>Tahap 3</span>
          </div>
        </div>

        {/* XP Progress Bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-[10px] text-slate-500 font-semibold">
            <span>Misi Harian: Pecahan KSSR</span>
            <span className="text-indigo-600 font-bold">{xp} / 500 XP</span>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-200/70 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 to-primary rounded-full"
              initial={{ width: "70%" }}
              animate={{ width: `${(xp / 500) * 100}%` }}
              transition={{ type: "spring", stiffness: 120 }}
            />
          </div>
        </div>
      </div>

      {/* Main Quest Question Card */}
      <div className="rounded-2xl border border-slate-100 bg-white p-3.5 space-y-3">
        {/* Celik Character Dialogue Box */}
        <div className="flex items-start gap-3 bg-indigo-50/70 rounded-2xl p-2.5 border border-indigo-100">
          <CelikMascot size="sm" className="shrink-0 -mt-1" />
          <div className="text-xs leading-snug pt-0.5">
            {solved ? (
              <span className="font-extrabold text-emerald-800">
                🎉 Tahniah! Jawapan tepat! Anda faham konsep samakan penyebut. +50 XP!
              </span>
            ) : hintLevel === 1 ? (
              <span className="font-medium text-slate-800">
                💡 <strong>Celik:</strong> &ldquo;Tengok penyebutnya: <strong>2</strong> dan <strong>8</strong>. Samakan dulu penyebut guna sifir 4 sebelum tolak ya!&rdquo;
              </span>
            ) : hintLevel === 2 ? (
              <span className="font-medium text-slate-800">
                🧭 <strong>Celik:</strong> &ldquo;Tukar <Fraction whole={1} num={1} den={2} size="sm" /> kepada <Fraction num={3} den={2} size="sm" />. Darab 4 jadi <Fraction num={12} den={8} size="sm" />. Seterusnya tolak <Fraction num={3} den={8} size="sm" />!&rdquo;
              </span>
            ) : (
              <span className="font-medium text-slate-700">
                &ldquo;Jom selesaikan soalan ini bersama! Ingat, samakan penyebut dahulu.&rdquo;
              </span>
            )}
          </div>
        </div>

        {/* Question Prompt with Mathematical Fractions */}
        <div className="rounded-xl bg-slate-50 p-3 border border-slate-200/80 space-y-1.5">
          <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-indigo-600">
            <span>DSKP Matematik Tahun 5</span>
            <span className="text-slate-500">Format UASA Bahagian B</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed">
            Ahmad mempunyai <Fraction whole={1} num={1} den={2} size="md" /> liter air soya.
            Dia telah menuang <Fraction num={3} den={8} size="md" /> liter ke dalam cawan adiknya.
            Berapakah baki air soya, dalam liter, yang tinggal di dalam jag?
          </p>
        </div>

        {/* KSSR Bar Model Visualizer */}
        <div className="rounded-xl border border-slate-200/80 bg-white p-2.5 space-y-2">
          <div className="flex items-center justify-between text-[11px] font-bold text-slate-800">
            <span className="flex items-center gap-1.5 text-indigo-700">
              <BookOpen className="size-3.5" /> Kaedah Model Bar KSSR
            </span>
            <button
              type="button"
              onClick={() => setScratchpadOpen(!scratchpadOpen)}
              className="text-[10px] text-indigo-600 font-semibold hover:underline flex items-center gap-1"
            >
              <Pencil className="size-3" />
              {scratchpadOpen ? "Sembunyi Lakaran" : "Tunjuk Bentuk Lazim"}
            </button>
          </div>

          {/* Bar Diagram */}
          <div className="flex h-7 w-full rounded-lg overflow-hidden border border-slate-300 text-[10px] font-bold text-center">
            <div className="w-2/3 bg-indigo-100 text-indigo-900 flex items-center justify-center border-r border-indigo-200">
              1 Liter (<Fraction num={8} den={8} size="sm" />)
            </div>
            <div className="w-1/3 bg-amber-100 text-amber-950 flex items-center justify-center">
              <Fraction num={1} den={2} size="sm" /> L (<Fraction num={4} den={8} size="sm" />)
            </div>
          </div>
          <div className="flex justify-between items-center text-[10px] text-slate-500 px-0.5">
            <span>Jumlah Asal: <Fraction whole={1} num={1} den={2} size="sm" /> L = <Fraction num={12} den={8} size="sm" /> L</span>
            <span className="font-bold text-indigo-700">Tolak: <Fraction num={3} den={8} size="sm" /> L</span>
          </div>

          {/* Interactive Scratchpad / Bentuk Lazim */}
          {scratchpadOpen && (
            <div className="rounded-lg border border-dashed border-amber-300 bg-amber-50/60 p-2.5 text-xs font-mono text-amber-950 space-y-1">
              <div className="flex justify-between text-[10px] font-sans font-bold text-amber-900 mb-0.5">
                <span>Lakaran Bentuk Lazim Murid:</span>
                <span className="bg-amber-200/80 px-1.5 py-0.2 rounded text-[9px]">DSKP 2.1.3</span>
              </div>
              <div className="flex items-center gap-1 flex-wrap font-sans text-xs">
                <span>1) Tukar nombor bercampur:</span>
                <span className="font-bold"><Fraction whole={1} num={1} den={2} size="sm" /> = <Fraction num={3} den={2} size="sm" /></span>
              </div>
              <div className="flex items-center gap-1 flex-wrap font-sans text-xs">
                <span>2) Samakan penyebut:</span>
                <span className="font-bold"><Fraction num={3} den={2} size="sm" /> × 4 = <Fraction num={12} den={8} size="sm" /></span>
              </div>
              <div className="flex items-center gap-1 flex-wrap font-sans text-xs font-bold text-emerald-800">
                <span>3) Tolak:</span>
                <span><Fraction num={12} den={8} size="sm" /> - <Fraction num={3} den={8} size="sm" /> = <Fraction num={9} den={8} size="sm" /> = <Fraction whole={1} num={1} den={8} size="sm" /> liter ✓</span>
              </div>
            </div>
          )}
        </div>

        {/* 3-Tier AI Hint Button Bar */}
        {!solved && (
          <div className="flex items-center justify-between rounded-xl bg-slate-50 p-2 text-xs border border-slate-100">
            <span className="text-[11px] text-slate-600 font-semibold flex items-center gap-1">
              <Lightbulb className="size-3.5 text-amber-500" /> Bimbingan AI Celik:
            </span>
            <div className="flex gap-1.5">
              <button
                type="button"
                onClick={() => setHintLevel(1)}
                className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition-all ${
                  hintLevel === 1
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "bg-white border text-slate-700 hover:bg-slate-100"
                }`}
              >
                1: Galakan
              </button>
              <button
                type="button"
                onClick={() => setHintLevel(2)}
                className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition-all ${
                  hintLevel === 2
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "bg-white border text-slate-700 hover:bg-slate-100"
                }`}
              >
                2: Langkah
              </button>
            </div>
          </div>
        )}

        {/* Multiple Choice Options Grid (Rendered with Proper Fractions) */}
        <div className="space-y-1.5">
          <div className="text-[11px] font-bold text-slate-800">Pilih Jawapan:</div>
          <div className="grid grid-cols-2 gap-2">
            {options.map((opt) => {
              const isSelected = selectedId === opt.id;
              return (
                <motion.button
                  key={opt.id}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={() => handleSelectOption(opt)}
                  disabled={solved}
                  className={`rounded-xl border-2 p-3 text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${
                    isSelected
                      ? opt.isCorrect
                        ? "bg-emerald-600 text-white border-emerald-700 shadow-sm"
                        : "bg-rose-500 text-white border-rose-600"
                      : solved && opt.isCorrect
                      ? "bg-emerald-50 text-emerald-900 border-emerald-400 font-bold"
                      : "bg-white hover:bg-slate-50 text-slate-800 border-slate-200"
                  }`}
                >
                  <Fraction
                    whole={opt.whole}
                    num={opt.num}
                    den={opt.den}
                    size="md"
                    className={isSelected ? "text-white" : ""}
                  />
                  <span>liter</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Reset / Try Again */}
        {solved && (
          <div className="pt-1 text-center">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:underline"
            >
              <RotateCcw className="size-3.5" /> Uji Semula Soalan Ini
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
