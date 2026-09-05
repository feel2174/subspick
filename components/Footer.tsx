import Link from "next/link";
import { DISCLOSURE_TEXT, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";
import { Zap, Shield, Rss } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
          {/* Brand Info */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-slate-950">
                <Zap className="h-4 w-4 fill-slate-950" />
              </div>
              <span className="text-lg font-bold text-white">{SITE_NAME}</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-md">
              {SITE_TAGLINE}. 유튜브 프리미엄, 넷플릭스, 챗GPT 등 고물가 시대 필수 구독 서비스를 공식 정가 대비 최대 70% 할인받아 스마트하게 절약하는 방법을 안내합니다.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Shield className="h-3.5 w-3.5 text-emerald-400" />
              <span>검증된 제휴 파트너십 안내 사이트</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              인기 가이드
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/youtube-premium" className="hover:text-emerald-400 transition-colors">
                  유튜브 프리미엄 할인
                </Link>
              </li>
              <li>
                <Link href="/netflix" className="hover:text-emerald-400 transition-colors">
                  넷플릭스 4K 프리미엄
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-plus" className="hover:text-emerald-400 transition-colors">
                  챗GPT Plus / Claude 할인
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-emerald-400 transition-colors">
                  구독료 절약 계산기
                </Link>
              </li>
              <li>
                <Link href="/scam-check" className="hover:text-emerald-400 transition-colors">
                  겜스고 사기 팩트체크
                </Link>
              </li>
            </ul>
          </div>

          {/* Policy & Feeds */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              정책 및 리소스
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/disclaimer" className="hover:text-emerald-400 transition-colors">
                  면책조항 및 파트너십
                </Link>
              </li>
              <li>
                <a href="/rss.xml" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                  <Rss className="h-3.5 w-3.5 text-orange-400" />
                  RSS 2.0 피드
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" className="hover:text-emerald-400 transition-colors">
                  사이트맵
                </a>
              </li>
              <li>
                <a href="/llms.txt" className="hover:text-emerald-400 transition-colors">
                  LLMs.txt (AI 에이전트용)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Banner */}
        <div className="mt-12 rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-xs leading-relaxed text-slate-400">
          <p className="font-semibold text-slate-300 mb-1">[제휴 마케팅 고지]</p>
          <p>{DISCLOSURE_TEXT}</p>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between border-t border-slate-800/60 pt-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Hosted securely on Cloudflare Edge.</p>
        </div>
      </div>
    </footer>
  );
}
