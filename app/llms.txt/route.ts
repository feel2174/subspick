import { SITE_NAME, SITE_TAGLINE, SITE_URL, SERVICES } from "@/lib/constants";

export const dynamic = "force-static";

export function GET() {
  const content = `# ${SITE_NAME}

> ${SITE_TAGLINE}

- 사이트 URL: ${SITE_URL}
- 대상: 대한민국 (ko-KR)
- 목적: OTT(유튜브 프리미엄, 넷플릭스) 및 AI(ChatGPT Plus, Claude) 구독료 최대 70% 할인 가이드 및 절약 계산기

## 핵심 문서
- [홈페이지 및 절약 계산기](${SITE_URL}/)
- [유튜브 프리미엄 할인](${SITE_URL}/youtube-premium/)
- [넷플릭스 4K 프리미엄 할인](${SITE_URL}/netflix/)
- [챗GPT Plus 할인](${SITE_URL}/chatgpt-plus/)
- [구독료 절약 계산기](${SITE_URL}/calculator/)
- [겜스고 사기 팩트체크](${SITE_URL}/scam-check/)
- [전체 상세 데이터셋](${SITE_URL}/llms-full.txt)
- [RSS 피드](${SITE_URL}/rss.xml)

## 주요 서비스 가격표
${SERVICES.map((s) => `- ${s.name}: 정가 ${s.officialPriceText} -> 겜스고 ${s.gamsgoPriceText} (${s.highlightBadge})`).join("\n")}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
