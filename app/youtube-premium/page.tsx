import type { Metadata } from "next";
import Link from "next/link";
import { GAMSGO_AFFILIATE_URL, PROMO_CODE, SITE_NAME, SITE_URL } from "@/lib/constants";
import { HowToJsonLd } from "@/components/seo/HowToJsonLd";
import { JsonLd } from "@/components/seo/JsonLd";
import { PromoCodeBox } from "@/components/PromoCodeBox";
import { FaqSection } from "@/components/FaqSection";
import { CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "유튜브 프리미엄 가격할인 — 월 6,900원대 우회 없이 안전하게 구독하기",
  description:
    "정가 월 14,900원 유튜브 프리미엄을 겜스고 제휴 특가로 월 6,900원대에 이용하는 방법. VPN 우회 정지 걱정 없는 한국 계정 가족 초대 방식 안내.",
  alternates: {
    canonical: `${SITE_URL}/youtube-premium`,
  },
  openGraph: {
    title: "유튜브 프리미엄 가격할인 — 월 6,900원대 (최대 54% 절약)",
    description: "정가 월 14,900원 → 겜스고 월 6,900원대. VPN 없이 내 구글 계정 그대로 이용.",
    url: `${SITE_URL}/youtube-premium`,
  },
};

export default function YoutubePremiumPage() {
  const steps = [
    {
      name: "겜스고 유튜브 프리미엄 할인 페이지 접속",
      text: "제휴 할인 링크를 통해 겜스고 공식 웹사이트의 유튜브 프리미엄 페이지로 이동합니다.",
    },
    {
      name: "이용 기간 선택 (12개월 권장)",
      text: "가장 가성비가 좋은 12개월 플랜을 선택합니다.",
    },
    {
      name: "프로모션 코드 TA9Y3 입력 및 결제",
      text: "할인코드란에 TA9Y3을 입력해 추가 할인을 적용받고 카카오페이/토스/카드로 결제합니다.",
    },
    {
      name: "이메일 가족 초대 수락 후 즉시 이용",
      text: "결제 완료 후 이메일로 발송된 구글 가족 그룹 초대 링크를 수락하면 기존 내 구글 계정에 프리미엄 혜택이 즉시 적용됩니다.",
    },
  ];

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "유튜브 프리미엄 (겜스고 제휴 할인가)",
    description: "공식 앱 광고 제거, 백그라운드 재생, 유튜브 뮤직이 포함된 유튜브 프리미엄 구독",
    brand: { "@type": "Brand", name: "YouTube Premium" },
    offers: {
      "@type": "Offer",
      price: 6900,
      priceCurrency: "KRW",
      availability: "https://schema.org/InStock",
      url: GAMSGO_AFFILIATE_URL,
    },
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 flex flex-col gap-12">
      <JsonLd data={productJsonLd} />
      <HowToJsonLd
        name="유튜브 프리미엄 월 6,900원대 할인 구독 방법"
        description="VPN 우회 없이 한국 계정 그대로 겜스고를 통해 유튜브 프리미엄을 반값 이하로 이용하는 4단계 방법"
        path="/youtube-premium"
        estimatedCostKRW={6900}
        steps={steps}
      />

      {/* Header */}
      <div className="space-y-4 text-center">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-semibold text-emerald-400">
          <Sparkles className="h-3.5 w-3.5" />
          공식 정가 대비 연 96,000원 절약
        </div>
        <h1 className="text-3xl font-black text-white sm:text-5xl">
          유튜브 프리미엄 가격할인,
          <br />
          <span className="gradient-text-emerald">월 6,900원대</span>로 구독하는 법
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
          터키·인도 VPN 우회 결제 막힘과 계정 정지 위험 없이, 기존 한국 구글 계정 그대로 안전하게 이용하세요.
        </p>
      </div>

      {/* Price Comparison Card */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
            <span className="text-xs font-bold text-slate-400">유튜브 공식 정가</span>
            <div className="mt-2 text-2xl font-bold text-slate-300">월 14,900원</div>
            <p className="mt-1 text-xs text-slate-500">1년 기준 178,800원 지출</p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-400">
              <li>· 매달 정가 그대로 부과</li>
              <li>· 가족 요금제 국내 미지원</li>
            </ul>
          </div>

          <div className="rounded-xl border border-emerald-500/50 bg-emerald-950/20 p-5 shadow-lg shadow-emerald-950/40">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-400">겜스고 제휴 할인가</span>
              <span className="rounded bg-emerald-500 px-2 py-0.5 text-[10px] font-extrabold text-slate-950">
                54% 절약
              </span>
            </div>
            <div className="mt-2 text-2xl font-black text-white">
              <span className="gradient-text-emerald">월 환산 약 6,900원</span>
            </div>
            <p className="mt-1 text-xs text-emerald-300/80">1년 기준 연 약 96,000원 절약</p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-200">
              <li className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5" />
                광고 제거 + 백그라운드 재생 동일
              </li>
              <li className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5" />
                유튜브 뮤직(YouTube Music) 무료 포함
              </li>
              <li className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5" />
                내 기존 구글 계정 플레이리스트 유지
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800/80 pt-6">
          <div className="text-xs text-slate-400">
            ⚡ 결제 완료 즉시 이메일 발송 · 24시간 전액 환불 보장
          </div>
          <a
            href={GAMSGO_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 px-6 py-3 text-xs sm:text-sm font-extrabold text-slate-950 shadow-lg shadow-emerald-500/30 hover:from-emerald-300 hover:to-teal-300"
          >
            <span>유튜브 프리미엄 특가 바로가기</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Warning Box: Why Bypass is risky */}
      <div className="rounded-2xl border border-amber-500/30 bg-amber-950/20 p-6 backdrop-blur-xl">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-bold text-amber-200">
              알아두세요: VPN 국가변경(우회) 결제가 위험한 이유
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-300">
              터키, 인도, 나이지리아 등 저렴한 국가로 VPN을 우회하여 가입하는 방식은 구글 약관 위반으로 정기 단속 대상입니다. 적발 시 결제 취소뿐만 아니라 지메일, 구글 드라이브, 포토 등 연결된 계정 전체가 정지될 수 있습니다. 겜스고는 위험한 VPN 우회 결제가 아닌, 정식 초대 링크를 수락하는 방식이므로 계정 정지 위험 없이 안심하고 사용하실 수 있습니다.
            </p>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">신청 및 이용 방법 4단계</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {steps.map((step, idx) => (
            <div key={idx} className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
              <span className="text-xs font-extrabold text-emerald-400">STEP {idx + 1}</span>
              <h3 className="mt-1 text-sm font-bold text-white">{step.name}</h3>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Promo Code Box */}
      <PromoCodeBox />

      {/* FAQ */}
      <FaqSection
        items={[
          {
            q: "기존에 쓰던 재생목록이나 시청 기록이 유지되나요?",
            a: "네, 완전히 유지됩니다. 새로운 계정을 만드는 것이 아니라, 현재 사용 중이신 본인 한국 구글 계정으로 초대장을 받아 혜택을 부여받는 방식이므로 모든 기록과 구독 채널이 그대로 유지됩니다.",
          },
          {
            q: "유튜브 뮤직도 동일하게 쓸 수 있나요?",
            a: "네, 공식 유튜브 프리미엄과 동일하게 유튜브 뮤직 앱에서 광고 없는 스트리밍, 오프라인 다운로드, 백그라운드 재생을 모두 이용하실 수 있습니다.",
          },
          {
            q: "스마트TV나 아이폰, 아이패드에서도 작동하나요?",
            a: "네, 로그인하는 기기 종류에 관계없이 구글 계정 자체에 프리미엄 권한이 적용되므로 TV, 스마트폰, 태블릿, PC 등 모든 기기에서 즉시 적용됩니다.",
          },
        ]}
      />
    </div>
  );
}
