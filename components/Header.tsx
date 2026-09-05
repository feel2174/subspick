import Link from "next/link";
import { GAMSGO_AFFILIATE_URL, SITE_NAME } from "@/lib/constants";
import { Zap, ShieldCheck, Sparkles, Calculator } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 text-slate-950 shadow-lg shadow-emerald-500/20 transition-transform group-hover:scale-105">
            <Zap className="h-5 w-5 fill-slate-950" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tight text-white">
              {SITE_NAME.split(" ")[0]}
            </span>
            <span className="text-[10px] font-medium tracking-wider uppercase text-emerald-400">
              Smart Savings
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <Link
            href="/calculator"
            className="flex items-center gap-1.5 transition-colors hover:text-emerald-400"
          >
            <Calculator className="h-4 w-4 text-emerald-400" />
            절약 계산기
          </Link>
          <Link
            href="/youtube-premium"
            className="transition-colors hover:text-emerald-400"
          >
            유튜브 프리미엄
          </Link>
          <Link
            href="/netflix"
            className="transition-colors hover:text-emerald-400"
          >
            넷플릭스 4K
          </Link>
          <Link
            href="/chatgpt-plus"
            className="transition-colors hover:text-emerald-400"
          >
            챗GPT Plus
          </Link>
          <Link
            href="/scam-check"
            className="flex items-center gap-1 text-slate-400 transition-colors hover:text-slate-200"
          >
            <ShieldCheck className="h-4 w-4 text-cyan-400" />
            사기 팩트체크
          </Link>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href={GAMSGO_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 text-xs font-bold text-slate-950 shadow-lg shadow-emerald-500/25 transition-all hover:from-emerald-400 hover:to-teal-400 hover:shadow-emerald-500/40 active:scale-95"
          >
            <Sparkles className="h-3.5 w-3.5" />
            최대 70% 특가 바로가기
          </a>
        </div>
      </div>
    </header>
  );
}
