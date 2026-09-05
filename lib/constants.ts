export const SITE_NAME = "서브스픽 (Subspick)";
export const SITE_TAGLINE = "스마트한 구독료 절약 대시보드";
export const SITE_URL = "https://subspick.pages.dev"; // Cloudflare Pages 기본 도메인 (추후 커스텀 도메인 매핑 가능)
export const GAMSGO_AFFILIATE_URL = "https://www.gamsgo.com/partner/Chgyp";
export const PROMO_CODE = "TA9Y3";

export const DISCLOSURE_TEXT =
  "서브스픽은 겜스고(GamsGo)의 공식 제휴 파트너로, 본 사이트의 링크를 통해 가입 시 소정의 수수료를 지급받을 수 있습니다. 결제 시 추가 할인 혜택이 적용됩니다.";

export type ServiceCategory = "OTT" | "AI" | "음악" | "소프트웨어" | "게임";

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  officialMonthly: number;
  officialPriceText: string;
  gamsgoMonthly: number;
  gamsgoPriceText: string;
  discountRate: number; // e.g. 70
  highlightBadge: string;
  features: string[];
  href: string;
  popular?: boolean;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "youtube-premium",
    name: "유튜브 프리미엄",
    category: "OTT",
    officialMonthly: 14900,
    officialPriceText: "월 14,900원 (연 178,800원)",
    gamsgoMonthly: 6900,
    gamsgoPriceText: "월 환산 약 6,900원대",
    discountRate: 54,
    highlightBadge: "인기 1위",
    features: ["광고 완전 제거", "백그라운드 재생", "유튜브 뮤직 무료 포함"],
    href: "/youtube-premium",
    popular: true,
  },
  {
    id: "netflix",
    name: "넷플릭스 4K 프리미엄",
    category: "OTT",
    officialMonthly: 17000,
    officialPriceText: "월 17,000원",
    gamsgoMonthly: 5000,
    gamsgoPriceText: "월 5,000원대",
    discountRate: 70,
    highlightBadge: "최대 70% 할인",
    features: ["4K UHD & HDR 지원", "전용 1개 프로필 공유", "공식 앱 그대로 로그인"],
    href: "/netflix",
    popular: true,
  },
  {
    id: "chatgpt-plus",
    name: "챗GPT Plus",
    category: "AI",
    officialMonthly: 28000,
    officialPriceText: "월 $20 (약 28,000원)",
    gamsgoMonthly: 13000,
    gamsgoPriceText: "월 13,000원대",
    discountRate: 53,
    highlightBadge: "AI 필수",
    features: ["GPT-4o 무제한급", "DALL-E 3 이미지 생성", "고급 데이터 분석"],
    href: "/chatgpt-plus",
    popular: true,
  },
  {
    id: "claude-pro",
    name: "클로드 Pro",
    category: "AI",
    officialMonthly: 28000,
    officialPriceText: "월 $20 (약 28,000원)",
    gamsgoMonthly: 14000,
    gamsgoPriceText: "월 14,000원대",
    discountRate: 50,
    highlightBadge: "개발자 선호",
    features: ["Claude 3.5 Sonnet", "긴 컨텍스트 200k 토큰", "코딩 및 분석 특화"],
    href: "/chatgpt-plus",
  },
  {
    id: "disney-plus",
    name: "디즈니플러스",
    category: "OTT",
    officialMonthly: 9900,
    officialPriceText: "월 9,900원",
    gamsgoMonthly: 3500,
    gamsgoPriceText: "월 3,500원대",
    discountRate: 64,
    highlightBadge: "가족 추천",
    features: ["마블·스타워즈·픽사", "4K UHD 및 돌비 애트모스", "동시 시청 지원"],
    href: "/netflix",
  },
  {
    id: "spotify",
    name: "스포티파이 프리미엄",
    category: "음악",
    officialMonthly: 11990,
    officialPriceText: "월 11,990원",
    gamsgoMonthly: 4500,
    gamsgoPriceText: "월 4,500원대",
    discountRate: 62,
    highlightBadge: "고음질 음악",
    features: ["광고 없는 무제한 스트리밍", "오프라인 음원 다운로드", "최고 음질"],
    href: "/calculator",
  },
  {
    id: "perplexity-pro",
    name: "퍼플렉시티 Pro",
    category: "AI",
    officialMonthly: 28000,
    officialPriceText: "월 $20 (약 28,000원)",
    gamsgoMonthly: 12000,
    gamsgoPriceText: "월 12,000원대",
    discountRate: 57,
    highlightBadge: "AI 검색",
    features: ["실시간 출처 기반 검색", "Pro 검색 무제한", "다양한 모델 선택"],
    href: "/chatgpt-plus",
  },
  {
    id: "midjourney",
    name: "미드저니 (Midjourney)",
    category: "AI",
    officialMonthly: 14000,
    officialPriceText: "월 약 $10~",
    gamsgoMonthly: 6000,
    gamsgoPriceText: "월 6,000원대",
    discountRate: 57,
    highlightBadge: "최고 화질 AI",
    features: ["최고 품질 AI 아트 생성", "상업적 이용 가능", "빠른 GPU 생성 모드"],
    href: "/chatgpt-plus",
  },
  {
    id: "canva-pro",
    name: "캔바 Pro",
    category: "소프트웨어",
    officialMonthly: 14000,
    officialPriceText: "월 14,000원",
    gamsgoMonthly: 5000,
    gamsgoPriceText: "월 5,000원대",
    discountRate: 64,
    highlightBadge: "디자인 툴",
    features: ["1억 개 프리미엄 템플릿", "원클릭 배경 제거", "브랜드 키트"],
    href: "/calculator",
  },
  {
    id: "microsoft-365",
    name: "Microsoft 365",
    category: "소프트웨어",
    officialMonthly: 11900,
    officialPriceText: "월 11,900원",
    gamsgoMonthly: 4000,
    gamsgoPriceText: "월 4,000원대",
    discountRate: 66,
    highlightBadge: "오피스 필수",
    features: ["Word, Excel, PowerPoint", "1TB OneDrive 클라우드", "다중 기기 지원"],
    href: "/calculator",
  },
  {
    id: "duolingo",
    name: "슈퍼 듀오링고",
    category: "소프트웨어",
    officialMonthly: 18000,
    officialPriceText: "월 약 $12.99",
    gamsgoMonthly: 5000,
    gamsgoPriceText: "월 5,000원대",
    discountRate: 72,
    highlightBadge: "어학 1위",
    features: ["광고 완전 제거", "무제한 하트", "실수 복습 모드"],
    href: "/calculator",
  },
];

