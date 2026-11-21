"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Star, Sparkles, Check, ChevronRight, Award, Compass, Play } from "lucide-react";
import { Badge } from "@kiraquest/ui/components/badge";

export interface QuestNode {
  id: number;
  title: string;
  topic: string;
  status: "completed" | "current" | "locked";
  stars: number;
  xpReward: number;
  dskpCode: string;
  description: string;
}

export function QuestMap() {
  const [selectedNode, setSelectedNode] = useState<QuestNode | null>(null);

  const questNodes: QuestNode[] = [
    {
      id: 1,
      title: "Pulau 1: Pecahan Wajar & Setara",
      topic: "Pecahan Asas",
      status: "completed",
      stars: 3,
      xpReward: 100,
      dskpCode: "DSKP 2.1.1",
      description: "Menamakan dan mencari pecahan setara menggunakan rajah model bar.",
    },
    {
      id: 2,
      title: "Pulau 2: Nombor Bercampur & Tak Wajar",
      topic: "Penukaran Bentuk",
      status: "completed",
      stars: 3,
      xpReward: 120,
      dskpCode: "DSKP 2.1.2",
      description: "Menukar nombor bercampur kepada pecahan tak wajar dan sebaliknya.",
    },
    {
      id: 3,
      title: "Pulau 3: Operasi Tolak Pecahan",
      topic: "Misi Aktif Hari Ini",
      status: "current",
      stars: 1,
      xpReward: 150,
      dskpCode: "DSKP 2.1.3",
      description: "Menolak pecahan berlainan penyebut dengan menyamakan gandaan sepunya.",
    },
    {
      id: 4,
      title: "Pulau 4: Peratusan Nilai Kuantiti",
      topic: "Terkunci (Tahap 4)",
      status: "locked",
      stars: 0,
      xpReward: 200,
      dskpCode: "DSKP 2.2.1",
      description: "Mengira peratusan diskaun dan dividen dalam situasi harian sebenar.",
    },
    {
      id: 5,
      title: "Puncak Bos: Cabaran KBAT Mingguan",
      topic: "Peti Emas Misteri",
      status: "locked",
      stars: 0,
      xpReward: 350,
      dskpCode: "KBAT UASA",
      description: "Menyelesaikan soalan penyelesaian masalah harian berayat aras tinggi.",
    },
  ];

  return (
    <div className="relative rounded-3xl border-2 border-primary/20 bg-gradient-to-b from-indigo-900/5 via-primary/5 to-card p-4 sm:p-8 shadow-xl overflow-hidden">
      {/* Map Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-primary/10">
        <div className="flex items-center gap-2.5">
          <div className="flex size-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
            <Compass className="size-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-foreground flex items-center gap-2">
              Peta Pengembaraan Matematik KSSR
              <Badge variant="secondary" className="text-[10px] bg-primary/10 text-primary">Tahun 5 & 6</Badge>
            </h3>
            <p className="text-xs text-muted-foreground">Klik mana-mana pulau latihan untuk melihat kemajuan murid</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold">
          <span className="rounded-full bg-amber-100 text-amber-900 px-3 py-1 border border-amber-300 flex items-center gap-1 shadow-2xs">
            ⭐ 7/15 Bintang
          </span>
          <span className="rounded-full bg-emerald-100 text-emerald-900 px-3 py-1 border border-emerald-300 flex items-center gap-1 shadow-2xs">
            🏆 Tahap 3 (Pengembara Cilik)
          </span>
        </div>
      </div>

      {/* The Winding Adventure Path (Mobile-friendly vertical zigzag) */}
      <div className="relative py-8 flex flex-col items-center">
        {/* Decorative Dotted Connecting Line */}
        <div className="absolute top-10 bottom-10 left-1/2 w-1 -translate-x-1/2 border-l-2 border-dashed border-primary/30 -z-0" />

        <div className="w-full max-w-lg space-y-8 relative z-10">
          {questNodes.map((node, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center ${isLeft ? "justify-start sm:pl-4" : "justify-end sm:pr-4"}`}
              >
                <div
                  onClick={() => setSelectedNode(node)}
                  className={`group relative flex items-center gap-3.5 rounded-2xl border-2 p-3 sm:p-4 cursor-pointer transition-all max-w-sm w-full ${
                    node.status === "completed"
                      ? "bg-card border-emerald-500/50 shadow-md hover:border-emerald-600 hover:shadow-lg"
                      : node.status === "current"
                      ? "bg-primary text-primary-foreground border-primary shadow-xl ring-4 ring-primary/20 scale-[1.03]"
                      : "bg-muted/60 border-border opacity-70 hover:opacity-90"
                  }`}
                >
                  {/* Node Status Avatar Circle */}
                  <div className="relative shrink-0">
                    <div
                      className={`flex size-12 sm:size-14 items-center justify-center rounded-2xl font-black text-sm transition-transform group-hover:scale-105 ${
                        node.status === "completed"
                          ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20"
                          : node.status === "current"
                          ? "bg-white text-primary shadow-lg"
                          : "bg-muted text-muted-foreground border"
                      }`}
                    >
                      {node.status === "completed" ? (
                        <Check className="size-6 stroke-[3]" />
                      ) : node.status === "current" ? (
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          <Play className="size-6 fill-primary text-primary ml-0.5" />
                        </motion.div>
                      ) : (
                        <Lock className="size-5" />
                      )}
                    </div>

                    {/* Stars Badge Pill for Completed/Current */}
                    {node.status !== "locked" && (
                      <div className="absolute -bottom-2 -left-1 flex items-center justify-center rounded-full bg-amber-400 px-1.5 py-0.5 text-[9px] font-black text-amber-950 shadow-xs border border-white">
                        {"★".repeat(node.stars)}
                        {"☆".repeat(3 - node.stars)}
                      </div>
                    )}
                  </div>

                  {/* Node Info Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${node.status === "current" ? "text-primary-foreground/90" : "text-primary"}`}>
                        {node.dskpCode}
                      </span>
                      <span className={`text-[10px] font-black ${node.status === "current" ? "text-amber-300" : "text-amber-600"}`}>
                        +{node.xpReward} XP
                      </span>
                    </div>

                    <h4 className={`text-xs sm:text-sm font-extrabold truncate ${node.status === "current" ? "text-white" : "text-foreground"}`}>
                      {node.title}
                    </h4>

                    <p className={`text-[11px] truncate ${node.status === "current" ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                      {node.topic}
                    </p>
                  </div>

                  <ChevronRight className={`size-4 shrink-0 transition-transform group-hover:translate-x-0.5 ${node.status === "current" ? "text-white" : "text-muted-foreground"}`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Selected Node Details Modal Popup */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mt-4 rounded-2xl border bg-card p-4 sm:p-5 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-xs font-black text-primary">{selectedNode.dskpCode}</span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs font-semibold text-amber-600">+{selectedNode.xpReward} XP Ganjaran</span>
              </div>
              <h4 className="font-extrabold text-sm sm:text-base text-foreground">{selectedNode.title}</h4>
              <p className="text-xs text-muted-foreground">{selectedNode.description}</p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setSelectedNode(null)}
                className="rounded-xl border px-3 py-2 text-xs font-semibold hover:bg-muted"
              >
                Tutup
              </button>
              <a
                href="/auth?mode=register&role=parent"
                className="rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground hover:bg-primary/90 shadow-sm"
              >
                Mula Mainkan Misi Ini &rarr;
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
