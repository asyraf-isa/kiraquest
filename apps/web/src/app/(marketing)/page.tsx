"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@kiraquest/ui/components/badge";
import { buttonVariants } from "@kiraquest/ui/components/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@kiraquest/ui/components/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@kiraquest/ui/components/accordion";
import {
  ArrowRight,
  Brain,
  Lightbulb,
  Pencil,
  Mail,
  ShieldCheck,
  Check,
  Flame,
  CheckCircle2,
  XCircle,
  BookOpen,
  Smartphone,
  School,
  Sparkles,
  Star,
  Compass,
} from "lucide-react";

import { LiveQuestPlayground } from "@/components/gamification/live-quest";
import { QuestMap } from "@/components/gamification/quest-map";
import { CelikMascot, AdamKid, AinaKid } from "@/components/characters/characters";
import { Fraction } from "@/components/math/fraction";

export default function LandingPage() {
  const [activeHintTab, setActiveHintTab] = useState<1 | 2 | 3>(1);
  const [activeGradeTab, setActiveGradeTab] = useState<"d5" | "d6">("d5");

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      {/* =========================================================================
          1. HERO SECTION (Vibrant, Friendly, Malaysia Market Focused)
      ========================================================================== */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-indigo-50/70 via-white to-slate-50/50 pt-8 pb-16 sm:py-20">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* Left Column: Authentic Parent Value Proposition */}
            <div className="flex flex-col gap-5 lg:col-span-7 text-left">
              {/* National Standard Tag */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3.5 py-1 text-xs font-bold text-indigo-700 border border-indigo-200">
                  <span className="text-sm">🇲🇾</span> KSSR Semakan • DSKP Matematik Tahun 5 & 6
                </span>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200 flex items-center gap-1">
                  <CheckCircle2 className="size-3.5 text-emerald-600" />
                  Format Peperiksaan UASA
                </span>
              </div>

              {/* High-Impact Relatable Headline */}
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-slate-900 leading-[1.14]">
                Bantu Anak Kuasai Matematik —{" "}
                <span className="text-indigo-600 underline decoration-indigo-300 underline-offset-4">
                  Langkah Demi Langkah.
                </span>
              </h1>

              {/* Relatable Malaysian Problem & Solution Copy */}
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                Anak kerap buntu bila jumpa soalan pecahan berbeza penyebut atau soalan berayat UASA?
                KiraQuest membimbing anak dengan <strong className="text-slate-900">kaedah buku teks KPM</strong>,
                melatih <strong className="text-slate-900">jalan kira bentuk lazim</strong>, dan menerangkan
                punca kesilapan langkah demi langkah — <strong className="text-slate-900">tanpa membocorkan jawapan percuma</strong>.
              </p>

              {/* 3 Core Value Props */}
              <div className="grid grid-cols-3 gap-2.5 pt-1">
                <div className="rounded-xl border border-slate-200/90 bg-white p-3 text-center shadow-xs">
                  <div className="flex size-7 mx-auto items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 mb-1">
                    <Brain className="size-4" />
                  </div>
                  <div className="font-bold text-xs text-slate-900">Tutor Berperingkat</div>
                  <div className="text-[10px] text-slate-500">Bimbing hingga faham</div>
                </div>

                <div className="rounded-xl border border-slate-200/90 bg-white p-3 text-center shadow-xs">
                  <div className="flex size-7 mx-auto items-center justify-center rounded-lg bg-amber-50 text-amber-600 mb-1">
                    <Pencil className="size-4" />
                  </div>
                  <div className="font-bold text-xs text-slate-900">Papan Lakaran</div>
                  <div className="text-[10px] text-slate-500">Conteng bentuk lazim</div>
                </div>

                <div className="rounded-xl border border-slate-200/90 bg-white p-3 text-center shadow-xs">
                  <div className="flex size-7 mx-auto items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 mb-1">
                    <Mail className="size-4" />
                  </div>
                  <div className="font-bold text-xs text-slate-900">Laporan Mingguan</div>
                  <div className="text-[10px] text-slate-500">Terus ke emel anda</div>
                </div>
              </div>

              {/* High-Conversion CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/auth?mode=register&role=parent"
                  className={
                    buttonVariants({ size: "lg" }) +
                    " min-h-[50px] px-8 text-sm sm:text-base font-bold rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-200 justify-center gap-2"
                  }
                >
                  <Sparkles className="size-4" />
                  Mula Latihan Percuma Anak
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="#demo"
                  className={
                    buttonVariants({ variant: "outline", size: "lg" }) +
                    " min-h-[50px] px-6 text-sm sm:text-base font-semibold rounded-xl border-slate-300 justify-center gap-2"
                  }
                >
                  <Smartphone className="size-4 text-indigo-600" />
                  Cuba Soalan Interaktif
                </Link>
              </div>

              {/* Factual Reassurance Badges */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <ShieldCheck className="size-4 text-emerald-600" /> 100% Bebas Iklan & Patuh PDPA
                </span>
                <span>•</span>
                <span>Tanpa Kad Kredit</span>
                <span>•</span>
                <span>Boleh Diguna di Telefon & Tablet</span>
              </div>
            </div>

            {/* Right Column: Cartoon Characters Interacting */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-sm rounded-3xl border-2 border-indigo-100 bg-white p-6 shadow-xl flex flex-col items-center text-center">
                {/* Badge Header */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-amber-400 px-3.5 py-1 text-xs font-extrabold text-amber-950 shadow-xs border border-amber-300">
                  <Star className="size-3.5 fill-amber-950" />
                  RAKAN MATEMATIK ANAK
                </div>

                {/* Animated Celik Mascot */}
                <div className="pt-3">
                  <CelikMascot
                    size="lg"
                    bubbleText="Hai kawan! Saya Celik. Kalau tersilap tolak pecahan, saya terangkan kaedah KSSR sampai faham!"
                  />
                </div>

                {/* Kid Student Character Reactions */}
                <div className="mt-4 grid grid-cols-2 gap-2 w-full pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-2 text-left">
                    <AdamKid size="sm" className="shrink-0 -my-1" />
                    <div>
                      <div className="text-[11px] font-bold text-slate-900">Adam (11 Tahun)</div>
                      <div className="text-[10px] text-slate-500 leading-tight">Faham cara samakan penyebut!</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-2 text-left">
                    <AinaKid size="sm" className="shrink-0 -my-1" />
                    <div>
                      <div className="text-[11px] font-bold text-slate-900">Aina (12 Tahun)</div>
                      <div className="text-[10px] text-slate-500 leading-tight">Dapat 3 bintang kuiz UASA!</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Status */}
                <div className="mt-3 w-full flex items-center justify-between text-[11px] text-slate-500 pt-1">
                  <span className="flex items-center gap-1 font-semibold text-amber-600">
                    <Flame className="size-3.5 fill-amber-500 text-amber-500" /> Strik 15 Minit Sehari
                  </span>
                  <span className="font-semibold text-indigo-600">Percuma Untuk Mula</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. LIVE QUEST PLAYGROUND (With True Stacked Fractions \frac{1}{2})
      ========================================================================== */}
      <section id="demo" className="py-14 sm:py-20 bg-slate-100/70 border-b border-slate-200">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <Badge variant="outline" className="text-[11px] font-bold text-indigo-700 bg-white border-indigo-200">
              PRATONTON SOALAN KSSR
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Cuba Sendiri: Bagaimana Anak Anda Belajar
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Uji soalan Matematik Darjah 5 di bawah. Lihat bagaimana pecahan dipaparkan secara matematik (seperti buku teks),
              dan tekan &ldquo;1: Galakan&rdquo; atau &ldquo;2: Langkah&rdquo; untuk merasai bimbingan AI Celik.
            </p>
          </div>

          {/* Interactive Mobile-Framed Simulator */}
          <div className="flex justify-center">
            <LiveQuestPlayground />
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. HOW AI TEACHES (Pedagogy vs Answer-Leaking AI)
      ========================================================================== */}
      <section id="kaedah" className="py-14 sm:py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <Badge variant="outline" className="text-[11px] font-bold text-indigo-700 bg-indigo-50 border-indigo-200">
              KAEDAH BIMBINGAN BERPERINGKAT
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Mengapa Anak Tidak Boleh Sekadar Menyalin Jawapan?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Alat bantuan seperti ChatGPT atau PhotoMath terus memberikan jawapan akhir.
              KiraQuest AI melatih anak memahami konsep supaya mereka berkeyakinan dalam dewan peperiksaan UASA.
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="grid gap-6 sm:grid-cols-2 mb-10">
            {/* The Wrong Way */}
            <div className="rounded-2xl border-2 border-rose-200 bg-rose-50/40 p-6 space-y-3">
              <div className="flex items-center gap-2 text-rose-700 font-extrabold text-sm">
                <XCircle className="size-4" />
                Aplikasi AI Biasa / Bot Jawapan
              </div>
              <p className="text-xs text-rose-950/80 leading-relaxed">
                Menyerahkan jawapan akhir dalam masa 1 saat. Anak menyalin ke buku kerja tanpa faham kenapa pecahan perlu disamakan penyebut.
              </p>
              <div className="rounded-xl border border-rose-200 bg-white p-3 font-mono text-xs text-rose-900">
                Jawapan: <Fraction whole={1} num={1} den={8} size="sm" /> liter. (Selesai).
                <div className="text-[10px] text-rose-600 font-sans mt-1">
                  ⚠️ Akibat: Semasa peperiksaan UASA tanpa telefon, anak hilang arah dan tinggal kosong.
                </div>
              </div>
            </div>

            {/* The KiraQuest Way */}
            <div className="rounded-2xl border-2 border-emerald-300 bg-emerald-50/40 p-6 space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 font-extrabold text-sm">
                <CheckCircle2 className="size-4 text-emerald-600" />
                KiraQuest AI (Tutor Celik Berperingkat)
              </div>
              <p className="text-xs text-emerald-950/80 leading-relaxed">
                Mengenal pasti punca kesilapan anak (contohnya lupa darab penyebut dengan 4), memberi petunjuk konsep, dan membimbing langkah kerja KSSR.
              </p>
              <div className="rounded-xl border border-emerald-200 bg-white p-3 text-xs text-emerald-900">
                &ldquo;Tengok penyebutnya: 2 dan 8. Bolehkah tolak terus? Cuba darabkan 2 dengan berapa untuk jadikan 8?&rdquo;
                <div className="text-[10px] text-emerald-700 font-bold mt-1">
                  ✅ Hasil: Anak mengira sendiri bentuk lazim, faham konsep, dan lulus cemerlang!
                </div>
              </div>
            </div>
          </div>

          {/* 3-Tier Hint Demonstration Tabs */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 text-center mb-4">
              Contoh 3 Tahap Bimbingan AI Ketika Anak Menjawab Soalan:
            </h3>

            {/* Tab Buttons */}
            <div className="grid grid-cols-3 gap-2 max-w-md mx-auto mb-6">
              <button
                type="button"
                onClick={() => setActiveHintTab(1)}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  activeHintTab === 1
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "bg-white border text-slate-700 hover:bg-slate-100"
                }`}
              >
                Tahap 1: Galakan
              </button>
              <button
                type="button"
                onClick={() => setActiveHintTab(2)}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  activeHintTab === 2
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "bg-white border text-slate-700 hover:bg-slate-100"
                }`}
              >
                Tahap 2: Kaedah KSSR
              </button>
              <button
                type="button"
                onClick={() => setActiveHintTab(3)}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  activeHintTab === 3
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "bg-white border text-slate-700 hover:bg-slate-100"
                }`}
              >
                Tahap 3: Contoh Serupa
              </button>
            </div>

            {/* Tab Content with Character Voice */}
            <div className="rounded-xl bg-white border border-slate-200 p-5 max-w-2xl mx-auto shadow-xs">
              {activeHintTab === 1 && (
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs">
                    <Lightbulb className="size-4 text-amber-500" />
                    Tahap 1: Petunjuk Konsep Asas (Tanpa Beri Langkah)
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Jika anak tersilap tolak terus pengangka:
                  </p>
                  <div className="p-3 rounded-xl bg-indigo-50/60 border border-indigo-100 text-xs font-medium text-slate-800">
                    &ldquo;Cuba periksa penyebut di bahagian bawah: 2 dan 8. Dalam penolakan pecahan, kita hanya boleh tolak apabila kedua-dua penyebut sama nilai. Sifir berapa yang ada gandaan 8?&rdquo;
                  </div>
                </div>
              )}

              {activeHintTab === 2 && (
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs">
                    <Pencil className="size-4 text-indigo-600" />
                    Tahap 2: Bimbingan Langkah Kerja Bentuk Lazim
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Jika anak masih buntu pada percubaan kedua:
                  </p>
                  <div className="p-3 rounded-xl bg-indigo-50/60 border border-indigo-100 text-xs font-medium text-slate-800 space-y-1">
                    <div>1. Tukar <Fraction whole={1} num={1} den={2} size="sm" /> kepada pecahan tak wajar = <Fraction num={3} den={2} size="sm" />.</div>
                    <div>2. Darabkan pengangka dan penyebut dengan 4: <Fraction num={3} den={2} size="sm" /> × 4 = <Fraction num={12} den={8} size="sm" />.</div>
                    <div>3. Sekarang tolakkan: <Fraction num={12} den={8} size="sm" /> - <Fraction num={3} den={8} size="sm" /> = ... ? Cuba teruskan!</div>
                  </div>
                </div>
              )}

              {activeHintTab === 3 && (
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs">
                    <BookOpen className="size-4 text-amber-600" />
                    Tahap 3: Contoh Serupa Berbeza Nombor (Parallel Example)
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    AI menunjukkan jalan kira lengkap bagi soalan analogi supaya anak faham struktur:
                  </p>
                  <div className="p-3 rounded-xl bg-indigo-50/60 border border-indigo-100 text-xs font-medium text-slate-800 space-y-1">
                    <div className="font-bold text-indigo-900">Contoh Analogi: &ldquo;<Fraction whole={1} num={1} den={4} size="sm" /> tolak <Fraction num={1} den={8} size="sm" />&rdquo;</div>
                    <div><Fraction whole={1} num={1} den={4} size="sm" /> = <Fraction num={5} den={4} size="sm" /> = <Fraction num={10} den={8} size="sm" /> &rarr; <Fraction num={10} den={8} size="sm" /> - <Fraction num={1} den={8} size="sm" /> = <Fraction num={9} den={8} size="sm" /> = <Fraction whole={1} num={1} den={8} size="sm" />.</div>
                    <div className="text-emerald-700 font-bold pt-1">&ldquo;Sekarang, ikut kaedah yang sama untuk soalan asal anda!&rdquo;</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. ADVENTURE QUEST MAP (KSSR Gamification)
      ========================================================================== */}
      <section className="py-14 sm:py-20 bg-slate-100/70 border-b border-slate-200">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <Badge variant="outline" className="text-[11px] font-bold text-indigo-700 bg-white border-indigo-200">
              PETA MISI PEMBELAJARAN
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Belajar Seperti Meneroka Pulau Pengembaraan
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Anak mengumpul bintang dan XP untuk membuka pulau topik seterusnya. Tiada tekanan peperiksaan, hanya keseronokan menguasai kemahiran baru!
            </p>
          </div>

          <div className="flex justify-center">
            <QuestMap />
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. WEEKLY PARENT EMAIL REPORT
      ========================================================================== */}
      <section id="laporan" className="py-14 sm:py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            {/* Left: Parent Explanation */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <Badge variant="outline" className="text-[11px] font-bold text-indigo-700 bg-indigo-50 border-indigo-200">
                LAPORAN EMEL MINGGUAN
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Ibu Bapa Sentiasa Tahu Perkembangan Anak
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Anda tidak perlu risau jika sibuk bekerja atau tidak pasti cara silibus KSSR terkini.
                Setiap Ahad malam, laporan ringkas dihantar terus ke peti masuk emel anda.
              </p>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3">
                  <div className="flex size-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-xs text-slate-900">Kenal Pasti Kelemahan Spesifik:</strong>
                    <p className="text-xs text-slate-500">Tahu sama ada anak tersilap pada samakan penyebut atau pendaraban sifir.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex size-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-xs text-slate-900">Tip Bimbingan 5 Minit:</strong>
                    <p className="text-xs text-slate-500">Cadangan perbualan santai yang boleh anda bincangkan dengan anak semasa makan malam.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex size-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-xs text-slate-900">Kod Bilik Darjah Guru Percuma:</strong>
                    <p className="text-xs text-slate-500">Guru sekolah boleh mencipta kelas sehingga 45 murid untuk melihat topik paling lemah seluruh kelas.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/auth?mode=register&role=parent"
                  className={buttonVariants({ variant: "default", size: "sm" }) + " rounded-xl font-bold text-xs bg-indigo-600 hover:bg-indigo-700 text-white gap-1.5 shadow-xs"}
                >
                  Dapatkan Laporan Emel Percuma Anak Anda
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Authentic Email Card Preview */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-3.5">
                <div className="border-b border-slate-100 pb-3 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-slate-900">Laporan Prestasi Mingguan</div>
                    <div className="text-[10px] text-slate-400">KiraQuest AI • Dihantar setiap Ahad</div>
                  </div>
                  <Badge variant="secondary" className="text-[10px] bg-emerald-50 text-emerald-700 border-emerald-200 font-semibold">
                    Contoh Format
                  </Badge>
                </div>

                <div className="rounded-xl bg-slate-50 p-3 border border-slate-100 space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-medium text-slate-500">Topik Minggu Ini:</span>
                    <span className="font-bold text-slate-800">Pecahan & Nombor Bercampur</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-medium text-slate-500">Tahap Penguasaan:</span>
                    <span className="font-bold text-emerald-600">85% Kuasai</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="text-xs font-bold text-slate-900">Status Sub-Topik DSKP:</div>
                  <div className="rounded-lg border border-slate-100 p-2 text-xs flex justify-between font-medium text-emerald-700">
                    <span>✓ Pecahan Setara & Bentuk Lazim</span>
                    <span className="font-bold">Kuasai</span>
                  </div>
                  <div className="rounded-lg border border-slate-100 p-2 text-xs flex justify-between font-medium text-amber-700">
                    <span>• Penolakan Pecahan Berbeza Penyebut</span>
                    <span className="font-bold">Perlu Latihan</span>
                  </div>
                </div>

                <div className="rounded-xl bg-indigo-50/70 border border-indigo-100 p-3 text-xs space-y-1">
                  <div className="font-bold text-indigo-900">Nota Bimbingan AI:</div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Anak telah menguasai penukaran nombor bercampur. Beri sedikit pujian dan cadangkan satu kuiz lagi untuk penolakan pecahan berlainan penyebut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. CURRICULUM SYLLABUS (Tahun 5 & 6 DSKP)
      ========================================================================== */}
      <section id="kurikulum" className="py-14 sm:py-20 bg-slate-100/70 border-b border-slate-200">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <Badge variant="outline" className="text-[11px] font-bold text-indigo-700 bg-white border-indigo-200">
              KANDUNGAN DSKP KPM
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Silibus Rasmi Matematik Sekolah Rendah
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Soalan dirangka menepati piawaian Kementerian Pendidikan Malaysia (KPM) untuk Darjah 5 dan Darjah 6.
            </p>
          </div>

          {/* Grade Selector Tabs */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex rounded-xl bg-white p-1 border border-slate-200 shadow-2xs">
              <button
                type="button"
                onClick={() => setActiveGradeTab("d5")}
                className={`py-1.5 px-5 rounded-lg text-xs font-bold transition-all ${
                  activeGradeTab === "d5"
                    ? "bg-indigo-600 text-white shadow-2xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Darjah 5 (Umur 11)
              </button>
              <button
                type="button"
                onClick={() => setActiveGradeTab("d6")}
                className={`py-1.5 px-5 rounded-lg text-xs font-bold transition-all ${
                  activeGradeTab === "d6"
                    ? "bg-indigo-600 text-white shadow-2xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Darjah 6 (Umur 12)
              </button>
            </div>
          </div>

          {/* Curriculum Cards */}
          {activeGradeTab === "d5" ? (
            <div className="grid gap-4 sm:grid-cols-3">
              <Card className="rounded-2xl border-slate-200 bg-white shadow-xs">
                <CardHeader className="pb-2">
                  <Badge variant="secondary" className="w-fit text-[10px] mb-1 bg-indigo-50 text-indigo-700">DSKP 2.1</Badge>
                  <CardTitle className="text-sm font-bold text-slate-900">Pecahan & Nombor Bercampur</CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-slate-600 space-y-1">
                  <div>&bull; Penukaran pecahan wajar & tak wajar</div>
                  <div>&bull; Penambahan sehingga 3 pecahan berbeza penyebut</div>
                  <div>&bull; Penolakan nombor bercampur & pecahan</div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-slate-200 bg-white shadow-xs">
                <CardHeader className="pb-2">
                  <Badge variant="secondary" className="w-fit text-[10px] mb-1 bg-indigo-50 text-indigo-700">DSKP 2.2</Badge>
                  <CardTitle className="text-sm font-bold text-slate-900">Perpuluhan Hingga 3 Tempat</CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-slate-600 space-y-1">
                  <div>&bull; Operasi tambah & tolak perpuluhan</div>
                  <div>&bull; Pendaraban & pembahagian dengan 10, 100</div>
                  <div>&bull; Penyelesaian masalah berayat kehidupan harian</div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-slate-200 bg-white shadow-xs">
                <CardHeader className="pb-2">
                  <Badge variant="secondary" className="w-fit text-[10px] mb-1 bg-indigo-50 text-indigo-700">DSKP 2.3</Badge>
                  <CardTitle className="text-sm font-bold text-slate-900">Peratusan Kuantiti</CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-slate-600 space-y-1">
                  <div>&bull; Menukar pecahan & perpuluhan kepada peratus</div>
                  <div>&bull; Mengira peratusan daripada suatu kuantiti</div>
                  <div>&bull; Soalan berayat format Bahagian A UASA</div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-3">
              <Card className="rounded-2xl border-slate-200 bg-white shadow-xs">
                <CardHeader className="pb-2">
                  <Badge variant="secondary" className="w-fit text-[10px] mb-1 bg-indigo-50 text-indigo-700">DSKP 2.1</Badge>
                  <CardTitle className="text-sm font-bold text-slate-900">Operasi Bergabung Pecahan</CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-slate-600 space-y-1">
                  <div>&bull; Pendaraban pecahan melibatkan nombor bercampur</div>
                  <div>&bull; Pembahagian pecahan dengan nombor bulat</div>
                  <div>&bull; Operasi bergabung pelbagai langkah</div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-slate-200 bg-white shadow-xs">
                <CardHeader className="pb-2">
                  <Badge variant="secondary" className="w-fit text-[10px] mb-1 bg-indigo-50 text-indigo-700">DSKP 2.2</Badge>
                  <CardTitle className="text-sm font-bold text-slate-900">Peratus & Wang Pengguna</CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-slate-600 space-y-1">
                  <div>&bull; Untung, rugi, diskaun dan baucar</div>
                  <div>&bull; Faedah mudah dan dividen simpanan</div>
                  <div>&bull; Soalan berayat format Bahagian B UASA</div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-slate-200 bg-white shadow-xs">
                <CardHeader className="pb-2">
                  <Badge variant="secondary" className="w-fit text-[10px] mb-1 bg-indigo-50 text-indigo-700">DSKP 2.3</Badge>
                  <CardTitle className="text-sm font-bold text-slate-900">Nisbah & Kadaran</CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-slate-600 space-y-1">
                  <div>&bull; Menentukan nisbah dua kuantiti termudah</div>
                  <div>&bull; Kaedah unitari dalam kadaran kuantiti</div>
                  <div>&bull; Aplikasi nisbah dalam resipi dan jarak peta</div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          7. PRIVACY & SAFETY ASSURANCE (PDPA 2010)
      ========================================================================== */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 text-center space-y-3">
          <div className="inline-flex size-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
            <ShieldCheck className="size-5" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            Privasi & Keselamatan Kanak-Kanak Diutamakan
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Kanak-kanak tidak mempunyai akaun tersendiri. Akses diuruskan sepenuhnya melalui akaun ibu bapa atau guru yang sah.
            Profil murid hanya menggunakan nama panggilan (nickname), tanpa memerlukan MyKid, gambar, atau nombor telefon.
          </p>

          <div className="flex flex-wrap justify-center gap-5 pt-2 text-xs font-semibold text-slate-800">
            <span className="flex items-center gap-1.5">
              <Check className="size-4 text-emerald-600" /> Tiada MyKid / IC Kanak-kanak Disimpan
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="size-4 text-emerald-600" /> 100% Bebas Iklan Komersial
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="size-4 text-emerald-600" /> Patuh Akta Perlindungan Data Peribadi (PDPA) 2010
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. FREQUENTLY ASKED QUESTIONS (FAQ)
      ========================================================================== */}
      <section id="soalan-lazim" className="py-14 sm:py-20 bg-slate-100/70 border-b border-slate-200">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center mb-8 space-y-2">
            <Badge variant="outline" className="text-[11px] font-bold text-indigo-700 bg-white border-indigo-200">
              SOALAN LAZIM
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Persoalan Ibu Bapa & Guru
            </h2>
          </div>

          <Accordion className="w-full space-y-3">
            <AccordionItem value="item-1" className="rounded-xl border border-slate-200 px-4 py-1 bg-white shadow-2xs">
              <AccordionTrigger className="text-xs sm:text-sm font-bold text-left hover:no-underline text-slate-900">
                Adakah soalan menepati format peperiksaan UASA terkini?
              </AccordionTrigger>
              <AccordionContent className="text-xs text-slate-600 leading-relaxed pt-1">
                Ya. Kesemua soalan, kaedah bentuk lazim, dan ilustrasi model bar diselaraskan 100% dengan Dokumen Standard Kurikulum & Pentaksiran (DSKP) Semakan bagi Tahun 5 dan Tahun 6. Soalan merangkumi soalan aneka pilihan serta soalan berayat pelbagai langkah selaras dengan format Bahagian A dan B UASA.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="rounded-xl border border-slate-200 px-4 py-1 bg-white shadow-2xs">
              <AccordionTrigger className="text-xs sm:text-sm font-bold text-left hover:no-underline text-slate-900">
                Bagaimanakah Tutor AI membantu jika anak saya tersilap?
              </AccordionTrigger>
              <AccordionContent className="text-xs text-slate-600 leading-relaxed pt-1">
                KiraQuest menganalisis jenis kesilapan anak (contohnya terlupa menyamakan penyebut atau tersilap mendarab). AI memberi bimbingan 3-tahap: bermula dengan galakan konsep, panduan langkah kaedah lazim, sehingga contoh serupa berbeza nombor. Jawapan akhir tidak dibocorkan supaya anak berfikir dan mengira sendiri.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="rounded-xl border border-slate-200 px-4 py-1 bg-white shadow-2xs">
              <AccordionTrigger className="text-xs sm:text-sm font-bold text-left hover:no-underline text-slate-900">
                Adakah anak saya memerlukan telefon pintar sendiri?
              </AccordionTrigger>
              <AccordionContent className="text-xs text-slate-600 leading-relaxed pt-1">
                Tidak perlu. KiraQuest boleh diakses melalui pelayar web (browser) di telefon ibu bapa, tablet keluarga, iPad, atau komputer riba. Anak hanya menggunakan profil nama panggilan di bawah akaun ibu bapa.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="rounded-xl border border-slate-200 px-4 py-1 bg-white shadow-2xs">
              <AccordionTrigger className="text-xs sm:text-sm font-bold text-left hover:no-underline text-slate-900">
                Bolehkah guru menggunakan KiraQuest untuk kelas di sekolah?
              </AccordionTrigger>
              <AccordionContent className="text-xs text-slate-600 leading-relaxed pt-1">
                Ya. Akaun Guru membolehkan cikgu mencipta kod kelas percuma sehingga 45 orang murid. Guru dapat memantau topik manakah yang paling ramai murid lakukan kesilapan untuk tindakan susulan dalam bilik darjah.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="rounded-xl border border-slate-200 px-4 py-1 bg-white shadow-2xs">
              <AccordionTrigger className="text-xs sm:text-sm font-bold text-left hover:no-underline text-slate-900">
                Adakah pendaftaran ini percuma?
              </AccordionTrigger>
              <AccordionContent className="text-xs text-slate-600 leading-relaxed pt-1">
                Pendaftaran akaun percuma merangkumi akses ke topik asas, papan lakaran, dan kuota hint harian. Tiada sebarang bayaran pendahuluan atau kad kredit diperlukan untuk bermula.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* =========================================================================
          9. FINAL CALL TO ACTION
      ========================================================================== */}
      <section className="py-16 sm:py-20 bg-white text-center border-t border-slate-100">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 space-y-5">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bina Keyakinan Matematik Anak Anda Sekarang
          </h2>
          <p className="text-xs sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Hanya 15 minit sehari dengan bimbingan teratur KiraQuest cukup untuk menghapuskan kekeliruan Matematik
            dan memperkukuh persediaan peperiksaan sekolah rendah.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-2">
            <Link
              href="/auth?mode=register&role=parent"
              className={
                buttonVariants({ size: "lg" }) +
                " min-h-[50px] px-8 text-sm sm:text-base font-bold rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-200 gap-2"
              }
            >
              Mula Latihan Percuma (Ibu Bapa)
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/auth?mode=register&role=teacher"
              className={
                buttonVariants({ variant: "outline", size: "lg" }) +
                " min-h-[50px] px-6 text-sm sm:text-base font-semibold rounded-xl border-slate-300"
              }
            >
              <School className="size-4 mr-1.5 text-indigo-600" />
              Akaun Guru Sekolah
            </Link>
          </div>

          <p className="text-[11px] text-slate-500 pt-1">
            Daftar dalam 30 saat &bull; Tanpa kad kredit &bull; Akses serta-merta
          </p>
        </div>
      </section>

      {/* =========================================================================
          10. MOBILE-ONLY STICKY ACTION BAR
      ========================================================================== */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 p-3 backdrop-blur shadow-lg">
        <Link
          href="/auth?mode=register&role=parent"
          className={
            buttonVariants({ size: "default" }) +
            " w-full min-h-[46px] rounded-xl font-bold text-xs bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm flex items-center justify-center gap-2"
          }
        >
          <span>Mula Latihan Percuma Anak</span>
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </div>
  );
}
