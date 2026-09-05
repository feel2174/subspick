import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — 유튜브 프리미엄·넷플릭스·챗GPT 플러스 할인 모음`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "유튜브 프리미엄 월 6,900원, 넷플릭스 4K 월 5,000원, 챗GPT Plus 반값 할인. 겜스고 제휴 특가 및 실시간 구독료 절약 계산기 제공.",
  keywords: [
    "유튜브 프리미엄 할인",
    "넷플릭스 할인",
    "챗GPT 플러스 할인",
    "구독료 계산기",
    "겜스고",
    "겜스고 할인코드",
    "OTT 구독료 절약",
    "구독 공유",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    types: {
      "application/rss+xml": `${SITE_URL}/rss.xml`,
    },
  },
  verification: {
    other: {
      "naver-site-verification": "7ba99226087643203aa0dec98bc5bbd50b31ba2b",
    },
  },
  openGraph: {
    title: `${SITE_NAME} — 스마트한 구독료 절약 대시보드`,
    description:
      "유튜브 프리미엄·넷플릭스·챗GPT Plus 최대 70% 할인. 실시간 절약 계산기와 검증된 실사용자 후기를 확인하세요.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — 스마트한 구독료 절약 대시보드`,
    description: "유튜브 프리미엄·넷플릭스·챗GPT Plus 최대 70% 할인",
  },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_TAGLINE,
      foundingDate: "2024",
      areaServed: { "@type": "Country", name: "대한민국" },
      knowsLanguage: ["ko", "en"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "ko-KR",
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/calculator?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark scroll-smooth">
      <head>
        <meta
          name="naver-site-verification"
          content="7ba99226087643203aa0dec98bc5bbd50b31ba2b"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${SITE_NAME} RSS 피드`}
          href={`${SITE_URL}/rss.xml`}
        />
      </head>
      <body className="min-h-screen bg-[#090D16] text-slate-100 antialiased flex flex-col selection:bg-emerald-500 selection:text-slate-950">
        <JsonLd data={siteJsonLd} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
