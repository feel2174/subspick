import type { Metadata } from "next";
import { GAMSGO_AFFILIATE_URL, SITE_URL } from "@/lib/constants";
import { HowToJsonLd } from "@/components/seo/HowToJsonLd";
import { JsonLd } from "@/components/seo/JsonLd";
import { PromoCodeBox } from "@/components/PromoCodeBox";
import { FaqSection } from "@/components/FaqSection";
import { CheckCircle2, ArrowRight, Sparkles, Bot, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "챗GPT Plus 가격할인 — 월 1만원대로 AI 구독료 50% 이상 절약하기",
  description:
    "OpenAI ChatGPT Plus(월 $20, 약 2.8만원)를 겜스고 제휴 특가로 월 1만원대에 이용하는 방법. GPT-4o, DALL-E 3, 코드 분석 완벽 지원.",
  alternates: {
    canonical: `${SITE_URL}/chatgpt-plus`,
  },
  openGraph: {
    title: "챗GPT Plus & AI 도구 할인 — 월 1만원대 (50% 이상 절약)",
    description: "ChatGPT Plus, Claude Pro, Perplexity를 정가 대비 반값 이하로 이용하는 스마트 가이드.",
    url: `${SITE_URL}/chatgpt-plus`,
  },
};

export default function ChatGptPlusPage() {
  const steps = [
    {
      name: "겜스고 AI 구독 할인 페이지 접속",
      text: "제휴 할인 링크로 접속하여 ChatGPT Plus 또는 Claude 상품을 선택합니다.",
    },
    {
      name: "플랜 및 기간 선택",
      text: "1개월, 3개월, 12개월 등 본인에게 필요한 기간을 선택합니다.",
    },
    {
      name: "프로모션 코드 입력 및 결제",
      text: "할인코드 TA9Y3을 입력해 추가 할인을 적용받고 결제합니다.",
    },
    {
      name: "계정 확인 후 GPT-4o 즉시 사용",
      text: "발급된 계정 정보로 로그인하여 최신 AI 모델과 기능을 제한 없이 이용합니다.",
    },
  ];

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "ChatGPT Plus (겜스고 제휴 할인가)",
    description: "GPT-4o, DALL-E 3 이미지 생성, 파일 분석이 포함된 OpenAI ChatGPT Plus 구독",
    brand: { "@type": "Brand", name: "OpenAI" },
    offers: {
      "@type": "Offer",
      price: 13000,
      priceCurrency: "KRW",
      availability: "https://schema.org/InStock",
      url: GAMSGO_AFFILIATE_URL,
    },
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 flex flex-col gap-12">
      <JsonLd data={productJsonLd} />
      <HowToJsonLd
        name="챗GPT 플러스 월 1만원대 할인 구독 방법"
        description="겜스고를 통해 ChatGPT Plus 및 Claude Pro를 반값 이하로 이용하는 4단계 방법"
        path="/chatgpt-plus"
        estimatedCostKRW={13000}
        steps={steps}
      />

      {/* Header */}
      <div className="space-y-4 text-center break-keep">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-semibold text-cyan-400">
          <Bot className="h-3.5 w-3.5" />
          AI 구독료 반값 절약
        </div>
        <h1 className="text-3xl font-black text-white sm:text-5xl break-keep">
          챗GPT 플러스 가격할인,
          <br />
          <span className="gradient-text-emerald">월 1만원대</span>로 부담 없이 쓰기
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto break-keep">
          환율 때문에 매달 28,000원 넘게 나가는 ChatGPT Plus. <span className="whitespace-nowrap">겜스고(GamsGo)</span>로 반값 이상 아끼고 Claude와 Perplexity까지 스마트하게 활용하세요.
        </p>
      </div>

      {/* Comparison Box */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
            <span className="text-xs font-bold text-slate-400">OpenAI 공식 결제</span>
            <div className="mt-2 text-2xl font-bold text-slate-300">월 $20 (약 28,000원)</div>
            <p className="mt-1 text-xs text-slate-500">환율에 따라 3만원 육박 (연 33만원)</p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-400">
              <li>· 해외 결제 수수료 추가 발생</li>
              <li>· 매달 자동 결제 부담</li>
            </ul>
          </div>

          <div className="rounded-xl border border-emerald-500/50 bg-emerald-950/20 p-5 shadow-lg shadow-emerald-950/40">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-400">겜스고 제휴 할인가</span>
              <span className="rounded bg-emerald-500 px-2 py-0.5 text-[10px] font-extrabold text-slate-950">
                50% 이상 절약
              </span>
            </div>
            <div className="mt-2 text-2xl font-black text-white">
              <span className="gradient-text-emerald">월 13,000원대</span>
            </div>
            <p className="mt-1 text-xs text-emerald-300/80">1년 기준 18만원 이상 절약</p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-200">
              <li className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5" />
                최신 GPT-4o 모델 무제한급 이용
              </li>
              <li className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5" />
                DALL-E 3 고화질 이미지 생성 지원
              </li>
              <li className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5" />
                코드 인터프리터 & 대용량 파일 분석 지원
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800/80 pt-6">
          <div className="text-xs text-slate-400">
            ⚡ 카카오페이/토스 결제 지원 · 해외 수수료 0원
          </div>
          <a
            href={GAMSGO_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 px-6 py-3 text-xs sm:text-sm font-extrabold text-slate-950 shadow-lg shadow-emerald-500/30 hover:from-emerald-300 hover:to-teal-300"
          >
            <span>챗GPT Plus 반값 특가 바로가기</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Other AI Services */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 space-y-4">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <Cpu className="h-4 w-4 text-cyan-400" />
          ChatGPT 외 다른 AI 도구도 함께 할인받으세요
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
            <span className="font-bold text-slate-200">클로드 (Claude Pro)</span>
            <p className="mt-1 text-slate-400">월 14,000원대 (정가 $20)</p>
            <p className="mt-0.5 text-emerald-400 font-semibold">긴 코드 & 보고서 분석 최강</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
            <span className="font-bold text-slate-200">퍼플렉시티 (Perplexity)</span>
            <p className="mt-1 text-slate-400">월 12,000원대 (정가 $20)</p>
            <p className="mt-0.5 text-emerald-400 font-semibold">실시간 출처 기반 AI 검색</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
            <span className="font-bold text-slate-200">미드저니 (Midjourney)</span>
            <p className="mt-1 text-slate-400">월 6,000원대 (정가 $10~)</p>
            <p className="mt-0.5 text-emerald-400 font-semibold">최고 품질 AI 아트 생성</p>
          </div>
        </div>
      </div>

      {/* Promo Code */}
      <PromoCodeBox />

      {/* FAQ */}
      <FaqSection
        items={[
          {
            q: "기능 제한이나 속도 저하가 있나요?",
            a: "아닙니다. OpenAI 공식 계정으로 Plus 등급의 속도, 최신 모델(GPT-4o), 이미지 생성, 파일 업로드 분석 기능을 정가 사용자와 동일하게 사용하실 수 있습니다.",
          },
          {
            q: "이용 중 계정 문제가 생기면 어떻게 하나요?",
            a: "24시간 겜스고 온라인 고객센터를 통해 즉시 문의가 가능하며, 문제가 해결되지 않을 경우 새 계정으로 교체되거나 환불 보장 정책을 적용받으실 수 있습니다.",
          },
        ]}
      />
    </div>
  );
}
