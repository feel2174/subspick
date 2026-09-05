"use client";

import { useState } from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

const DEFAULT_FAQS: FaqItem[] = [
  {
    q: "겜스고 구독 공유, 이거 사기 아닌가요?",
    a: "겜스고는 전 세계 150개국 1,000만 명 이상이 이용 중인 글로벌 정식 법인 플랫폼입니다. 해외 독립 리뷰 사이트 Trustpilot에서도 평점 4.0을 기록하고 있으며, 결제 즉시 자동화 시스템으로 계정이 발송되고 24시간 환불 보장 제도를 운영하고 있어 안전합니다.",
  },
  {
    q: "진짜 공식 앱에서 모든 기능이 정상 작동하나요?",
    a: "네, 100% 정상 작동합니다. 별도의 개조 앱이나 VPN 우회 프로그램 없이 공식 유튜브 앱, 넷플릭스 앱, ChatGPT 사이트에 기존과 동일하게 로그인하여 사용합니다. 4K 화질, 광고 제거, 백그라운드 재생 등 정가 결제와 기능상 차이가 전혀 없습니다.",
  },
  {
    q: "VPN 국가변경 우회 결제와 겜스고의 차이는 무엇인가요?",
    a: "터키나 인도 등 해외 VPN 우회 결제는 최근 구글·넷플릭스의 엄격한 단속으로 계정 영구 정지 및 결제 취소가 발생합니다. 반면 겜스고는 가족 공유 초대 링크를 받거나 정식 프로필을 공유받는 방식으로, 위험한 결제 국가 조작 없이 기존 한국 계정 그대로 안전하게 이용할 수 있습니다.",
  },
  {
    q: "결제 후 계정은 언제 받을 수 있나요?",
    a: "결제 완료 즉시 사이트 상단의 '구독' 메뉴에서 계정 정보 또는 초대 링크를 확인할 수 있습니다. 대기 시간 없이 몇 분 이내로 바로 이용을 시작할 수 있습니다.",
  },
  {
    q: "사용 중 문제가 생기면 환불이나 AS가 가능한가요?",
    a: "결제 후 24시간 이내에는 무조건 전액 환불을 요청할 수 있으며, 이용 기간 중 비밀번호 변경이나 프로필 오류가 발생할 경우 24시간 실시간 온라인 고객센터를 통해 즉시 새 계정으로 교체되거나 잔여 기간에 대해 환불 처리를 받으실 수 있습니다.",
  },
  {
    q: "프로모션 코드는 어떻게 적용하나요?",
    a: "겜스고 결제 화면에서 '프로모션 코드나 쿠폰이 있나요?' 항목을 클릭한 뒤 할인코드 TA9Y3 을 입력하시면 추가 할인 혜택이 즉시 적용됩니다.",
  },
];

export function FaqSection({ items = DEFAULT_FAQS }: { items?: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section className="w-full">
      <JsonLd data={faqSchema} />

      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
          자주 묻는 질문 <span className="gradient-text-emerald">(FAQ)</span>
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-400">
          가장 많이 궁금해하시는 질문과 해결 방법을 솔직하게 모았습니다.
        </p>
      </div>

      <div className="mt-8 max-w-3xl mx-auto space-y-3">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all ${
                isOpen
                  ? "border-emerald-500/40 bg-slate-900/80 shadow-lg shadow-emerald-950/20"
                  : "border-slate-800/80 bg-slate-900/40 hover:border-slate-700"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span className="text-sm sm:text-base font-bold text-slate-200">
                  {item.q}
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-slate-400 transition-transform duration-200 shrink-0 ml-4 ${
                    isOpen ? "rotate-180 text-emerald-400" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-slate-300 border-t border-slate-800/60">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
