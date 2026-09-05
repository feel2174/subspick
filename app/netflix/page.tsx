import type { Metadata } from "next";
import { GAMSGO_AFFILIATE_URL, SITE_URL } from "@/lib/constants";
import { HowToJsonLd } from "@/components/seo/HowToJsonLd";
import { JsonLd } from "@/components/seo/JsonLd";
import { PromoCodeBox } from "@/components/PromoCodeBox";
import { DirectAnswer } from "@/components/DirectAnswer";
import { FaqSection } from "@/components/FaqSection";
import { CheckCircle2, ArrowRight, Sparkles, Tv, MonitorPlay } from "lucide-react";

export const metadata: Metadata = {
  title: "넷플릭스 가격할인 — 월 5,000원대로 4K 프리미엄 시청하는 법",
  description:
    "넷플릭스 프리미엄 정가 월 17,000원을 겜스고를 통해 월 5,000원대에 안전하게 구독하는 방법. 4K UHD, HDR, 전용 프로필 핀번호 지원.",
  alternates: {
    canonical: `${SITE_URL}/netflix`,
  },
  openGraph: {
    title: "넷플릭스 4K 프리미엄 할인 — 월 5,000원대 (최대 70% 절약)",
    description: "정가 월 17,000원 → 월 5,000원대. 4K UHD 및 TV 시청 완벽 지원.",
    url: `${SITE_URL}/netflix`,
  },
};

