"use client";

import { useState } from "react";
import Link from "next/link";
import { SERVICES, ServiceCategory, GAMSGO_AFFILIATE_URL } from "@/lib/constants";
import { Sparkles, ArrowUpRight, CheckCircle2 } from "lucide-react";

const CATEGORIES: ("전체" | ServiceCategory)[] = ["전체", "OTT", "AI", "음악", "소프트웨어"];

export function ServiceGrid() {
  const [activeCategory, setActiveCategory] = useState<"전체" | ServiceCategory>("전체");

  const filteredServices = activeCategory === "전체"
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section className="w-full">
      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-xl px-4 py-2 text-xs font-bold transition-all whitespace-nowrap ${
              activeCategory === cat
                ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                : "border border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-slate-900/60 p-6 backdrop-blur-xl transition-all hover:border-emerald-500/40 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-emerald-950/20"
          >
            {/* Top Badges */}
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-md border border-slate-700 bg-slate-800/80 px-2.5 py-0.5 text-[11px] font-semibold text-slate-300">
                  {service.category}
                </span>
                <span className="rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 px-2.5 py-0.5 text-[11px] font-bold text-emerald-400">
                  {service.highlightBadge}
                </span>
              </div>

              {/* Title & Price */}
              <h3 className="mt-4 text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                {service.name}
              </h3>

              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-2xl font-black text-emerald-400">
                  {service.gamsgoPriceText}
                </span>
                <span className="text-xs text-slate-500 line-through">
                  정가 {service.officialPriceText}
                </span>
              </div>

              {/* Features */}
              <ul className="mt-4 space-y-2 border-t border-slate-800/80 pt-4 text-xs text-slate-300">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 flex items-center gap-2 pt-2">
              <a
                href={GAMSGO_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-xl bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 py-2.5 px-3 text-center text-xs font-bold transition-all flex items-center justify-center gap-1 shadow-sm"
              >
                <span>할인 링크 열기</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              {service.href && service.href !== "#" && (
                <Link
                  href={service.href}
                  className="rounded-xl border border-slate-700 bg-slate-900/80 hover:border-slate-600 px-3 py-2.5 text-center text-xs font-semibold text-slate-400 hover:text-slate-200 transition-colors"
                >
                  가이드
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
