export interface CuratedReview {
  id: string;
  author: string;
  service: string;
  rating: number; // 1 ~ 5
  date: string;
  title: string;
  content: string;
  verified: boolean;
  savedKRW: string;
}

export const CURATED_REVIEWS: CuratedReview[] = [
  {
    id: "rev-1",
    author: "직장인_김*우",
    service: "유튜브 프리미엄",
    rating: 5,
    date: "2026-03-01",
    title: "1년 넘게 쓰는데 정지 한 번도 없었습니다",
    content:
      "터키 우회 결제하다가 구글에서 정지먹고 멘붕이었는데, 겜스고 가족 초대로 갈아타고 1년째 너무 편하게 쓰고 있습니다. 내 기존 한국 계정 그대로 메일 초대 수락만 하면 되니까 유튜브 뮤직 플레이리스트도 안 날아가고 너무 좋네요.",
    verified: true,
    savedKRW: "연 약 96,000원 절약",
  },
  {
    id: "rev-2",
    author: "개발자_이*진",
    service: "챗GPT Plus",
    rating: 5,
    date: "2026-02-28",
    title: "코딩할 때 필수인데 반값으로 아낍니다",
    content:
      "공식 결제하면 환율 때문에 월 2.8만원 넘게 나가는데, 겜스고로 결제하니 만원대 초반에 해결됩니다. GPT-4o 코드 인터프리터랑 이미지 생성 다 정상 작동하고 끊김 전혀 없어요.",
    verified: true,
    savedKRW: "연 약 180,000원 절약",
  },
  {
    id: "rev-3",
    author: "자취생_박*현",
    service: "넷플릭스 4K",
    rating: 5,
    date: "2026-02-24",
    title: "TV로 4K UHD 돌비비전 잘 나옵니다",
    content:
      "자취방 스마트TV에서 4K로 볼 때 화질 걱정했는데 정가 프리미엄이랑 똑같습니다. 프로필 1번에 핀번호 걸어두고 쓰니까 다른 사람이 건드릴 일도 없고 월 5천원대로 만족도 최상이에요.",
    verified: true,
    savedKRW: "연 약 144,000원 절약",
  },
  {
    id: "rev-4",
    author: "대학생_최*민",
    service: "유튜브 프리미엄",
    rating: 5,
    date: "2026-02-20",
    title: "유튜브 뮤직만 써도 본전 뽑아요",
    content:
      "멜론이나 스포티파이 따로 돈 안 내고 유튜브 뮤직으로 해결하는데, 월 6천원대면 커피 한 잔 값입니다. 결제하자마자 3분 만에 메일 와서 바로 등록했습니다.",
    verified: true,
    savedKRW: "연 약 96,000원 절약",
  },
  {
    id: "rev-5",
    author: "디자이너_정*서",
    service: "클로드 Pro",
    rating: 5,
    date: "2026-02-15",
    title: "긴 문서 분석할 때 Claude가 짱입니다",
    content:
      "Sonnet 3.5 긴 컨텍스트 기능 때문에 클로드 유료 쓰고 싶었는데 겜스고에 있길래 바로 결제했습니다. 결제 오류도 없고 고객센터 응답도 빨라서 안심이네요.",
    verified: true,
    savedKRW: "연 약 160,000원 절약",
  },
  {
    id: "rev-6",
    author: "프리랜서_윤*호",
    service: "넷플릭스 4K",
    rating: 4,
    date: "2026-02-10",
    title: "가성비는 최고, 갱신 알림도 잘 옵니다",
    content:
      "초반에 비밀번호 변경될 때 카카오톡 알림으로 바로 새 정보 안내해줘서 문제없이 썼습니다. 24시간 환불 보장이라 불안감 없이 시작했는데 벌써 2번째 재계약이네요.",
    verified: true,
    savedKRW: "연 약 144,000원 절약",
  },
  {
    id: "rev-7",
    author: "취준생_강*우",
    service: "퍼플렉시티 Pro",
    rating: 5,
    date: "2026-02-05",
    title: "자료조사 논문 검색할 때 혁명입니다",
    content:
      "출처 찾아주는 AI 검색 유료로 써보고 싶었는데 반값에 잘 구독했습니다. 연구 보고서 쓸 때 프로 검색 무제한으로 돌리는데 작업 속도 3배 빨라졌습니다.",
    verified: true,
    savedKRW: "연 약 180,000원 절약",
  },
  {
    id: "rev-8",
    author: "신혼부부_한*영",
    service: "디즈니플러스",
    rating: 5,
    date: "2026-01-29",
    title: "디즈니+ 마블 정주행용으로 최고",
    content:
      "월 3천원대라 부담 없이 가입했습니다. 주말에 마블 시리즈랑 무빙 몰아보는데 버퍼링 없이 4K로 깔끔하게 잘 나옵니다.",
    verified: true,
    savedKRW: "연 약 76,000원 절약",
  },
];

export function getAverageRating() {
  const sum = CURATED_REVIEWS.reduce((acc, r) => acc + r.rating, 0);
  return (sum / CURATED_REVIEWS.length).toFixed(1);
}