export default function NetflixPage() {
  const steps = [
    {
      name: "겜스고 넷플릭스 할인 페이지 접속",
      text: "제휴 링크로 겜스고 사이트에 접속하여 Netflix 상품을 선택합니다.",
    },
    {
      name: "넷플릭스 4K 프로필 공유 플랜 선택",
      text: "원하는 이용 기간(3개월, 6개월, 12개월 등)을 선택합니다.",
    },
    {
      name: "프로모션 코드 입력 및 간편 결제",
      text: "할인코드 TA9Y3을 입력해 추가 할인을 적용받고 결제합니다.",
    },
    {
      name: "배정된 프로필 번호 확인 후 공식 앱 로그인",
      text: "결제 즉시 발급된 계정 이메일과 비밀번호, 나만의 프로필 번호를 확인하고 넷플릭스 공식 앱에 로그인합니다.",
    },
  ];

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "넷플릭스 4K UHD 프리미엄 (겜스고 할인가)",
    description: "4K UHD, HDR, 돌비 애트모스를 지원하는 넷플릭스 프리미엄 전용 프로필 구독",
    brand: { "@type": "Brand", name: "Netflix" },
    offers: {
      "@type": "Offer",
      price: 5000,
      priceCurrency: "KRW",
      availability: "https://schema.org/InStock",
      url: GAMSGO_AFFILIATE_URL,
    },
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 flex flex-col gap-12">
      <JsonLd data={productJsonLd} />
      <HowToJsonLd
        name="넷플릭스 4K 프리미엄 월 5천원대 할인 구독 방법"
        description="겜스고를 통해 넷플릭스 프리미엄 등급을 월 5,000원대에 안전하게 구독하는 방법"
        path="/netflix"
        estimatedCostKRW={5000}
        steps={steps}
      />

      {/* Header */}
      <div className="space-y-4 text-center break-keep">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-semibold text-emerald-400">
          <Sparkles className="h-3.5 w-3.5" />
          공식 정가 대비 최대 70% 할인
        </div>
        <h1 className="text-3xl font-black text-white sm:text-5xl break-keep">
          넷플릭스 4K 프리미엄,
          <br />
          <span className="gradient-text-emerald">월 5,000원대</span>로 보는 법
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto break-keep">
          공식 정가 월 17,000원의 최고급 4K UHD 요금제를 전용 프로필 핀번호 잠금으로 안전하게 이용하세요.
        </p>
      </div>

      {/* AEO / GEO Direct Answer Block */}
      <DirectAnswer
        question="넷플릭스 4K 프리미엄을 월 5,000원대에 이용하는 방법은 무엇인가요?"
        summary="겜스고(GamsGo)를 통해 넷플릭스 프리미엄(정가 17,000원) 계정의 독립된 1개 프로필을 배정받아 이용하는 방식입니다. 본인 전용 PIN 번호로 시청 기록과 찜 목록이 완벽히 분리되며, 스마트 TV, 모바일, PC 어디서나 4K 화질로 감상 가능합니다."
        facts={[
          "공식 정가 월 17,000원 대비 최대 70% 절약 (월 5,000원대)",
          "4K UHD, HDR, Dolby Atmos 최고 화질 음질 그대로 지원",
          "개인 PIN 번호 잠금으로 타인 시청 간섭 및 기록 노출 차단",
          "프로모션 코드 TA9Y3 입력 시 추가 즉시 할인 적용",
        ]}
      />

      {/* Comparison Box */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
            <span className="text-xs font-bold text-slate-400">넷플릭스 공식 요금제</span>
            <div className="mt-2 text-2xl font-bold text-slate-300">월 17,000원</div>
            <p className="mt-1 text-xs text-slate-500">프리미엄 4K 기준 (연 204,000원)</p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-400">
              <li>· 광고형: 월 7,000원 (광고 노출, FHD)</li>
              <li>· 스탠다드: 월 13,500원 (FHD)</li>
              <li>· 프리미엄: 월 17,000원 (4K UHD)</li>
            </ul>
          </div>

          <div className="rounded-xl border border-emerald-500/50 bg-emerald-950/20 p-5 shadow-lg shadow-emerald-950/40">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-400">겜스고 프로필 공유</span>
              <span className="rounded bg-emerald-500 px-2 py-0.5 text-[10px] font-extrabold text-slate-950">
                최대 70% 절약
              </span>
            </div>
            <div className="mt-2 text-2xl font-black text-white">
              <span className="gradient-text-emerald">월 5,000원대</span>
            </div>
            <p className="mt-1 text-xs text-emerald-300/80">광고형 요금제보다 저렴한 4K 화질</p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-200">
              <li className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5" />
                4K UHD & HDR & 공간 음향 완벽 지원
              </li>
              <li className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5" />
                나만의 독립 프로필 + PIN 번호 잠금
              </li>
              <li className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5" />
                스마트TV, 셋톱박스, 모바일 시청 가능
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800/80 pt-6">
          <div className="text-xs text-slate-400">
            ⚡ 즉시 프로필 발송 · 24시간 실시간 고객지원
          </div>
          <a
            href={GAMSGO_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 px-6 py-3 text-xs sm:text-sm font-extrabold text-slate-950 shadow-lg shadow-emerald-500/30 hover:from-emerald-300 hover:to-teal-300"
          >
            <span>넷플릭스 70% 할인받기</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Feature Highlight */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex items-start gap-4">
          <Tv className="h-6 w-6 text-emerald-400 shrink-0 mt-1" />
          <div>
            <h3 className="text-sm font-bold text-white">스마트TV에서도 4K로 볼 수 있나요?</h3>
            <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
              네, 삼성/LG 스마트TV, 애플TV, 크롬캐스트 등 넷플릭스 공식 앱이 설치되는 모든 기기에서 발급받은 계정으로 로그인해 지정된 프로필로 4K 시청이 가능합니다.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex items-start gap-4">
          <MonitorPlay className="h-6 w-6 text-cyan-400 shrink-0 mt-1" />
          <div>
            <h3 className="text-sm font-bold text-white">다른 사람이 내 시청 기록을 보나요?</h3>
            <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
              본인 전용 프로필에 4자리 PIN 비밀번호를 설정할 수 있습니다. 다른 공유 사용자가 내 프로필에 들어올 수 없어 시청 기록과 찜 목록이 안전하게 분리됩니다.
            </p>
          </div>
        </div>
      </div>

      {/* Promo Code Box */}
      <PromoCodeBox />

      {/* Steps */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">이용 방법 4단계</h2>
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

      {/* FAQ */}
      <FaqSection
        items={[
          {
            q: "넷플릭스 계정 공유 단속(가구 외 공유)에 걸리지 않나요?",
            a: "겜스고는 최신 단속 시스템에 맞춰 프로필 전용 계정을 정기적으로 최적화하여 제공합니다. 임시 인증 코드가 필요한 경우에도 겜스고 마이페이지에서 클릭 한 번으로 메일 인증 코드를 실시간 확인할 수 있어 차단 없이 이용 가능합니다.",
          },
          {
            q: "언어 설정이나 자막이 한국어로 나오나요?",
            a: "네, 프로필 언어를 한국어로 설정하시면 자막, 음성, UI 모두 공식 한국 넷플릭스와 100% 동일하게 지원됩니다.",
          },
        ]}
      />
    </div>
  );
}
