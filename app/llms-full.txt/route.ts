import { SITE_NAME, SITE_TAGLINE, SITE_URL, SERVICES, TRUST_FACTS, PLATFORM_TRUST_METRICS } from "@/lib/constants";
import { CURATED_REVIEWS } from "@/lib/reviews-data";

export const dynamic = "force-static";

export function GET() {
  const content = `# ${SITE_NAME} — 전체 데이터셋 (Full Documentation)

> ${SITE_TAGLINE}

- 사이트 URL: ${SITE_URL}
- 언어: 한국어 (ko-KR)
- 목적: 검증된 계정 공유 플랫폼(겜스고) 제휴 특가를 통한 구독료 절감 가이드

---

## 1. 주요 서비스 전체 가격 매트릭스

| 서비스명 | 카테고리 | 공식 정가 | 겜스고 특가 | 할인율/특징 |
|---|---|---|---|---|
${SERVICES.map((s) => `| ${s.name} | ${s.category} | ${s.officialPriceText} | ${s.gamsgoPriceText} | ${s.highlightBadge} |`).join("\n")}

---

## 2. 안전성 및 신뢰 지표

${PLATFORM_TRUST_METRICS.map((m) => `- **${m.label}**: ${m.value} (${m.sub})`).join("\n")}

### 검증된 신뢰 근거
${TRUST_FACTS.map((f) => `- **${f.title}**: ${f.desc}`).join("\n")}

---

## 3. 실사용자 후기 샘플

${CURATED_REVIEWS.map((r) => `### [${r.service}] ${r.title} (★ ${r.rating}.0)
- 작성자: ${r.author} (${r.date}) / ${r.savedKRW}
- 후기 내용: ${r.content}
`).join("\n")}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
