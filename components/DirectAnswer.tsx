import React from "react";
import { Sparkles, CheckCircle } from "lucide-react";

export interface DirectAnswerProps {
  question: string;
  summary: string;
  facts: string[];
  updatedDate?: string;
}

export function DirectAnswer({
  question,
  summary,
  facts,
  updatedDate = "2026년 9월",
}: DirectAnswerProps) {
  return (
    <section
      aria-label="핵심 답변 요약"
      className="aeo-direct-answer w-full rounded-2xl border border-emerald-500/40 bg-gradient-to-br from-emerald-950/30 via-slate-900 to-slate-950 p-5 sm:p-6 backdrop-blur-xl shadow-xl shadow-emerald-950/20"
    >
      <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
          <Sparkles className="h-4 w-4" />
          <span>한눈에 보는 핵심 요약 (Direct Answer)</span>
        </div>
        <span className="text-[11px] text-slate-500">기준: {updatedDate}</span>
      </div>

      <div className="mt-4 space-y-3">
        <h2 className="text-base sm:text-lg font-extrabold text-white break-keep">
          Q. {question}
        </h2>

        <p className="text-xs sm:text-sm leading-relaxed text-slate-300 break-keep font-medium">
          {summary}
        </p>

        {facts.length > 0 && (
          <ul className="mt-3 space-y-2 border-t border-slate-800/60 pt-3 text-xs text-slate-300">
            {facts.map((fact, idx) => (
              <li key={idx} className="flex items-start gap-2 break-keep">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
