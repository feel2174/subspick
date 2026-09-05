# 서브스픽 (Subspick) — 스마트한 구독료 절약 대시보드

Cloudflare Pages에 100% 무료·초고속 정적 배포(SSG)가 가능하도록 제작된 겜스고(GamsGo) 제휴 특가 및 구독료 절약 플랫폼입니다.

---

## ✨ 주요 특징

1. **완전 정적 사이트 (No-Supabase, 0ms 엣지 서빙)**:
   - 외부 데이터베이스(Supabase 등) 의존성이 전혀 없습니다.
   - Next.js의 `output: 'export'`로 빌드되어 전 세계 Cloudflare CDN 엣지에서 0.05초 만에 즉각 로딩됩니다.
2. **다크 핀테크 인터랙티브 디자인**:
   - 기존의 밝은 블로그 스타일과 완전히 차별화된 **토스/애플 스타일 다크 핀테크(딥 네이비 + 일렉트릭 에메랄드/시안)** 룩앤필.
   - 사용자가 직접 구독 서비스를 탭하여 연간 절약액을 실시간으로 확인하는 **"실시간 구독료 절약 계산기"** 탑재.
3. **겜스고 제휴 링크 & 원클릭 프로모션 코드**:
   - 공식 제휴 링크(`https://www.gamsgo.com/partner/Chgyp`) 연동.
   - 추가 할인코드(`GAMS5`) 원클릭 복사 및 바로가기 기능.
4. **검색엔진(네이버/구글) & AI 답변엔진 완벽 대응**:
   - `rss.xml` (RSS 2.0 표준 규격)
   - `sitemap.xml` 및 `robots.txt`
   - `llms.txt` 및 `llms-full.txt` (ChatGPT Search, Perplexity 등 AI 에이전트 인용 대응)
   - Schema.org JSON-LD (`Organization`, `WebSite`, `Product`, `HowTo`, `FAQPage`) 탑재.

---

## 🚀 Cloudflare Pages 배포 방법

### 방법 1: GitHub 리포지토리 자동 배포 (권장)
1. 이 폴더(`subspick`)를 본인 GitHub 리포지토리로 푸시합니다:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for subspick"
   git remote add origin <본인-깃허브-URL>
   git push -u origin main
   ```
2. [Cloudflare Dashboard](https://dash.cloudflare.com/) 접속 → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git** 클릭
3. 생성한 리포지토리를 선택하고 아래와 같이 설정합니다:
   - **Framework preset**: `None` 또는 `Next.js (Static HTML Export)`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
4. **Save and Deploy**를 누르면 1분 이내에 글로벌 배포 완료!

---

### 방법 2: Wrangler CLI를 통한 1초 직접 배포
Wrangler CLI가 있다면 터미널에서 바로 배포할 수 있습니다:
```bash
npm run build
npx wrangler pages deploy out --project-name=subspick
```

---

## 🛠 로컬 개발
```bash
npm install
npm run dev
```
브라우저에서 `http://localhost:3000`으로 접속하여 확인하실 수 있습니다.
