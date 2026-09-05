import type { Metadata } from "next";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { PromoCodeBox } from "@/components/PromoCodeBox";
import { FaqSection } from "@/components/FaqSection";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { Calculator } from "lucide-react";

export const metadata: Metadata = {
  title: "구독료 절약 계산기 — 내가 쓰는 서비스 총 절약 금액 실시간 계산",
  description:
    "유튜브 프리미엄, 넷플릭스, 챗GPT, 디즈니+, 스포티파이 등 내가 이용 중인 구독 서비스를 선택하고 연간 절약할 수 있는 금액을 실시간으로 계산해보세요.",
  alternates: {
    canonical: `${SITE_URL}/calculator`,
  },
};

export default function CalculatorPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 flex flex-col gap-12">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-semibold text-emerald-400">
          <Calculator className="h-3.5 w-3.5" />
          스마트 구독 관리 도구
        </div>
        <h1 className="text-3xl font-black text-white sm:text-5xl">
          실시간 <span className="gradient-text-emerald">구독료 절약 계산기</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
          매달 빠져나가는 통장 잔고, 지금 체크해보세요. 작은 선택으로 연간 수십만 원을 지킬 수 있습니다.
        </p>
      </div>

      <SavingsCalculator defaultSelected={["youtube-premium", "netflix", "chatgpt-plus", "disney-plus"]} />

      <PromoCodeBox />

      <FaqSection />
    </div>
  );
}
