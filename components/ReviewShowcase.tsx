"use client";

import { useState } from "react";
import { CURATED_REVIEWS, getAverageRating } from "@/lib/reviews-data";
import { Star, ShieldCheck, Quote } from "lucide-react";

export function ReviewShowcase() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const reviews = selectedRating
    ? CURATED_REVIEWS.filter((r) => r.rating === selectedRating)
    : CURATED_REVIEWS;

  const avg = getAverageRating();

  return (
    <section className="w-full">
      {/* Header & Stats */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800/80 pb-6">
        <div className="break-keep">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
            <ShieldCheck className="h-3.5 w-3.5" />
            검증된 실사용자 솔직 후기
          </div>
          <h2 className="mt-2 text-2xl font-extrabold text-white break-keep">
            이용자들이 직접 말하는 <span className="gradient-text-emerald">생생한 절약 경험</span>
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-400 break-keep">
            광고 없는 실제 구독자들의 솔직한 이용 후기와 팁을 확인하세요.
          </p>
        </div>

        {/* Rating Badge & Filter */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-2">
            <div className="flex items-center text-amber-400">
              <Star className="h-4 w-4 fill-amber-400" />
            </div>
            <div className="text-sm font-bold text-white">
              {avg} <span className="text-xs font-normal text-slate-400">/ 5.0</span>
            </div>
            <span className="text-xs text-slate-500">({CURATED_REVIEWS.length}건 등록)</span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setSelectedRating(null)}
              className={`rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors ${
                selectedRating === null
                  ? "bg-slate-800 text-white"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              전체
            </button>
            <button
              onClick={() => setSelectedRating(5)}
              className={`rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors ${
                selectedRating === 5
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              ★ 5점만
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/50 p-5 backdrop-blur-xl transition-all hover:border-slate-700 hover:bg-slate-900/80"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-slate-800 px-2 py-0.5 text-[11px] font-semibold text-emerald-400">
                  {rev.service}
                </span>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-amber-400" />
                  ))}
                </div>
              </div>

              <h4 className="mt-3 text-sm font-bold text-white line-clamp-1">
                {rev.title}
              </h4>

              <p className="mt-2 text-xs leading-relaxed text-slate-300 line-clamp-4">
                {rev.content}
              </p>
            </div>

            <div className="mt-4 border-t border-slate-800/60 pt-3">
              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <span>{rev.author}</span>
                <span className="font-semibold text-emerald-400">{rev.savedKRW}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
