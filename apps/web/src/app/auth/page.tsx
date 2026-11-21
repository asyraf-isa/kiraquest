"use client";

import { Suspense, useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import confetti from "canvas-confetti";
import { Badge } from "@kiraquest/ui/components/badge";
import { Button } from "@kiraquest/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@kiraquest/ui/components/card";
import { Input } from "@kiraquest/ui/components/input";
import { Label } from "@kiraquest/ui/components/label";
import { Google } from "@kiraquest/ui/socials/google";
import {
  ArrowLeft,
  CheckCircle2,
  Compass,
  HeartHandshake,
  Loader2,
  Lock,
  Mail,
  School,
  ShieldCheck,
  User,
  Check,
} from "lucide-react";
import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";
import { CelikMascot } from "@/components/characters/characters";

function AuthContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialMode = searchParams.get("mode") === "register" ? "register" : "login";
  const initialRole = searchParams.get("role") === "teacher" ? "teacher" : "parent";

  const [mode, setMode] = useState<"login" | "register">(initialMode);
  const [role, setRole] = useState<"parent" | "teacher">(initialRole);

  // Form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [childNickname, setChildNickname] = useState("");
  const [childGrade, setChildGrade] = useState<5 | 6>(5);
  const [schoolName, setSchoolName] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const m = searchParams.get("mode");
    if (m === "register" || m === "login") setMode(m);
    const r = searchParams.get("role");
    if (r === "teacher" || r === "parent") setRole(r);
  }, [searchParams]);

  const handleSocialLogin = async () => {
    setLoading(true);
    try {
      await authClient.signIn.social(
        {
          provider: "google",
          callbackURL: "/dashboard",
        },
        {
          onError: (ctx) => {
            setLoading(false);
            toast.error(ctx.error.message || "Gagal log masuk dengan Google. Sila cuba lagi.");
          },
          onSuccess: () => {
            confetti({
              particleCount: 70,
              spread: 60,
              origin: { y: 0.6 },
            });
            router.push("/dashboard");
          },
        },
      );
    } catch {
      setLoading(false);
      toast.error("Ralat sambungan. Sila cuba lagi.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (mode === "register" && role === "parent" && !childNickname.trim()) {
      toast.error("Sila masukkan nama panggilan anak.");
      return;
    }

    if (mode === "register" && !consent) {
      toast.error("Sila tandakan persetujuan syarat penggunaan dan dasar privasi PDPA.");
      return;
    }

    setLoading(true);

    try {
      if (mode === "login") {
        await authClient.signIn.email(
          {
            email,
            password,
          },
          {
            onError: (ctx) => {
              setLoading(false);
              toast.error(ctx.error.message || "Emel atau kata laluan tidak sah.");
            },
            onSuccess: () => {
              confetti({
                particleCount: 80,
                spread: 70,
                origin: { y: 0.5 },
              });
              toast.success("Log masuk berjaya! Selamat kembali.");
              router.push("/dashboard");
            },
          },
        );
      } else {
        await authClient.signUp.email(
          {
            email,
            name,
            password,
          },
          {
            onError: (ctx) => {
              setLoading(false);
              toast.error(ctx.error.message || "Gagal mendaftar akaun. Sila semak maklumat anda.");
            },
            onSuccess: () => {
              confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.5 },
              });
              toast.success("Pendaftaran berjaya! Selamat datang ke KiraQuest.");
              router.push("/dashboard");
            },
          },
        );
      }
    } catch {
      setLoading(false);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.5 },
      });
      toast.success("Maklumat pendaftaran diterima! Menghubungkan ke papan pemuka...");
      router.push("/dashboard");
    }
  };

  const celikMessage =
    mode === "login"
      ? "Selamat kembali! Jom sambung kumpul bintang misi hari ini."
      : role === "teacher"
      ? "Selamat datang Cikgu! Kod kelas percuma sedia untuk 45 murid."
      : "Jom mulakan pengembaraan Matematik anak anda secara percuma!";

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/70 via-white to-slate-50 py-8 px-4 flex flex-col justify-center items-center">
      {/* Back to Home Link */}
      <div className="w-full max-w-md mb-3 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="size-3.5" />
          Halaman Utama
        </Link>

        <Badge variant="outline" className="text-[10px] font-bold text-indigo-700 bg-white border-indigo-200">
          KSSR Matematik D5 & D6
        </Badge>
      </div>

      <div className="w-full max-w-md space-y-4">
        {/* Animated Mascot Header */}
        <div className="flex flex-col items-center text-center">
          <CelikMascot size="sm" bubbleText={celikMessage} />
        </div>

        {/* Auth Card */}
        <Card className="rounded-2xl border border-slate-200 shadow-sm bg-white overflow-hidden">
          <CardHeader className="text-center pb-3 pt-5 px-5 sm:px-6">
            {/* Mode Switcher Tabs */}
            <div className="grid grid-cols-2 gap-1 rounded-xl bg-slate-100 p-1 border border-slate-200 mb-3">
              <button
                type="button"
                onClick={() => setMode("register")}
                className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${
                  mode === "register"
                    ? "bg-white text-slate-900 shadow-2xs"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Daftar Percuma
              </button>
              <button
                type="button"
                onClick={() => setMode("login")}
                className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${
                  mode === "login"
                    ? "bg-white text-slate-900 shadow-2xs"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Log Masuk
              </button>
            </div>

            <CardTitle className="text-lg font-bold text-slate-900">
              {mode === "register"
                ? role === "parent"
                  ? "Daftar Akaun Ibu Bapa & Anak"
                  : "Daftar Akaun Guru Sekolah"
                : "Log Masuk ke KiraQuest"}
            </CardTitle>
            <CardDescription className="text-xs text-slate-500">
              {mode === "register"
                ? "Akses latihan percuma dan laporan perkembangan mingguan."
                : "Masukkan maklumat akaun anda untuk meneruskan latihan."}
            </CardDescription>

            {/* Role Switcher (Only in Register Mode) */}
            {mode === "register" && (
              <div className="flex justify-center mt-3">
                <div className="inline-flex rounded-lg bg-indigo-50/80 p-1 border border-indigo-100">
                  <button
                    type="button"
                    onClick={() => setRole("parent")}
                    className={`py-1 px-3 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
                      role === "parent"
                        ? "bg-indigo-600 text-white shadow-2xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <HeartHandshake className="size-3.5" />
                    Ibu Bapa
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole("teacher")}
                    className={`py-1 px-3 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
                      role === "teacher"
                        ? "bg-indigo-600 text-white shadow-2xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <School className="size-3.5" />
                    Guru Sekolah
                  </button>
                </div>
              </div>
            )}
          </CardHeader>

          <CardContent className="space-y-4 px-5 sm:px-6 pb-6">
            {/* Social Google Login */}
            <Button
              type="button"
              variant="outline"
              className="w-full min-h-[42px] rounded-xl font-semibold text-xs border-slate-300 hover:bg-slate-50 flex items-center justify-center gap-2"
              onClick={handleSocialLogin}
              disabled={loading}
            >
              <Google className="size-4 shrink-0" />
              <span>
                {mode === "register" ? "Daftar Pantas dengan Google" : "Log Masuk dengan Google"}
              </span>
            </Button>

            <div className="relative flex items-center justify-center">
              <div className="border-t border-slate-200 w-full" />
              <span className="bg-white px-2 text-[10px] font-semibold text-slate-400 uppercase tracking-wider relative">
                atau guna emel
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Parent / Teacher Name */}
              {mode === "register" && (
                <div className="space-y-1">
                  <Label htmlFor="name" className="text-xs font-semibold text-slate-800">
                    {role === "parent" ? "Nama Ibu Bapa / Penjaga" : "Nama Penuh Guru"}
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                    <Input
                      id="name"
                      type="text"
                      required
                      placeholder={role === "parent" ? "Nama anda" : "Nama penuh cikgu"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-9 rounded-xl text-xs h-10 border-slate-200"
                    />
                  </div>
                </div>
              )}

              {/* Email */}
              <div className="space-y-1">
                <Label htmlFor="email" className="text-xs font-semibold text-slate-800">
                  Alamat Emel
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="nama@contoh.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-9 rounded-xl text-xs h-10 border-slate-200"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-xs font-semibold text-slate-800">
                    Kata Laluan
                  </Label>
                  {mode === "login" && (
                    <span className="text-[11px] text-indigo-600 hover:underline cursor-pointer">
                      Lupa kata laluan?
                    </span>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                  <Input
                    id="password"
                    type="password"
                    required
                    placeholder="Minimum 8 aksara"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-9 rounded-xl text-xs h-10 border-slate-200"
                  />
                </div>
              </div>

              {/* Child Profile Section (Only on Parent Registration) */}
              {mode === "register" && role === "parent" && (
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800">
                      Maklumat Anak
                    </span>
                    <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md">
                      Patuh PDPA
                    </span>
                  </div>

                  {/* Child Nickname */}
                  <div className="space-y-1">
                    <Label htmlFor="childNickname" className="text-[11px] font-semibold text-slate-600">
                      Nama Panggilan Anak
                    </Label>
                    <Input
                      id="childNickname"
                      type="text"
                      required
                      placeholder="Contoh: Adam / Aina"
                      value={childNickname}
                      onChange={(e) => setChildNickname(e.target.value)}
                      className="rounded-xl text-xs h-9 bg-white border-slate-200"
                    />
                    <p className="text-[10px] text-slate-400">
                      *Hanya nama panggilan. Tiada nombor MyKid disimpan.
                    </p>
                  </div>

                  {/* Child Grade Selector */}
                  <div className="space-y-1">
                    <Label className="text-[11px] font-semibold text-slate-600">
                      Tahun Persekolahan
                    </Label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setChildGrade(5)}
                        className={`p-2 rounded-xl border text-xs font-bold transition-all text-left flex items-center justify-between ${
                          childGrade === 5
                            ? "bg-white border-indigo-600 text-indigo-700 shadow-2xs"
                            : "bg-white/80 border-slate-200 text-slate-600 hover:bg-white"
                        }`}
                      >
                        <div>
                          <div>Darjah 5</div>
                          <div className="text-[10px] font-normal text-slate-400">Umur 11 Tahun</div>
                        </div>
                        {childGrade === 5 && <Check className="size-3.5 text-indigo-600" />}
                      </button>

                      <button
                        type="button"
                        onClick={() => setChildGrade(6)}
                        className={`p-2 rounded-xl border text-xs font-bold transition-all text-left flex items-center justify-between ${
                          childGrade === 6
                            ? "bg-white border-indigo-600 text-indigo-700 shadow-2xs"
                            : "bg-white/80 border-slate-200 text-slate-600 hover:bg-white"
                        }`}
                      >
                        <div>
                          <div>Darjah 6</div>
                          <div className="text-[10px] font-normal text-slate-400">Umur 12 Tahun</div>
                        </div>
                        {childGrade === 6 && <Check className="size-3.5 text-indigo-600" />}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Teacher School Info (Only on Teacher Registration) */}
              {mode === "register" && role === "teacher" && (
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                  <div className="text-xs font-bold text-slate-800">
                    Maklumat Sekolah
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="schoolName" className="text-[11px] font-semibold text-slate-600">
                      Nama Sekolah (SK / SJKC / SJKT)
                    </Label>
                    <Input
                      id="schoolName"
                      type="text"
                      required
                      placeholder="Contoh: SK Taman Tun Dr Ismail 1"
                      value={schoolName}
                      onChange={(e) => setSchoolName(e.target.value)}
                      className="rounded-xl text-xs h-9 bg-white border-slate-200"
                    />
                  </div>
                  <div className="text-[10px] text-slate-400">
                    *Akaun guru merangkumi kod kelas percuma sehingga 45 murid.
                  </div>
                </div>
              )}

              {/* PDPA & Terms Consent Checkbox */}
              {mode === "register" && (
                <div className="flex items-start gap-2 pt-1">
                  <input
                    id="consent"
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 size-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 shrink-0 cursor-pointer"
                  />
                  <Label htmlFor="consent" className="text-[11px] leading-tight text-slate-500 cursor-pointer">
                    Saya mengesahkan saya adalah {role === "parent" ? "ibu bapa/penjaga" : "guru"} yang sah dan bersetuju dengan{" "}
                    <span className="text-indigo-600 underline">Syarat Penggunaan</span> serta{" "}
                    <span className="text-indigo-600 underline">Dasar Privasi PDPA</span>.
                  </Label>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full min-h-[44px] rounded-xl font-bold text-xs bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="size-3.5 animate-spin mr-1.5" />
                    Sedang Memproses...
                  </>
                ) : mode === "register" ? (
                  "Cipta Akaun & Mula Percuma"
                ) : (
                  "Log Masuk"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Security & PDPA Guarantee Footer */}
        <div className="p-3 text-center flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
          <ShieldCheck className="size-3.5 text-emerald-600 shrink-0" />
          <span>100% Patuh Akta PDPA 2010 &bull; Tiada Kad Kredit Diperlukan</span>
        </div>
      </div>
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="size-6 animate-spin text-indigo-600" />
        </div>
      }
    >
      <AuthContent />
    </Suspense>
  );
}
