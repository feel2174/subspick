"use client";

import { useState } from "react";
import { PROMO_CODE, GAMSGO_AFFILIATE_URL } from "@/lib/constants";
import { Copy, Check, Sparkles, ExternalLink } from "lucide-react";

export function PromoCodeBox() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PROMO_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-emerald-500/40 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-cyan-950/30 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left Content */}
        <div className="space-y-1.5 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
            <Sparkles className="h-3.5 w-3.5" />
            서브스픽 전용 추가 프로모션
          </div>
          <h3 className="text-xl font-extrabold text-white sm:text-2xl">
            결제 전 프로모션 코드로 <span className="gradient-text-emerald">추가 할인</span> 받으세요
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            겜스고 결제 페이지에서 프로모션 코드란에 입력 시 즉시 할인이 적용됩니다.
          </p>
        </div>

        {/* Right Code & CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          {/* Promo Code Pill */}
          <button
            onClick={handleCopy}
            className="flex w-full sm:w-auto items-center justify-between gap-3 rounded-xl border border-dashed border-emerald-500/60 bg-slate-900/90 px-4 py-3 text-sm font-mono font-bold text-emerald-300 transition-all hover:border-emerald-400 hover:bg-slate-850"
            title="클릭하여 복사"
          >
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-sans">할인코드:</span>
              <span className="text-base tracking-widest text-emerald-400">{PROMO_CODE}</span>
            </div>
            <span className="flex items-center gap-1 text-xs text-slate-400">
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-400">복사됨!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>복사</span>
                </>
              )}
            </span>
          </button>

          {/* Go to GamsGo Button */}
          <a
            href={GAMSGO_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 px-5 py-3 text-xs sm:text-sm font-extrabold text-slate-950 shadow-lg shadow-emerald-500/25 transition-all hover:from-emerald-300 hover:to-teal-300 hover:shadow-emerald-500/40"
          >
            <span>할인 적용 페이지 열기</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
