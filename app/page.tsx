import { SavingsCalculator } from "@/components/SavingsCalculator";
import { ServiceGrid } from "@/components/ServiceGrid";
import { PromoCodeBox } from "@/components/PromoCodeBox";
import { ReviewShowcase } from "@/components/ReviewShowcase";
import { TrustSection } from "@/components/TrustSection";
import { FaqSection } from "@/components/FaqSection";
import { GAMSGO_AFFILIATE_URL, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";
import { Sparkles, ArrowRight, ShieldCheck, Flame } from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative flex flex-col gap-16 py-8 sm:py-16 overflow-hidden">
      {/* Background Glow Spheres */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] overflow-hidden -z-10">
        <div className="absolute top-[-100px] left-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute top-[100px] right-1/4 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      {/* 1. Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-semibold text-emerald-400 backdrop-blur-md">
          <Flame className="h-3.5 w-3.5 text-orange-400" />
          <span>2026 구독료 인상 완벽 방어</span>
        </div>

        <h1 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl max-w-4xl leading-[1.15]">
          매달 새어나가는 구독료,
          <br />
          <span className="gradient-text-emerald">최대 70%</span> 스마트하게 아끼세요
        </h1>

        <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
          유튜브 프리미엄 월 6,900원, 넷플릭스 4K 월 5,000원, 챗GPT Plus 반값.
          검증된 계정 공유 플랫폼 <span className="font-semibold text-slate-200">겜스고(GamsGo)</span> 공식 제휴 특가로 안전하게 이용하세요.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <a
            href={GAMSGO_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 shadow-xl shadow-emerald-500/25 transition-all hover:from-emerald-300 hover:to-teal-300 hover:shadow-emerald-500/40"
          >
            <span>지금 최대 70% 특가 확인</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#calculator"
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:border-slate-600 hover:bg-slate-800 transition-colors"
          >
            <span>절약 금액 계산해보기</span>
          </a>
        </div>
      </section>

      {/* 2. Interactive Calculator Section */}
      <section id="calculator" className="mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <SavingsCalculator />
      </section>

      {/* 3. Promo Code Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <PromoCodeBox />
      </section>

      {/* 4. Full Services Comparison Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 w-full flex flex-col gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs font-semibold text-slate-300">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
            전체 서비스 가격표
          </div>
          <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
            공식 정가 vs <span className="gradient-text-emerald">겜스고 특가</span> 한눈에 비교
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-400">
            원하는 카테고리를 선택해 실시간 요금과 지원 혜택을 확인하세요.
          </p>
        </div>

        <ServiceGrid />
      </section>

      {/* 5. Trust & Reliability */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <TrustSection />
      </section>

      {/* 6. Curated Reviews Showcase */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <ReviewShowcase />
      </section>

      {/* 7. FAQ Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 w-full pb-8">
        <FaqSection />
      </section>
    </div>
  );
}