export const PLATFORM_TRUST_METRICS = [
  { value: "1,000만+", label: "글로벌 실사용자", sub: "전 세계 150개국" },
  { value: "4.8점", label: "이용자 만족도", sub: "3,600+ 건의 공개 평가" },
  { value: "24시간", label: "안심 환불 보장", sub: "문제 발생 시 전액 환불" },
  { value: "0분", label: "결제 즉시 발송", sub: "자동화 시스템 발급" },
];

export const TRUST_FACTS = [
  {
    title: "6년 이상 지속 운영된 공식 법인",
    desc: "일회성 사설 사이트가 아니라, 수년간 글로벌 사업자로 건실하게 운영을 이어온 정식 등록 법인입니다.",
  },
  {
    title: "글로벌 리뷰 플랫폼 Trustpilot 평점 4.0",
    desc: "자체 사이트 리뷰뿐만 아니라 세계 최대 독립 리뷰 플랫폼인 Trustpilot에서 검증 가능한 평가를 유지하고 있습니다.",
  },
  {
    title: "PCI-DSS v4.0 국제 결제 보안 인증",
    desc: "카드 정보 및 금융 데이터를 다루는 국제 최고 수준의 보안 표준 규격을 획득하여 결제 정보를 안전하게 보호합니다.",
  },
  {
    title: "EU GDPR 개인정보보호 규정 준수",
    desc: "글로벌 기준의 엄격한 개인정보 처리 방침을 적용하여 이용자의 프라이버시를 안전하게 보호합니다.",
  },
];
