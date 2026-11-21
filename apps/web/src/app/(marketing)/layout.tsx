import Link from "next/link";
import type { ReactNode } from "react";

import { buttonVariants } from "@kiraquest/ui/components/button";
import { Badge } from "@kiraquest/ui/components/badge";
import { Compass, ShieldCheck, Sparkles } from "lucide-react";

function MarketingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex size-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-xs">
            <Compass className="size-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-lg leading-tight tracking-tight text-slate-900 flex items-center gap-1.5">
              KiraQuest AI
              <Badge variant="secondary" className="px-1.5 py-0 text-[10px] font-bold bg-indigo-50 text-indigo-700 border-indigo-200">
                KSSR
              </Badge>
            </span>
            <span className="text-[11px] text-slate-500 font-medium">Matematik Darjah 5 & 6</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#kaedah"
            className="text-xs font-semibold text-slate-600 transition-colors hover:text-indigo-600"
          >
            Kaedah Bimbingan
          </Link>
          <Link
            href="#demo"
            className="text-xs font-semibold text-slate-600 transition-colors hover:text-indigo-600"
          >
            Latihan Interaktif
          </Link>
          <Link
            href="#kurikulum"
            className="text-xs font-semibold text-slate-600 transition-colors hover:text-indigo-600"
          >
            Silibus KSSR
          </Link>
          <Link
            href="#laporan"
            className="text-xs font-semibold text-slate-600 transition-colors hover:text-indigo-600"
          >
            Laporan Emel
          </Link>
          <Link
            href="#soalan-lazim"
            className="text-xs font-semibold text-slate-600 transition-colors hover:text-indigo-600"
          >
            Soalan Lazim
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/auth?mode=login"
            className={buttonVariants({ variant: "ghost", size: "sm" }) + " text-xs font-bold px-3 text-slate-700"}
          >
            Log Masuk
          </Link>
          <Link
            href="/auth?mode=register&role=parent"
            className={buttonVariants({ variant: "default", size: "sm" }) + " text-xs font-bold rounded-xl px-4 bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs"}
          >
            <Sparkles className="size-3.5 mr-1" />
            Mula Percuma
          </Link>
        </div>
      </div>
    </header>
  );
}

function MarketingFooter() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-bold text-base text-slate-900">
              <Compass className="size-5 text-indigo-600" />
              <span>KiraQuest AI</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-600">
              Platform bimbingan Matematik KSSR Tahun 5 & 6 berfokuskan kefahaman konsep dan kaedah berperingkat tanpa membocorkan jawapan.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-slate-600 pt-1">
              <ShieldCheck className="size-4 text-emerald-600" />
              <span>Patuh Akta Perlindungan Data Peribadi (PDPA) 2010</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-3">Kurikulum KSSR</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>Pecahan Wajar & Nombor Bercampur</li>
              <li>Bentuk Lazim & Kaedah Model Bar</li>
              <li>Perpuluhan & Peratusan Nilai Kuantiti</li>
              <li>Silibus Darjah 5 & 6 KSSR Semakan</li>
              <li>Format Pentaksiran Peperiksaan UASA</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-3">Pautan Pengguna</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link href="/auth?mode=register&role=parent" className="hover:text-indigo-600">
                  Akaun Ibu Bapa & Murid
                </Link>
              </li>
              <li>
                <Link href="/auth?mode=register&role=teacher" className="hover:text-indigo-600">
                  Akaun Cikgu & Kod Kelas
                </Link>
              </li>
              <li>
                <Link href="#demo" className="hover:text-indigo-600">
                  Cuba Latihan Interaktif
                </Link>
              </li>
              <li>
                <Link href="#soalan-lazim" className="hover:text-indigo-600">
                  Pusat Bantuan & FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-3">Privasi Kanak-Kanak</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              KiraQuest AI tidak mengumpul nombor MyKid/IC, foto, atau alamat rumah kanak-kanak. Profil murid hanya menggunakan nama panggilan di bawah kawalan ibu bapa atau guru.
            </p>
            <div className="mt-4">
              <Link
                href="/auth?mode=register&role=parent"
                className={buttonVariants({ variant: "outline", size: "sm" }) + " w-full justify-center text-xs rounded-xl font-bold border-slate-300"}
              >
                Cipta Profil Percuma
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 KiraQuest AI. Hak cipta terpelihara. Direka khas untuk pendidikan Malaysia.</p>
          <div className="flex gap-4">
            <span className="hover:text-slate-800 cursor-pointer">Syarat Penggunaan</span>
            <span>•</span>
            <span className="hover:text-slate-800 cursor-pointer">Dasar Privasi PDPA</span>
            <span>•</span>
            <span className="hover:text-slate-800 cursor-pointer">Hubungi Kami</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-svh grid-rows-[auto_1fr_auto]">
      <MarketingHeader />
      <main>{children}</main>
      <MarketingFooter />
    </div>
  );
}
