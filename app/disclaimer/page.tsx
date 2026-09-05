import type { Metadata } from "next";
import { DISCLOSURE_TEXT, SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "면책조항 및 파트너십 안내",
  description: "서브스픽의 제휴 마케팅 고지 및 정보 제공 범위 안내.",
  alternates: {
    canonical: `${SITE_URL}/disclaimer`,
  },
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-2xl font-black text-white sm:text-3xl">면책조항 및 파트너십 안내</h1>

      <div className="mt-8 space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 space-y-3">
          <h2 className="text-base font-bold text-white">1. 제휴 마케팅 안내</h2>
          <p>{DISCLOSURE_TEXT}</p>
          <p>
            서브스픽(Subspick)은 겜스고(GamsGo) 플랫폼의 독립적인 정보 제공 및 제휴 파트너이며, 직접 계정을 생성·판매하거나 결제를 수납하는 주체가 아닙니다. 모든 상품의 거래, 계정 발급, 결제 및 환불은 겜스고의 이용약관 및 정책에 따라 진행됩니다.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 space-y-3">
          <h2 className="text-base font-bold text-white">2. 정보의 정확성 및 가격 변동</h2>
          <p>
            본 사이트에 기재된 공식 정가 및 겜스고 할인가는 작성일 기준의 정보이며, 환율 변동이나 각 스트리밍/AI 서비스사 및 겜스고의 정책에 따라 사전 고지 없이 변경될 수 있습니다. 최종 결제 금액은 겜스고 공식 웹사이트 결제 화면에서 직접 확인하시기 바랍니다.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 space-y-3">
          <h2 className="text-base font-bold text-white">3. 책임의 한계</h2>
          <p>
            서브스픽은 이용자가 본 사이트의 정보를 신뢰하여 행한 제반 행위(결제, 이용 등)로 인해 발생하는 직간접적 손해에 대하여 법적인 책임을 부담하지 않습니다. 서비스 이용 중 발생하는 모든 기술적 문제 및 환불 요청은 겜스고 공식 실시간 고객센터를 통해 접수하시기 바랍니다.
          </p>
        </section>
      </div>
    </div>
  );
}
