"use client";

import { useState, useMemo } from "react";
import { SERVICES, GAMSGO_AFFILIATE_URL } from "@/lib/constants";
import { Check, Sparkles, ArrowRight, RefreshCw } from "lucide-react";

export function SavingsCalculator({ defaultSelected = ["youtube-premium", "netflix", "chatgpt-plus"] }: { defaultSelected?: string[] }) {
  const [selectedIds, setSelectedIds] = useState<string[]>(defaultSelected);

  const toggleService = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    setSelectedIds(SERVICES.slice(0, 8).map((s) => s.id));
  };

  const clearAll = () => {
    setSelectedIds([]);
  };

  // 계산 로직
  const { officialTotalMonth, gamsgoTotalMonth, savedMonthly, savedYearly, savingsPercent } = useMemo(() => {
    const selected = SERVICES.filter((s) => selectedIds.includes(s.id));
    const officialTotalMonth = selected.reduce((sum, s) => sum + s.officialMonthly, 0);
    const gamsgoTotalMonth = selected.reduce((sum, s) => sum + s.gamsgoMonthly, 0);
    const savedMonthly = officialTotalMonth - gamsgoTotalMonth;
    const savedYearly = savedMonthly * 12;
    const savingsPercent = officialTotalMonth > 0 ? Math.round((savedMonthly / officialTotalMonth) * 100) : 0;

    return { officialTotalMonth, gamsgoTotalMonth, savedMonthly, savedYearly, savingsPercent };
  }, [selectedIds]);

  // 절약 금액 비유
  const savingAnalogy = useMemo(() => {
    if (savedYearly >= 400000) return "제주도 왕복 항공권 + 숙박비 1박";
    if (savedYearly >= 250000) return "황금올리브 치킨 약 12마리";
    if (savedYearly >= 150000) return "스타벅스 아메리카노 35잔";
    if (savedYearly >= 50000) return "영화 티켓 3장 + 팝콘 세트";
    return "매달 쏠쏠한 커피 한 잔 여유";
  }, [savedYearly]);

  return (
    <div className="w-full rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/95 p-5 shadow-2xl backdrop-blur-xl sm:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
        <div className="break-keep">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
            <Sparkles className="h-3.5 w-3.5" />
            실시간 구독료 절약 시뮬레이터
          </div>
          <h2 className="mt-2 text-xl font-extrabold text-white sm:text-2xl break-keep">
            내가 쓰는 구독 서비스, <span className="gradient-text-emerald">얼마나 아낄 수 있을까?</span>
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-400 break-keep">
            현재 이용 중이거나 관심 있는 서비스를 클릭해 절약 금액을 확인해보세요.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={selectAll}
            className="rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:bg-slate-700"
          >
            주요 서비스 전체선택
          </button>
          <button
            onClick={clearAll}
            className="flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-800/60 px-2.5 py-1.5 text-xs font-medium text-slate-400 transition-colors hover:text-slate-200"
            title="초기화"
          >
            <RefreshCw className="h-3 w-3" />
          </button>
        </div>
      </div>

      {/* Service Selection Grid */}
      <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
        {SERVICES.map((service) => {
          const isSelected = selectedIds.includes(service.id);
          return (
            <button
              key={service.id}
              type="button"
              onClick={() => toggleService(service.id)}
              className={`group relative flex flex-col items-start rounded-xl p-3 text-left transition-all ${
                isSelected
                  ? "border border-emerald-500/50 bg-emerald-950/20 shadow-lg shadow-emerald-950/40"
                  : "border border-slate-800/80 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-800/40"
              }`}
            >
              <div className="flex w-full items-center justify-between">
                <span className="text-xs font-bold text-slate-200 group-hover:text-white">
                  {service.name}
                </span>
                <div
                  className={`flex h-4 w-4 items-center justify-center rounded-md border transition-colors ${
                    isSelected
                      ? "border-emerald-500 bg-emerald-500 text-slate-950"
                      : "border-slate-700 bg-slate-800/60 text-transparent"
                  }`}
                >
                  <Check className="h-3 w-3 stroke-[3]" />
                </div>
              </div>

              <div className="mt-2 flex items-baseline gap-1.5">
                <span className="text-xs font-extrabold text-emerald-400">
                  {service.gamsgoPriceText.replace("대", "")}
                </span>
                <span className="text-[10px] text-slate-500 line-through">
                  월 {service.officialMonthly.toLocaleString()}원
                </span>
              </div>

              <span className="mt-1 inline-block rounded bg-slate-800 px-1.5 py-0.5 text-[10px] font-semibold text-slate-400">
                {service.highlightBadge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Result Display Banner */}
      <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 via-slate-900 to-cyan-950/30 p-6 shadow-xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-center">
          {/* Monthly Comparison */}
          <div className="space-y-1.5 border-b border-slate-800 pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-6">
            <div className="flex justify-between text-xs text-slate-400">
              <span>기존 공식 요금:</span>
              <span className="line-through">월 {officialTotalMonth.toLocaleString()}원</span>
            </div>
            <div className="flex justify-between text-xs font-medium text-emerald-400">
              <span>겜스고 할인가:</span>
              <span className="font-bold">월 {gamsgoTotalMonth.toLocaleString()}원</span>
            </div>
            <div className="flex justify-between text-xs font-bold text-slate-300">
              <span>선택한 서비스:</span>
              <span className="text-emerald-300">{selectedIds.length}개</span>
            </div>
          </div>

          {/* Big Savings Metric */}
          <div className="flex flex-col items-center justify-center text-center break-keep">
            <span className="text-xs font-bold tracking-wider uppercase text-emerald-400">
              연간 절약 예상액 ({savingsPercent}% 절감)
            </span>
            <div className="mt-1 text-3xl font-black text-white sm:text-4xl">
              <span className="gradient-text-emerald">
                {savedYearly.toLocaleString()}
              </span>
              <span className="text-lg font-bold text-slate-300"> 원</span>
            </div>
            <p className="mt-1 text-xs text-slate-400 break-keep">
              💡 <span className="font-medium text-slate-200">{savingAnalogy}</span> 절약 효과!
            </p>
          </div>

          {/* CTA Action */}
          <div className="flex flex-col justify-center">
            <a
              href={GAMSGO_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 px-5 py-3.5 text-center text-sm font-extrabold text-slate-950 shadow-lg shadow-emerald-500/25 transition-all hover:from-emerald-300 hover:to-teal-300 hover:shadow-emerald-500/40 active:scale-98"
            >
              <span>이 금액으로 즉시 할인받기</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="mt-2 text-center text-[11px] text-slate-500">
              ⚡ 결제 즉시 발송 · 24시간 안심 환불 보장
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
