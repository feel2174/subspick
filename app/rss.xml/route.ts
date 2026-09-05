import { SITE_NAME, SITE_TAGLINE, SITE_URL, SERVICES } from "@/lib/constants";

export const dynamic = "force-static";

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const now = new Date("2026-09-05T00:00:00Z").toUTCString();

  const items = [
    {
      title: `${SITE_NAME} — 유튜브 프리미엄·넷플릭스·챗GPT 플러스 할인 모음`,
      link: `${SITE_URL}/`,
      description: `${SITE_TAGLINE}. 정가 대비 최대 70% 할인받는 겜스고 제휴 가이드 및 실시간 절약 계산기.`,
      category: "구독할인",
    },
    {
      title: "유튜브 프리미엄 가격할인 — 월 6,900원대 우회 없이 안전하게 구독하기",
      link: `${SITE_URL}/youtube-premium/`,
      description: "정가 월 14,900원 유튜브 프리미엄을 겜스고 제휴 특가로 월 6,900원대에 이용하는 방법.",
      category: "OTT",
    },
    {
      title: "넷플릭스 가격할인 — 월 5,000원대로 4K 프리미엄 시청하는 법",
      link: `${SITE_URL}/netflix/`,
      description: "넷플릭스 프리미엄 정가 월 17,000원을 겜스고를 통해 월 5,000원대에 안전하게 구독하는 방법.",
      category: "OTT",
    },
    {
      title: "챗GPT Plus 가격할인 — 월 1만원대로 AI 구독료 50% 이상 절약하기",
      link: `${SITE_URL}/chatgpt-plus/`,
      description: "OpenAI ChatGPT Plus(월 $20, 약 2.8만원)를 겜스고 제휴 특가로 월 1만원대에 이용하는 방법.",
      category: "AI",
    },
    {
      title: "실시간 구독료 절약 계산기",
      link: `${SITE_URL}/calculator/`,
      description: "내가 쓰는 구독 서비스를 선택하고 연간 절약 금액을 실시간 계산해보세요.",
      category: "도구",
    },
    {
      title: "겜스고 사기 아니에요? 2026년 안전성 및 팩트체크 총정리",
      link: `${SITE_URL}/scam-check/`,
      description: "150개국 1,000만 실사용자 데이터와 24시간 전액 환불 정책 분석.",
      category: "팩트체크",
    },
  ];

  const xmlItems = items
    .map((item) => {
      return `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.link}</link>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${now}</pubDate>
      <guid isPermaLink="true">${item.link}</guid>
      <category>${escapeXml(item.category)}</category>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_TAGLINE)}</description>
    <language>ko</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${xmlItems}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
